const axios = require('axios')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
var dbUrl = require('./db.js')
mongoose.connect(dbUrl.url, {
  useMongoClient: true
}).then(() => {
  console.log('mongodb connect success')
})

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
  isDelete: Boolean
})
const Movie = mongoose.model("Movie", movieSchema)

// const jsonBird = "https://bird.ioliu.cn/v1?url="
const doubanMovies = "http://api.douban.com/v2/movie/top250?count="

function fetchData(count) {
  const url = doubanMovies + count
  axios.get(url).then(res => {
    // const subjects = res.data.subjects
    const subjects = [{
        "rating": {
          "max": 10,
          "average": 9.6,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "犯罪",
          "剧情"
        ],
        "title": "肖申克的救赎",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1054521/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
            },
            "name": "蒂姆·罗宾斯",
            "id": "1054521"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054534/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
            },
            "name": "摩根·弗里曼",
            "id": "1054534"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1041179/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg"
            },
            "name": "鲍勃·冈顿",
            "id": "1041179"
          }
        ],
        "collect_count": 1155414,
        "original_title": "The Shawshank Redemption",
        "subtype": "movie",
        "directors": [{
          "alt": "https://movie.douban.com/celebrity/1047973/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
          },
          "name": "弗兰克·德拉邦特",
          "id": "1047973"
        }],
        "year": "1994",
        "images": {
          "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
          "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
          "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292052/",
        "id": "1292052"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.5,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情",
          "同性"
        ],
        "title": "霸王别姬",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1003494/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg"
            },
            "name": "张国荣",
            "id": "1003494"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1050265/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg"
            },
            "name": "张丰毅",
            "id": "1050265"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1035641/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.jpg"
            },
            "name": "巩俐",
            "id": "1035641"
          }
        ],
        "collect_count": 826919,
        "original_title": "霸王别姬",
        "subtype": "movie",
        "directors": [{
          "alt": "https://movie.douban.com/celebrity/1023040/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379615419.48.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379615419.48.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379615419.48.jpg"
          },
          "name": "陈凯歌",
          "id": "1023040"
        }],
        "year": "1993",
        "images": {
          "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg",
          "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg",
          "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291546/",
        "id": "1291546"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.4,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "动作",
          "犯罪"
        ],
        "title": "这个杀手不太冷",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1025182/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg"
            },
            "name": "让·雷诺",
            "id": "1025182"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054454/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg"
            },
            "name": "娜塔莉·波特曼",
            "id": "1054454"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1010507/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p104.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p104.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p104.jpg"
            },
            "name": "加里·奥德曼",
            "id": "1010507"
          }
        ],
        "collect_count": 1109273,
        "original_title": "Léon",
        "subtype": "movie",
        "directors": [{
          "alt": "https://movie.douban.com/celebrity/1031876/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg"
          },
          "name": "吕克·贝松",
          "id": "1031876"
        }],
        "year": "1994",
        "images": {
          "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
          "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
          "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg"
        },
        "alt": "https://movie.douban.com/subject/1295644/",
        "id": "1295644"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.4,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情"
        ],
        "title": "阿甘正传",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1054450/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p551.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p551.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p551.jpg"
            },
            "name": "汤姆·汉克斯",
            "id": "1054450"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1002676/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51737.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51737.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51737.jpg"
            },
            "name": "罗宾·怀特",
            "id": "1002676"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1031848/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1345.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1345.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1345.jpg"
            },
            "name": "加里·西尼斯",
            "id": "1031848"
          }
        ],
        "collect_count": 978915,
        "original_title": "Forrest Gump",
        "subtype": "movie",
        "directors": [{
          "alt": "https://movie.douban.com/celebrity/1053564/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p505.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p505.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p505.jpg"
          },
          "name": "罗伯特·泽米吉斯",
          "id": "1053564"
        }],
        "year": "1994",
        "images": {
          "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",
          "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",
          "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292720/",
        "id": "1292720"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.5,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "喜剧",
          "爱情"
        ],
        "title": "美丽人生",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1041004/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"
            },
            "name": "罗伯托·贝尼尼",
            "id": "1041004"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000375/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg"
            },
            "name": "尼可莱塔·布拉斯基",
            "id": "1000375"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000368/",
            "avatars": {
              "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg",
              "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg",
              "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg"
            },
            "name": "乔治·坎塔里尼",
            "id": "1000368"
          }
        ],
        "collect_count": 546173,
        "original_title": "La vita è bella",
        "subtype": "movie",
        "directors": [{
          "alt": "https://movie.douban.com/celebrity/1041004/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"
          },
          "name": "罗伯托·贝尼尼",
          "id": "1041004"
        }],
        "year": "1997",
        "images": {
          "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",
          "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",
          "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292063/",
        "id": "1292063"
      }
    ]
    subjects.map(subject => {
      let movie = {
        title: subject.title,
        original_title: subject.original_title,
        rating: subject.rating.average,
        genres: subject.genres.join('/'),
        casts: subject.casts,
        directors: subject.directors,
        year: subject.year,
        id: subject.id,
        image: subject.images.small,
        isDelete: false
      }
      Movie.create(movie, (err, movie) => {
        if (err) {
          console.log(err)
        }
        console.log(movie.title, '--------')
      })
    })
  }).catch((err) => {
    throw err
  })
}

fetchData(10)
