const foxcontainer =
document.querySelector("#imgcontainer");
foximage = async () => {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxcontainer.src = data.image;
        })
        .catch(()=>{
            document.querySelector(".error").innerHTML = 
            "Problem loading data(problemas al cargar)";
        });
}
foximage();

window.addEventListener('load',
function detectarWifi(){
    let estado = this.navigator.onLine ? "Estas conectadx al wifi" : "No esta conectadx al wifi"
    document.querySelector("#Estado").innerHTML = estado
})