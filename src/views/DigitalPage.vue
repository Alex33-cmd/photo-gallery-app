<template>
  <div>
      <h1>Digital Photography</h1>
      <v-row>
        <DigitalPhoto 
          v-for="photo in photos" v-bind:key="photo.id"
          v-bind:photo="photo"
        />
      </v-row>
  </div>
</template>

<script>
import DigitalPhoto from "@/components/DigitalPhoto.vue"
import axios from "axios";

export default {
  components: {
    DigitalPhoto
  },
  data: () => ({
    photos: []
  }),
  mounted() {
    this.fetchPhoto()
  },
  methods: {
    fetchPhoto() {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=16')
      .then(response => this.photos = response.data)
    }
  }
};
</script>
