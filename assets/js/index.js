const cursor = document.getElementById("cursor");

document.body.onpointermove = event =>{
    const { clientX, clientY} = event;

    cursor.animate({
        left:  `${clientX}px`,
        top: `${clientY}px`
    }, {duration:3000, fill:"forwards"})

}

const letters = "ABCDEFGHIJKLMNÑOPQRSTUVXYZ"
document.getElementById("frontend").onmouseover = event =>{
    

let interations = 0;

const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {

        if (index < interations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]})
    .join("")

    if(interations >= 26) clearInterval(interval);
    interations += 1 / 3; 
}, 20);
}
