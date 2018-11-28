const STORAGE_KEY = 'todolist-vue.js'

export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(item){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(item))
    }
}