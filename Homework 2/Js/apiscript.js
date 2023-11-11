const request = new XMLHttpRequest();
request.open("GET", "http://localhost:5000/api/user");
request.setRequestHeader("Access-Control-Allow-Credentials", "true");
request.setRequestHeader("Content-Type", "application/json");
request.onload = processData;
request.send();

function processData() {
    const response = JSON.parse(request.response); 
}

function save(){
    const requestToSendData = new XMLHttpRequest();
    requestToSendData.open("POST", "http://localhost:5000/api/user", true);
    requestToSendData.setRequestHeader("Access-Control-Allow-Credentials", "true");
    requestToSendData.setRequestHeader("Content-Type", "application/json");
    requestToSendData.onload = processRequestToSendDataResponse;

    const data = {
        "first_name":document.getElementById("userfirstname").value,
        "last_name": document.getElementById("username").value,
        "email": "Something@something.com",
        "phone": document.getElementById("phone").value,
        "description":document.getElementById("description").value,
        "address":document.getElementById("Delivery").value,
        "billing":document.getElementById("Billing").value
    }
    requestToSendData.send(JSON.stringify(data));

    function processRequestToSendDataResponse() {
        const response = JSON.parse(request.response);
        document.getElementById("Title").innerHTML="All saved! "+response.data[0].first_name;
        console.log(response);
        
    }   
}