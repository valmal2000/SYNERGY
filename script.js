const move = document.getElementById("move");

let initialLoad = true;
document.body.onpointermove = e => {
    const { clientX, clientY } = e;

    if (initialLoad) {
        move.style.left = clientX + 'px';
        move.style.top = clientY + 'px';
        initialLoad = false;
    }

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 1000, fill: "forwards"})

}
addEventListener("click", (e) => {
    move.classList.add('unblurred');

    setTimeout(() => { move.classList.remove('unblurred'); }, "500");
});