const foxcontainer =
document.querySelector("#imgcontainer");
foximage = async () => {
    fetch("http://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxcontainer.src = data.image;
        })
        .catch(()=>{
            document.querySelector(".error").innerHTML = "Problem loading data(problemas al cargar)";
        });
}
foximage();