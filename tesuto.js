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
             "type": "string",
             "menu": "retu",
             "defaultValue": "true"
           }
         }
       }
     ],
      menus: {
        retu: [{text:'true',value:true},{text:'false',value:false},{text'Infinity',value:Infinity},{text'NaN',value:NaN}]
      }
    };
  }
  retur({X}) {
    return X;
  }
}
Scratch.extensions.register(new Tellur());
