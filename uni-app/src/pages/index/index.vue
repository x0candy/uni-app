<template>
  <view>
    <music-head title="网易云音乐" :visible="false"></music-head>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="search">
          <text class="iconfont icon-search"></text>
          <input placeholder="搜索歌曲" />
        </view>
        <view class="index-list">
          <view
            class="index-list-item"
            v-for="(item, index) in topList"
            :key="index"
            @tap="handleToList(item.listId)"
          >
            <view class="index-list-image">
              <image :src="item.coverImgUrl" mode="" />
              <text>{{ item.updateFrequency }}</text>
            </view>
            <view class="index-list-text">
              <view v-for="(musci, i) in item.tracks" :key="i"
                >{{ i + 1 }}.{{ musci.first }}-{{ musci.second }}</view
              >
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import musicHead from '../../components/musichead.vue'
import { topList } from '../../common/api'
export default {
  data() {
    return {
      topList: [],
    }
  },
  onLoad() {
    topList().then((res) => {
      if (res.length) this.topList = res
    })
  },
  methods: {
    handleToList(listId) {
      uni.navigateTo({
        url: '/pages/list/list?listId=' + listId,
      })
    },
  },
  components: {
    musicHead,
  },
}
</script>

<style>
.search {
  display: flex;
  background: #f7f7f7;
  height: 70rpx;
  align-items: center;
  margin: 70rpx 30rpx 30rpx 30rpx;
  border-radius: 50rpx;
}
.search text {
  font-size: 26rpx;
  margin-right: 26rpx;
  margin-left: 28rpx;
}
.search input {
  font-size: 28rpx;
  flex: 1;
}

.index-list {
  margin: 0 30rpx;
}
.index-list-item {
  display: flex;
  margin-bottom: 34rpx;
}
.index-list-image {
  width: 212rpx;
  height: 212rpx;
  position: relative;
  border-radius: 30rpx;
  overflow: hidden;
  margin-right: 22rpx;
}
.index-list-image image {
  width: 100%;
  height: 100%;
}
.index-list-image text {
  position: absolute;
  left: 12rpx;
  bottom: 16rpx;
  font-size: 20rpx;
  color: white;
}
.index-list-text {
  font-size: 24rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
