$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = $("#userSentence").val();
    var splitSent = sentence.split(' ');
    console.log(splitSent);

    var newSent = splitSent.filter(item => item.length > 4);
    console.log(newSent);

    var joinSent = newSent.reverse().join('-');
    console.log(joinSent);
    
    event.preventDefault();
  });
});