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
                    text: 'trueを返す',
                }
            ],
        };
    }

    trueblk() {
        return true;
    }

Scratch.extensions.register(Sratch3NewBlock());
