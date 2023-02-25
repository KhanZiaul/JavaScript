let searchText = "";

const loadmeals = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    fetch(url)

        .then(res => res.json())

        .then(mealdata => showData(mealdata, 6))
}


function showData(mealdata, limit) {

    const showMeal = document.getElementById('showMeal');

    showMeal.innerHTML = '';

    let meals = mealdata.meals;

    console.log(mealdata);

    if (limit) {

        meals = mealdata.meals.slice(0, limit);

        const seeMorebtn = document.getElementById('seeMore-btn');

        seeMorebtn.classList.remove('hidden');
    }


    meals.map((meal) => {

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

function showMore(){

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        fetch(url)

        .then(res => res.json())

        .then(mealdata => showData(mealdata, 0))

        const seeMorebtn = document.getElementById('seeMore-btn');

        seeMorebtn.classList.add('hidden');
}


document.getElementById('search-btn').addEventListener('click', function () {

    const searchInput = document.getElementById('search-input').value;

    searchText = searchInput

    loadmeals(searchInput);

    document.getElementById('search-input').value = "";

});

const mealDetails = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)

        .then(res => res.json())

        .then(details => mealData(details))

        .catch(error => {
            console.log(error);
        });
};

function mealData(details) {

    document.getElementById('area').innerText = details.meals[0].strArea;

    document.getElementById('procedure').innerText = details.meals[0].strInstructions;

}