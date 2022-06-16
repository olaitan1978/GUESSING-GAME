let buttone= document.getElementById("bur")
let computer= document.getElementById("com")
let outy= document.getElementById("output")

let guess= ()=>{
    let input= parseFloat(document.getElementById("inpo").value)
    let rando= Math.floor(Math.random()*11)
    console.log(rando)
    computer.innerHTML=rando
    if(rando===input){
        outy.innerHTML="you have won, you guessed right.................."
    }else{
        outy.innerHTML="you lost "
    }

}
buttone.addEventListener("click",guess)
