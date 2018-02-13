import React, { Component } from "react";

class Food extends Component {
  render() {
    let foods = this.props.foods;
    let mappedFoods = foods.map((food) => {
      return (
        <article
          className={`food-item-row food-item-${food.id}`}
          data={`food-${food.id}`}
          key={ food.id }
        >
          <div className="checkbox-container">
            <input
              id={`food-item-${food.id}`}
              type="checkbox"
              className="food-item-checkbox"
            >
          </input>
          </div>
          <p className="food-item-name">{ food.name }</p>
          <p className="food-item-calories">{ food.calories }</p>
        </article>
      )
    })

    return (
      <div>
        { mappedFoods }
      </div>
    )
  }
}

export default Food;
