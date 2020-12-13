const { Router } = require('express')


const routes = Router()


routes.get('/comments')
routes.post('/user')
routes.post('/user/:id')
routes.post('/new_research')
routes.post('/create_pdf')
routes.post('/send_to_bot')
routes.post('/')