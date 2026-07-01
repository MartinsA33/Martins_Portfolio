let wheel = document.querySelector("#wheel");
let wheelDiv = document.querySelector(".wheelDiv");
let skills = document.querySelector("#skils");
let section = document.querySelector("#section");
let currentRot = 0;
let currentPg = 0;

wheelDiv.addEventListener("click", function () {
  // alert("hello");
  currentRot += 45;
  currentPg++;
  wheel.style.transition = "transform 1s ease-in-out";
  wheel.style.transform = `rotate(${currentRot}deg)`;
  //add a if and else if conditionals that determine what will appear in the text in the <span> tag.
  // the <span> tag should be placed above the wheelDiv it will be called "section" with #section.
  // the if and else if condtionals will use currentPg to figue out which what will print
  //for example:
  if (currentPg == 1) {
    section.style.left = "610px";
    section.innerHTML = "Experience";
    section.href = "#expericence";
  } else if (currentPg == 2) {
    section.style.left = "625px";
    section.innerHTML = "Projects";
    section.href = "#projects";
  } else if (currentPg == 3) {
    section.style.left = "628px";
    section.innerHTML = "Learning";
  } else if (currentPg == 4) {
    section.style.left = "638px";
    section.innerHTML = "Fun";
  } else if (currentPg == 5) {
    section.style.left = "632px";
    section.innerHTML = "Me";
  } else if (currentPg == 6) {
    section.style.left = "618px";
    section.innerHTML = "Contact";
    section.href = "#contact";
  } else if (currentPg == 7) {
    section.innerHTML = "Content";
  } else if (currentPg >= 8) {
    currentPg = 0;
    section.style.left = "624px";
    section.innerHTML = "Skills";
  }
  //make sure to set a way to reset currentPg to 0 when the wheel gets back to skills.
});
//"section" should have a click function that scrolls to the section it is supposed to based off of currentPg.

//not important for now
/*wheel.addEventListener("click", function(){
    ++currentPg;
    if(currentPg==8){
        currentPg=0;
    }
skills.scrollIntoView({
behavior:"smooth",
block: "start"
});

});*/

let title = document.querySelector("#title");
const text = "Mahoraga";
const text2 = "rtins";

let index = 0;
let index2 = 0;
let isdeleting = false;
//type funciton for typing animation.
//types out Mahoraga
function type() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);

    index++;
    setTimeout(type, 200);
  } else {
    setTimeout(deletetext, 1000);
  }
}

function deletetext() {
  if (index > 2) {
    title.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(deletetext, 200);
  } else {
    setTimeout(martins, 1000);
  }
}

function martins() {
  //continue from the Ma part that remains after the delete() function runs
  if (index2 < text2.length) {
    title.innerHTML += text2.charAt(index2);
    index2++;
    setTimeout(martins, 200);
  }
}
window.addEventListener("DOMContentLoaded", type);

//Here You have the choice to later add on if you want the images in the "meaning" class to smoothly slide to a specified position for each.
//That will happen when the aboutMeText is clicked.
function increaseOpacity(element, currentOpacity) {
  //alert("called");
  if (currentOpacity < 1) {
    currentOpacity += 0.02; // Adjust step size to control fade speed
    element.style.opacity = currentOpacity;

    // Re-call this function on the very next monitor refresh frame
    requestAnimationFrame(() => increaseOpacity(element, currentOpacity));
  }
}
let meaningC = 0;

let aboutMeText = document.querySelector("#aboutMeText");

aboutMeText.addEventListener("click", () => {
  meaningC++;
  if (meaningC == 1) {
    //alert("hello");
    let cross = document.querySelector("#cross");
    let currentOpacity = 0;
    increaseOpacity(cross, currentOpacity);
  } else if (meaningC == 2) {
    let element = document.querySelector("#family");
    let currentOpacity = 0;
    increaseOpacity(element, currentOpacity);
  } else if (meaningC == 3) {
    let element = document.querySelector("#knowledge");
    let currentOpacity = 0;
    increaseOpacity(element, currentOpacity);
  } else if (meaningC == 4) {
    let element = document.querySelector("#fun");
    let currentOpacity = 0;
    increaseOpacity(element, currentOpacity);
  } else if (meaningC == 5) {
    let element = document.querySelector("#comm");
    let currentOpacity = 0;
    increaseOpacity(element, currentOpacity);
  }
});

let nextech = document.querySelector("#Nextech");
let learned = document.querySelector("#learned");

let learnC = 0;

