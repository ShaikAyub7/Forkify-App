//
import * as model from './model.js';
import recipeview from './recipeview.js';

import icons from '../img/icons.svg'; // Import SVG icons directly
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};



const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeviewrenderSpinner();
    await model.loadRecipe(id);

    const { recipe } = model.state;

    recipeView.render(model.state.recipe);

   } catch (err) {
    alert(err);
  }
};

// Add event listeners for both 'hashchange' and 'load' events
window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
