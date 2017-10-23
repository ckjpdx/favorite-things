$(document).ready(function(){
  var favArr = [];
  $('#favoriteForm').submit(function(event){
    var favorite1 = $('#favoriteInput1').val();
    var favorite2 = $('#favoriteInput2').val();
    var favorite3 = $('#favoriteInput3').val();
    favArr.push(favorite1, favorite2, favorite3);
    alert(favArr);
  });
});
