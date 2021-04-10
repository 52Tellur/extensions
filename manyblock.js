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
         opcode: 'bmi',
         blockType: Scratch.BlockType.STACK,
         text: '何か', 
       },
       {
         opcode: 'bmi',
         blockType: Scratch.BlockType.CAP,
         text: '何か', 
       },
       {
         opcode: 'bmi',
         blockType: Scratch.BlockType.C,
         text: '何か', 
       },
     ]
    };
  };
  bmi() {
    return "イェーイ";
  }
}
Scratch.extensions.register(new Tellur());
