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
             type: Scratch.ArgumentType.STRING,
             menu: "retu",
             defaultValue: "true"
           },
         },
       },
     ],
      menus: {
        acceptReporters: true,
        retu: {
          items: ['true', 'false', 'Infinity', 'NaN'],
        },
      }
    };
  };
  retur(args) {
    return X;
  }
}
Scratch.extensions.register(new Tellur());