nextech.addEventListener("click", () => {
  //alert("hello");
  learned.style.display = "block";
  learnC = 0;
});
learned.addEventListener("mouseover", () => {
  // nextech.style.backgroundColor = "transparent";
  learned.style.border = "2px dashed whitesmoke";
  learned.style.transform = "scale(1.01)";
});
learned.addEventListener("mouseout", () => {
  if (learnC < 4) {
    learned.style.border = "2px solid whitesmoke";
    learned.style.transform = " scale(1)";
  } else {
    learnC = 0;
  }
});
learned.addEventListener("click", () => {
  learnC++;
  if (learnC == 1) {
    let lesson1 = document.querySelector("#lesson1");
    let currentOpacity = 0;
    lesson1.style.visibility = "visible";
    increaseOpacity(lesson1, currentOpacity);
  } else if (learnC == 2) {
    let lesson2 = document.querySelector("#lesson2");
    let currentOpacity = 0;
    lesson2.style.visibility = "visible";
    increaseOpacity(lesson2, currentOpacity);
  } else if (learnC == 3) {
    let lesson3 = document.querySelector("#lesson3");
    let currentOpacity = 0;
    lesson3.style.visibility = "visible";
    increaseOpacity(lesson3, currentOpacity);
  } else if (learnC >= 4) {
    //alert("helo");
    lesson1.style.visibility = "hidden";
    lesson2.style.visibility = "hidden";
    lesson3.style.visibility = "hidden";
    learned.style.display = "none";
    learnC = 0;
    //  learned.style.visibility="hidden";

    // Also strip out any scale transforms that might be locking its rendering state
    // learned.style.transform = "scale(0)";

    //quick solution

    //location.reload();
  }
});
let E1 = document.querySelector("#E1");
let E2 = document.querySelector("#E2");
let E3 = document.querySelector("#E3");
let vex = document.querySelector("#vex");
let SD = document.querySelector("#s-d");
let frc = document.querySelector("#frc");

E1.addEventListener("mouseover", () => {
  vex.style.display = "block";
  lesson1.style.visibility = "hidden";
  lesson2.style.visibility = "hidden";
  lesson3.style.visibility = "hidden";
  learned.style.display = "none";
});
E1.addEventListener("mouseout", () => {
  vex.style.display = "none";
});
E2.addEventListener("mouseover", () => {
  SD.style.display = "block";
  lesson1.style.visibility = "hidden";
  lesson2.style.visibility = "hidden";
  lesson3.style.visibility = "hidden";
  learned.style.display = "none";
});
E2.addEventListener("mouseout", () => {
  SD.style.display = "none";
});
E3.addEventListener("mouseover", () => {
  frc.style.display = "block";
  lesson1.style.visibility = "hidden";
  lesson2.style.visibility = "hidden";
  lesson3.style.visibility = "hidden";
  learned.style.display = "none";
});
E3.addEventListener("mouseout", () => {
  frc.style.display = "none";
});

let AProblem = document.querySelector("#AProblem");
let AProblemH = document.querySelector("#AProblemH");
let AProblemP = document.querySelector("#AProblemP");

let ChudLife = document.querySelector("#Chud-Life");
let P1 = document.querySelector("#P1");

let P1h = document.querySelector("#P1h");
let P1p = document.querySelector("#P1p");
let P2 = document.querySelector("#P2");

AProblem.addEventListener("click", () => {
  window.open(
    "https://martinsa33.github.io/int-u2-project-starter-code-3/",
    "_blank",
    "noopener,noreferrer",
  );
});
AProblem.addEventListener("mouseover", () => {
  AProblemH.style.display = "block";

  AProblemP.style.display = "block";
});
AProblem.addEventListener("mouseout", () => {
  AProblemH.style.display = "none";
  AProblemP.style.display = "none";
});
ChudLife.addEventListener("click", () => {
  window.open(
    "https://martinsa33.github.io/int-u3-project-23-24-starter-code/",
    "_blank",
    "noopener,noreferrer",
  );
});
ChudLife.addEventListener("mouseover", () => {
  P1h.style.display = "block";
  P1p.style.display = "block";
});
ChudLife.addEventListener("mouseout", () => {
  P1h.style.display = "none";
  P1p.style.display = "none";
});

/*P1.addEventListener("mouseover", () => {
  P1h.style.display = "block";
   P1p.style.display = "block";
});
P1.addEventListener("mouseout", () => {
  P1h.style.display = "none";
  P1p.style.display = "none";
});*/
//You can make an on click function for each image so that then when an image is clicked it puts text inside its corresponing <span></span>
