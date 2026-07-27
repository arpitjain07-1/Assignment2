const text = [
    "Web Developer",
    "Java Programmer",
    "AI & ML Student",
    "Frontend Developer"
];

let index = 0;
let char = 0;

function typing() {

    const element = document.getElementById("typing");

    if (char < text[index].length) {

        element.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(typing,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    const element=document.getElementById("typing");

    if(element.innerHTML.length>0){

        element.innerHTML=element.innerHTML.slice(0,-1);

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index==text.length){

            index=0;

        }

        char=0;

        setTimeout(typing,300);

    }

}

typing();

document.querySelector("form").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

});