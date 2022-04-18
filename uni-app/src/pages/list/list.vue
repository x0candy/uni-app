<template>
  <view class="list">
    <view class="fixbg"></view>
    <music-head title="歌单" :visible="true" color="white"></music-head>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="list-head">
          <view class="list-head-img">
            <image src="../../static/1.jpg" mode="" />
            <text class="iconfont icon-yousanjiao">30yi</text>
          </view>
          <view class="list-head-text">
            <view>ccccc</view>
            <view> <image src="../../static/1.jpg" mode="" />dddddddd </view>
            <view
              >测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字</view
            >
          </view>
        </view>
        <!--#ifdef MP-WEIXIN-->
        <button open-type="share" class="list-share">
          <text class="iconfont icon-fenxiang">分享给微信好友</text>
        </button>
        <!--#endif-->
        <view class="list-music">
          <view class="list-music-head">
            <text class="iconfont icon-bofang"></text>
            <text>1</text>
            <text></text>
          </view>
          <view class="list-music-item">
            <view class="list-music-top">1</view>
            <view class="list-music-song">
              <image src="" mode="" />
              <image src="" mode="" />
            </view>
            <view>
              <text class="iconfont icon-bofang_o"></text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import musicHead from '../../components/musichead.vue'
export default {
  data() {
    return {}
  },
  onLoad(options) {
    console.log(options.listId)
  },
  components: {
    musicHead,
  },
}
</script>

<style scoped>
.list-head {
  display: flex;
  margin: 30rpx;
}
.list-head-img {
  width: 264rpx;
  height: 264rpx;
  border-radius: 30rpx;
  overflow: hidden;
  position: relative;
  margin-right: 42rpx;
}
.list-head-img image {
  width: 100%;
  height: 100%;
}
.list-head-img text {
  position: absolute;
  right: 8rpx;
  top: 8rpx;
  color: white;
  font-size: 26rpx;
}
.list-head-text {
  flex: 1;
}
.list-head-text view:nth-child(1) {
  color: white;
  font-size: 34rpx;
}
.list-head-text view:nth-child(2) {
  display: flex;
  margin: 20rpx 0;
  font-size: 24rpx;
}
.list-head-text view:nth-child(2) image {
  width: 54rpx;
  height: 54rpx;
  border-radius: 50%;
  margin-right: 14rpx;
}
.list-head-text view:nth-child(3) {
  line-height: 34rpx;
  font-size: 22rpx;
}
.list-share {
  width: 330rpx;
  height: 74rpx;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}
.list-music {
}
.list-musci-head {
}
.list-music-item {
}
.list-music-top {
}
.list-music-song {
}
</style>
