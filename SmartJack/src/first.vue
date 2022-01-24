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
  const Http = new XMLHttpRequest();
  const url='http://recruit.web.smartjackwp.co.kr/menu';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log('http',Http.responseText)
    this.menu = JSON.parse(Http.responseText).menuList;
  }
},
onDetail(menuId){
  const Http = new XMLHttpRequest();
  const url='http://recruit.web.smartjackwp.co.kr/menu/'+ menuId;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log('http',Http.responseText)
    const data = JSON.parse(Http.responseText);
    this.content = data.content
    this.id = data.id
    this.title = data.title
  }
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
