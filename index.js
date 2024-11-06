let recipes = [
    {
        id: 'tomato-salad',
        title: 'Tomato Salad',
        image: 'images/tomsalad.jpg',
        ingredients: [
            '2 Tomatoes',
            'Mozzarella',
            'Basil',
            'Salt'
        ],
        instructions: [
            'Slice Mozzarella into half inch cylinders.',
            'Chop Tomatoes into half inch height cylinders',
            'Plate prepared mozzarella and tomatoes on plate',
            'Garnish dish with basil leaves',
            'Add salt to taste',
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: [],
        cuisine: 'Italian',
        mealTime: 'Dinner',
        spiciness: 'Low'
    },
    {
        id: 'spaghetti-carbonara',
        title: 'Spaghetti Carbonara',
        image: 'images/spagetthi.jpeg',
        ingredients: [
            '500g spaghetti',
            '300g pancetta',
            '4 eggs',
            '100g grated parmesan cheese',
            '50g grated pecorino cheese',
            'Ground black pepper',
            'Salt'
        ],
        instructions: [
            'Cook spaghetti in salted boiling water until al dente.',
            'While pasta is cooking, fry pancetta until crispy.',
            'In a bowl, whisk eggs, cheese, and pepper.',
            'Drain pasta, but reserve some pasta water.',
            'Toss hot pasta with pancetta, then quickly mix in egg mixture.',
            'Add pasta water if needed for creaminess.',
            'Serve immediately with cheese and pepper.'
        ],
        favorite: false,
        diet: 'Non-Vegetarian',
        allergies: ['Dairy'],
        cuisine: 'Italian',
        mealTime: 'Dinner',
        spiciness: 'Low'
    },
    {
        id: 'chicken-tikka-masala',
        title: 'Chicken Tikka Masala',
        image: 'images/tikka.jpeg',
        ingredients: [
            '500g boneless chicken, cut into chunks',
            '200g plain yogurt',
            '2 tbsp lemon juice',
            '2 tsp ground cumin',
            '2 tsp paprika',
            '1 tsp turmeric',
            '2 tbsp butter',
            '1 large onion, diced',
            '3 garlic cloves, minced',
            '1 tbsp fresh ginger, grated',
            '400g canned tomatoes',
            '200ml heavy cream',
            'Salt and pepper to taste',
            'Fresh cilantro for garnish'
        ],
        instructions: [
            'Mix yogurt, lemon juice, cumin, paprika, and turmeric. Marinate the chicken for at least 1 hour.',
            'In a large pan, melt butter and sauté onions, garlic, and ginger until soft.',
            'Add the chicken pieces and cook until browned.',
            'Stir in tomatoes and simmer for 15 minutes.',
            'Add the cream and simmer for an additional 10 minutes.',
            'Garnish with cilantro and serve with rice or naan.'
        ],
        favorite: false,
        diet: 'Non-Vegetarian',
        allergies: ['Dairy'],
        cuisine: 'Indian',
        mealTime: 'Dinner',
        spiciness: 'Medium'
    },
    {
        id: 'vegetarian-sushi',
        title: 'Vegetarian Sushi Rolls',
        image: 'images/vegsushi.jpeg',
        ingredients: [
            '2 cups sushi rice',
            '3 tbsp rice vinegar',
            '1 cucumber, julienned',
            '1 avocado, sliced',
            '1 carrot, julienned',
            '4 sheets nori (seaweed)',
            'Soy sauce for serving',
            'Pickled ginger for serving'
        ],
        instructions: [
            'Cook sushi rice and season with rice vinegar. Allow it to cool.',
            'Lay a sheet of nori on a bamboo sushi mat.',
            'Spread an even layer of rice over the nori, leaving 1 inch at the top.',
            'Arrange cucumber, avocado, and carrot in a line near the bottom of the nori.',
            'Roll up tightly, using the bamboo mat to shape it.',
            'Slice into pieces and serve with soy sauce and pickled ginger.'
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: ['None'],
        cuisine: 'Japanese',
        mealTime: 'Lunch',
        spiciness: 'Low'
    },
    {
        id: 'quinoa-salad',
        title: 'Quinoa Salad with Lemon Dressing',
        image: 'images/quinoa.jpeg',
        ingredients: [
            '1 cup quinoa',
            '2 cups water',
            '1 cucumber, diced',
            '1 bell pepper, diced',
            '1 red onion, finely chopped',
            '100g feta cheese, crumbled',
            '2 tbsp olive oil',
            '1 tbsp lemon juice',
            'Salt and pepper to taste',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'Rinse quinoa and cook in water according to package instructions. Let it cool.',
            'In a large bowl, combine cooked quinoa, cucumber, bell pepper, and onion.',
            'In a small bowl, whisk olive oil, lemon juice, salt, and pepper.',
            'Pour the dressing over the salad and toss to combine.',
            'Top with crumbled feta cheese and fresh parsley. Serve chilled.'
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: ['Dairy'],
        cuisine: 'Mediterranean',
        mealTime: 'Lunch',
        spiciness: 'Low'
    },
    {
        id: 'beef-stir-fry',
        title: 'Beef Stir-Fry',
        image: 'images/beefstir.jpeg',
        ingredients: [
            '400g beef sirloin, thinly sliced',
            '2 tbsp soy sauce',
            '1 tbsp oyster sauce',
            '1 tbsp cornstarch',
            '1 tbsp vegetable oil',
            '1 bell pepper, sliced',
            '1 onion, sliced',
            '2 cloves garlic, minced',
            '1 tbsp fresh ginger, grated',
            '100g broccoli florets',
            '2 tbsp water'
        ],
        instructions: [
            'Marinate beef in soy sauce, oyster sauce, and cornstarch for 15 minutes.',
            'Heat oil in a wok or large skillet. Stir-fry beef until browned, then remove from pan.',
            'In the same pan, stir-fry garlic, ginger, bell pepper, onion, and broccoli for 5 minutes.',
            'Add water and continue to stir-fry until vegetables are tender.',
            'Return the beef to the pan and stir-fry for another 2 minutes.',
            'Serve hot with rice or noodles.'
        ],
        favorite: false,
        diet: 'Non-Vegetarian',
        allergies: ['None'],
        cuisine: 'Chinese',
        mealTime: 'Dinner',
        spiciness: 'Medium'
    },
    {
        id: 'chocolate-chip-cookies',
        title: 'Chocolate Chip Cookies',
        image: 'images/cookies.jpeg',
        ingredients: [
            '250g butter, softened',
            '200g white sugar',
            '200g brown sugar',
            '2 eggs',
            '1 tsp vanilla extract',
            '400g all-purpose flour',
            '1 tsp baking soda',
            '½ tsp baking powder',
            '300g chocolate chips',
            'A pinch of salt'
        ],
        instructions: [
            'Preheat oven to 180°C (350°F).',
            'In a large bowl, cream together butter, white sugar, and brown sugar until smooth.',
            'Beat in the eggs one at a time, then stir in vanilla extract.',
            'Sift flour, baking soda, baking powder, and salt; gradually mix into the sugar mixture.',
            'Fold in chocolate chips.',
            'Drop spoonfuls of dough onto a baking sheet lined with parchment paper.',
            'Bake for 10-12 minutes, or until golden brown. Let cool before serving.'
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: ['Dairy', 'Gluten'],
        cuisine: 'American',
        mealTime: 'Snack',
        spiciness: 'Low'
    },
    {
        id: 'shrimp-scampi',
        title: 'Shrimp Scampi',
        image: 'images/shrimp.jpeg',
        ingredients: [
            '500g shrimp, peeled and deveined',
            '4 tbsp butter',
            '3 garlic cloves, minced',
            '1/4 cup dry white wine',
            '1/4 cup lemon juice',
            '1/4 tsp red pepper flakes (optional)',
            '2 tbsp parsley, chopped',
            'Salt and pepper to taste',
            '300g spaghetti or linguine'
        ],
        instructions: [
            'Cook pasta according to package instructions. Drain and set aside.',
            'Melt butter in a large skillet over medium heat. Add garlic and sauté for 1 minute.',
            'Add shrimp to the skillet and cook until pink, about 2-3 minutes per side.',
            'Add white wine and lemon juice. Simmer for 2 minutes, allowing the flavors to combine.',
            'Stir in red pepper flakes, parsley, salt, and pepper.',
            'Toss shrimp mixture with pasta and serve hot.'
        ],
        favorite: false,
        diet: 'Non-Vegetarian',
        allergies: ['Shellfish'],
        cuisine: 'Italian',
        mealTime: 'Dinner',
        spiciness: 'Medium'
    },
    {
        id: 'greek-salad',
        title: 'Greek Salad',
        image: 'images/greeksalad.jpeg',
        ingredients: [
            '2 cucumbers, diced',
            '2 tomatoes, chopped',
            '1 red onion, thinly sliced',
            '150g feta cheese, crumbled',
            '1/2 cup Kalamata olives',
            '2 tbsp olive oil',
            '1 tbsp red wine vinegar',
            '1 tsp dried oregano',
            'Salt and pepper to taste'
        ],
        instructions: [
            'In a large bowl, combine cucumbers, tomatoes, red onion, feta cheese, and olives.',
            'In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.',
            'Pour the dressing over the salad and toss gently.',
            'Serve immediately or refrigerate for up to 2 hours before serving.'
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: ['Dairy'],
        cuisine: 'Mediterranean',
        mealTime: 'Lunch',
        spiciness: 'Low'
    },
    {
        id: 'chicken-fajitas',
        title: 'Chicken Fajitas',
        image: 'images/fajitas.jpeg',
        ingredients: [
            '500g chicken breast, thinly sliced',
            '1 red bell pepper, sliced',
            '1 green bell pepper, sliced',
            '1 onion, sliced',
            '2 tbsp olive oil',
            '1 tsp cumin',
            '1 tsp chili powder',
            '1/2 tsp paprika',
            'Salt and pepper to taste',
            'Flour tortillas',
            'Toppings: sour cream, guacamole, shredded cheese, salsa'
        ],
        instructions: [
            'In a large skillet, heat olive oil over medium heat. Add chicken and cook until browned.',
            'Add bell peppers, onion, cumin, chili powder, paprika, salt, and pepper.',
            'Stir-fry for 5-7 minutes until vegetables are tender and chicken is fully cooked.',
            'Serve with warm tortillas and your choice of toppings like sour cream, guacamole, and salsa.'
        ],
        favorite: false,
        diet: 'Non-Vegetarian',
        allergies: ['None'],
        cuisine: 'Mexican',
        mealTime: 'Dinner',
        spiciness: 'High'
    },
    {
        id: 'chocolate-mousse',
        title: 'Chocolate Mousse',
        image: 'images/mousse.jpeg',
        ingredients: [
            '200g dark chocolate',
            '3 large eggs, separated',
            '1/4 cup sugar',
            '1/2 cup heavy cream, whipped',
            '1 tsp vanilla extract'
        ],
        instructions: [
            'Melt chocolate in a heatproof bowl over simmering water, stirring occasionally. Let cool slightly.',
            'In a separate bowl, whisk egg yolks and sugar until pale and thick. Stir in the melted chocolate.',
            'In another bowl, beat egg whites until stiff peaks form. Gently fold into the chocolate mixture.',
            'Fold in the whipped cream and vanilla extract until fully combined.',
            'Divide into serving dishes and chill for at least 2 hours before serving.'
        ],
        favorite: false,
        diet: 'Vegetarian',
        allergies: ['Dairy', 'Eggs'],
        cuisine: 'French',
        mealTime: 'Dessert',
        spiciness: 'Low'
    }
];

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(contentId).classList.add('active');
    const tabToActivate = Array.from(tabs).find(tab => tab.getAttribute('onclick').includes(contentId));
    
    if (tabToActivate) {
        tabToActivate.classList.add('active');
    }

}

function displayChoices() {
    const radioButtons = document.querySelectorAll('input[name="options"]:checked');
    const dropdown = document.getElementById('dropdown');
    let selectedRadio = '';

    if (radioButtons.length > 0) {
        selectedRadio = radioButtons[0].value; 
    }

    const selectedDropdown = dropdown.value; 

    let outputMessage = 'You selected: ';
    if (selectedRadio) {
        outputMessage += selectedRadio + ' ';
    }
    if (selectedDropdown) {
        outputMessage += 'and ' + selectedDropdown + '.';
    } else {
        outputMessage += 'but no item from the dropdown.';
    }

    document.getElementById('output').innerText = outputMessage;
}


const profilePic = document.querySelector('#home-content .profile-picture');
const notification = document.getElementById('notification');
const closeBtn = document.getElementById('close-notification');



function showContent(id) {
    const contents = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');
    
    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
    document.querySelector(`.tab[onclick="showContent('${id}')"]`).classList.add('active');
}

function addShoppingItem() {
    const item = document.getElementById('new-item').value;
    if (item) {
        const list = document.getElementById('shopping-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item} <button onclick="removeItem(this)">Remove</button>`;
        list.appendChild(listItem);
        document.getElementById('new-item').value = '';
    }
}

function removeItem(button) {
    button.parentElement.remove();
}


function addInventoryItem() {
    const item = document.getElementById('new-stock').value;
    const quantity = document.getElementById('stock-quantity').value;

    if (item && quantity) {
        const list = document.getElementById('inventory-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item} - ${quantity} <button onclick="removeItem(this)">Remove</button>`;
        list.appendChild(listItem);
        document.getElementById('new-stock').value = '';
        document.getElementById('stock-quantity').value = '';
    }
}


function addShoppingItem() {
    const itemName = document.getElementById('new-item').value.trim();

    if (itemName) {
        const list = document.getElementById('shopping-list');

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="complete-checkbox" onclick="toggleStrikethrough(this)">
            <span class="inner-content">${itemName}</span>
            <button onclick="removeItem(this)" class="remove-btn">Remove</button>
        `;
        list.appendChild(listItem);

        document.getElementById('new-item').value = '';
    } else {
        alert('Please enter a valid item.');
    }
}

function removeItem(button) {
    button.parentElement.remove();
}

function toggleStrikethrough(checkbox) {
    const itemContent = checkbox.nextElementSibling;
    if (checkbox.checked) {
        itemContent.classList.add('completed');
    } else {
        itemContent.classList.remove('completed');
    }
}


function toggleStrikethrough(checkbox) {
    const itemContent = checkbox.nextElementSibling;
    if (checkbox.checked) {
        itemContent.classList.add('completed');
    } else {
        itemContent.classList.remove('completed');
    }
}


function addStrikethroughItemsToInventory() {
    const shoppingList = document.getElementById('shopping-list');
    const inventoryList = document.getElementById('inventory-list');
    const completedItems = shoppingList.querySelectorAll('.completed');

    completedItems.forEach(item => {
        const itemName = item.textContent.trim();

        const newItem = createInventoryItem(itemName);
        inventoryList.appendChild(newItem);

        item.parentElement.remove();
    });
}


function initializeShoppingList() {
    const items = ["Banana", "Apple", "Pear"];
    const list = document.getElementById('shopping-list');

    items.forEach(itemName => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="complete-checkbox" onclick="toggleStrikethrough(this)">
            <span class="inner-content">${itemName}</span>
            <button onclick="removeItem(this)" class="remove-btn">Remove</button>
        `;
        list.appendChild(listItem);
    });
}

window.onload = initializeShoppingList;


document.addEventListener("click", function(event) {
    const textInputs = document.querySelectorAll("input[type='text']");
    const keyboardImage = document.getElementById("myImage");

    if (!Array.from(textInputs).some(input => input === document.activeElement)) {
        keyboardImage.style.display = "none"; 
    }
});


function addInventoryItem() {
    const inventoryList = document.getElementById('inventory-list');
    const stockInput = document.getElementById('stock-input');
    const categorySelect = document.getElementById('category-select');
    const stockName = stockInput.value.trim();
    const category = categorySelect.value;

    if (stockName && category) {
        const newItem = createInventoryItem(stockName, category);
        inventoryList.appendChild(newItem);
        stockInput.value = ''; 
        categorySelect.value = ''; 
    }
}

function createInventoryItem(name, category) {
    const li = document.createElement('li');
    li.setAttribute('data-category', category);
    
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    
    const itemName = document.createElement('span');
    itemName.textContent = name;
    itemName.classList.add('item-name');
    nameContainer.appendChild(itemName);

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('controls-container');

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity-container');

    let quantity = 1;

    const decrementBtn = document.createElement('button');
    decrementBtn.textContent = '-';
    decrementBtn.classList.add('quantity-btn', 'minus');
    decrementBtn.onclick = () => {
        quantity--;
        quantityDisplay.textContent = quantity;

        if (quantity <= 0) {
            li.remove();
        }
    };

    const quantityDisplay = document.createElement('span');
    quantityDisplay.textContent = quantity;
    quantityDisplay.classList.add('quantity-display');

    const incrementBtn = document.createElement('button');
    incrementBtn.textContent = '+';
    incrementBtn.classList.add('quantity-btn', 'add');
    incrementBtn.onclick = () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    };

    quantityContainer.append(decrementBtn, quantityDisplay, incrementBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = () => {
        li.remove();
    };

    controlsContainer.append(quantityContainer, removeBtn);

    itemContainer.append(nameContainer, controlsContainer);
    
    li.appendChild(itemContainer);
    
    return li;
}




function filterByCategory(category) {
    const items = document.querySelectorAll('#inventory-list li');
    items.forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.style.display = 'list-item'; 
        } else {
            item.style.display = 'none'; 
        }
    });
}

function showAll() {
    const items = document.querySelectorAll('#inventory-list li');
    items.forEach(item => {
        item.style.display = 'list-item'; 
    });
}

function initializeInventoryList() {
    const ingredients = [
        { name: "Ground Beef", category: "meat" },
        { name: "Broccoli", category: "vegetables" },
        { name: "Grapes", category: "fruits" },
        { name: "Cheese", category: "dairy" },
        { name: "Tomato", category: "vegetables"},
        { name: "Mozzarella", category: "dairy"},
        { name: "Basil", category: "vegetables"},
        { name: "Salt"}

    ];
    const inventoryList = document.getElementById('inventory-list');

    ingredients.forEach(ingredient => {
        const newItem = createInventoryItem(ingredient.name, ingredient.category);
        inventoryList.appendChild(newItem);
    });
}


window.onload = function() {
    initializeShoppingList();
    initializeInventoryList();
};



function showImage() {
    document.getElementById("myImage").style.display = "block";    
    console.log("Image shown");
}

function hideImage() {
    document.getElementById("myImage").style.display = "none";
    console.log("Image hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    const textInputs = document.querySelectorAll("input[type='text']");
    textInputs.forEach(input => {
        input.addEventListener("focus", showImage);
        input.addEventListener("blur", hideImage);
    });
});

function favoriteRecipe(button) {
    const recipeId = button.parentElement.getAttribute('onclick').match(/'(.+)'/)[1];
    toggleFavorite(recipeId);
}

function renderRecipes() {
    const recipeGrid = document.getElementById('recipe-grid');
    recipeGrid.innerHTML = '';

    const filterDiet = document.getElementById('filter-diet').value;
    const filterCuisine = document.getElementById('filter-cuisine').value;
    const filterSpiciness = document.getElementById('filter-spiciness').value;

    const userAllergiesText = document.getElementById("allergies-display").textContent;
    const userAllergies = userAllergiesText.split(',').map(s => s.trim().toLowerCase());

    let filteredRecipes = recipes.slice();

    if (filterDiet) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.diet.toLowerCase() === filterDiet.toLowerCase());
    }

    if (filterCuisine) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.cuisine.toLowerCase() === filterCuisine.toLowerCase());
    }

    if (filterSpiciness) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.spiciness.toLowerCase() === filterSpiciness.toLowerCase());
    }

    filteredRecipes = filteredRecipes.filter(recipe => {
        return !recipe.allergies.some(allergy => userAllergies.includes(allergy.toLowerCase()));
    });

    filteredRecipes.sort((a, b) => b.favorite - a.favorite);

    filteredRecipes.forEach(recipe => {
        const recipeBox = document.createElement('div');
        recipeBox.classList.add('recipe-box');
        recipeBox.setAttribute('onclick', `showRecipe('${recipe.id}')`);

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = recipe.favorite ? 'Favorited' : 'Favorite';
        if (recipe.favorite) {
            favoriteButton.classList.add('favorited');
        }

        favoriteButton.onclick = (event) => {
            event.stopPropagation();
            toggleFavorite(recipe.id);
        };

        recipeBox.appendChild(title);
        recipeBox.appendChild(favoriteButton);
        recipeGrid.appendChild(recipeBox);
    });
}

