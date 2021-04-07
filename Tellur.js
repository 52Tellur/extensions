class Tellur {
  constructor() {}
  getInfo() {
    return {
      id: 'Tellur',
      name: 'Tellur',
      color1: '#15058a',
      color2: '#158569',
      color3: '#556280',
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
       },
       {
         opcode: 'ijyou',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '  [X] [Y] [Z].', 
         arguments: {
           X: {
             type: "string",
             defaultValue: "0"
           },
           Y: {
             type: "string",
             menu: "ijyou",
             defaultValue: "≦"
           },
           Z: {
             type: "string",
             defaultValue: "50"
           }
         }
       },
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
         opcode: 'jyou',
         blockType: Scratch.BlockType.REPORTER,
         text: '[X]の[N]乗', 
         arguments: {
           X: {
             type: "number",
             defaultValue: '2'
           },
           N: {
             type: "number",
             defaultValue: '3'
           }
         }
       },
       {
         opcode: 'andand',
         blockType: Scratch.BlockType.REPORTER,
         text: '[X]と[Y]と[Z]', 
         arguments: {
           X: {
             type: "string",
             defaultValue: 'りんご'
           },
           Y: {
             type: "string",
             defaultValue: 'バナナ'
           },
           Z: {
             type: "string",
             defaultValue: '桃'
           }
         }
       },
       {
         opcode: 'smallbig',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]<[Y]<[Z]', 
         arguments: {
           X: {
             type: "number",
             defaultValue: '0'
           },
           Y: {
             type: "number",
             defaultValue: '25'
           },
           Z: {
             type: "number",
             defaultValue: '50'
           }
         }
       },
       {
         opcode: 'ifelse',
         blockType: Scratch.BlockType.BOOLEAN,
         text: 'もし[X]なら[Y]でなければ[Z]',
         arguments: {
           X: {
             type: Scratch.ArgumentType.BOOLEAN,
             defaulutValue: true
           },
           Y: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: '陸'
           },
           Z: {
             type: "string",
             defaultValue: '海'
           }
         }
       }
     ],
      menus: {
        retu: {
          items: ['true', 'false', 'Infinity', 'NaN'],
        },
        ijyou: {
          items: ['≦','≧','<','>','≠'],
        },
      }
    };
  };
  same({X,N}) {
   return X === N;
  }
  jyou(args){
   return Math.pow(args.X, args.N); 
  }
  andand({X,Y,Z}){
    return X+Y+Z;
  }
  smallbig({X,Y,Z}){
    if(X<Y){
      if(Y<Z){
        return true;
      } else{
        return false;
      }
    } else{
        return false;
    }
  }
  ifelse({X,Y,Z}){
    if(X){
      return Y;
    } else{
      return Z;
    }
  }
  retur({X}){
    return X;
  }
  ijyou({X,Y,Z}){
    if (Y==="≦"){
      return X <= Z;
    } else if(Y==="≧"){
      return X >= Z;
    } else if(Y==="<"){
      return X < Z;
    }else if(Y===">"){
      return X > Z;
    }else if(Y==="≠"){
      return X !== Z;
    }else{
      return "Undefined";
    }
  }
}
Scratch.extensions.register(new Tellur());
