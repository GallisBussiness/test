function removeAllValue(tab,value) {
let curentIndex = tab.indexOf(value);
if(curentIndex !== -1) {
  tab.splice(curentIndex,1);
}
if (tab.indexOf(value,curentIndex) === -1) return tab;
return removeAllValue(tab,value);
}
let tableau = [1,5,2,4,0,9,2,0,1,2,5,9,5];
removeAllValue(tableau,9);
console.log(tableau);


function removeAll(tab,value) {
  while(tab.indexOf(value)!== tab.lastIndexOf(value)) {
    tab.splice(tab.indexOf(value), 1);
  }
  tab.splice(tab.indexOf(value), 1);
}

function removeAll2(tab,value) {
  while (tab.includes(value)) tab.splice(tab.indexOf(value), 1);
}
 function Capitalize(str) {
 return str.split(' ').map((word) =>{
   [first,...rest] = word.split('');
   return first.toUpperCase() + rest.join('').toLowerCase();
 } ).join(' ');
 }
// function doneorNot
 
function doneOrNot(board) {

  let tabHCorrect = [];
  let tabV = [];
  let tabVCorrect = [];
  let tabG = [];
  board.forEach((tab,key) => {
    if(!tabHCorrect[key])
        tabHCorrect[key] = [];
    if(!tabV[key]) tabV[key] = [];
    tabHCorrect[key] = tab.every((v,i) =>{ 
      tabV[key].push(board[i][key]);
      return tab.indexOf(v) === tab.lastIndexOf(v);
    });
  });
  tabV.forEach((tab,key) => {
   if(!tabVCorrect[key]) tabVCorrect[key] = [];
  tabVCorrect[key] = tab.every(v => tab.indexOf(v) === tab.lastIndexOf(v));
  });

  for(let tab of board) {
     tabG = [...tabG,...tab];
  }
 let res = tabG.reduce((acc,val) => acc + val);
  return tabHCorrect.every(v => v === true) && tabVCorrect.every(v => v === true) && res === 405 ? "Finished!" : "Try again!";
}
