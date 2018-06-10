var job = "dealer";
var where = "space";
var partner = "Sebastian";
var number = 5;
var future = "I will be a " + job + " in " + where + ". I will marry" + partner + " and we will have " + number + " children";

var head1 = document.querySelector("#myHeader");
head1.addEventListener("click", changeTextContent);

console.log(head1.textContent);

//head1.textContent=future;

function changeTextContent(){
    head1.textContent = future;
}
