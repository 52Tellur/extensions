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
       },
       {
         opcode: 'reporter',
         blockType: Scratch.BlockType.REPORTER,
         text: '[TEXT]を返す',
         arguments: {
           TEXT: {
             type: "string",
             defaultValue: "true",
             menu: "hantei"
            }
         }
       }
     ],
     menus: {
       hantei: {
         acceptReporters: true,
         items: [{ text: "true", value: "true"}, {text: "false", value: "false"},{ text: "Infinity", value: "Infinity"},{ text: "NaN", value: "NaN"}]
       }
     }
   };
 }
  same({X,N}) {
   return X === N;
  }
  jyou(args){
   return Math.pow(args.X, args.N); 
  }
  }
  boolean1(args) {
    return args.TEXT;
  }
Scratch.extensions.register(new Tellur());
