var width = window.innerWidth;
var hidden_state = false;
"access_hide"

window.onload = () => {
    if (width <= 750) {
        toggle_visibility();
    }
}
window.onresize = visibility_correction;

function toggle_visibility() {
    hidden_state = !hidden_state;
    const nav_bar = document.getElementById('anchor_bar');
    const access_button = document.getElementById('access_icon_show');

    if(hidden_state) {
        nav_bar.classList.add("hide");
        access_button.classList.remove("access_hide");
    }
    else {
        nav_bar.classList.remove("hide");
        access_button.classList.add("access_hide");
    }
}

function visibility_correction() {
    if(width > 750 && hidden_state) {
        toggle_visibility();
    }
}

