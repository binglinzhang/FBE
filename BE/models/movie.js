const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  original_title: String,
  rating: Number,
  genres: String,
  casts: Array,
  directors: Array,
  year: Number,
  id: String,
  image: String,
  isDelete: false
})

var Movie = mongoose.model('Movies', movieSchema)

module.exports = Movie
