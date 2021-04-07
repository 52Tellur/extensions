const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjcwbW0iCiAgIGhlaWdodD0iNzBtbSIKICAgdmlld0JveD0iMCAwIDcwIDcwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0i44Ki44Kk44Kz44K9LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuODYwODEzMSIKICAgICBpbmtzY2FwZTpjeD0iMjg1LjIyOTkyIgogICAgIGlua3NjYXBlOmN5PSI3Ni4xNDE2NSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NDIiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1MSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0i44Os44Kk44Ok44O8IDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOiNhZGQ2ZDQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM1MGI5NjU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDg0NyIKICAgICAgIGN4PSIzNS4wNTgzMzEiCiAgICAgICBjeT0iMzUuMDU4MzMxIgogICAgICAgcj0iMzMuMDI5MTYzIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1MGI5NjU7c3Ryb2tlLXdpZHRoOjQuMjgyNDM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDMyLjkxMzU3NywyOS42NzM4MDMgdiA3LjU1MTkzIgogICAgICAgaWQ9InBhdGg4NTciIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzUwYjk2NTtzdHJva2Utd2lkdGg6NC4yODI0MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNDcuNzEyMzU3LDI3LjYzNjI4MyB2IDcuNTUxOTMiCiAgICAgICBpZD0icGF0aDg1Ny01IiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1MGI5NjU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI5LjQ4MTk3Nyw0OS4yMTM2OTMgYyA5LjMyODc0LDIuMzUzMDMgMTcuOTMwNzgsMy4zNDM0NyAyMi43MzQzNiwtMi43ODgxOCIKICAgICAgIGlkPSJwYXRoODgzIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDg4NSIKICAgICAgIHN0eWxlPSJmaWxsOiM1MGI5NjU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI4LjY1MzE0Nyw0My44MTQ0NjMgYyAxLjk2NDUyLDIuMTM2MDIgMy42OTczMyw1LjU3NTEgMi40NzY3NSw2LjY5NzY5IC0xLjIyMDU4LDEuMTIyNTkgLTQuOTMyMzYsLTAuNDk2NDMgLTYuODk2ODgsLTIuNjMyNDYgLTEuOTY0NTIsLTIuMTM2MDMgLTIuNTY3NiwtNC43Nzc2NSAtMS4zNDcwMSwtNS45MDAyMyAxLjIyMDU5LC0xLjEyMjU4IDMuODAyNjIsLTAuMzAxMDMgNS43NjcxNCwxLjgzNSB6IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3NzcyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNTBiOTY1O3N0cm9rZS13aWR0aDoyLjg3NzA0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA3Ljk2ODU1NjMsMTguNTM2OTkzIDYuMDU0NDczNyw4LjQxMjU0IDUuNjA4MzQ3LC03Ljc3NTIzIDYuNTAwNTksNy42NDc3NyA1LjY3MjA5LC03LjkwMjY5IDYuNjkxNzgsNy45NjY0MSA1LjkyNzAyLC05LjA0OTg0IDguODU4NjUsNy41MjAyOSAyLjEwMzEzLC0xMC4xMzMyNyA4Ljc5NDkyLDcuMzkyODMiCiAgICAgICBpZD0icGF0aDg4OCIgLz4KICA8L2c+Cjwvc3ZnPgo=';
class Tellur {
  constructor() {}
  getInfo() {
    return {
      id: 'Tellur',
      name: 'Tellur',
      color1: '#ADD6D4',
      color2: '#6CB8B8',
      color3: '#50B965',
			blockIconURI: icon,
			menuIconURI: icon,
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
         text: '.[X] [Y] [Z].', 
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
             defauleValue: 'true'
           },
           Y: {
             type: "string",
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
          acceptReporters: true,
          items: ['true', 'false', 'Infinity', 'NaN','Undifined'],
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
    }
  }
}
Scratch.extensions.register(new Tellur());
