<template>
<div class="list">
  <mu-table :fixedHeader="true" :showCheckbox="false">
    <mu-thead>
      <mu-tr>
        <mu-th v-for='header in headers'>
          <h2>{{header}}</h2>
        </mu-th>
      </mu-tr>
    </mu-thead>
    <mu-tbody>
      <mu-tr v-for="movie of movies">
        <mu-td><img class="movie-poster" :src="movie.image"></mu-td>
        <mu-td>
          <h3>{{ movie.title }}</h3>
        </mu-td>
        <mu-td>
          <p class="movie-genres">{{ movie.genres }}</p>
        </mu-td>
        <mu-td class="movie-rating">{{ movie.rating }}</mu-td>
        <mu-td>
          <mu-raised-button @click="showDetail(movie)" label="详细" primary/>
          <mu-raised-button @click="edit(movie)" label="修改" primary/>
          <mu-raised-button @click="remove(movie)" label="删除" secondary/>
        </mu-td>
      </mu-tr>
    </mu-tbody>
  </mu-table>
  <mu-float-button icon="add" class="add-movie-button" backgroundColor @click="add" />

  <vodal :show="isShowModal" animation="slideDown" :width="500" :height="480" :closeButton="false">
    <mu-text-field v-model="movieInfo.title" fullWidth icon="movie" label="电影名称" labelFloat/><br/>
    <mu-text-field v-model="movieInfo.poster" fullWidth icon="picture_in_picture" label="海报地址" labelFloat/><br/>
    <mu-text-field v-model="movieInfo.genres" multiLine :rows="2" :rowsMax="6" fullWidth icon="description" label="类型" labelFloat/><br/>
    <mu-text-field v-model="movieInfo.rating" fullWidth icon="star" label="评分" labelFloat/><br/>
    <mu-raised-button @click="isShowModal = false" label="取消" icon="undo" />
    <mu-raised-button @click="confirm" label="确定" icon="check" primary/>
  </vodal>
</div>
</template>

<script>
import Config from './config'
import qs from 'qs'
export default {
  created() {
    this.getMovies()
    document.title = this.$route.name
  },
  components: {},
  data() {
    return {
      movieInfo: {},
      movies: [],
      isShowModal: false,
      headers: ['海报', '电影名称', '类型', '评分', '操作'],
      addOrEdit: ''
    }
  },
  methods: {
    getMovies(id) {
      let url = Config.apiBaseUrl + 'api/movie'
      if (id) {
        url += `/${id}`
      }
      this.$axios({
          method: 'get',
          url
        })
        .then(res => {
          if (res.data.status === '1') {
            this.movies = res.data.body
          } else {
            this.toastr(res.data.msg)
          }
        })
        .catch(err => {
          this.toastr.error(`${err.message}`, 'ERROR!')
          console.log(err)
        })
    },
    confirm() {
      let url = this.addOrEdit === 'add' ?
        Config.apiBaseUrl + 'api/movie/add' :
        Config.apiBaseUrl + `api/movie/edit/${this.movieInfo._id}`
      let {
        title,
        rating,
        poster,
        genres
      } = this.movieInfo
      this.$axios({
          method: 'post',
          url,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: qs.stringify({
            title,
            rating,
            poster,
            genres
          })
        })
        .then(res => {
          if (res.data.status === '1') {
            this.toastr.success('操作成功！')
            this.getMovies()
          } else {
            this.toastr(res.data.msg)
          }
          this.isShowModal = false
        })
        .catch(err => {
          this.toastr.warn('操作出错，请重试')
          this.isShowModal = false
        })
    },
    remove(movie) {
      let url = Config.apiBaseUrl + `api/movie/delete`
      this.$axios({
          method: 'post',
          url,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: qs.stringify({
            id: movie._id
          })
        })
        .then(res => {
          if (res.data.status === '1') {
            this.toastr.success("删除成功!")
            this.getMovies()
          } else {
            this.toastr(res.data.msg)
          }
        })
        .catch(e => this.toastr.warn('操作出错，请重试'))
    },
    showDetail(movie) {
      // this.getMovies(movie._id)
      this.$router.push(`/movie/${movie.title}`)
    },
    add() {
      this.isShowModal = true
      this.addOrEdit = 'add'
      this.movieInfo = {}
    },
    edit(movie) {
      this.isShowModal = true
      this.addOrEdit = 'edit'
      this.movieInfo = movie
    },
  }
}
</script>

<style lang="css">
.mu-th{
  text-align: center !important;
}
.mu-td{
  text-align: center !important;
}
.movie-poster{
  width: 50px;
  padding: 4px 0;
}
.movie-genres{
  white-space: normal;
  padding:4px 4px;
  letter-spacing: 1px;
  font-size: 14px;
  text-align: center;
  text-indent: 2em;
}
.mu-raised-button {
  min-width: 75px !important;
}
.mu-th-wrapper {
  padding: 0 !important;
}
</style>
