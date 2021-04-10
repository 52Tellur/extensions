class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: 'ブロックたち',
     blocks: [
       {
         opcode: 'bmi',
         blockType: Scratch.BlockType.HAT,
         text: '何か(ハットブロック)', 
       },
       {
         opcode: 'bmi2',
         blockType: Scratch.BlockType.STACK,
         text: '何か', 
       },
       {
         opcode: 'bmi3',
         blockType: Scratch.BlockType.CAP,
         text: '何か', 
       },
       {
         opcode: 'bmi4',
         blockType: Scratch.BlockType.COMMAND,
         text: '何か', 
       },
     ]
    };
  };
  bmi() {
    return "イェーイ";
  }
  bmi2() {
    return "イェーイ";
  }
  bmi3() {
    return "イェーイ";
  }
  bmi4() {
    return "イェーイ";
  }
}
Scratch.extensions.register(new Tellur());
