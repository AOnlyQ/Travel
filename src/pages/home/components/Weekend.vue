<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelWeekend/Shanghai/1.jpg',
          title: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '0002',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelWeekend/Shanghai/2.jpg',
          title: '学生最爱TOP10',
          desc: '学习之余最爱玩耍，爱玩的你不可错过'
        },
        {
          id: '0003',
          imgUrl:
            'https://gitee.com/Atiffiany/cloudimages/raw/master/Unclassified/TravelWeekend/Shanghai/3.jpg',
          title: '情迷博物馆',
          desc: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'
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
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
