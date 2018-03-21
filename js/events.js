//define functions here
function getIt(){
  $('p').on("click",()=>alert("Hey!"))
}
function frameIt(){
  $('img').on("click",() => { $('img').addClass('tasty')} )

}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
