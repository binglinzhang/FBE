var express = require('express')
var router = express.Router()
var Movie = require('../models/movie.js')

let formatResult = result => {
  let resArr = JSON.parse(JSON.stringify(result))
  resArr.forEach(item => {
    delete item.isDelete
  })
  return resArr
}

//findList
router.get(['/movie', '/movie/:id'], (req, res) => {
  let queryOptions = {
    isDelete: false
  }
  if (req.params.id) {
    queryOptions._id = req.params.id
  }
  Movie.find(queryOptions)
    .sort({
      rating: -1
    })
    .then(movies => {
      res.json({
        count: movies.length,
        status: '1',
        msg: '查询成功!',
        body: formatResult(movies)
      })
    })
    .catch(err => {
      res.json(err)
    })
})

//addMovie
router.post('/movie/add', (req, res) => {
  req.body.isDelete = false
  Movie.create(req.body, (err, movie) => {
    if (err) {
      res.json(err)
      return
    }
    res.json({
      status: '1',
      msg: '添加成功!',
      body: formatResult([movie])
    })
  })
})

//update
router.post('/movie/edit/:id', (req, res) => {
  Movie.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    })
    .then(movie => res.json({
      status: '1',
      msg: '更新成功!',
      id: req.params.id,
      body: []
    }))
    .catch(err => res.json(err))
})

//delete
router.post('/movie/delete', (req, res) => {
  Movie.findOneAndUpdate({
      _id: req.body.id
    }, {
      $set: {
        isDelete: true
      }
    })
    .then(movie => res.json({
      status: '1',
      msg: '删除成功!',
      id: req.body.id,
      body: []
    }))
    .catch(err => res.json(err))
})

module.exports = router
