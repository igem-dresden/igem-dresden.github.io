var counter = 1;

function switchCounter() {
    const element = document.getElementById("coming_soon");
    counter = counter % 4;
    additional_right = "";
    additional_left = "";
    for(i=0; i < counter; i++) {
        additional_right += "=";
        additional_left += "=";
    }
    additional_left += "COMING SOON";
    element.innerHTML = additional_left + additional_right;
    counter++;
}

setInterval(function(){switchCounter()}, 1000);