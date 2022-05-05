<template>
  <div>
      <h1>Digital Photography</h1>
      <DigitalPhoto 
        v-for="photo in photos" v-bind:key="photo.id"
        v-bind:photo="photo"
      />
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
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response => this.photos = response.data)
  }
};
</script>
