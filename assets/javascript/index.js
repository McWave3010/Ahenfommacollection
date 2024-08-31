document.addEventListener("DOMContentLoaded",()=> {
    const whatspp = document.querySelector("#app");
    whatspp.addEventListener("click",()=>{
        window.location.href = "https://wa.link/2purq5";
    })
    let items = [];
    async function getData(){
        await fetch("./assets/json/product.json")
        .then(response => response.json())
        .then(data=> {
             items = data;
             display(items);
 
        })
    }
    getData();

    function display(shoes){
        const shoesContainer = document.querySelector(".wrapper");
        shoesContainer.innerHTML = ``;
        shoes.forEach(element => {
           const elements = document.createElement("div");
           elements.classList.add("product-image");
           elements.style.margin = "0%";
           elements.innerHTML = `
                    <div class="image-div">
                        <img src="${element.image}" id="image1">
                    </div>
                    <div class="content">
                        <span id="ahenfos">${element.name}</span>
                         <span id="ahenfo">${element.price}</span>
                    </div>
           `
            shoesContainer.appendChild(elements);
        });
    }
});