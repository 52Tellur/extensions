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
    var calc_string = "N";
    var result = Function('return ('+calc_string+');')();
    return(calc_string);
  }
}
Scratch.extensions.register(new KoKa());
