<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <!-- test -->
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        // 控制轮播图可循环
        loop: true,
        // 控制轮播图自动播放
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        //  配置项，让轮播图有小圆点
        pagination: { el: '.swiper-pagination', clickable: true }
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelSwipperImage/1.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelSwipperImage/2.jpg'
        },
        {
          id: '0003',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelSwipperImage/3.jpg'
        },
        {
          id: '0004',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelSwipperImage/4.jpg'
        },
        {
          id: '0005',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelSwipperImage/5.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff
.wrapper
  overflow hidden
  width: 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-pagination-bullet-active
    background #ccc
  .swiper-img
    width: 100%
</style>
