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
