var responseArray = ["", "Please Wait...", "Click here to continue"];
document.getElementById("loginDiv").style.display = "none";
var welcomeBtn_Interactable = false;
var i = 0;
var textChangeInterval = setInterval(async function(){
    if((i < responseArray.length - 1) == false){
        clearInterval(textChangeInterval);
        return;
    }
    var displayString = "";
    var x = 0;
    var textTypingEffect = await setInterval(() => {
        displayString += responseArray[i].charAt(x);
        document.getElementById("welcomeBtn").innerText = displayString;
        if(x < responseArray[i].length){
            x++;
        }
        else{
            if(displayString == "Click here to continue") welcomeBtn_Interactable = true;
            clearInterval(textTypingEffect);
        }
    }, 100);

    if(i < responseArray.length){
        i++;
        if(i == responseArray.length){
            clearInterval(textChangeInterval);
        }
    }
    else{
        clearInterval(textChangeInterval);
    }
}, 2500);

function welcomeBtn_Click(){
    if(welcomeBtn_Interactable != true) return;
    fadeTextColor(document.getElementById("welcomeBtn"), [255, 255, 255], [20, 20, 20], 750);
}

function fadeBGColor(element, startcolor, endcolor, time_elapsed) {
    welcomeBtn_Interactable = false;
    var steps = 5;
    var red_change = (startcolor[0] - endcolor[0]) / steps;
    var green_change = (startcolor[1] - endcolor[1]) / steps;
    var blue_change = (startcolor[2] - endcolor[2]) / steps;
    
    var currentcolor = startcolor;
    var stepcount = 0;
    var timer = setInterval(function(){
        currentcolor[0] = parseInt(currentcolor[0] - red_change);
        currentcolor[1] = parseInt(currentcolor[1] - green_change);
        currentcolor[2] = parseInt(currentcolor[2] - blue_change);
        element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
        stepcount += 1;
        if (stepcount >= steps) {
            element.style.backgroundColor = 'rgb(' + endcolor.toString() + ')';
            clearInterval(timer);
        }
    }, 50);
}

var endFade = false;
function fadeTextColor(element, startcolor, endcolor, time_elapsed) {
    welcomeBtn_Interactable = false;
    var steps = 5;
    var red_change = (startcolor[0] - endcolor[0]) / steps;
    var green_change = (startcolor[1] - endcolor[1]) / steps;
    var blue_change = (startcolor[2] - endcolor[2]) / steps;
    
    var currentcolor = startcolor;
    var stepcount = 0;
    var timer = setInterval(function(){
        currentcolor[0] = parseInt(currentcolor[0] - red_change);
        currentcolor[1] = parseInt(currentcolor[1] - green_change);
        currentcolor[2] = parseInt(currentcolor[2] - blue_change);
        element.style.color = 'rgb(' + currentcolor.toString() + ')';
        stepcount += 1;
        if (stepcount >= steps) {
            element.style.color = 'rgb(' + endcolor.toString() + ')';
            clearInterval(timer);
            if(!endFade){
                setTimeout(() => {
                    fadeBGColor(document.getElementById("welcomeBtn"), [20, 20, 20], [255, 255, 255], 750);
                    fadeTextColor(document.getElementById("welcomeBtn"), [20, 20, 20], [255, 255, 255], 750);
                    endFade = true;
                }, 300);
            }
            else{
                element.style.display = "none";
                expandContainer();
            }
        }
    }, 50);
}

function fadeOpacity(element, startOpacity, endOpacity){
    var steps = 10;
    var change = (startOpacity - endOpacity) / steps;
    
    var currentOpacity = startOpacity;
    var stepcount = 0;
    var timer = setInterval(function(){
        currentOpacity = currentOpacity - change;
        element.style.opacity = currentOpacity;
        stepcount += 1;
        if (stepcount >= steps) {
            element.style.opacity = currentOpacity;
            clearInterval(timer);
        }
    }, 50);
}

function expandContainer(){
    var container = document.getElementById("container");
    setTimeout(() => {
        document.getElementById("loginDiv").style.display = "block";
        document.getElementById("loginDiv").classList.toggle("fadeIn");
        fadeOpacity(document.getElementById("loginDiv"), 0, 1);
    }, 700);
    container.classList.toggle("expandHeight");
}

function continueAsGuestBtn_Click(){
    var container = document.getElementById("container");
    fadeOpacity(document.getElementById("loginDiv"), 1, 0);
    setTimeout(() => {
        document.getElementById("loginDiv").style.display = "none";
        container.classList.toggle("collapseHeight");
        setTimeout(() => {
            fadeOpacity(container, 1, 0);
            setTimeout(() => {
                window.location = "/home";
            }, 700);
        }, 700);
    }, 500);
}