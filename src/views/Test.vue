<template>
  <div class="about-page">
    <div class="content" style="text-align: left;">
      <van-cell-group>
        <van-cell title="应用名称" value="光伏电站参考造价计算器" />
        <van-cell title="版本" value="1.0.0" />
        <van-cell title="联系我" value="alkeysheng@gmail.com" />
        <van-cell title="版权所有" value="© 2025" />
      </van-cell-group>

      <div class="description">
        <h3>应用介绍</h3>
        <p>
          这是一个用于计算光伏电站参考造价的应用。根据预设的屋顶面积、装机规模，可以快速获取相应光伏电站的估算造价。
        </p>
        <p>
          本应用基于参考价格和标准配置进行计算，实际造价可能会因项目具体情况而有所不同。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-page {
  padding: 10px;
}

.content {
  margin-top: 10px;
}

.description {
  margin-top: 20px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.description h3 {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: bold;
}

.description p {
  margin: 0 0 10px;
  font-size: 14px;
  color: #666;
}
</style>