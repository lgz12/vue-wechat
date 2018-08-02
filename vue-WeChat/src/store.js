var STORAGE_KEY = 'todos-vuejs'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  clear:function(){
    return JSON.parse(window.localStorage.removeItem(STORAGE_KEY) || '[]')
  }
}
