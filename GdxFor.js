class GdxFor {

    /**
     * Construct a GDX-FOR communication object.
     * @param {Runtime} runtime - the Scratch 3.0 runtime
     * @param {string} extensionId - the id of the extension
     */
    constructor (runtime, extensionId) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;

        /**
         * The BluetoothLowEnergy connection socket for reading/writing peripheral data.
         * @type {BLE}
         * @private
         */
        this._scratchLinkSocket = null;

        /**
         * An @vernier/godirect Device
         * @type {Device}
         * @private
         */
        this._device = null;

        this._runtime.registerPeripheralExtension(extensionId, this);

        /**
         * The id of the extension this peripheral belongs to.
         */
        this._extensionId = extensionId;

        this.disconnect = this.disconnect.bind(this);
        this._onConnect = this._onConnect.bind(this);
        this._sensorsEnabled = null;
    }


    /**
     * Called by the runtime when user wants to scan for a peripheral.
     */
    scan () {
        if (this._scratchLinkSocket) {
            this._scratchLinkSocket.disconnect();
        }

        this._scratchLinkSocket = new BLE(this._runtime, this._extensionId, {
            filters: [
                {namePrefix: 'GDX-FOR'}
            ],
            optionalServices: [
                BLEUUID.service
            ]
        }, this._onConnect);
    }

    /**
     * Called by the runtime when user wants to connect to a certain peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */
    connect (id) {
        if (this._scratchLinkSocket) {
            this._scratchLinkSocket.connectPeripheral(id);
        }
    }

    /**
     * Called by the runtime when a user exits the connection popup.
     * Disconnect from the GDX FOR.
     */
    disconnect () {
        this._sensorsEnabled = false;
        if (this._scratchLinkSocket) {
            this._scratchLinkSocket.disconnect();
        }
    }

    /**
     * Return true if connected to the goforce device.
     * @return {boolean} - whether the goforce is connected.
     */
    isConnected () {
        let connected = false;
        if (this._scratchLinkSocket) {
            connected = this._scratchLinkSocket.isConnected();
        }
        return connected;
    }

    /**
     * Starts reading data from peripheral after BLE has connected to it.
     * @private
     */
    _onConnect () {
        const adapter = new ScratchLinkDeviceAdapter(this._scratchLinkSocket, BLEUUID);
        godirect.createDevice(adapter, {open: true, startMeasurements: false}).then(device => {
            this._device = device;
            this._device.keepValues = false; // todo: possibly remove after updating Vernier godirect module
            this._startMeasurements();
        });
    }

    /**
     * Enable and begin reading measurements
     * @private
     */
    _startMeasurements () {
        this._device.sensors.forEach(sensor => {
            sensor.setEnabled(true);
        });
        this._device.on('measurements-started', () => {
            this._sensorsEnabled = true;
        });
        this._device.start(10); // Set the period to 10 milliseconds
    }

    /**
     * Device is connected and measurements enabled
     * @return {boolean} - whether the goforce is connected and measurements started.
     */
    _canReadSensors () {
        return this.isConnected() && this._sensorsEnabled;
    }

    getForce () {
        if (this._canReadSensors()) {
            let force = this._device.getSensor(1).value;
            // Normalize the force, which can be measured between -50 and 50 N,
            // to be a value between -100 and 100.
            force = MathUtil.clamp(force * 2, -100, 100);
            return force;
        }
        return 0;
    }

    getTiltX () {
        if (this._canReadSensors()) {
            let x = this.getAccelerationX();
            let y = this.getAccelerationY();
            let z = this.getAccelerationZ();

            let xSign = 1;
            let ySign = 1;
            let zSign = 1;

            if (x < 0.0) {
                x *= -1.0; xSign = -1;
            }
            if (y < 0.0) {
                y *= -1.0; ySign = -1;
            }
            if (z < 0.0) {
                z *= -1.0; zSign = -1;
            }

            // Compute the yz unit vector
            const z2 = z * z;
            const y2 = y * y;
            let value = z2 + y2;
            value = Math.sqrt(value);

            // For sufficiently small zy vector values we are essentially at 90 degrees.
            // The following snaps to 90 and avoids divide-by-zero errors.
            // The snap factor was derived through observation -- just enough to
            // still allow single degree steps up to 90 (..., 87, 88, 89, 90).
            if (value < 0.35) {
                value = 90;
            } else {
                // Compute the x-axis angle
                value = x / value;
                value = Math.atan(value);
                value *= 57.2957795; // convert from rad to deg
            }
            // Manage the sign of the result
            let yzSign = ySign;
            if (z > y) yzSign = zSign;
            if (yzSign === -1) value = 180.0 - value;
            value *= xSign;
            // Round the result to the nearest degree
            value += 0.5;
            return value;
        }
        return 0;
    }

    getTiltY () {
        if (this._canReadSensors()) {
            let x = this.getAccelerationX();
            let y = this.getAccelerationY();
            let z = this.getAccelerationZ();

            let xSign = 1;
            let ySign = 1;
            let zSign = 1;

            if (x < 0.0) {
                x *= -1.0; xSign = -1;
            }
            if (y < 0.0) {
                y *= -1.0; ySign = -1;
            }
            if (z < 0.0) {
                z *= -1.0; zSign = -1;
            }

            // Compute the yz unit vector
            const z2 = z * z;
            const x2 = x * x;
            let value = z2 + x2;
            value = Math.sqrt(value);

            // For sufficiently small zy vector values we are essentially at 90 degrees.
            // The following snaps to 90 and avoids divide-by-zero errors.
            // The snap factor was derived through observation -- just enough to
            // still allow single degree steps up to 90 (..., 87, 88, 89, 90).
            if (value < 0.35) {
                value = 90;
            } else {
                // Compute the x-axis angle
                value = y / value;
                value = Math.atan(value);
                value *= 57.2957795; // convert from rad to deg
            }
            // Manage the sign of the result
            let xzSign = xSign;
            if (z > x) xzSign = zSign;
            if (xzSign === -1) value = 180.0 - value;
            value *= ySign;
            // Round the result to the nearest degree
            value += 0.5;
            return value;
        }
        return 0;
    }


    getAccelerationX () {
        if (this._canReadSensors()) {
            return this._device.getSensor(2).value;
        }
        return 0;
    }

    getAccelerationY () {
        if (this._canReadSensors()) {
            return this._device.getSensor(3).value;
        }
        return 0;
    }

    getAccelerationZ () {
        if (this._canReadSensors()) {
            return this._device.getSensor(4).value;
        }
        return 0;
    }

    getSpinSpeedX () {
        if (this._canReadSensors()) {
            return this._device.getSensor(5).value * (180 / Math.PI);
        }
        return 0;
    }

    getSpinSpeedY () {
        if (this._canReadSensors()) {
            return this._device.getSensor(6).value * (180 / Math.PI);
        }
        return 0;
    }

    getSpinSpeedZ () {
        if (this._canReadSensors()) {
            return this._device.getSensor(7).value * (180 / Math.PI);
        }
        return 0;
    }
}

