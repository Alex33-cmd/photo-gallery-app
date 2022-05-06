<template>
    <div>
      <v-app-bar
        color="#78909C"
        dark
        fade-img-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgb(69,90,100, 0.7), rgba(144,164,174, 0.7)"  
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
