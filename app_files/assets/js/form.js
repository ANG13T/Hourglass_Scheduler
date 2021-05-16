$("#name-invalid-feedback").css("display", "none");
var formData = {
    name: "",
    email: "",

}


function holdFormData(){
    formData.name = $("#name").val();
    formData.email = $("#email").val();
}

function postFormData(){
    alert("posting");
    holdFormData();
    localStorage.setItem("formData", JSON.stringify(formData));
}