const loadmeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

     fetch(url)
    .then(res => res.json())
    .then(mealdata => showData(mealdata))
}

function showData(mealdata){

    const showMeal= document.getElementById('showMeal');

    showMeal.innerHTML = '';

    const meals = mealdata.meals;

    meals.map((meal)=>{

        const mealDiv = document.createElement('div');

        mealDiv.classList.add('rounded-xl');

        mealDiv.classList.add('bg-sky-100');

        mealDiv.classList.add('mb-4');

        mealDiv.innerHTML =
        `
       <figure class="px-10 pt-10">
        <img src="${meal.strMealThumb}" alt="meal" class="rounded-xl" />
      </figure>
        <div class="card-body items-center text-center">
           <h2 class="card-title">${meal.strMeal}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions"> 
        <a onclick="mealDetails(${meal.idMeal})" href="#my-modal-2" class="btn">Details</a>      
          </div>
        </div>
        `;

        showMeal.appendChild(mealDiv);

        console.log(meal);
    });

}

document.getElementById('search-btn').addEventListener('click',function(){

    const searchInput = document.getElementById('search-input').value;

    loadmeals(searchInput);

    document.getElementById('search-input').value = "";

});

const mealDetails = (idMeal) =>{

    console.log(idMeal);
};