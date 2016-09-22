var hamburger = document.getElementById('hamburger');

var menu = document.getElementById('hamburgerNav');

var menuOpen = false;

if (hamburger) {
    console.log("hummy burger found")
    hamburger.addEventListener('click', function(e) {
        console.log("click on hamburger");
        if (!menuOpen) {
            menuOpen = true;
            menu.style.display = "initial";
            menu.style.visibility = "initial";
    //        hamburger.style.display = "none";
    //        hamburger.style.visibility = "hidden";
            hamburger.style.background = 'rgba(0,0,0,0) url("img/kruis.png") no-repeat';
            hamburger.style.backgroundSize = "cover";
    //                display: none;
    //        visibility: hidden;
        } else {
            menuOpen = false;
            hamburger.style.background = 'rgba(0,0,0,0) url("img/burger2.png") no-repeat';
            hamburger.style.backgroundSize = "cover";
            menu.style.display = "none";
            //menu.style.visibility = "hidden";
        }
    });
} else {
    console.log("no hamburger fuck found");
}


src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"

$(document).ready(function(){
    $("h4").click(function(){
        $(".filterNav").toggle();
        $h4 = $(".filterNav", $dropdown);
        $h4.toggle();
        $("FilterNav").not($h4).hide();
        return false;
    });
});
