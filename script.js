function rndm_colour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}

function change_heading() {
  color = rndm_colour();
  document.getElementById("heading").style.color = color;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function killswitch(){
  document.getElementById("body").remove();
}

function say_hello(){
  var name = document.getElementById("name").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome to my page " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

function change_background(){
  color = rndm_colour();
  document.getElementById("body").style.backgroundColor = color;
}