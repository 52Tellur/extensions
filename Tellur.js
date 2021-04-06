class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: 'Tellur',
     blocks: [
       {
         opcode: 'same',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]と[N]は全く同じ', 
         arguments: {
           X: {
             type: "string",
             defaultValue: 'ｓ'
           },
           N: {
             type: "string",
             defaultValue: 's'
           }
         }
       },
       {
         opcode: 'wrong',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]≠[N]', 
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
       },
       {
         opcode: 'jyou',
         blockType: Scratch.BlockType.REPORTER,
         text: '[X]の[N]乗', 
         arguments: {
           X: {
             type: "number",
             defaultValue: '3'
           },
           N: {
             type: "number",
             defaultValue: '2'
           }
         }
       }
     ]
   }
 }
  same({X,N}) {
   return X === N;
  }
  wrong({X,N}) {
   return X !== N;
  }
  jyou(args){
   return Math.pow(args.X, args.N); 
  }
}
Scratch.extensions.register(new Tellur());
