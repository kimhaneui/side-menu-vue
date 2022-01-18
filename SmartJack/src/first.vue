<template>
<div id="container">
  <h2>1번 구현 내용</h2>
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
getData(){
  axios.get('http://recruit.web.smartjackwp.co.kr/menu').then(res=>{
    this.menu = res.data.menuList;
  });
},
onDetail(menuId){
  const url = 'http://recruit.web.smartjackwp.co.kr/menu/'+ menuId
  console.log(url,'url');
  axios.get(url).then(res=>{
    console.log(res,'res');
    this.content = res.data.content
    this.id = res.data.id
    this.title = res.data.title

  });
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
