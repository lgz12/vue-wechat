<template>
  <div id="app">
    <div class='vue-demo'>
      <input type="text" class="txt" v-model='newItem' @keyup.enter='addItemFun'>
      <ul>
        <li v-for="its in items">{{its.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      newItem: '',
      items: store.fetch()
    }
  },
  watch: {
    items: {
      handler: function(val, oldVal) {
        store.save(val);
      },
      deep: true
    }
  },
  methods: {
    addItemFun() {
      var _this = this;
      _this.items.push({ 'name': false});
    }
  }
}

</script>
