$(document).ready(function() { $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
    $("#quote").html(('"' + json.quote + '"'));
    $("#author").html(("- " + json.author));
    updateTweet(json);
    updateColor();
  });
});

$("#button").on("click", function() {
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
    $("#quote").html(('"' + json.quote + '"'));
    $("#author").html(("- " + json.author));
    updateTweet(json);
    updateColor();
  });
});

function updateTweet(json) {
  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + json.quote + '" ' + json.author);
}

function updateColor() {
  var randomColor = getRandomColor();
  $("body").css({"background-color": randomColor});
  $("#quote").css({"color": randomColor});
  $("#author").css({"color": randomColor});
  $("i").css({"background-color": randomColor});
  $("button").css({"background-color": randomColor});
}

function getRandomColor() {
  var letters = '789ABCD';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 6)];
  }
  return color;
}
