<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/Header.vue'
import CitySearch from '@/pages/city/components/Search.vue'
import CityList from '@/pages/city/components/List.vue'
import CityAlphabet from '@/pages/city/components/Alphabet.vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  created() {
    this.getCityInfo()
  },
  methods: {
    async getCityInfo() {
      const { data: res } = await axios.get('/city')
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
      console.log(res)
    },
    handleLetterChange(letter) {
      this.letter = letter
    }
  }
}
</script>
<style lang="stylus" scoped></style>
