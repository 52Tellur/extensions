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
         blockType: Scratch.BlockType.COMMAND,
         text: '何か', 
       },
       {
         opcode: 'bmi4',
         blockType: Scratch.BlockType.COMMAND,
         text: '[x]をあらーとする',
         arguments: {
           X: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'アラート'
           },
         }
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
  bmi4(x) {
    alert( x , "b");
  }
}
Scratch.extensions.register(new Tellur());
