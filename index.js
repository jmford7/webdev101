// function change() {
//     document.getElementById("id01").innerText = "I say something blue!";
//     document.getElementById("id01").style.color = 'blue';
//     // console.log()
// }

// Homework - click the button, change the header text
// Bonus points if you can change properties

function random_language() {
    var random = Math.floor(Math.random() * 3);
    var languageList = ["eng", "span", "french", "greeks"];
    return languageList[random];
}