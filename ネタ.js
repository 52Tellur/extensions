class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: 'ネタブロック',
     blocks: [
       {
         opcode: 'bmi',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '体重[X]kg身長[Y]mの人のBMI', 
         arguments: {
           X: {
             type: "number",
             menu: "retu",
             defaultValue: "94"
           },
           Y: {
             type: "number",
             menu: "retu",
             defaultValue: "1.95"
           },
         },
       },
     ]
    };
  };
  bmi({X,Y}) {
    return X/Y/Y;
  }
}
Scratch.extensions.register(new Tellur());
