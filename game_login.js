function login() {
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;
    localStorage.setItem("PlayerOne", player1);
    localStorage.setItem("PlayerTwo", player2);
    window.location = "game_page.html";
}
