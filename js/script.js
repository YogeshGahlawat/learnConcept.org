// function to display navigation menu
showMenu = () => {
    var menu = document.getElementById("menu");

    if(menu.style.display==="flex"){
        menu.style.display="none";
    } else {
        menu.style.display="flex";
    }
}

hideMenu = () => {
    var coursesMenu = document.getElementById("courses");
    coursesMenu.style.left="100%";
}

showCourses = () => {
    var coursesMenu = document.getElementById("courses");
    var menu = document.getElementById("menu");
    coursesMenu.style.left="0%";
    menu.style.display="none";
}