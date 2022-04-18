<template>
  <view class="musichead" :style="{ color: color }">
    <view class="icon" v-if="visible">
      <text class="iconfont icon-xiangzuojiantou" @tap="handleToBack"></text> |
      <text class="iconfont icon-shouye" @tap="handleToHome"></text>
    </view>
    {{ title }}
  </view>
</template>

<script scoped>
import '@/common/iconfont.css'
export default {
  props: ['title', 'visible', 'color'],
  data() {
    return {}
  },
  onLoad() {
    console.log(this.props)
    console.log(1)
  },
  methods: {
    handleToBack() {
      uni.navigateBack()
    },
    handleToHome() {
      uni.navigateTo({
        url: '/pages/index/index',
      })
    },
  },
}
</script>

<style scoped>
.musichead {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
}
.icon {
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 15px;
}
</style>
