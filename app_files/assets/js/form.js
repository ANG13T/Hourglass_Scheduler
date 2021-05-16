$("#name-invalid-feedback").css("display", "none");
var formData = {
    name: "",
    email: "",
    startWork: "",
    endWork: "",
    startSleep: "",
    amountSleep: "",
    amountFreetime: "",
    amountRelationshipTime: "",
    startFreetime: "",
    breakfastTime: "",
    lunchTime: "",
    dinnerTime: "",
    amountHobby: "",
    amountHobby: ""
}


function holdFormData(){
    formData.name = $("#name").val();
    formData.email = $("#email").val();
    formData.startWork = $("#startWork").val();
    formData.endWork = $("#endWork").val();
    formData.startSleep = $("#startSleep").val();
    formData.amountSleep = $("#amountSleep").val();
    formData.amountFreetime = $("#startFreetime").val();
    formData.amountRelationshipTime = $("#amountRelationshipTime").val();
    formData.startFreetime = $("#startFreetime").val();
    formData.breakfastTime = $("#breakfastTime").val();
    formData.lunchTime = $("#lunchTime").val();
    formData.dinnerTime = $("#dinnerTime").val();
    formData.amountHobby = $("#amountHobby").val();
    formData.amountHobby = $("#amountHobby").val();
}

function postFormData(){
    holdFormData();
    localStorage.setItem("formData", JSON.stringify(formData));
}