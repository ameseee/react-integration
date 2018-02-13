const findNodesForFilter = () => {
  var fileName = location.pathname.split('/').slice(-1)[0]
  if (fileName === 'foods.html' || fileName === 'foods') {
    var foodNameNodes = $('.food-item-name')
  } else {
    var foodNameNodes = $('div.foods-diary-container .food-item-name')
  }
  return foodNameNodes
}

const filterFoods = (food) => {
  let foodNameNodes = findNodesForFilter()

  for(var i = 0; i < foodNameNodes.length; i++) {
    var name = $(foodNameNodes[i])
    if (name.text().toUpperCase().indexOf(food) > -1) {
      $(name.parent()[0]).css('display', '')
    } else {
      $(name.parent()[0]).css('display', 'none')
    }
  }
}

export default filterFoods;
