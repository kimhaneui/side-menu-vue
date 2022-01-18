<template>
  <div id="app">
    <div>
      <ul class="menu">
        <li>
          <router-link to="/first">{{ $store.state.first }}</router-link>
        </li>
        <li>
        <router-link to="/seconde">{{ $store.state.seconde }}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {

  }
}

</script>

<style>
.menu {
  width: 20%;
  height: 100%;
}
.menu li {
  padding: 50px;
}
</style>
