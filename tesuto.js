class Tellur {
  constructor() {}
  getInfo() {
    return {
     id: 'Tellur',
     name: '返す系',
     blocks: [
       {
         opcode: 'retur',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]を返す', 
         arguments: {
           X: {
             type: "string",
             menu: "retu",
             defaultValue: "true"
           }
         }
       }
     ],
      menus: {
        acceptReporters: true,
        retu: {['true', 'false', 'Infinity', 'NaN'],
        },
      }
    };
  }
  retur(arg) {
    return X;
  }
}
Scratch.extensions.register(new Tellur());
