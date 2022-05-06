<template>
  <div class="blue-grey darken-4">
      <h1 class="pa-4 white--text" >Digital Photography</h1>
      <v-row class="ma-2">
        <v-col
          v-for="photo in photos" v-bind:key="photo.id"
          :photo="photo" 
          ma-4
          >
              <v-card
              class="mx-auto blue-grey darken-2"
              max-width="250"
              @click="openPhoto(photo)"
              >
                  <v-img
                  max-height="167"
                  class="white--text align-end"
                  v-bind:src="photo.download_url"
                  lazy-src="https://picsum.photos/id/11/100/60"
                  >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                      <v-card-title>{{photo.id}}</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0 white--text">
                      {{photo.author}}
                  </v-card-subtitle>

                  <v-card-text class="white--text">
                      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <PhotoLightbox :photo="currentPhoto" v-model="lightboxVisible"/>
  </div>
</template>

<script>
import PhotoLightbox from "@/components/PhotoLightbox.vue"
import axios from "axios";

export default {
  components: {
    PhotoLightbox
  },
  data: () => ({
    isActive: false,
    photos: [],
    currentPhoto: {},
    lightboxVisible: false
  }),
  mounted() {
    this.fetchPhoto()
  },
  methods: {
    fetchPhoto() {
      // axios.get('https://jsonplaceholder.typicode.com/photos?_limit=16')
      axios.get('https://picsum.photos/v2/list?limit=60')
      .then(response => this.photos = response.data)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.lightboxVisible = !this.lightboxVisible
    }
  }
  
};
</script>
