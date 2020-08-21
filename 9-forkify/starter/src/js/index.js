import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


/** Global state of the app
 * store all data that defines our app in any given moment:
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};


/////////////// 
/*  
* SEARCH CONTROLLER
*/
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); 
        
    // 2) new search object, add to state
    if (query) {
        state.search = new Search(query);

        // 3) prepare UI for results
        searchView.clearInput();
        searchView.clearRes();
        renderLoader(elements.searchRes);

        try {
        // 4) Search for recipes
        await state.search.getResults();

        // 5) display results on UI
        clearLoader();
        searchView.renderResults(state.search.result, );
        } catch (error) {
            alert('Something went wrong!'); 
            clearLoader();
        }
    }
};

/////////////// 
/*  
* SEARCH EVENT LISTENERS
*/

// when user submits search
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// when user clicks results page buttons
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearRes();
        searchView.renderResults(state.search.result, goToPage);
    }    
});

/////////////// 
/*  
* RECIPE CONTROLLER
*/
const controlRecipe = async () => {
    // Get id from URL
    const id = window.location.hash.replace('#', '');

    if (id) {

        // highlight selected search item 
        if (state.search) searchView.highlightSelected(id);

        //prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // create new recipe object
        state.recipe = new Recipe(id);

        try { 
            // get recipe data and parse
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // calculate servings and time 
            state.recipe.calcTime();
            state.recipe.calcServings();

            // display recipe to UI
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
        } catch (error) {
            alert('Error processing recipe.');
            clearLoader();
        }   
    }
};

/////////////// 
/*  
* SHOPPING LIST CONTROLLER
*/

const controlList = () => {
    // create a new list IF none
    if(!state.list) state.list = new List();

    // add each ingredient to list and UI
    state.recipe.ingredients.forEach(el => {
       const item = state.list.addItem(el.count, el.unit, el.ingredient);
       listView.renderItem(item);
    });
}

// handle delete and update shopping list item events 

elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *'))  {
        // delete from state
        state.list.deleteItem(id);
        // delete from UI
        listView.deleteItem(id);

    // update count
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }

});

/////////////// 
/*  
* LIKES CONTROLLER
*/
const controlLikes = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

        // add to like list <3
        // add like to the state        
    if (!state.likes.isLiked(currentID)) {
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );                    

        // toggle like button on UI
        likesView.toggleLike(true);

        // add like to UI list
        likesView.renderLike(newLike);   

    // remove from like list </3
    } else {
        // remove like from state
        state.likes.deleteLike(currentID);

        // toggle like button on UI
        likesView.toggleLike(false);

        // remove like from UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
    
}

// Restore likes when page loads
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});


/////////////// 
/*  
* RECIPE EVENT LISTENERS
*/
// Combine event listeners into one line!! --->
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// inc or dec servings
// add ingredients to shopping list
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // decrease button is clicked 
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe); 
        }        
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // increase button is clicked 
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);   
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // add ingredients to shopping list
        controlList();
        // add recipe to likes list <3
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        controlLikes();
    }
});



