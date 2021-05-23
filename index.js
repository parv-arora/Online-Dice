function rollDice() {
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.ceil(randomNumber1);

    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

    var leftImage = document.querySelectorAll("img")[0];
    leftImage.setAttribute("src", randomImageSource1);


    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.ceil(randomNumber2);

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    var rightImage = document.querySelectorAll("img")[1];
    rightImage.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins";
    }
    else {
        document.querySelectorAll("h1")[0].innerHTML = "Draw";
    }

}

document.getElementById("button-roll").addEventListener("click", rollDice);