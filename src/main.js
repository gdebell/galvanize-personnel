//jQuery is working
$(function() {
console.log("Working!");

//get role names from website
$(function() {
      $.ajax({
        url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
        method: 'GET'

      }).done(function(data) {
        var role = data;
        console.log(data);
        console.log(data[0].img);
        console.log(data[0].title);

      for (var i = 0; i < data.length; i++) {
        var profiletitle = data[i].title.toLowerCase();
        $('.form-control').append('<option class="role">' + profiletitle + '</option>');
      }
    })
  });
});

$('form').on('submit', function(e) {
  e.preventDefault();
    var fn =  ($('#firstname').val());
    var ln =  ($('#lastname').val());
    var rl =  ($('#select').val());

    var userInput = {
      firstName: fn,
      lastName: ln,
      role: rl
    }      
    //console.log(userInput);

    $.ajax({
      method: 'POST',
      url: "https://galvanize-student-apis.herokuapp.com/gpersonnel/users",
      data: userInput,

      success: function (info) {
      var successMessage = info.message;
      $(".save-status").append('<p class="alert alert-dismissible alert-success">' + successMessage + '</p>');
      $(".save-status").fadeIn(500).delay(2000).fadeOut(500);
      },
      error: function(info) {
      var errorMessage = info.responseJSON.message;
      $(".save-status").append('<p class="alert alert-dismissible alert-danger">' + errorMessage + '</p>');
      $(".save-status").fadeIn(500).delay(2000).fadeOut(500);
      }
    })
  });


  $('#select').change(function(e) {
    var titleSelect = $('#select').val();
    console.log(titleSelect);
  $('#image').attr("src", "./src/images/" + titleSelect + ".jpg") ;
 });
