<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
.container {
  width: 100%;
  height: calc(100vh - 70px);
}
.container scroll-view {
  height: 100%;
}
.fixbg {
  height: 100vh;
  width: 100%;
  position: absolute;
  background: url('./static/logo.png');
  background-position: center 0;
  filter: blur(10px);
  background-size: cover;
  transform: scale(1.2);
  z-index: -99;
}
</style>
