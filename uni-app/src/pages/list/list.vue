<template>
  <view class="list">
    <view
      class="fixbg"
      :style="{ 'background-image': 'url(' + playList.coverImgUrl + ')' }"
    ></view>
    <music-head title="歌单" :visible="true" color="white"></music-head>
    <view class="container" v-show="isloading">
      <scroll-view scroll-y="true">
        <view class="list-head">
          <view class="list-head-img">
            <image :src="playList.coverImgUrl" mode="" />
            <text class="iconfont icon-yousanjiao">{{
              playList.playCount | formateCount
            }}</text>
          </view>
          <view class="list-head-text">
            <view>{{ playList.name }}</view>
            <view>
              <image :src="playList.creator.avatarUrl" mode="" />
              <text>{{ playList.creator.nickname }}</text>
            </view>
            <view>{{ playList.description }}</view>
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
            <text>播放全部</text>
            <text>(共100首)</text>
          </view>
          <view
            class="list-music-item"
            v-for="(item, index) in playList.tracks"
            :key="index"
            @tap="handleToDetail(item.id)"
          >
            <view class="list-music-top">{{ index + 1 }}</view>
            <view class="list-music-song">
              <view>{{ item.name }}</view>
              <view>
                <image
                  src="../../static/sq.png"
                  v-if="
                    privileges[index].flag > 60 && privileges[index].flag < 70
                  "
                  mode=""
                />
                <image
                  src="../../static/sq.png"
                  v-if="privileges[index].maxbr == 999000"
                  mode=""
                />
                {{ item.ar[0].name }} - {{ item.name }}
              </view>
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
import { list } from '../../common/api'
export default {
  data() {
    return {
      playList: {
        creator: {
          avatarUrl: '',
        },
      },
      privileges: [],
      isloading: false,
    }
  },
  onLoad(options) {
    uni.showLoading({
      title: '加载中',
    })
    list(options.listId).then((res) => {
      if (res[1].data.code == 200) {
        this.playList = res[1].data.playlist
        this.privileges = res[1].data.privileges
        this.isloading = true
        uni.hideLoading()
      }
    })
  },
  methods: {
    handleToDetail(id) {
      uni.navigateTo({
        url: '/pages/detail/detail?id=' + id,
      })
    },
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
  align-items: center;
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
  background: white;
  border-radius: 50rpx;
  margin-top: 40rpx;
  overflow: hidden;
}
.list-music-head {
  height: 50rpx;
  margin: 30rpx 0 70rpx 22rpx;
}
.list-music-head text:nth-child(1) {
  height: 50rpx;
  font-size: 50rpx;
}
.list-music-head text:nth-child(2) {
  font-size: 30rpx;
  margin: 0 10rpx 0 26rpx;
}
.list-music-head text:nth-child(3) {
  font-size: 26rpx;
  color: #b2b2b2;
}
.list-music-item {
  display: flex;
  margin: 0 32rpx 66rpx 46rpx;
  align-items: center;
  color: #959595;
}
.list-music-item text {
  font-size: 50rpx;
  color: #c7c7c7;
}
.list-music-top {
  width: 58rpx;
  font-size: 30rpx;
  line-height: 30rpx;
}
.list-music-song {
  flex: 1;
}
.list-music-song view:nth-child(1) {
  font-size: 28rpx;
  color: black;
  width: 70vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-music-song view:nth-child(2) {
  font-size: 20rpx;
  margin-right: 10rpx;
  width: 70vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-music-song view:nth-child(2) image {
  width: 32rpx;
  height: 20rpx;
}
</style>
