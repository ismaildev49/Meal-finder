const form = document.querySelector("form")
const input = document.querySelector("#search-input")
const title = document.querySelector(".title")
const image = document.querySelector(".image")
const ingredients = document.querySelector(".ingredients")
const cooking = document.querySelector(".cooking")
let body= document.querySelector("body")
let result = document.querySelector(".result")
let results = document.querySelector(".results")
let dialog = document.querySelector("dialog")

const searchMeal = async (val) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    
    const data = await res.json()
    result.innerHTML = ""
    if (data.meals) {
        data.meals.forEach((e)=>{
            let newDiv = document.createElement("div")
            newDiv.classList.add("results")
            newDiv.innerHTML=`<h2 class="title">${e.strMeal}</h2>
            <div class="image">
                <img src="${e.strMealThumb}" alt="">
            </div>
            `
            result.appendChild(newDiv)
    
            newDiv.addEventListener("click", ()=>{
                const ingredients= []
                for (i = 1 ; i<=20; i++){
                    if (e[`strIngredient${i}`]) {
                        ingredients.push(`${e[`strIngredient${i}`]} - ${e[`strMeasure${i}`]}`)
                    }
                }
                
                dialog.innerHTML = `<div class="dialog-container">
                <span class = "cross">x</span>
                <div class="modal-image">
                  <img src="${e.strMealThumb}" alt="" />
                </div>
                <h2 class="modal-title">${e.strMeal}</h2>
                <p class="ingredients"><h3>Ingredients</h3>${ingredients.join(" ")}</p>
                <p class="cooking"><h3>Instructions</h3>${e.strInstructions}</p>
              </div>`
                dialog.showModal()
                const cross = document.querySelector(".cross")
                cross.addEventListener("click", () => {
                    dialog.close()
                })
                document.addEventListener("click", (e) =>{
                    e.stopPropagation()
                    if(e.target.innerHTML.includes("dialog-container")){
                        dialog.close()
                    };
                })
            })
        })
    } else {
        alert("There is no meal with this name")
    }
    
    
    
    // return data.meals
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const inputValue = input.value.trim()
    input.value = ""
    if (!inputValue.length) {
        alert("Please enter something")
    } else {
        searchMeal(inputValue)
    }
    
    // console.log(arrWithMeals, typeof arrWithMeals);
    // console.log(arrWithMeals);

})





    // objWithMeals();