/**
 * Enum for comparison operations.
 * @readonly
 * @enum {string}
 */
const ComparisonOptions = {
    LESS_THAN: 'less_than',
    GREATER_THAN: 'greater_than'
};

/**
 * Scratch 3.0 blocks to interact with a GDX-FOR peripheral.
 */
class Scratch3GdxForBlocks {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return 'GDX-FOR';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return 'gdxfor';
    }

    get DIRECTIONS_MENU () {
        return [
            {
                text: 'x',
                value: 'x'
            },
            {
                text: 'y',
                value: 'y'
            },
            {
                text: 'z',
                value: 'z'
            }
        ];
    }

    get TILT_MENU () {
        return [
            {
                text: 'x',
                value: 'x'
            },
            {
                text: 'y',
                value: 'y'
            }
        ];
    }

    get FACE_MENU () {
        return [
            {
                text: 'up',
                value: 'up'
            },
            {
                text: 'down',
                value: 'down'
            }
        ];
    }


    get COMPARE_MENU () {
        return [
            {
                text: '<',
                value: ComparisonOptions.LESS_THAN
            },
            {
                text: '>',
                value: ComparisonOptions.GREATER_THAN
            }
        ];
    }


    /**
     * Construct a set of GDX-FOR blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        // Create a new GdxFor peripheral instance
        this._peripheral = new GdxFor(this.runtime, Scratch3GdxForBlocks.EXTENSION_ID);
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: Scratch3GdxForBlocks.EXTENSION_ID,
            name: Scratch3GdxForBlocks.EXTENSION_NAME,
            blockIconURI: blockIconURI,
            showStatusButton: true,
            blocks: [
                {
                    opcode: 'whenAccelerationCompare',
                    text: formatMessage({
                        id: 'gdxfor.whenAccelerationCompare',
                        default: 'when acceleration [COMPARE] [VALUE]',
                        description: 'when the meters/second^2 value measured by the ' +
                            'acceleration sensor is compared to some value'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        COMPARE: {
                            type: ArgumentType.STRING,
                            menu: 'compareOptions',
                            defaultValue: ComparisonOptions.GREATER_THAN
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
                {
                    opcode: 'whenSpinSpeedCompare',
                    text: formatMessage({
                        id: 'gdxfor.whenSpinSpeedCompare',
                        default: 'when spin speed [COMPARE] [VALUE]',
                        description: 'when the degrees/second value measured by the ' +
                            'gyroscope sensor is compared to some value'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        COMPARE: {
                            type: ArgumentType.STRING,
                            menu: 'compareOptions',
                            defaultValue: ComparisonOptions.GREATER_THAN
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
                {
                    opcode: 'whenForceCompare',
                    text: formatMessage({
                        id: 'gdxfor.whenForceCompare',
                        default: 'when force [COMPARE] [VALUE]',
                        description: 'when the value measured by the force sensor is compared to some value'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        COMPARE: {
                            type: ArgumentType.STRING,
                            menu: 'compareOptions',
                            defaultValue: ComparisonOptions.GREATER_THAN
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
                {
                    opcode: 'whenJumped',
                    text: formatMessage({
                        id: 'gdxfor.whenJumped',
                        default: 'when jumped',
                        description: 'when the device has jumped'
                    }),
                    blockType: BlockType.HAT
                },
                {
                    opcode: 'getAcceleration',
                    text: formatMessage({
                        id: 'gdxfor.getAcceleration',
                        default: 'acceleration [DIRECTION]',
                        description: 'gets acceleration'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'directionOptions',
                            defaultValue: 'x'
                        }
                    }
                },
                {
                    opcode: 'getSpinSpeed',
                    text: formatMessage({
                        id: 'gdxfor.getSpinSpeed',
                        default: 'spin speed [DIRECTION]',
                        description: 'gets spin speed'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'directionOptions',
                            defaultValue: 'x'
                        }
                    }
                },
                {
                    opcode: 'getTilt',
                    text: formatMessage({
                        id: 'gdxfor.getTilt',
                        default: 'tilt [TILT]',
                        description: 'gets tilt'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        TILT: {
                            type: ArgumentType.STRING,
                            menu: 'tiltOptions',
                            defaultValue: 'x'
                        }
                    }
                },
                {
                    opcode: 'getForce',
                    text: formatMessage({
                        id: 'gdxfor.getForce',
                        default: 'force',
                        description: 'gets force'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'isFacing',
                    text: formatMessage({
                        id: 'gdxfor.isFacing',
                        default: 'facing [FACING]?',
                        description: 'is the device facing up or down?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        FACING: {
                            type: ArgumentType.STRING,
                            menu: 'faceOptions',
                            defaultValue: 'up'
                        }
                    }
                },
                {
                    opcode: 'isFreeFalling',
                    text: formatMessage({
                        id: 'gdxfor.isFreeFalling',
                        default: 'free falling?',
                        description: 'is the device in freefall?'
                    }),
                    blockType: BlockType.BOOLEAN

                }
            ],
            menus: {
                directionOptions: this.DIRECTIONS_MENU,
                compareOptions: this.COMPARE_MENU,
                tiltOptions: this.TILT_MENU,
                faceOptions: this.FACE_MENU
            }
        };
    }

    /**
     * @param {number} x - x axis vector
     * @param {number} y - y axis vector
     * @param {number} z - z axis vector
     * @return {number} - the magnitude of a three dimension vector.
     */
    magnitude (x, y, z) {
        return Math.sqrt((x * x) + (y * y) + (z * z));
    }

    whenAccelerationCompare (args) {
        let currentVal = this.magnitude(
            this._peripheral.getAccelerationX(),
            this._peripheral.getAccelerationY(),
            this._peripheral.getAccelerationZ()
        );

        // Remove acceleration due to gravity
        currentVal = currentVal - 9.8;

        switch (args.COMPARE) {
        case ComparisonOptions.LESS_THAN:
            return currentVal < Cast.toNumber(args.VALUE);
        case ComparisonOptions.GREATER_THAN:
            return currentVal > Cast.toNumber(args.VALUE);
        default:
            log.warn(`Unknown comparison operator in whenAccelerationCompare: ${args.COMPARE}`);
            return false;
        }
    }
    whenJumped () {
        return this.isFreeFalling();
    }
    whenSpinSpeedCompare (args) {
        const currentVal = this.magnitude(
            this._peripheral.getSpinSpeedX(),
            this._peripheral.getSpinSpeedY(),
            this._peripheral.getSpinSpeedZ()
        );

        switch (args.COMPARE) {
        case ComparisonOptions.LESS_THAN:
            return currentVal < Cast.toNumber(args.VALUE);
        case ComparisonOptions.GREATER_THAN:
            return currentVal > Cast.toNumber(args.VALUE);
        default:
            log.warn(`Unknown comparison operator in whenSpinSpeedCompare: ${args.COMPARE}`);
            return false;
        }
    }
    whenForceCompare (args) {
        switch (args.COMPARE) {
        case ComparisonOptions.LESS_THAN:
            return this._peripheral.getForce() < Cast.toNumber(args.VALUE);
        case ComparisonOptions.GREATER_THAN:
            return this._peripheral.getForce() > Cast.toNumber(args.VALUE);
        default:
            log.warn(`Unknown comparison operator in whenForceCompare: ${args.COMPARE}`);
            return false;
        }
    }
    getAcceleration (args) {
        switch (args.DIRECTION) {
        case 'x':
            return this._peripheral.getAccelerationX();
        case 'y':
            return this._peripheral.getAccelerationY();
        case 'z':
            return this._peripheral.getAccelerationZ();
        default:
            log.warn(`Unknown direction in getAcceleration: ${args.DIRECTION}`);
        }
    }
    getSpinSpeed (args) {
        switch (args.DIRECTION) {
        case 'x':
            return this._peripheral.getSpinSpeedX();
        case 'y':
            return this._peripheral.getSpinSpeedY();
        case 'z':
            return this._peripheral.getSpinSpeedZ();
        default:
            log.warn(`Unknown direction in getSpinSpeed: ${args.DIRECTION}`);
        }
    }
    getTilt (args) {
        switch (args.TILT) {
        case 'x':
            return this._peripheral.getTiltX();
        case 'y':
            return this._peripheral.getTiltY();
        default:
            log.warn(`Unknown direction in getTilt: ${args.TILT}`);
        }
    }
    getForce () {
        return this._peripheral.getForce();
    }
    isFacing (args) {
        switch (args.FACING) {
        case 'up':
            return this._peripheral.getAccelerationZ() > 9;
        case 'down':
            return this._peripheral.getAccelerationZ() < -9;
        default:
            log.warn(`Unknown direction in isFacing: ${args.FACING}`);
        }
    }
    isFreeFalling () {
        const currentVal = this.magnitude(
            this._peripheral.getAccelerationX(),
            this._peripheral.getAccelerationY(),
            this._peripheral.getAccelerationZ()
        );

        return currentVal < .5;
    }
}

Scratch.extensions.register(new GdxFor());
