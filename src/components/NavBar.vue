<template>
    <div>
      <v-app-bar
        color="#78909C"
        dark
        fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, #455A64, #90A4AE"
          ></v-img>
        </template>
  
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-spacer></v-spacer>
  
        <v-app-bar-title><h1>Gallery</h1></v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/">Main</v-tab>
            <v-tab to="/digital">digital</v-tab>
            <v-tab to="/film">Film</v-tab>
            <v-tab to="/artwork">Artwork</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
