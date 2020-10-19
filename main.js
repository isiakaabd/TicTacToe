if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', pageLoaded);
} else {
    pageLoaded();
}

const mainMenu = document.getElementsByClassName('main')

function pageLoaded(){
    for (i = 0; i < mainMenu.length; i++){
        mainMenu[i].style.opacity = '1';
    }
}