Element.prototype.scrollIntoCenter = function() {
    let options = {"top": this.getCoordinates().y * 0.5, behavior: "smooth"}
    window.scroll(options);
}

Element.prototype.getCoordinates = function() {
    let box = this.getBoundingClientRect();

    return {x : box.left + scrollX,
            y : box.top + scrollY}
}