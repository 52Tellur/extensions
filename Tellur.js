class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: 'Tellur',
     blocks: [
         {
         opcode: 'power',
         blockType: Scratch.BlockType.REPORTER,
         text: '[X]===[N]', 
         arguments: {
           X: {
             type: Scratch.ArgumentType.NUMBER,
             defaultValue: '2'
           },
           N: {
             type: Scratch.ArgumentType.NUMBER,
             defaultValue: '3'
           }
         }
       }
     ]
   }
 }
 power(args) {
 x === N;
 }
}
Scratch.extensions.register(new Tellur());
