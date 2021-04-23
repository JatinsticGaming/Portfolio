var fadeBGColor = function(element, startcolor, endcolor, disableAtEnd) {
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
            if(disableAtEnd == true){
                element.style.display = "none";
            }
        }
    }, 50);
}

var fadeTextColor = function(element, startcolor, endcolor, disableAtEnd) {
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
            if(disableAtEnd == true){
                element.style.display = "none";
            }
        }
    }, 50);
}

var fadeOpacity = function(element, startOpacity, endOpacity, disableAtEnd){
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
            if(disableAtEnd == true){
                element.style.display = "none";
            }
        }
    }, 50);
}