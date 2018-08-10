// create a button element
let element: HTMLButtonElement = document.createElement("button");

// create a table element and add it to the document
let table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);

// obtaining all <code> elements and iterating through them
let codeList: NodeListOf<HTMLElement> = document.getElementsByTagName("code");
for(let i = 0; i < codeList.length; i++){
  document.write(codeList[i].style.color = "red"); //na primer
}

// create an anchor element
let link: HTMLAnchorElement = document.createElement("a");
link.href = "http://www.google.com";
link.text = "Google";
document.body.appendChild(link);

// create an input element
let input: HTMLInputElement = document.createElement("input");
input.maxLength = 15;
input.value = "First Name";
input.name = "fname";
document.body.appendChild(input);
