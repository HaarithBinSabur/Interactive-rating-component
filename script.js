const ratingSection = document.getElementsByClassName("rating");
let results = document.getElementsByClassName("rating-amount")[0]; // Access the first element

let finalResults = 0;

function select(number) {
    remove();
    finalResults = number;
    for (let i = 0; i < number; i++) {
        ratingSection[i].className = "rating rating-color";
    }
}

function remove() {
    for (let i = 0; i < 5; i++) {
        ratingSection[i].className = "rating";
    }
    finalResults = 0;
}

function submitEntry() {
    if (finalResults === 0) {
        alert("Please Give It A 5 Stars");
    } else {
        document.getElementsByClassName("front__card")[0].style.transform = "rotateY(180deg)";
        document.getElementsByClassName("thank-you__page")[0].style.transform = "rotateY(1deg)";
        document.getElementsByClassName("front__card")[0].style.display = "none";
        document.getElementsByClassName("thank-you__page")[0].style.display = "block";
        results.innerText = `You Selected ${finalResults} out of 5`;
    }
}
