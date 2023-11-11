

const UserfirstName=localStorage.getItem("firstname");
const Username= localStorage.getItem("name");
const Address= localStorage.getItem("address");
const Billingaddress= localStorage.getItem("billing");
const Email=localStorage.getItem("email");
const Phone=localStorage.getItem("phone");
const Description=localStorage.getItem("description")

localStorage.setItem("email","something@somthing.com");
document.getElementById("userfirstname").value=UserfirstName;
document.getElementById("username").value= Username;
document.getElementById("Email").value= Email;
document.getElementById("phone").value= Phone;
document.getElementById("Delivery").value=Address;
document.getElementById("description").value=Description;
document.getElementById("Billing").value=Billingaddress;


function save(){
    localStorage.setItem("firstname",document.getElementById("userfirstname").value);
    localStorage.setItem("name",document.getElementById("username").value);
    localStorage.setItem("phone",document.getElementById("phone").value);
    localStorage.setItem("description",document.getElementById("description").value);
    localStorage.setItem("address",document.getElementById("Delivery").value);
    localStorage.setItem("billing",document.getElementById("Billing").value);

}