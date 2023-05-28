player1 = localStorage.getItem("PlayerOne");
player2 = localStorage.getItem("PlayerTwo");
document.getElementById("player1name").innerHTML = player1;
document.getElementById("player2name").innerHTML = player2;
score1 = 0;
score2 = 0;
document.getElementById("player1score").innerHTML = score1;
document.getElementById("player2score").innerHTML = score2;
document.getElementById("questionturn").innerHTML = "Question Turn: " + player1;
document.getElementById("answerturn").innerHTML = "Answer Turn: " + player2;
function sendanswer() {
get_word = document.getElementById("wordinput").value;
word = get_word.toLowerCase();
console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
console.log(charAt1);

lenght_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(lenght_divide_2);
console.log(charAt2);

    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question = "<h2 id='displayword'>Question: "+remove_charAt3+"</h2>";
answer = "<br> Answer Here: <input id='typeanswer'>";
check = "<br> <button id='checkbutton' onclick='check();'>Check</button>";
connect = question+answer+check;
document.getElementById("output").innerHTML = connect;
document.getElementById("wordinput").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    storeanswer = document.getElementById("typeanswer").value;
    convertanswer = storeanswer.toLowerCase();

    if(word == convertanswer) {
        if(answer_turn == "player1") {
            score1 = score1 + 1;
            document.getElementById("player1score").innerHTML = score1;
        }
        else {
            score2 = score2 + 1;
            document.getElementById("player2score").innerHTML = score2;
        }
        if(question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("questionturn").innerHTML = "Question Turn: "+player1;
        }
        else {
            question_turn = "player1";
            document.getElementById("questionturn").innerHTML = "Question Turn: "+player2;
        }
        if(answer_turn == "player1") {
            answer_turn = "player2";
            document.getElementById("answerturn").innerHTML = "Answer Turn: "+player1;
        }
        else {
            answer_turn = "player1";
            document.getElementById("answerturn").innerHTML = "Answer Turn: "+player2;
        }
        document.getElementById("output").innerHTML = "";
    }

}