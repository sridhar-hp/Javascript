var namevalue = document.getElementById("namevalue");
var tr = document.getElementById("tr");
var agevalue = document.getElementById("agevalue");
var emailvalue = document.getElementById("emailvalue");
var form = document.getElementById("myform");
var male = document.getElementById("male");
var female = document.getElementById("female");
var redbut = document.getElementById("redbut");
var coursename = document.getElementById("coursename");
//document.getElementById("save").addEventListener("submit",sname);
function sname(event) {
    event.preventDefault();
    var gender = "";
    if (male.checked) {
        gender = male.value;
    }
    else if (female.checked) {
        gender = female.value;
    }


    var nameinput = namevalue.value;
    var ageinput = agevalue.value;
    var course = coursename.value;
    var emailinput = emailvalue.value;

    var newrow = document.createElement("tr");
    var newname = document.createElement("td");
    var age = document.createElement("td");
    var cou = document.createElement("td");
    var gen = document.createElement("td");
    var email = document.createElement("td");
    var action = document.createElement("td");


    gen.innerHTML = gender;
    age.innerHTML = ageinput;
    cou.innerHTML = course;
    email.innerHTML = emailinput;
    newname.innerHTML = nameinput;
    action.innerHTML = "<button onclick='deletbutton(event)'>delet</button>";

    newrow.appendChild(newname);
    newrow.appendChild(age);
    newrow.appendChild(cou);
    newrow.appendChild(gen);
    newrow.appendChild(email);
    newrow.appendChild(action);

    document.querySelector("#myForm table").appendChild(newrow);

}


function deletbutton(event) {
    event.preventDefault();
    event.target.closest("tr").remove();
    // alert("Deleted");
    redbut.style.backgroundColor = "red";
    // event.target.style.backgroundColor="red";
    // event.target.style.color="white";
    //event.target.style.border="none";

}