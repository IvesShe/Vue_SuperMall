<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行','新款','精選']"/>

     
      <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
          <li>列表17</li>
          <li>列表18</li>
          <li>列表19</li>
          <li>列表20</li>
          <li>列表21</li>
          <li>列表22</li>
          <li>列表23</li>
          <li>列表24</li>
          <li>列表25</li>
          <li>列表26</li>
          <li>列表27</li>
          <li>列表28</li>
          <li>列表29</li>
          <li>列表30</li>
          <li>列表31</li>
          <li>列表32</li>
          <li>列表33</li>
          <li>列表34</li>
          <li>列表35</li>
          <li>列表36</li>
          <li>列表37</li>
          <li>列表38</li>
          <li>列表39</li>
          <li>列表40</li>
          <li>列表41</li>
          <li>列表42</li>
          <li>列表43</li>
          <li>列表44</li>
          <li>列表45</li>
          <li>列表46</li>
          <li>列表47</li>
          <li>列表48</li>
          <li>列表49</li>
          <li>列表50</li>
          <li>列表51</li>
          <li>列表52</li>
          <li>列表53</li>
          <li>列表54</li>
          <li>列表55</li>
          <li>列表56</li>
          <li>列表57</li>
          <li>列表58</li>
          <li>列表59</li>
          <li>列表60</li>
          <li>列表61</li>
          <li>列表62</li>
          <li>列表63</li>
          <li>列表64</li>
          
      </ul> 

  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl.vue'

import {getHomeMultidata} from "network/home"

export default {
    name: "Home",
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl
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
    #home {
        /* 留標頭的空間 */
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        /* 解決標頭一起滾動的問題 */
        position: fixed;    
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    /* 鎖定TabControl的位置 */
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>