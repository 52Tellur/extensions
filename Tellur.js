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
         text: '[X]と[N]は同じ', 
         arguments: {
           X: {
             type: "string",
             defaultValue: '2'
           },
           N: {
             type: "string",
             defaultValue: '3'
           }
         }
       }
     ]
   }
 }
 power({X,N}) {
 return X === N;
 }
}
Scratch.extensions.register(new Tellur());
