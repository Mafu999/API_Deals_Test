const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:3033/myDataBase', {
    useNewUrlParser: true
})