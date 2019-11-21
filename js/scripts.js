$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateOfBirthInput = $("#born").val();
    var foodInput = $("#food").val();
    var musicInput = $("input:radio[name=genre]:checked").val();
    var colorInput = $("#color").val();

    event.preventDefault();
  });
});
