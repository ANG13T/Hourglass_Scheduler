let userData;

function getData(){
  let data = localStorage.getItem("formData");
  console.log(data);
  userData = JSON.parse(data);
  console.log(userData, typeof userData);
}

window.onload = function(e){ 
  getData();
}