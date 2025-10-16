
let player1,player2;
let player1Choices=document.querySelectorAll('input[type="radio"]');
let choiceCont=document.querySelector("#choice-con");
let moveTurn=document.querySelector(".chance-tell");
// player1Choices.forEach(player1Choice=>{
//     player1Choice.addEventListener("change",()=>{
        
//         let newpara= document.createElement("p");
//         newpara.setAttribute("class","playPara");
        
//         newpara.innerText=`player-1 choice is:'${player1Choice.value}'`;

//         choiceCont.appendChild(newpara);

//     });
// });
let gridCont=document.querySelectorAll(".grid-cont");
let cell=document.querySelectorAll(".cell");
let oBtn=document.querySelectorAll(".O");
let xBtn=document.querySelectorAll(".X");

let cellarr=["#cell-1","#cell-2","#cell-3","#cell-4","#cell-5","#cell-6","#cell-7","#cell-8","#cell-9"];
let cellarr1=["#cell-1","#cell-2","#cell-3"];
let cellarr2=["#cell-4","#cell-5","#cell-6"];
let cellarr3=["#cell-7","#cell-8","#cell-9"];
let cellarr4=["#cell-1","#cell-4","#cell-7"];
let cellarr5=["#cell-2","#cell-5","#cell-8"];
let cellarr6=["#cell-3","#cell-6","#cell-9"];
let cellarr7=["#cell-1","#cell-5","#cell-9"];
let cellarr8=["#cell-3","#cell-5","#cell-7"];

let cellVaArr=[];
for(let k=0;k<=17;k++){
    cellVaArr[k]=document.querySelector(cellarr[k]);
}
let arr=[];
let id_arr=["#O-1","#X-1","#O-2","#X-2","#O-3","#X-3","#O-4","#X-4","#O-5","#X-5","#O-6","#X-6","#O-7","#X-7","#O-8","#X-8","#O-9","#X-9"];
let cond1=["#O-1","#O-2","#O-3"];
let cond2=["#O-4","#O-5","#O-6"];
let cond3=["#O-7","#O-8","#O-9"];
let cond4=["#O-1","#O-4","#O-7"];
let cond5=["#O-2","#O-5","#O-8"];
let cond6=["#O-3","#O-6","#O-9"];
let cond7=["#X-1","#X-2","#X-3"];
let cond8=["#X-4","#X-5","#X-6"];
let cond9=["#X-7","#X-8","#X-9"];
let cond10=["#X-1","#X-4","#X-7"];
let cond11=["#X-2","#X-5","#X-8"];
let cond12=["#X-3","#X-6","#X-9"];
let cond13=["#X-1","#X-5","#X-9"];
let cond14=["#X-3","#X-5","#X-7"];
let cond15=["#O-1","#O-5","#O-9"];
let cond16=["#O-3","#O-5","#O-7"];
for(let i=0;i<=17;i++){
    arr[i] = document.querySelector(id_arr[i]);
}




for(let j=0;j<=17;j++){
    arr[j].addEventListener("mouseover",()=>{
        if(j%2===0){
            arr[j].style.backgroundColor="red";
            
            
        }
        else{
            arr[j].style.backgroundColor="orange";
            
        }
    });

        arr[j].addEventListener("mouseout",()=>{
        if(j%2===0){
            arr[j].style.backgroundColor="";
            
            
        }
        else{
            arr[j].style.backgroundColor="";
            
        };

    });
}
let turn=0;
// let winCond=true;
// while(winCond){
for(let l=0;l<=17;l++){
    

    arr[l].addEventListener("click",()=>{
        let cellNo=Math.floor(l/2);
         if(turn===0){
            
            cellVaArr[cellNo].replaceChildren();
            cellVaArr[cellNo].innerText="O";
            cellVaArr[cellNo].style.color="#fb0e1aff";
            // moveTurn.innerText=moveTurn.innerText.slice(0,-4);
            moveTurn.innerText="Now move for : X";
            
            turn=1;
        }
        else {
        
            cellVaArr[cellNo].replaceChildren();
            cellVaArr[cellNo].innerText="X";
            cellVaArr[cellNo].style.color=" rgba(231, 239, 15, 1)";
            moveTurn.innerText="Now move for : O";
            turn=0;
        }
    //     if(cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond15 || cond16 ){
    //     alert("O player win the game");
    //     winCond=false;
    // }
    // else if(cond7 || cond8 || cond9 || cond10 || cond12 || cond13 || cond14 ){
    //     alert("X player win the game");
    //     winCond=false;
    // }

    });
}
// }
// let arr[0] = document.querySelector("#1-O");
// let arr[1] =document.querySelector("#1-X");
// let o =document.querySelector("#2-O");
// let x_2 =document.querySelector("#2-X");
// let o_3 =document.querySelector("#3-O");
// let x_3 =document.querySelector("#3-X");
// let o_4 =document.querySelector("#4-O");
// let x_4 =document.querySelector("#4-X");
// let o_5 =document.querySelector("#5-O");
// let x_5 =document.querySelector("#5-X");
// let o_6 =document.querySelector("#6-O");
// let x_6 =document.querySelector("#6-X");
// let o_7 =document.querySelector("#7-O");
// let x_7 =document.querySelector("#7-X");
// let o_8 =document.querySelector("#8-O");
// let x_8 =document.querySelector("#8-X");
// let o_9 =document.querySelector("#9-O");
// let x_9 =document.querySelector("#9-X");



//background switch button
let bCol="Dark";
let mode=document.querySelector("#switchBtn");
mode.addEventListener("click",()=>{
    if(bCol==="Dark"){
        console.log("working");
     document.querySelector("body").style.backgroundColor="white";
     bCol="Light";
     mode.innerText="Dark";
     mode.style.color="white";
     mode.style.backgroundColor="black";
     document.querySelectorAll(".head").forEach((ele)=>ele.style.color="rgba(47, 164, 218, 1)");
     
    }
    else{
        console.log("working")
        document.querySelector("body").style.backgroundColor="black";
     bCol="Dark";
     mode.innerText="Light";
     mode.style.color="black";
     mode.style.backgroundColor="white";
     document.querySelectorAll(".head").forEach((ele)=>ele.style.color = "rgba(215, 241, 15, 1)");
    }

});