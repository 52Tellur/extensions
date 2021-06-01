class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: 'ブロックたち',
     blocks: [
       {
         opcode: 'i',
         blockType: Scratch.BlockType.HAT,
         text: '52Tellur/テルルの研究所', 
       },
     ]
    };
  };
  i() {
    return "イェーイ";
  }
Scratch.extensions.register(new Tellur());
