class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .fan-art-meal {
                    width: 100%;
                    max-height: 450px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .meal-info {
                    padding: 24px;
                }
                
                .meal-info > h2 {
                    font-weight: bold;
                }
                
                .meal-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }

                .flex-row {
                    display: flex;
                    flex-direction: row;
                    flex-grow: 1;
                }

                .list-info {
                    flex-basis: 50%;
                }

                .info {
                    font-size: 14px;
                }

                hr {
                    margin-top: 10px;
                }

            </style>
            <img class="fan-art-meal" src="${this._meals.strMealThumb}" alt="Fan Art">
            <div class="meal-info">
                <h1>${this._meals.strMeal}</h1>
                <div class="info">${this._meals.strArea}</div>
                <hr>
                <div class="flex-row">
                    <div class="list-info">
                        <h3>Ingridients</h3>
                        <div class="info">${this._meals.strIngredient1 ? this._meals.strIngredient1 : ''}</div>
                        <div class="info">${this._meals.strIngredient2 ? this._meals.strIngredient2 : ''}</div>
                        <div class="info">${this._meals.strIngredient3 ? this._meals.strIngredient3 : ''}</div>
                        <div class="info">${this._meals.strIngredient4 ? this._meals.strIngredient4 : ''}</div>
                        <div class="info">${this._meals.strIngredient5 ? this._meals.strIngredient5 : ''}</div>
                        <div class="info">${this._meals.strIngredient6 ? this._meals.strIngredient6 : ''}</div>
                        <div class="info">${this._meals.strIngredient7 ? this._meals.strIngredient7 : ''}</div>
                        <div class="info">${this._meals.strIngredient8 ? this._meals.strIngredient8 : ''}</div>
                        <div class="info">${this._meals.strIngredient9 ? this._meals.strIngredient9 : ''}</div>
                        <div class="info">${this._meals.strIngredient10 ? this._meals.strIngredient10 : ''}</div>
                        <div class="info">${this._meals.strIngredient11 ? this._meals.strIngredient11 : ''}</div>
                        <div class="info">${this._meals.strIngredient12 ? this._meals.strIngredient12 : ''}</div>
                        <div class="info">${this._meals.strIngredient13 ? this._meals.strIngredient13 : ''}</div>
                        <div class="info">${this._meals.strIngredient14 ? this._meals.strIngredient14 : ''}</div>
                        <div class="info">${this._meals.strIngredient15 ? this._meals.strIngredient15 : ''}</div>
                        <div class="info">${this._meals.strIngredient16 ? this._meals.strIngredient16 : ''}</div>
                        <div class="info">${this._meals.strIngredient17 ? this._meals.strIngredient17 : ''}</div>
                        <div class="info">${this._meals.strIngredient18 ? this._meals.strIngredient18 : ''}</div>
                        <div class="info">${this._meals.strIngredient19 ? this._meals.strIngredient19 : ''}</div>
                        <div class="info">${this._meals.strIngredient20 ? this._meals.strIngredient20 : ''}</div>
                    </div>
                    <div class="list-info">
                        <h3>Ingridients</h3>
                        <div class="info">${this._meals.strMeasure1 ? this._meals.strMeasure1 : ''}</div>
                        <div class="info">${this._meals.strMeasure2 ? this._meals.strMeasure2 : ''}</div>
                        <div class="info">${this._meals.strMeasure3 ? this._meals.strMeasure3 : ''}</div>
                        <div class="info">${this._meals.strMeasure4 ? this._meals.strMeasure4 : ''}</div>
                        <div class="info">${this._meals.strMeasure5 ? this._meals.strMeasure5 : ''}</div>
                        <div class="info">${this._meals.strMeasure6 ? this._meals.strMeasure6 : ''}</div>
                        <div class="info">${this._meals.strMeasure7 ? this._meals.strMeasure7 : ''}</div>
                        <div class="info">${this._meals.strMeasure8 ? this._meals.strMeasure8 : ''}</div>
                        <div class="info">${this._meals.strMeasure9 ? this._meals.strMeasure9 : ''}</div>
                        <div class="info">${this._meals.strMeasure10 ? this._meals.strMeasure10 : ''}</div>
                        <div class="info">${this._meals.strMeasure11 ? this._meals.strMeasure11 : ''}</div>
                        <div class="info">${this._meals.strMeasure12 ? this._meals.strMeasure12 : ''}</div>
                        <div class="info">${this._meals.strMeasure13 ? this._meals.strMeasure13 : ''}</div>
                        <div class="info">${this._meals.strMeasure14 ? this._meals.strMeasure14 : ''}</div>
                        <div class="info">${this._meals.strMeasure15 ? this._meals.strMeasure15 : ''}</div>
                        <div class="info">${this._meals.strMeasure16 ? this._meals.strMeasure16 : ''}</div>
                        <div class="info">${this._meals.strMeasure17 ? this._meals.strMeasure17 : ''}</div>
                        <div class="info">${this._meals.strMeasure18 ? this._meals.strMeasure18 : ''}</div>
                        <div class="info">${this._meals.strMeasure19 ? this._meals.strMeasure19 : ''}</div>
                        <div class="info">${this._meals.strMeasure20 ? this._meals.strMeasure20 : ''}</div>
                    </div>
                </div>
                <hr>
                <p>${this._meals.strInstructions}</p>
            </div>`;
    }
}

customElements.define("meal-item", MealItem);