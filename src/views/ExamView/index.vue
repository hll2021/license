<template>
    
    <!-- 题目导航栏 -->
    <van-pagination v-model="currentPage" :page-count="10" mode="simple" prev-text="上一题" next-text="下一题"/>

    <!-- 当前题目 -->
    <QuestionItem :page="currentPage" />

    <!-- 倒计时和提交按钮 -->
    <div class="submit-exam-wrap">
        <van-count-down :time="time" ref="countDown" format="倒计时: mm : ss" class="count-down"
            @change="warning" @finish="this.$router.replace('/result')"/>
        <van-button class="submit-exam-button" round type="success" @click="handIn">提交</van-button>
    </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem'
export default {
    data(){
        return {
            currentPage: 1, //当前分页
            remain: this.time //当前剩余时间
        }
    },
    computed: {
        //倒计时，转换为ms
        time() {
            return (+this.$store.state.remainTime) * 1000
        },
        examIng() {
            return this.$store.state.examIng
        }
    },
    components: {
        QuestionItem
    },
    methods: {
        handIn() {
            vant.Dialog.confirm({
                title: '提示',
                message:
                    '是否确认提交？',
            })
                .then(() => {
                    //重置倒计时
                    this.$store.commit('setRemainTime', 240);
                    //跳转答题结果
                    this.$router.replace('/result');
                })
                .catch(() => {
                    return;
                });
        },
        warning(cur) {
            this.remain = Math.floor(cur.total / 1000);
            if(!cur.minutes && cur.seconds<= 10) {
                const time = document.querySelector('.count-down');
                time.style.color = 'red'
            }
        }
    },
    beforeUnmount() {
        //中途退出，保存倒计时
        if (this.examIng === 'true') {
            this.$store.commit('setRemainTime', this.remain);
        } 
    }
    
}
</script>

<style>
.van-loading {
    padding-top: 30px;
}
.van-count-down {
    text-align: center;
    font-size: 18px;
    padding-top: 15px;
}
.submit-exam-wrap {
    position: absolute;
    bottom: 15%;
    left: 50%;
    font-size: 18px;
    transform: translateX(-50%);
}
.submit-exam-button {
    position: absolute;
    left: 50%;
    top: 130%;
    width: 2rem;
    transform: translateX(-50%);
}
</style>