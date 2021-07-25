<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
      <home-swiper :banners="banners"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from "network/home"

export default {
    name: "Home",
    components: {
        NavBar,
        HomeSwiper
    },
    data(){
        return {
            // result: null,
            banners: [],
            recommends: []
        }
    },
    created() {
        // 1.請求多個數據
        getHomeMultidata().then(res => {
            console.log(res);
            // this.result = res;
            // console.log("@@@result",this.result);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
    },
}
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>