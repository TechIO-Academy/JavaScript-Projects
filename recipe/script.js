async function fetchRecipes(query) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayRecipes(data.meals);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        displayNoResults();
    }
}

function displayRecipes(meals) {
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = ''; // Clear previous results

    if (meals === null) {
        displayNoResults();
        return;
    }

    meals.forEach(meal => {
        const element = document.createElement('div');
        element.innerHTML = `
            <strong>${meal.strMeal}</strong>
            <img src="${meal.strMealThumb}" alt="Image of ${meal.strMeal}" style="width:100px;height:100px;">
            <p>Category: ${meal.strCategory}</p>
            <p>Cuisine: ${meal.strArea}</p>
            <a href="${meal.strSource}" target="_blank">Recipe Details</a>
        `;
        resultsSection.appendChild(element);
    });
}

function displayNoResults() {
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = '<p>No recipes found. Please try a different search term.</p>';
}

// Use this function to initiate a search.
function searchRecipes() {
    const input = document.getElementById('search-input').value;
    fetchRecipes(input);
}
