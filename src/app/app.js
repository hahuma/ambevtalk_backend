const express = require('express')
const path = require('path')

const app = express()

express.static('/uploads/pdf', path.join(__dirname, '..', '..', 'uploads'))
