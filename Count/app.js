const btn = document.querySelector("#btn");
let count = 0;

btn.innerText = `Count is ${count}`;

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    count = count + 1;
    btn.innerText = `Count is ${count}`;
    console.log("Clicked");
})
