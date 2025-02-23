// to focus on input tag of frontPage
let button = document.querySelector(".main").querySelector(".content").querySelector(".button");
let input = document.querySelector(".main").querySelector(".content").querySelector("#guessInput");
button.addEventListener("click", function () {
    // if(input.textContent.endsWith(".com")){
    //     button.getElementsByTagName("a").href = "https://www.netflix.com/signup/registration?locale=en-IN";

    // }
    // else{
    //     input.focus();
    // }



    input.focus();
    button.addEventListener("click", function () {
        if (input.textContent.endsWith(".com")) {
            button.getElementsByTagName("a").href = "https://www.netflix.com/signup/registration?locale=en-IN";
        }
    })


})



//To apply transitions to buttons and cards
let btn = document.querySelector("#click");
let btnz = document.querySelector("#click-2");
console.log(btn);
let cards = document.querySelector(".template");
console.log(cards);
let btn1 = document.querySelector(".container").querySelector(".button-1");
let btn2 = document.querySelector(".container").querySelector(".button-2");
console.log(btn2);
async function getNext() {
    btn.addEventListener("click", function () {

        cards.style.transform = "translateX(-35%)";
        btn1.style.transform = "translateX(140%)";
        btn2.style.transform = "translateX(110%)";


        btnz.addEventListener("click", function () {
            // Reset the cards' position
            cards.style.transform = "translateX(0%)";
            btn1.style.transform = "translateX(0%)";
            btn2.style.transform = "translateX(0%)";
        });
    });
}
getNext();




//To add answer divs for FREQUENTLY ASKED QUESTIONS
let faq = document.querySelector(".info").querySelector(".faqs").getElementsByClassName("faq");
console.log(faq);
let faqArr = Array.from(faq);
console.log(faqArr);
faqArr.forEach(e => {
    e.addEventListener("click", function(){
        // e.lastElementChild.style.display = "none"
        console.log(e.lastElementChild.style.display);
        
        if(e.lastElementChild.style.display == "block"){
            e.lastElementChild.style.display = "none";
            let img = e.getElementsByTagName("img")[0]; 
            if (img) {
                img.style.transform = "rotate(0deg))"; 
            }
        }
        else{
            e.lastElementChild.style.display = "block";
            let img = e.getElementsByTagName("img")[0]; 
            if (img) {
                img.style.transform = "rotate(45deg)"; 
            }
        }

    })
});