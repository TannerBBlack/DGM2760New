let message = document.querySelector('#feedback');

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pineapple',
    buildPizza: function () {
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with a ${pizza.topping} topping and cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 2

        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#pineapple').addEventListener('click', () => pizza.topping = 'pineapple')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)