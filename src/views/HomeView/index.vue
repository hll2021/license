<template>
 <div>
    <!-- 主页图片 -->
    <van-image width="100%" height="4rem" :src="require('./img/encourage.png')" lazy-load/>
    <!-- 上次未完成考试界面 -->
    <div v-if="examIng" class="remain-wrap">
        <div class="remain">
            <p class="title">您还有未完成的考试</p>
            <p class="subject-title"> 科目{{ examSubject == 1 ? '一' : '四' }} {{examType}}</p>
            <div class="submit-button">
                <van-button type="success" @click="this.$router.push('/exam')">继续考试</van-button>
                <van-button type="success" class="exit" @click="abandonExam">放弃考试</van-button>
            </div>
        </div>
    </div>
    <!-- 刷题表单界面 -->
    <div v-else>
        <van-form @submit="onSubmit" class="form">
            <!-- 单选科目 -->
            <p class="title"> 请选择考试科目 </p>
            <van-field name="radioGroup2">
                <template #input>
                    <van-radio-group class="subject-group" v-model="checkedSubject" direction="horizontal">
                        <van-row justify="space-around">
                            <van-col class="subject" span="8">
                                <van-radio name="1">科目一</van-radio>
                            </van-col>
                            <van-col class="subject" span="8">
                                <van-radio name="4">科目四</van-radio>
                            </van-col>
                        </van-row>
                    </van-radio-group>
                </template>
            </van-field>
            <!-- 单选题型 -->
            <p class="title"> 请选择题目类型 </p>
            <van-field name="radioGroup2">
                <template #input>
                    <van-radio-group v-model="checkedType" direction="horizontal">
                        <van-row justify="space-around">
                            <van-col class="type-van-col" span="5" offset="12">
                                <van-radio name="C1"> C1 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="C2"> C2 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="C3"> C3 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="B1"> B1 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="B2"> B2 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="A1"> A1 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="A2"> A2 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="A3"> A3 </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="D"> D </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="E"> E </van-radio>
                            </van-col>
                            <van-col class="type-van-col" span="5">
                                <van-radio name="F"> F </van-radio>
                            </van-col>
                        </van-row>
                    </van-radio-group>
                </template>
            </van-field>
            <!-- 提交按钮 -->
            <div class="submit-button">
                <van-button type="success" native-type="submit">开始刷题</van-button>
            </div>
        </van-form>
    </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            checkedSubject: this.$store.state.examSubject, 
            checkedType: this.$store.state.examType
        }
    },
    computed: {
        examSubject() {
            return this.$store.state.examSubject
        },
        examType() {
            return this.$store.state.examType
        },
        examIng() {
            return this.$store.state.examIng
        }
    },
    methods: {
        onSubmit() {
            //设置考试科目
            this.$store.commit('setExamSubject', this.checkedSubject);
            this.$store.commit('setExamType', this.checkedType);
            
            //获取试题并跳转
            this.$store.dispatch('getQuestion');
        },
        //放弃继续考试
        abandonExam() {
            this.$store.commit('setExamIng', 0);
            this.$store.commit('delExamInfo');
            this.$store.commit('delExamRes');
            //重置倒计时
            this.$store.commit('setRemainTime', 240);
        }
    }
}
</script>


<style>
:root {
    --van-radio-label-color: #557964;
    --van-nav-bar-title-text-color: #17C162;
    --van-nav-bar-icon-color: #17C162;
    --van-nav-bar-background-color: #F5FCF7;
    --van-tabbar-background-color: #F5FCF7;
    --van-tabbar-item-active-background-color: #EDFCF5;
    --van-tabbar-item-text-color: #557964;
    --van-nav-bar-title-font-size: 18px;
    --van-radio-checked-icon-color: #17C162;
}

.van-image {
    opacity: 0.8;
}
.remain-wrap {
   margin: 100px 0;
}

.subject-group,
.van-row {
    width: 100%;
}
.van-radio-group .type-van-col {
    margin: 10px 10px 0 0;
    padding: 5px 10px;
    vertical-align: middle;
    font-size: 14px;
    background-color: #FAFAFA;
    border: 1px solid #ccc;
    border-radius: 20px;
}
.van-radio--horizontal {
    margin-right: 0;
}
.subject {
    margin-top: 10px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: #FAFAFA;
    border: 5px solid #C6F2D6;
}
.title,
.subject-title {
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
}
.subject-title {
    font-size: 25px;
}
.submit-button {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
.van-button {
    font-size: 18px;
}
.exit {
    margin-left: 30px;
}
</style>
