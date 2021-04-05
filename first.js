class Scratch3NewBlock {
    constructor (runtime) {
        this.runtime = runtime;
        this.text = "";
        this.changed = 0;
        this.lasthat = false;
    }
    getInfo () {
        return {
            id: 'newblock',
            name: '返す系',
            blocks: [
                {
                    opcode: 'reporter1',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT]を返す',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },
                {
                    opcode: 'boolean1',
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
                    opcode: 'igyou',
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
                    opcode: 'event1',
                    blockType: Scratch.BlockType.EVENT,
                    text: 'event [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },
                {
                    opcode: 'conditional1',
                    blockType: Scratch.BlockType.CONDITIONAL,
                    text: 'conditional [TEXT]',
                    branchCount: 2,
                    arguments: {
                        TEXT: {
                            type: ArgumentType.BOOLEAN,
                            defaultValue: true
                        }
                    }
                },
                {
                    opcode: 'writeLog5',
                    blockType: BlockType.BUTTON,
                    text: 'button',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },
                {
                    opcode: 'send1',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'send event',
                },
                {
                    opcode: 'hat1',
                    blockType: Scratch.BlockType.HAT,
                    text: 'hat'
                },
                {
                    opcode: 'writeLog7',
                    blockType: Scratch.BlockType.LOOP,
                    text: 'loop [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true",
                            menu: "moji"
                        }
                    }
                },
                {
                    opcode: 'writeLogArg1',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'argument type: STRING [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "true"
                        }
                    }
                },
                {
                    opcode: 'writeLogArg2',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'argument type: BOOLEAN [JUDGE]',
                    arguments: {
                        JUDGE: {
                            type: ArgumentType.BOOLEAN,
                            defaultValue: true
                        }
                    }
                },
                {
                    opcode: 'writeLogArg3',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'argument type: EVENT [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.EVENT
                            // defaultValue: 
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

    boolean1({args}) {
        return args.TEXT;
    }

    conditional1({args}) {
        return args.TEXT;
    }

    command1({args}) {
        this.text = Cast.toString(args.TEXT);
    }

    send1({args}) {
        this.changed = true;
    }
    // hat1({args}) {
    //     var rtn = this.changed;
    //     this.changed = false;
    //     return rtn;
    // }

    hat1({args}) {
        var rtn = this.changed && (!this.lasthat);
        this.changed = false;
        this.lasthat = rtn;
        return rtn;
    }


    event1({args}) {
        return this.text == args.TEXT;
    }

    writeLogArg2 ({args}) {
        const judge = Cast.toBoolean(args.JUDGE);
        if(judge) 
            log.log(judge);
        else
            log.log(judge)
    }
}

Scratch.extensions.register(Sratch3NewBlock());
