<template>
  <div id="app">
    <div class="container">
      <mvHeader/>
      <div class="row">
        <div class="col-md-12">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
    mvHeader: Header,
  }
}
</script>

<style>

</style>
