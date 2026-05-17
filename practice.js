let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newGame");

let turnO = true;
let winPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    newGame.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("box are clicking");
       if (turnO) {
        box.innerText = "O";
        turnO = false;
        box.style.color = "black";
       } else {
        box.innerText = "X";    
        turnO = true;
        box.style.color = "gray"
       }
       box.disabled = true;
       checkWinner();
    }) 
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulation Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    newGame.classList.remove("hide");

}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};
const checkWinner = () => {
    for(let pattern of winPattern){
        let patt1Val = boxes[pattern[0]].innerText;
        let patt2Val = boxes[pattern[1]].innerText;
        let patt3Val = boxes[pattern[2]].innerText;
        
        if(patt1Val != "" && patt2Val != "" && patt3Val != ""){
            if(patt1Val === patt2Val && patt2Val === patt3Val){
                console.log("Winner: " + patt1Val);
                showWinner(patt1Val);
                disableBoxes();
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);