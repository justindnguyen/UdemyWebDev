document.query

document.firstElementChild.lastElementChild.firstElementChild;

var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye";
heading.style.color = "red";

document.querySelector("input").click();

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Justin";

//document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";

document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;

document.getElementsByClassName("btn");

document.getElementById("title").innerHTML = "Good Bye";

document.querySelector("h1");
document.querySelector("#title"); //id
document.querySelector(".list"); //class

document.querySelector("li a"); //specific query

document.querySelector("li.item"); //first list item (with id item) in list

//you only get first item in queryselector

document.querySelectorAll("#list .item"); //[2].style.color = "blue";

document.querySelector("#list .list a").style.color = "red";

document.querySelector("h1").style.color = "red";

document.querySelector("button").style.backgroundColor = "yellow";

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent;
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"

document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");

debugger;