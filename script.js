let ran_arr = [];
let buttonPressed = [];
let selectedButton
let score = 0;
for (let i = 0; i < 16; i++) {
    selectedButton = document.querySelectorAll(".btn")[i];
    selectedButton.addEventListener('click', fun)
}

function fun(evt) {

    let chosenButton = evt.target.getAttribute("id");
    buttonPressed.push(chosenButton);
    console.log("clicked")
    console.log(buttonPressed);

    checkans()

}

function random() {
    let ran = Math.floor(Math.random() * (16));
    return ran;
}


function tilegen() {
    let ran = random()
    let i=0;
    if (!ran_arr.includes(ran)) {
        ran_arr.push(ran)
        console.log(ran_arr)
        myLoop(ran_arr,i)
    } else {
        tilegen()
    }
}

function myLoop(ran_arr,i){
    console.log("i=",i)
        setTimeout( ()=>{
            let myId = document.getElementById(ran_arr[i]);
            myId.classList.remove('new');
            let elem = myId;
            setTimeout(()=>{elem.classList.add('new');},500)

            i++;
            if(i<ran_arr.length){
                myLoop(ran_arr,i);
            }
        },1000)
    }




function checkans() {
    const result = buttonPressed.every(element =>{
        return ran_arr.includes(parseInt(element))
    })
    if(!result){
        alert("GAME OVER \nSCORE : " + score)
    }
    else{
        if(ran_arr.length === buttonPressed.length){
            score++;
            while(buttonPressed.length){
                buttonPressed.pop()
            }
            tilegen();
        }
    }

}

tilegen()
