class MyExtension {
  getInfo() {
    return {
      id: 'myextensionexample', // change this if you make an actual extension!
      name: 'Cool Extension',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.ArgumentType.ANGLE,
          text: 'Hello, world!'
        }
      ]
    };
  }
  hello() {
    return 'Hello, world!';
  }
}
Scratch.extensions.register(new MyExtension());
