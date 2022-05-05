<template>
  <div>
      {{photo}}
  </div>
</template>

<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true
        }
    }
};
</script>
