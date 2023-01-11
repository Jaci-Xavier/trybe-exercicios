const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", (event)=>{
    event.preventDefault();
    const fullName = document.querySelector("#full-name");
    alert(`Obrigado ${fullName.value}, 
    vamos analisar seus dados com carinho <3.`);
})