const field = document.querySelector('.game-field');
const startBtn = document.querySelector('#startBtn');
const timer = document.querySelector('#timer');
const docfrag = document.createDocumentFragment();

let count = 5;
let time = null;

init();

function init(){
  eventSet();
}

function eventSet(){
  startBtn.addEventListener('click', gameStart);
  field.addEventListener('click', itemClickHandler)
}

function gameStart(){
  field.innerHTML="";
  createItem("/img/bug.png", "bug", "10");
  createItem("/img/carrot.png", "carrot", "10");
  startBtn.classList.remove('active');
  timer.innerHTML=5;
  time = setInterval("gameCounter()", 1000);
}

function gameCounter(){
  count--;
  if(count < 0){
    clearInterval(time);
    gameEnd();
  }
  timer.innerHTML = count;
}

function gameEnd(){
  alert("END")
  startBtn.classList.add('active');
  field.innerHTML=""
  return count = 5;
}

function createItem(img, name, length){
  for(let i = 0; i<=length; i++ ){
    const item = document.createElement('span');
    const itemImg = document.createElement('img');
    let x1 = Math.floor(Math.random() * 1200);
    let y1 = Math.floor(Math.random() * 200);

    item.appendChild(itemImg)
    item.setAttribute('class', name);
    item.setAttribute('data-id', i);
    itemImg.setAttribute('src', img);
    itemImg.setAttribute('alt', name);
    itemImg.setAttribute('data-id', i);
    itemImg.setAttribute('data-value', name);
    item.style.left = `${x1}px`;
    item.style.top = `${y1}px`        
    docfrag.appendChild(item);
    
  }
  field.appendChild(docfrag)
}

function itemClickHandler(event){
    const targetValue = event.target.dataset.value
    const targetId = event.target.dataset.id
    if(targetValue === "bug"){
      clearInterval(time);
      gameEnd();
    }
    if(targetValue === "carrot" && targetId){
      console.log(targetId)
      const carrotDeleted = document.querySelector(`.carrot[data-id="${targetId}"]`)
      carrotDeleted.remove();
    }

    // switch(targetValue){
    //   case Target.BUG:
    //     return dd = 1;;
    //   case Target.CARROT:
    //     return dd = 2;
    //   default :
    //     throw new Error();
    // }
}