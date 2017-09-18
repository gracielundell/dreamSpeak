// var inputContainer = document.getElementsByClassName('inputContainer');
// var outputContainer = document.getElementsByClassName('outputContainer');
// var submitPost = document.getElementsByClassName('submitPost'); //submit button


function showPost() {
  var title = document.getElementById("entryTitle").value;
  var description = document.getElementById("entryDescription").value;

  var entryTitle = document.getElementById("displayTitle").innerHTML = title
  var entryDescription = document.getElementById("displayDescription").innerHTML = description;


  console.log(title);
  console.log(description);

}




