let count = 0;
let countLabel = document.getElementById("countlabel");

function updateDisplay() {
    // Remove all previous color classes
    countLabel.classList.remove('text-red-600', 'text-black', 'text-green-600');
    
    // Add appropriate color class
    if(count < 0) {
        countLabel.classList.add('text-red-600');
    } else if (count === 0) {
        countLabel.classList.add('text-black');
    } else {
        countLabel.classList.add('text-green-600');
    }
}

document.getElementById("decreaseBtn").addEventListener("click", ()=> {
    count -= 1;
    countLabel.textContent = count;
    updateDisplay();
})

document.getElementById("resetBtn").addEventListener("click", ()=> {
    count = 0;
    countLabel.textContent = count;
    updateDisplay();
})

document.getElementById("increaseBtn").addEventListener("click", ()=> {
    count += 1;
    countLabel.textContent = count;
    updateDisplay();
})

// Initial update
updateDisplay();