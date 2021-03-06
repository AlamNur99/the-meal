import './meal-item.js';

class MealList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._meal.forEach(meals => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meals = meals;
            this.shadowDOM.appendChild(mealItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define("meal-list", MealList);