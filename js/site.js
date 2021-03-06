var btn = document.getElementById('btn');
var proverb = document.getElementById('proverb');
var translation = document.getElementById('translation');
console.log(btn);
proverb.innerHTML = '<p>Click the button to see a proverb</p>';


btn.addEventListener('click', function() {
  var ourData;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false);
  ourRequest.onload= function () {
    ourData = JSON.parse(ourRequest.responseText);
  };
  ourRequest.send();

  proverb.innerHTML = ourData.source;
  translation.innerHTML = ourData.translation;
});
