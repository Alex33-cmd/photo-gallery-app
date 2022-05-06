<template>
        <v-dialog
            v-model="lightboxVisible"
            transition="dialog-bottom-transition"
            max-width="1000"
        >
            <v-card>
                <v-toolbar
                color="#78909C"
                dark
                >{{photo.author}}</v-toolbar>
                <v-card-text>
                    <v-img
                    max-height="1000"
                        v-bind:src="photo.download_url"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>
</template>

<script>
export default {
    data: () => ({
        lightboxVisible: false
    }),
    props: {
        photo: {
            type: Object,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    created(){
        this.lightboxVisible = this.value;
    },
    watch: {
        value(newValue) {
            this.lightboxVisible = newValue
        },
        lightboxVisible(newValue){
            this.$emit('input', newValue)
        }
    }
};
</script>
