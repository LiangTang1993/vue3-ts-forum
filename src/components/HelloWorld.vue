<template>
  <div>
    112
    <img
      title="使用Sina API获取新浪财经的证券股票数据接口(时价 K线等) - 老道 - 我的博客"
      alt="使用Sina API获取新浪财经的证券股票数据接口(时价 K线等) - 老道 - 我的博客"
      src="http://image.sinajs.cn/newchart/daily/n/sh000001.gif"
      style="width: 400px; height: 400px;"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
onMounted(() => {
  {
    axios.get('http://127.0.0.1:8000/money/sinaQuery').then(res => {
      //   alert(res)
    })
  }
})
</script>

<style scoped></style>
