const STORAGE_KEY = 'todolist-vue.js'

export default {
  fetch () {
    let localArr = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')

    localArr = localArr.filter(e => e)

    return localArr
  },
  save (item) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
  },
  remove () {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
  }
}
