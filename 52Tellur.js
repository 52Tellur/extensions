class KoKa {
  constructor() {}
  getInfo() {
    return {
     id: 'koka',
     name: 'KoKa',
     blocks: [
         {
         opcode: 'power',
         blockType: Scratch.BlockType.REPORTER,
         text: '[N]を計算する', 
         arguments: {
           N: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: '3+5'
           }
         }
       }
     ]
   }
 }
 power({N}) {
 return N;
 }
}
Scratch.extensions.register(new KoKa());
