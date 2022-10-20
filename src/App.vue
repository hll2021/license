<template>
    <router-view></router-view>
</template>
<script>
export default {
    //在答题页面上刷新/关闭浏览器时弹出提示
    beforeCreate() {
        window.addEventListener('beforeunload', (event) => {
            if (this.$route.path === '/exam') {
                event.preventDefault();
                event.returnValue = '';
            }
        });
    }
}
</script>
<style>

</style>
