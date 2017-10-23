$(document).ready(function(){
  $('#favoriteForm').submit(function(event){
    event.preventDefault();
    var favArr = [];
    var favorite1 = $('#favoriteInput1').val();
    var favorite2 = $('#favoriteInput2').val();
    var favorite3 = $('#favoriteInput3').val();
    favArr.push(favorite1, favorite2, favorite3);
    var pos1 = favArr.splice(1, 1, favorite1, favorite2, favorite3); // 1,2,3 //
    favArr.unshift(pos1);
    //display favArray
    $('#favorite-list').empty();
    favArr.forEach(function(fav) {
      $('#favorite-list').append("<li>" + fav + "</li>");
    });

  });
});
