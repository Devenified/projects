//global scope
var globalVar="Im a global variable";
let globalLet  ="Ima also global but scoped";
const globalConst ="Ima global constant";
function show(){
    var blockvar="Ima a blocked scoped var";
    let blockLet="I'm a block-scoped let";
    const blockConst="Im a block scoped const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
show();
//console.log(blockvar);
//console.log(blockkLet);
//console.log(blockConst);
