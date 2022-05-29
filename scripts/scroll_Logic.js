Element.prototype.scrollIntoCenter = function() {
    let options = {"top": this.getCoordinates().y - window.innerHeight * 0.5, behavior: "smooth"}
    window.scroll(options);
}

Element.prototype.getCoordinates = function() {
    let box = this.getBoundingClientRect();

    return {x : box.left + scrollX,
            y : box.top + scrollY}
}

function appearWhenInView () {
    var appearElements = document.querySelectorAll(".appear-left, .appear-right");
    for(i = 0; i < appearElements.length; i++) {
        let position = appearElements[i].getBoundingClientRect().top;
        if(position < window.innerHeight - 150) {
            appearElements[i].classList.add("active");
        } 
        else {
            appearElements[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", appearWhenInView);
window.addEventListener("load", appearWhenInView);

window.onscroll = () => {
    let headlines = document.querySelectorAll('.headline');
    let menu = document.querySelectorAll('.menu_bar li');
    headlines.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - window.innerHeight * 0.15;
        let height = i.offsetHeight;
        let id = i.getAttribute('id');
        if (top >= offset && top < offset + height) {
            menu.forEach(link => {
            link.classList.remove('active');
            document.getElementById(id + "-m").classList.add('active');
            console.log(id + "-m");
            });
        }
    });
};