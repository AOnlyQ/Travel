<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelRecommend/Shanghai/1.jpg',
          title: '上海迪士尼乐园',
          desc: '全球最大的迪士尼城堡'
        },
        {
          id: '0002',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelRecommend/Shanghai/2.jpg',
          title: '上海海洋水族馆',
          desc: '亲眼见证鲨鱼的恐怖'
        },
        {
          id: '0003',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelRecommend/Shanghai/3.jpg',
          title: '上海科技馆',
          desc: '寓教于乐的科普天堂'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #fff
</style>
