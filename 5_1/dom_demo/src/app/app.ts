// create a form
let form: HTMLFormElement = document.createElement("form");
form.action = "./recepient.html";
document.body.appendChild(form);

// create two labels
let label1 = document.createElement("label");
label1.textContent = "First Name:";
let label2 = document.createElement("label");
label2.textContent = "Last Name:";

// create two input elements
let input1 = document.createElement("input");
input1.name = "fname";
input1.required = true;
let input2 = document.createElement("input");
input2.name = "lname";
input2.required = true;

// create a submit button
let button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";

form.appendChild(label1);
form.appendChild(input1);
form.appendChild(document.createElement("br"));
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(document.createElement("br"));
form.appendChild(button);
