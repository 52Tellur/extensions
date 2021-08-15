class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] [TWO] もはや何なのか分からないブロック',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NOTE,
              defaultValue: '60'
            },
            TWO: {
              type: Scratch.ArgumentType.MATRIX,
              defaultValue: '1000000000000000000000001'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
