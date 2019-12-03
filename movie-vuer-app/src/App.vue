<template>
  <v-app id="app">
    <mvHeader/>
    <v-content class="mx-5 mb-4 my-6" >
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    mvHeader: Header,
  }
}
</script>

