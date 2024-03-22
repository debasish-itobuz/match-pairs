const itemDiv = document.querySelectorAll(".itemDiv");
const matchedPairs = document.querySelector("#pairs");
const totalMoves = document.querySelector("#moves");
const resetGame = document.querySelector("#reset");
const endGame = document.querySelector("#endGame");

let arr = [];
let count = 0;
let moves = 0;
let pairs = 0;
let stop = false;

const showItem = (e) => {
    if (!stop) {
        e.target.children[0].classList.add("show-visibility");
        count++;
        arr.push(e.target.children[0]);
        if (count === 2) {
            setTimeout(() => {
                if (arr[0].src === arr[1].src) {
                    arr[0].style.opacity = "0.5";
                    arr[1].style.opacity = "0.5";
                    pairs++;
                    matchedPairs.innerHTML = pairs;
                } else {
                    arr[0].classList.remove("show-visibility");
                    arr[1].classList.remove("show-visibility");
                }
                moves++;
                arr = [];
                count = 0;
                totalMoves.innerHTML = moves;
            }, 500);
        }
    }

};

itemDiv.forEach((item) => {
    item.setAttribute("onclick", "showItem(event)");
});

resetGame.addEventListener("click", () => {
    location.reload();
});

endGame.addEventListener("click", () => {
    stop = true;
});
