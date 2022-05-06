<template>
    <v-col 
     ma-4
    >
        <v-card
        class="mx-auto blue-grey darken-2"
        max-width="250"
        @click="openPhoto"
        >
            <v-img
            max-height="167"
            class="white--text align-end"
            v-bind:src="photo.download_url"
            >
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
</template>

<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true
        }
    },
    methods: {
        openPhoto() {
            this.$emit('openPhoto', this.photo)
        }
    }
};
</script>
