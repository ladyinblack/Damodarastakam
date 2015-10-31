window.onload = function() {
  var hindi = document.getElementById('hindi');
  var english = document.getElementById('english');
  
  var hindiverse = document.getElementById("hindiverse");
  var englishverse = document.getElementById("englishverse");
  
  hindi.addEventListener("click", clickHindi, false);
  english.addEventListener("click", clickEnglish, false);
  hindi.addEventListener("mouseover", mouseOverHindi, false);
  english.addEventListener("mouseover", mouseOverEnglish, false);
  hindi.addEventListener("mouseout", mouseOutHindi, false);
  english.addEventListener("mouseout", mouseOutEnglish, false);
  
  function clickHindi() {
    hindiverse.style.display = "block";
	englishverse.style.display = "none";
	hindi.style.borderColor = "#893A9B";
	hindi.style.backgroundColor = "#CD7EDF";
	english.style.borderColor = "#ABC";
	english.style.backgroundColor = "fuchsia";
  }
  
  function clickEnglish() {
	englishverse.style.display = "block";
	hindiverse.style.display = "none";
	english.style.borderColor = "#893A9B";
	english.style.backgroundColor = "#CD7EDF";
	hindi.style.borderColor = "#ABC";
	hindi.style.backgroundColor = "fuchsia";
  }
}
