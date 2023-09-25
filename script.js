console.log(index.html)

 let doColorBtn = document.getElementById("doColorBtn")

 doColorBtn.addEventListener("click", () => {

let setColor = document.getElementById("setColor").value

    console.log("click på knapp! Sätt färg till " + setColor)
 
    document.body.style.backgroundColor = setColor;

})