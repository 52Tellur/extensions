class sometestExtension {
  constructor() {}
  getInfo() {
    return {
      id: 'sometestExtension', 
      name: '実験',
      blocks: [
        {
          opcode: 'color',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: 'First value'
            }
          }
        },
        {
          opcode: 'MATRIX',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX
              defaultValue: 'First value'
            },
          },
        },
      ]
    };
  };
  color({ONE}) {
    return ONE;
  }
  MATRIX({ONE}) {
    return ONE;
  }
}
Scratch.extensions.register(new sometestExtension());
