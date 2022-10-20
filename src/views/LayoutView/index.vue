<template>
   <!-- 头部导航栏 -->
   <van-nav-bar class="nav-bar" fixed
      :left-arrow="$route.meta.showBack" 
      @click-left="$router.push('/layout/home')">
      <template #title >
         <van-icon :name="$route.meta.icon" size="0.55rem" color="#17C162"/>
         {{ $route.meta.title }}
      </template>
   </van-nav-bar>

   <!-- 二级路由页面 -->
   <router-view v-slot="{ Component }" style="padding: 1.23rem 0 1.4rem 0">
      <transition name="fade" mode="out-in">
         <keep-alive>
            <component :is="Component"/>
         </keep-alive>
      </transition>
   </router-view>

   <!-- 底部标签栏 -->
   <van-tabbar route fixed active-color="#17C162">
      <van-tabbar-item replace to="/layout/home" icon="records">刷题</van-tabbar-item>
      <van-tabbar-item replace to="/layout/history" icon="clock-o">最近</van-tabbar-item>
   </van-tabbar>
</template>

<script>
export default {
   name: 'layout-view'
}
</script>

<style scoped>
/* 顺序 enter（进入）和leave（离开）
状态 from（开始）-> active（过渡）-> to（结束）
.动画名-顺序-状态 */
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
   opacity: 1;
}
.fade-enter-active {
   transition: all 0.3s;
}
.fade-leave-active {
   transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>