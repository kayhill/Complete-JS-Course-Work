import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


/** Global state of the app
 * store all data that defines our app in any given moment:
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); 
    console.log(query);
    
    // 2) new search object, add to state
    if (query) {
        state.search = new Search(query);

        // 3) prepare UI for results
        searchView.clearInput();
        searchView.clearRes();
        renderLoader(elements.searchRes);


        // 4) Search for recipes
        await state.search.getResults();

        // 5) display results on UI
        clearLoader();
        searchView.renderResults(state.search.result, );
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearRes();
        searchView.renderResults(state.search.result, goToPage);
    }    
});