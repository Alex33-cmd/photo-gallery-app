<template>
  <div class="blue-grey darken-4">
      <h1 class="pa-4 white--text" >Digital Photography</h1>
      <v-row class="ma-2">
        <DigitalPhoto 
          v-for="photo in photos" v-bind:key="photo.id"
          :photo="photo"
          @openPhoto="openPhoto"
        />
      </v-row>
      <PhotoLightbox :photo="currentPhoto" v-model="lightboxVisible"/>
  </div>
</template>

<script>
import DigitalPhoto from "@/components/DigitalPhoto.vue"
import PhotoLightbox from "@/components/PhotoLightbox.vue"
import axios from "axios";

export default {
  components: {
    DigitalPhoto,
    PhotoLightbox
  },
  data: () => ({
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
      axios.get('https://picsum.photos/v2/list?limit=20')
      .then(response => this.photos = response.data)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.lightboxVisible = !this.lightboxVisible
    }
  }
  
};
</script>
