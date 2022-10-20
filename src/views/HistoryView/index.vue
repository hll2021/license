<template>
<div>
    <!-- 科目标签 -->
    <van-tabs>
        <van-tab title="科目一">
            <p v-if="this.historyOneArr.length === 0" class="title null">暂无记录, 快去刷题吧~</p>
            <van-icon v-else name="delete-o" class="delete-icon" @click="deleteAllOne"/>
            <ul>
                <li v-for="(item, index) in this.historyOneArr" :key="index" class="history-item">
                    <p>题目类型: {{item.examType}}</p>
                    <h1>答对题数:
                        <span class="score">{{ item.examScore }} / 10</span>
                    </h1>
                    <van-button class="explain-button" @click="this.toResult(item)">解析</van-button>
                </li>
            </ul>
        </van-tab>
        <van-tab title="科目四">
            <p v-if="this.historyFourArr.length === 0" class="title null">暂无记录, 快去刷题吧~</p>
            <van-icon v-else name="delete-o" class="delete-icon" @click="deleteAllFour"/>
            <ul>
                <li v-for="(item, index) in this.historyFourArr" :key="index" class="history-item">
                    <p>题目类型: {{item.examType}}</p>
                    <h1>答对题数:
                        <span class="score">{{ item.examScore }} / 10</span>
                    </h1>
                    <van-button class="explain-button" @click="this.toResult(item)">解析</van-button>
                </li>
            </ul>
        </van-tab>
    </van-tabs>

</div>
</template>

<script>
export default {
    computed: {
        //科目一历史记录
        historyOneArr() {
            return this.$store.state.historyOneArr
        },
        //科目四历史记录
        historyFourArr() {
            return this.$store.state.historyFourArr
        }
    },
    methods: {
        //跳转答卷页面
        toResult(item) {
            //设置答卷科目、提醒、试题、结果信息
            this.$store.commit('setExamSubject', item.examSubject);
            this.$store.commit('setExamType', item.examType);
            this.$store.commit('setExamInfo', item.examInfo);
            this.$store.commit('setExamRes', item.examRes);
            
            this.$router.push('/result');
        },
        //删除科目一历史记录
        deleteAllOne() {
            vant.Dialog.confirm({
                title: '提示',
                message:
                    '是否确认删除所有科目一答题记录？',
            })
                .then(() => {
                    this.$store.commit('setHistoryOneArr', []);
                })
                .catch(() => {
                    return;
                });
        },
        //删除科目四历史记录
        deleteAllFour() {
            vant.Dialog.confirm({
                title: '提示',
                message:
                    '是否确认删除所有科目四答题记录？',
            })
                .then(() => {
                    this.$store.commit('setHistoryFourArr', []);
                })
                .catch(() => {
                    return;
                });
        }
    }
}
</script>

<style>
:root{
    --van-sidebar-background-color: #fff;
    --van-sidebar-selected-background-color: #EDFCF5;
    --van-tabs-bottom-bar-color: #557964;
    --van-sidebar-selected-border-color: #557964;
    --van-sidebar-width: 1.3rem;
    --van-sidebar-padding: 0.36rem;
}
.history-item {
    position: relative;
    margin: 10px;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    line-height: 35px;
}
.history-item .score {
   color: red;
}
.delete-icon {
    position:fixed;
    top: 1.5%;
    right: 4%;
    color: #17C162;
    z-index: 100;
}
.explain-button {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    /* width: 1.8rem; */
    /* height: 1.8rem; */
    line-height: 0.6rem;
    font-size: 16px;
    color: #557964;
    border-color: #ccc;
    background-color: #F5FCF7;
    border-radius: 0.5rem;
}
.null {
    color: #ccc;
}
</style>