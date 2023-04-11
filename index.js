let len = document.querySelectorAll(".drum").length;
for(let i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        let key  = this.innerHTML;
        makeSound(key);
        setAnime(key);
    });
}

window.addEventListener('keypress',function(ele){
    makeSound(ele.key)
    setAnime(ele.key);
});

function makeSound(key){
    switch(key){
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;   
        case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;     
    }
}

function setAnime(key){
    let current = document.querySelector("."+key);
    current.classList.add("pressed");

    setTimeout(remove,100);
    function remove(){
        current.classList.remove("pressed");
    }

}
