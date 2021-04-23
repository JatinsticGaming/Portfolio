document.getElementById("mainCon").style.opacity = 0;
setTimeout(() => {
    fadeBGColor(document.body, [0, 0, 0], [57, 57, 57], false);
    setTimeout(() => {
        fadeOpacity(document.getElementById("mainCon"), 0, 1, false);
        setTimeout(() => {
            document.getElementsByClassName("navbar")[0].classList.toggle("shown");
            setTimeout(() => {
                document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
            }, 700);
        }, 700);
    }, 300);
}, 1000);

$(".navbar").hover(
    function(event){
        document.getElementsByClassName("navbar-title")[0].classList.toggle("margin");
    },
    function(event){
        document.getElementsByClassName("navbar-title")[0].classList.toggle("margin");
    }
);