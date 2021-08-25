class sometestExtension {
  getInfo() {
    return {
      id: 'sometestextensionBlock', 
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
            }
          }
        }
      ]
    };
  }
  color(args) {
    return ONE;
  }
  MATRIX(args) {
    return ONE;
  }
}
Scratch.extensions.register(new sometestExtension());
