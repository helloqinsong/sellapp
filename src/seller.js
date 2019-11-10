/* eslint-disable */
import Vue from 'vue'
/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    seller: []
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getAddressList()
    })
  },
  methods: {
    getAddressList: function () {
      this.$http.get("./data.json").then(function (response) {

      })
    }
  }
})
