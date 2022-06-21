window.addEventListener("scroll", appearWhenInView);
window.addEventListener("load", appearWhenInView);
window.addEventListener('scroll', parallaxScroll);
window.addEventListener('scroll', function(e)  {
    linkedScrollBehaviour("#detail-anchor", ".bacteriophage, .growth_factor", "active", "remove");
    linkedScrollBehaviour(".wound", ".bacteriophage, .growth_factor, .wound", "active2", "add");
});

Element.prototype.scrollIntoCenter = function() {
    let options = {"top": this.getCoordinates().y - window.innerHeight * 0.5, behavior: "smooth"}
    window.scroll(options);
}

Element.prototype.getCoordinates = function() {
    let box = this.getBoundingClientRect();

    return {x : box.left + scrollX,
            y : box.top + scrollY}
}

function parallaxScroll() {
        
    const target = document.querySelectorAll('.scrollItem'); // EVERY ITEM with class "scrollItem" will get parallaxEffect

    for(let i = 0; i < target.length; i++) {
        var scrollweight = Number(target[i].dataset['scrollweight']); // the attribute data-scrollweight will determine the certain parallax effect speed of the element
        var scrollRate = `${(window.pageYOffset / window.innerHeight) * 100 * scrollweight}%`;

        target[i].style.transform = 'translate3d(0px, ' + scrollRate + ', 0px)';
    }
}

function appearWhenInView () {
    var appearElements = document.querySelectorAll(".appear-left, .appear-right, .diseases_diagram");
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

function linkedScrollBehaviour(anchorQuery, linkQuery, behaviourClass, opererator="add") {
    const anchorElements = document.querySelectorAll(anchorQuery)
    const linkElements = document.querySelectorAll(linkQuery)
    for(i = 0; i < anchorElements.length; i++) {
        let position = anchorElements[i].getBoundingClientRect().top;
        if(position < window.innerHeight - 300) {
            for(j = 0; j < linkElements.length; j++) {
                (opererator === "add") ? linkElements[j].classList.add(behaviourClass) : linkElements[j].classList.remove(behaviourClass);
            }
        }
        else {
            for(j = 0; j < linkElements.length; j++) {
                (opererator === "add") ? linkElements[j].classList.remove(behaviourClass) : linkElements[j].classList.add(behaviourClass);
            }
        }
    }
}