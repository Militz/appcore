document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("longpress-target");
    let timer;

    function startTimer() {
        timer = setTimeout(() => {
            target.classList.add("activated");
            alert("Long press activated!");
        }, 500); // 500ms long press duration
    }

    function clearTimer() {
        clearTimeout(timer);
    }

    target.addEventListener("mousedown", startTimer);
    target.addEventListener("mouseup", clearTimer);
    target.addEventListener("mouseleave", clearTimer);
    
    target.addEventListener("touchstart", startTimer);
    target.addEventListener("touchend", clearTimer);
    target.addEventListener("touchcancel", clearTimer);
});
