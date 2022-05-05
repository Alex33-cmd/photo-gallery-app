<template>
    <div>
      <v-app-bar
        color="#6A76AB"
        dark
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-app-bar-title>photo-gallery-app</v-app-bar-title>
  
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
