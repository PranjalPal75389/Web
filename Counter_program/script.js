// counter program

const increasebutton = document.getElementById("increasebtn");
const resetbutton = document.getElementById("resetbtn");
const decreasebutton = document.getElementById("decreasebtn");
const numberlabel = document.getElementById("numberlabel");


let number = 0;

function color() {
    if (number > 0) {
        numberlabel.style.color = "darkgreen";
    }
    else if (number < 0) {
        numberlabel.style.color = "red";
    }

    else {

        numberlabel.style.color = "black"

    }

}


increasebutton.onclick = function () {
    number++;
    numberlabel.textContent = number;
    color();
}

resetbutton.onclick = function () {
    number = 0;
    numberlabel.textContent = number;
    color();
}
decreasebutton.onclick = function () {
    number--;
    numberlabel.textContent = number;
    color();
}
