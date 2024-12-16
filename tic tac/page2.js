const playername1 = localStorage.getItem("player1");
const playername2 = localStorage.getItem("player2");
let playground=document.querySelectorAll(".child-box");
let player=1;
let count1=0;
let count2=0;
//addEvent
//toggel between player
playground.forEach((div)=>{
div.addEventListener("click",()=>{
    if(div.innerText===""){
    if(player==0){
        player=1;
    }
    else{
        player=0;
        }
    }
})
});
function marker(event){//event object is pass to access its properties
    if(player==0){
    div=event.target;//which element hit the event specifically among severals
    div.classList.add("common-format");
    div.innerHTML="&#9711;";
    div.style.color="green";
    calculate(div.getAttribute("id").toString(),0);
    div.removeEventListener("click",marker);
    } 
    else{
    const div=event.target;//which element hit the event specifically among severals
    div.classList.add("common-format");
    div.innerHTML="&times;";
    div.style.color="red";
    calculate(div.getAttribute("id").toString(),1);
    div.removeEventListener("click",marker);   
    }
}
playground.forEach((div)=>{
    div.addEventListener("click",marker)
});
let div0=[];
let div1=[];
let a;
let b;
let c;
let result=[['1-1','2-1','3-1'],
            ['1-1','1-2','1-3'],
            ['2-1','2-2','2-3'],
            ['3-1','3-2','3-3'],
            ['1-1','2-2','3-3'],
            ['1-3','2-2','3-1'],
            ['1-2','2-2','3-2'],
            ['1-3','2-3','3-3']];
function calculate(string,currentplayer){
    for(a=1;a<=3;++a){
        for(b=1;b<=3;++b){
            if((string==(`box${a}-${b}`)) && (currentplayer==0))
                div0.push((`${a}-${b}`)); 
            if((string==(`box${a}-${b}`)) && (currentplayer==1))
                div1.push((`${a}-${b}`)); 
      }
    }
    if(1<div1.length)
    perform();
}
function perform(){
       result.forEach((value)=>{
        for(c=0;c<div0.length;++c){
        value.forEach((element)=>{
                if(div0[c]===element){
                    ++count1;
                    if(count1===3){
                        alert(`${playername1} Wins!\n${playername2} Loose`);
                        playAgain(); 
                    }
                }
            })
       }
    count1=0;
});
result.forEach((value)=>{
    for(c=0;c<div1.length;++c){
    value.forEach((element)=>{
            if(div1[c]===element){
                ++count2;
                if(count2===3){
                    alert(`${playername2} Wins!\n${playername1} Loose`);
                    playAgain(); 
                }
            }
        })
   }
count2=0;
}); 
}
function playAgain(){
    playground.forEach((div)=>{
        div.removeEventListener("click",marker)
    });
    document.querySelector(".passion-one-regular").style.visibility="visible";
    document.querySelector(".passion-one-regular").addEventListener("click",()=>{
        window.location.reload();//reload current document
    });
}
