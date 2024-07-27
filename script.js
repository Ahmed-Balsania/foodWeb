let main = document.querySelector(".main");

let dialog = document.querySelector("dialog");

let registerButton = document.createElement("button");
registerButton.innerText="Register Now !";
registerButton.classList.add("registerButton");
main.append(registerButton);

registerButton.addEventListener("click",()=>{
        dialog.showModal();
});


let submit = document.querySelector("#form_submit");
submit.addEventListener("click",()=>{
    dialog.close();
});


