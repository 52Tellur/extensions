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

    trueblk({TEXT}) {
        if menu="true"{
            return true;
        } else if menu="false"{
            return false;
        }else if menu="Infinity"{
            return Infinity;
        }else {
            return NaN;
        }
        
    }

Scratch.extensions.register(Sratch3NewBlock());
