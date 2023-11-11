const request = new XMLHttpRequest();
request.open("GET", "http://localhost:5000/api/products");
request.setRequestHeader("Access-Control-Allow-Credentials", "true");
request.setRequestHeader("Content-Type", "application/json");
request.onload = processData;
request.send();

function processData() {
    const response = JSON.parse(request.response);
    console.log(response);
}

function save(){
    const requestToSendData = new XMLHttpRequest();
    requestToSendData.open("POST", "http://localhost:5000/api/products", true);
    requestToSendData.setRequestHeader("Access-Control-Allow-Credentials", "true");
    requestToSendData.setRequestHeader("Content-Type", "application/json");
    requestToSendData.onload = processRequestToSendDataResponse;

    const data = {
        "porduct_name": document.getElementById("productinfo"),
        "product_description": document.getElementById("product")
    }
    requestToSendData.send(JSON.stringify(data));

    function processRequestToSendDataResponse() {
        const response = JSON.parse(request.response);
        console.log(response);
    }
}

function edit(){
    document.getElementById("product").disabled=false;
    document.getElementById("productinfo").disabled=false;
}

// to upload pictures
const picture =document.getElementById("Photo");
const updatepic =document.getElementById("upload")

updatepic.onchange=function(){
    picture.src=URL.createObjectURL(updatepic.files[0]);
}