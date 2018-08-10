// access the document query string
let i = document.URL.indexOf("?");
let queryString = document.URL.substr(i+1);

// read parameters from the query string
let params = queryString.split("&");
let paramPair: string[];

for(i = 0; i < params.length; i++){
  paramPair = params[i].split(",");
  if(paramPair[0] === "fname"){
    document.write("First name: " + paramPair[1] + "<br/>");
  } else if (paramPair[0] === "lname"){
    document.write("Last name: " + paramPair[1] + "<br/>");
  }
}
