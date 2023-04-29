let h1 = document.querySelector("#h1");
let m = document.querySelector("#menu");

h1.addEventListener("click",h1Col);
function h1Col(){
  m.classList.toggle("hidden");
};


let newWorld = document.querySelector("#header-p1");
let headerP1 = document.querySelector("#header-text");
newWorld.addEventListener("click",chengCol);
function chengCol(){
  headerP1.classList.toggle("n")
  newWorld.classList.toggle("label")

}

let darkLight = document.querySelector("#dark-mode");
darkLight.addEventListener("click",mode)
function mode (){
let body = document.body;
body.classList.toggle("dark-light")
}

let p = document.querySelector("#p");
p.addEventListener("mousemove",add)
let selectedTd = p;
function add(event) {
  let target = event.target; 

  if (target.tagName != 'P') return;

  highlight(target);
};

function highlight(td) {
  if (selectedTd) { 
    selectedTd.classList.remove('c');
  }
  selectedTd = td;
  selectedTd.classList.add('c');
}
