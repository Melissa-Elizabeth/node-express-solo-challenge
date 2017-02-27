$(document).ready(function() {
  console.log('jquery loaded');

  $.ajax({
     type: 'GET',
     url: '/jokes',
     success: function(response) {
       $('.display').text(response);
     },
     error: function(error){
     }
   });

  $('.addJoke').on('click', addClicked);
  function addClicked() {
    var userJoke = {                // creating the user joke object
      whoseJoke: $('#whoseJoke').val(),
      jokeQuestion: $('#jokeQuestion').val(),
      punchLine: $('#punchLine').val()
    };


    $.ajax({
  type: 'POST',
  url: '/jokes/sendJoke',
  data: userJoke,
  success: function(data){
  },
  error: function(error){
  }
});

$.ajax({
   type: 'GET',
   url: '/jokes/getJoke',
   success: function(response) {
     $('.display').text(response);
   },
   error: function(error){
   }
 });
}
});
