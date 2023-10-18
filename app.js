const form = document.querySelector("form")
const input = document.querySelector("#search-input")
const title = document.querySelector(".title")
const image = document.querySelector(".image")
const ingredients = document.querySelector(".ingredients")
const cooking = document.querySelector(".cooking")
let body= document.querySelector("body")
let result = document.querySelector(".result")

const searchMeal = async (val) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    const data = await res.json()
    result.innerHTML = ""
    data.meals.forEach((e)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add("results")
        newDiv.innerHTML=`<h2 class="title">${e.strMeal}</h2>
        <div class="image">
            <img src="${e.strMealThumb}" alt="">
        </div>
        <p class="ingredients"></p>
        <p class="cooking"></p>`
        result.appendChild(newDiv)
    })
    
    
    // return data.meals
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const inputValue = input.value.trim()
    searchMeal(inputValue)
    // console.log(arrWithMeals, typeof arrWithMeals);
    // console.log(arrWithMeals);

})



    // objWithMeals();