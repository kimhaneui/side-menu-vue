<template>
<div id="container">
  <h2>2번 구현 내용 (async/await)</h2>
  <div v-for="item in menu" :key="item.id" @click="onDetail(item.id)">
    <h3>id: {{item.id}}</h3>
    <p>title: {{item.title}}</p>
  </div>
  <div>
    <div v-html="content"></div>
    <p>{{id}}</p>
    <p>{{title}}</p>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'first',
  data() {
    return {
      menu: [],
      content: '',
      id:'',
      title: ''
    }
  },
  methods: {
    async getData(){
    const response = await axios.get('http://recruit.web.smartjackwp.co.kr/menu')
      this.menu = response.data.menuList;
    },
    async onDetail(menuId){
      const url = 'http://recruit.web.smartjackwp.co.kr/menu/'+ menuId
      const response = await axios.get(url)
      this.content = response.data.content
      this.id = response.data.id
      this.title = response.data.title
    }
  },
  created() {
this.getData();
  }
}

</script>
<style>
#container {
  widows: 100%;
  border: 5px solid #d9d9d9;
  border-radius: 15px;
  padding: 15px;
}
</style>

