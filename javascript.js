let parametr = document.querySelector(".list-group")

let btn = document.querySelector('.btn')

let btntwo = document.querySelector(".btn-danger")

btn.onclick = () => {
parametr.classList.contains("action")
        parametr.classList.remove("action", "visually-hidden")
        parametr.style.transition ="1.5s";
        btn.classList.add("visually-hidden");
        btntwo.classList.remove("visually-hidden");
     

}

btntwo.onclick = () => {
    parametr.classList.add("action","visually-hidden")
    parametr.style.transition ="1.5s";

    btntwo.classList.add("visually-hidden")
        btn.classList.remove("visually-hidden")
    

}




// bitta tugmada bajarilishi 

// btn.onclick = () => {
//     if(parametr.classList.contains("action")){
//         parametr.classList.remove("action")
//         parametr.style.transition ="1.5s";

//     }else{
//         parametr.classList.add("action")
//         parametr.style.transition ="1.5s";

//     }
// }