//define functions here
function getIt(){
  $('p').on("click",()=>alert("Hey!"))
}
function frameIt(){
  $('img').on('load',() => { $('img').addClass('tasty')} )
}
function pressIt(){
  $('typing').on("keydown", (key)=>{
      if(key.which == 'g'){
        alert("g is pressed")
      }
  } )
}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
