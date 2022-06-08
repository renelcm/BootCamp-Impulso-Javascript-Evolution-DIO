let currentNumberWrapper = document.getElementById("currentNumber")
const INCREMENT = document.getElementById("increment")
const DECREMENT = document.getElementById("decrement")
let count = 0


INCREMENT.addEventListener("click",
    function increment() {
        count++;
        if (count <= 10){
            currentNumberWrapper.innerHTML = count;
        }

        if (count >= 0){
            currentNumberWrapper.classList.remove("negative")
        }
    }
)

DECREMENT.addEventListener("click",
    function decrement() {
        count--;
        if (count >= -10) {
            currentNumberWrapper.innerHTML = count;
        } 

        if (count < 0){
            currentNumberWrapper.classList.add("negative")
        }
    }
)