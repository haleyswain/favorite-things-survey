$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var question1Input = $("input#question1").val();
    var color = $("#color").val();
    var food = $("#food").val();
    var question4 = $("input:radio[name=question4]:checked").val();

    $(".question1").text(question1Input);
    $(".color").text(color);
    $(".food").text(food);
    $(".question4").text(question4);

    $("#survey").show();
    $("#results").show();

    event.preventDefault();
  });
});
