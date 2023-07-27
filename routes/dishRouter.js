const Router = require('express').Router()
const controller = require('../controllers/dishController')

Router.get('/', controller.getDishes)
Router.get('/:id', controller.getDishById)
Router.post('/', controller.createDish)
Router.put('/:id', controller.updateDish)
Router.delete('/:id', controller.deleteDish)

module.exports = Router
