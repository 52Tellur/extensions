class Scratch3NewBlock {
    constructor () {}
    getInfo () {
        return {
            id: 'newblock',
            name: 'DevSample',
            blocks: [
                {
                    opcode: 'trueblk',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT]を返す',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },
                {
                    opcode: 'falseblk',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TEXT]を返す',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },

                {
                    opcode: 'infblk',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TEXT]を返す',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                }
            ],
            menus: {
                moji: {
                    acceptReporters: true,
                    items: [{ text: "true", value: "true"}, {text: "false", value: "false"},{ text: "Infinity", value: "Infinity"},{ text: "NaN", value: "NaN"}]
                }
            }
        };
    }

    trueblk({args}) {
        return args.TEXT;
    }

Scratch.extensions.register(Sratch3NewBlock());
