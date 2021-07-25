# Vue 電商 SuperMall

電商 購物網站建構

# 安裝vue腳手架

## Vue CLI

webpack全局安裝

```
npm i webpack -g
```

## 安裝Vue腳手架

```bash
npm i -g @vue/cli
```

![image](./images/20210410100532.png)

# 創建項目

```bash
vue create supermall
```

上面安裝的是Vue CLI4的版本，如果想要按照Vue CLI2的方式初始化是不可以的，如果需要使用舊版本的vue init功能，需要全局安裝一個橋接工具

```bash
npm i -g @vue/cli-init
```

![image](./images/20210410101424.png)

之後才能使用

```bash
vue init webpack myProject
```

## 創建項目

```bash
vue create vue_supermall
```

![image](./images/20210410101424.png)


選擇自訂安裝

![image](./images/20210410102218.png)

這邊其實是要拉掉Linter的預設安裝

![image](./images/20210410102149.png)


選擇使用Vue2或Vue3

![image](./images/20210410102310.png)

選擇package.json的方式

![image](./images/20210410102625.png)

最後會詢問是否將這次的設定儲存，我選擇yes，存為ives_vue2這名稱

![image](./images/20210410103038.png)

## 運行項目

```bash
cd vue_supermall
npm run serve
```

運行成功

![image](./images/20210410103307.png)

# 安裝VSCode插件

![image](./images/20210410103802.png)

![image](./images/20210410115921.png)

# 安裝Chrome 擴充

![image](./images/20210410103917.png)

方便開發

![image](./images/20210410104145.png)


# 使用css初始化文件

https://github.com/necolas/normalize.css/

## 參考網址

https://cli.vuejs.org/zh/

https://cli.vuejs.org/zh/guide/installation.html

https://cli.vuejs.org/zh/guide/creating-a-project.html

# 建立資料夾結構

![image](./images/20210725150129.png)

# 新建css

normalize.css

參考官網並下載

https://github.com/necolas/normalize.css/

base.css

```css
@import "./normalize.css";

/*:root -> 获取根元素html*/
:root {
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  user-select: none; /* 禁止用户鼠标在页面上选中文字/图片等 */
  -webkit-tap-highlight-color: transparent; /* webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节 */
  background: var(--color-background);
  color: var(--color-text);
  /* rem vw/vh */
  width: 100vw;
}

a {
  color: var(--color-text);
  text-decoration: none;
}


.clear-fix::after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.clear-fix {
  zoom: 1;
}

.left {
  float: left;
}

.right {
  float: right;
}


```

# 新建vue.config.js

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
```

# 新建.editorconfig

統一代碼風格

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

```

# 安裝router

```bash
npm i vue-router --save
```

![image](./images/20210725152613.png)

# 安裝better-scroll

官網

https://better-scroll.github.io/docs/zh-CN/guide/

![image](./images/20210725153913.png)

```bash
npm i better-scroll --save
```

![image](./images/20210725154105.png)

# 安裝axios

```bash
npm install --save axios
```

![image](./images/20210725154923.png)
# 更換預覽小圖

![image](./images/20210725160338.png)
# 打包

```bash
npm run build
```

![image](./images/20210725160227.png)

![image](./images/20210725160426.png)

# 動態獲取路徑


```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

# 首頁 - 新增導航
## Home.vue

```js
<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: "Home",
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>
```

## NavBar.vue

```js
<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }

    .left, .right {
        width: 60px;
        /* background-color: red; */
    }

    .center {
        flex: 1;
        /* background-color: blue; */
    }
</style>
```

![image](./images/20210725165521.png)

# 首頁 - 新增輪播圖

組件建立完成時，請求數據

## 新增home.js

```js
import { request } from "./request";

export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}
```

## 修改Home.vue

```js
import {getHomeMultidata} from "network/home"

export default {
    name: "Home",
    components: {
        NavBar
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
```

訪問得到的資料，已存放在data

![image](./images/20210725201719.png)

## 新增swiper

直接使用封裝好的swiper組件

新增HomeSwiper.vue

將使用輪播圖的代碼，再封裝成一個組件，給Home.vue使用

HomeSwiper.vue

```js
<template>
  <swiper>
          <swiper-item v-for="item in banners" :key="item">
              <a :href="item.link">
                  <img :src="item.image" alt="">
              </a>
          </swiper-item>
      </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
}
</script>

<style>

</style>
```

修改Home.vue

Home.vue
```js
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
```

## 成功運行輪播圖

![image](./images/20210725205211.png)