function toggleFavorite(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        recipe.favorite = !recipe.favorite;
        renderRecipes();
    }
}

function showRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const content = document.getElementById('recipe-detail-content');
    content.innerHTML = '';

    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back';
    backButton.onclick = () => showContent('recipes-content');

    const editButton = document.createElement('button');
    editButton.classList.add('edit-recipe-button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editRecipe(recipeId);

    const title = document.createElement('h2');
    title.textContent = recipe.title;

    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.title;
    image.classList.add('recipe-image');

    const ingredientsHeader = document.createElement('h3');
    ingredientsHeader.textContent = 'Ingredients:';

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const instructionsHeader = document.createElement('h3');
    instructionsHeader.textContent = 'Instructions:';

    const instructionsList = document.createElement('ol');
    recipe.instructions.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        instructionsList.appendChild(li);
    });

    content.appendChild(backButton);
    content.appendChild(editButton);
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(ingredientsHeader);
    content.appendChild(ingredientsList);
    content.appendChild(instructionsHeader);
    content.appendChild(instructionsList);

    showContent('recipe-detail-content');
}

function editRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const content = document.getElementById('recipe-detail-content');
    content.innerHTML = '';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('back-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => showRecipe(recipeId);

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-recipe-button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => saveRecipe(recipeId);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = recipe.title;
    titleInput.placeholder = 'Recipe Title';

    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.value = recipe.image;
    imageInput.placeholder = 'Image URL';

    const ingredientsHeader = document.createElement('h3');
    ingredientsHeader.textContent = 'Ingredients:';

    const ingredientsTextarea = document.createElement('textarea');
    ingredientsTextarea.value = recipe.ingredients.join('\n');
    ingredientsTextarea.placeholder = 'List ingredients, one per line';

    const instructionsHeader = document.createElement('h3');
    instructionsHeader.textContent = 'Instructions:';

    const instructionsTextarea = document.createElement('textarea');
    instructionsTextarea.value = recipe.instructions.join('\n');
    instructionsTextarea.placeholder = 'List instructions, one per line';

    const dietInput = document.createElement('input');
    dietInput.type = 'text';
    dietInput.value = recipe.diet;
    dietInput.placeholder = 'Diet (e.g., Vegetarian)';

    const allergiesInput = document.createElement('input');
    allergiesInput.type = 'text';
    allergiesInput.value = recipe.allergies.join(', ');
    allergiesInput.placeholder = 'Allergies (comma-separated)';

    const cuisineInput = document.createElement('input');
    cuisineInput.type = 'text';
    cuisineInput.value = recipe.cuisine;
    cuisineInput.placeholder = 'Cuisine (e.g., Italian)';

    const spicinessInput = document.createElement('input');
    spicinessInput.type = 'text';
    spicinessInput.value = recipe.spiciness;
    spicinessInput.placeholder = 'Spiciness (e.g., Medium)';

    content.appendChild(cancelButton);
    content.appendChild(saveButton);
    content.appendChild(titleInput);
    content.appendChild(imageInput);
    content.appendChild(ingredientsHeader);
    content.appendChild(ingredientsTextarea);
    content.appendChild(instructionsHeader);
    content.appendChild(instructionsTextarea);
    content.appendChild(dietInput);
    content.appendChild(allergiesInput);
    content.appendChild(cuisineInput);
    content.appendChild(spicinessInput);

    showContent('recipe-detail-content');
}

function saveRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const content = document.getElementById('recipe-detail-content');
    const inputs = content.querySelectorAll('input, textarea');

    recipe.title = inputs[0].value.trim();
    recipe.image = inputs[1].value.trim();
    recipe.ingredients = inputs[2].value.split('\n').map(item => item.trim()).filter(Boolean);
    recipe.instructions = inputs[3].value.split('\n').map(item => item.trim()).filter(Boolean);
    recipe.diet = inputs[4].value.trim();
    recipe.allergies = inputs[5].value.split(',').map(item => item.trim()).filter(Boolean);
    recipe.cuisine = inputs[6].value.trim();
    recipe.spiciness = inputs[7].value.trim();

    showRecipe(recipeId);
    renderRecipes();
}

document.getElementById('create-recipe-button').addEventListener('click', createRecipe);

function createRecipe() {
    const content = document.getElementById('recipe-detail-content');
    content.innerHTML = '';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('back-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => showContent('recipes-content');

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-recipe-button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => saveNewRecipe();

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Recipe Title';

    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.placeholder = 'Image URL';

    const ingredientsHeader = document.createElement('h3');
    ingredientsHeader.textContent = 'Ingredients:';

    const ingredientsTextarea = document.createElement('textarea');
    ingredientsTextarea.placeholder = 'List ingredients, one per line';

    const instructionsHeader = document.createElement('h3');
    instructionsHeader.textContent = 'Instructions:';

    const instructionsTextarea = document.createElement('textarea');
    instructionsTextarea.placeholder = 'List instructions, one per line';

    const dietInput = document.createElement('input');
    dietInput.type = 'text';
    dietInput.placeholder = 'Diet (e.g., Vegetarian)';

    const allergiesInput = document.createElement('input');
    allergiesInput.type = 'text';
    allergiesInput.placeholder = 'Allergies (comma-separated)';

    const cuisineInput = document.createElement('input');
    cuisineInput.type = 'text';
    cuisineInput.placeholder = 'Cuisine (e.g., Italian)';

    const spicinessInput = document.createElement('input');
    spicinessInput.type = 'text';
    spicinessInput.placeholder = 'Spiciness (e.g., Medium)';

    content.appendChild(cancelButton);
    content.appendChild(saveButton);
    content.appendChild(titleInput);
    content.appendChild(imageInput);
    content.appendChild(ingredientsHeader);
    content.appendChild(ingredientsTextarea);
    content.appendChild(instructionsHeader);
    content.appendChild(instructionsTextarea);
    content.appendChild(dietInput);
    content.appendChild(allergiesInput);
    content.appendChild(cuisineInput);
    content.appendChild(spicinessInput);

    showContent('recipe-detail-content');
}

function saveNewRecipe() {
    const content = document.getElementById('recipe-detail-content');
    const inputs = content.querySelectorAll('input, textarea');

    const newRecipe = {
        id: 'recipe-' + Date.now(),
        title: inputs[0].value.trim(),
        image: inputs[1].value.trim(),
        ingredients: inputs[2].value.split('\n').map(item => item.trim()).filter(Boolean),
        instructions: inputs[3].value.split('\n').map(item => item.trim()).filter(Boolean),
        favorite: false,
        diet: inputs[4].value.trim(),
        allergies: inputs[5].value.split(',').map(item => item.trim()).filter(Boolean),
        cuisine: inputs[6].value.trim(),
        spiciness: inputs[7].value.trim()
    };

    if (!newRecipe.title || !newRecipe.image || newRecipe.ingredients.length === 0 || newRecipe.instructions.length === 0) {
        alert('Please fill in all required fields: Title, Image URL, Ingredients, and Instructions.');
        return;
    }

    recipes.push(newRecipe);
    renderRecipes();
    showContent('recipes-content');
}

document.getElementById('filter-diet').addEventListener('change', renderRecipes);
document.getElementById('filter-cuisine').addEventListener('change', renderRecipes);
document.getElementById('filter-spiciness').addEventListener('change', renderRecipes);

function toggleEditMode() {
    const isEditing = document.getElementById("edit-button").style.display === "none";
    document.getElementById("edit-button").style.display = isEditing ? "inline" : "none";
    document.getElementById("save-button").style.display = isEditing ? "none" : "inline";

    const displayElements = document.querySelectorAll(".preference-value");
    const inputElements = document.querySelectorAll(".preference-input");

    displayElements.forEach((elem) => elem.style.display = isEditing ? "inline" : "none");
    inputElements.forEach((elem) => elem.style.display = isEditing ? "none" : "inline");
}

function savePreferences() {
    document.getElementById("dietType-display").textContent = document.getElementById("dietType-input").value.trim();
    document.getElementById("allergies-display").textContent = document.getElementById("allergies-input").value.trim();
    document.getElementById("cuisine-display").textContent = document.getElementById("cuisine-input").value.trim();
    document.getElementById("spiceTolerance-display").textContent = document.getElementById("spiceTolerance-input").value.trim();

    toggleEditMode();
    renderRecipes();
}

function showImage() {
    document.getElementById("myImage").style.display = "block";    
    console.log("Image shown");
}

function hideImage() {
    document.getElementById("myImage").style.display = "none";
    console.log("Image hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    const textInputs = document.querySelectorAll("input[type='text']");
    textInputs.forEach(input => {
        input.addEventListener("focus", showImage);
        input.addEventListener("blur", hideImage);
    });

    renderRecipes();
});

