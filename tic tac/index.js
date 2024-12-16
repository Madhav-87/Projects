let playername1;
let playername2;
document.addEventListener('DOMContentLoaded', () => {
let start_button=document.getElementById("start-btn");
start_button.addEventListener("click",()=>{
playername1=document.querySelector("#player1").value.trim();
playername2=document.querySelector("#player2").value.trim();
    if(playername1==="" || playername2===""){
        alert("Please Enter the player name to start.");
        console.log(playername1);
        console.log(playername2);
    }
    else{
        window.location.href="page2.html";
        localStorage.setItem("player1", playername1);
        localStorage.setItem("player2", playername2);

    }
});
});


