<template>
  <div class="home">
    <!-- <van-nav-bar title="光伏电站参考造价计算器" /> -->
    <van-tabs v-model="activeTab">
      <van-tab title="彩钢瓦"></van-tab>
      <van-tab title="混凝土"></van-tab>
      <van-tab title="光伏车棚"></van-tab>
    </van-tabs>
    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Tab,
  Tabs,
} from 'vant';

import CGW from './CGW.vue';
import HNT from './HNT.vue';
import GFCP from './GFCP.vue';
Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: 'Home',
  components: {
    CGW,
    HNT,
    GFCP
  },
  methods: {

  },
  computed: {
    // 根据当前激活的 Tab 索引动态返回对应的组件
    currentComponent() {
      return this.components[this.activeTab];
    },
  },
  data() {
    return {
      activeTab: 0, // 当前激活的 Tab 索引
      components: [CGW,HNT,GFCP], // 页面组件数组
    };
  },

}
</script>

<style>
.content {
  padding: 16px 16px 160px;
}

.container {
  padding: 16px;
}

.result {
  margin-top: 20px;
}
</style>