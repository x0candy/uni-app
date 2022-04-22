<template>
  <view>
    <music-head title="详情" :visible="true"></music-head>
  </view>
</template>

<script>
import musicHead from '../../components/musichead.vue'
export default {
  data() {
    return {}
  },
  onLoad(options) {
    console.log(options.id)
  },
  components: {
    musicHead,
  },
}
</script>

<style></style>
