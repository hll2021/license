<template>
  <!-- 问题 -->
  <div class="question-wrap">
    <p>
      {{page}}. {{question}}
    </p>
    <div class="img-wrap" v-show="imgUrl">
        <van-image  width="70%" height="4.2rem" :src="imgUrl" />
    </div>
  </div>

  <!-- 选项 -->
  <van-radio-group v-model="checkedArr[page - 1]">
      <van-cell-group inset>
        <!-- 选项1描述 -->
          <van-cell class="option-wrap" clickable 
            :title="option1 ?? '对' " 
            @click="checkedArr[page - 1] = this.option1 ? 'A' : '对'">
            <!-- 单选框 -->
              <template #icon>
                  <van-radio class="option-radio" 
                    :name="this.option1 ? 'A' : '对'">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                  </van-radio>
              </template>
          </van-cell>
          <van-cell class="option-wrap" clickable
            :title="option2  ?? '错'"  
            @click="checkedArr[page - 1] = this.option2 ? 'B' : '错'">
            <!-- 单选框 -->
              <template #icon>
                  <van-radio class="option-radio"
                    :name="this.option1 ? 'B' : '错'">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                  </van-radio>
              </template>
          </van-cell>
        <!-- 选项2描述 -->
          <van-cell v-show="option3" class="option-wrap"
            :title="option3" clickable 
            @click="checkedArr[page - 1] = 'C'">
            <!-- 单选框 -->
            <template #icon>
                <van-radio class="option-radio" name="C" 
                    :checked-color="this.correct ? '#17C162' : 'red'">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"/>
                    <van-icon v-else :name="props.checked ? 'cross': ''" :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                </van-radio>
            </template>
          </van-cell>
        <!-- 选项3描述 -->
          <van-cell v-show="option4" class="option-wrap"
            :title="option4" clickable
            @click="checkedArr[page - 1] = 'D'">
            <!-- 单选框 -->
            <template #icon>
                <van-radio class="option-radio" name="D">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                </van-radio>
            </template>
          </van-cell>
      </van-cell-group>
  </van-radio-group>
</template>

<script>
export default {
    props: {
        page: {
            type: [Number, String],
            default: 1
        },
        correct: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            checkedArr: this.getLocalRes() || new Array(10).fill('')
        }
    },
    computed:{
        //题目图片
        imgUrl() {
            return this.$store.state.examInfo.result.list[this.page - 1].pic || ''
        },
        question() {
            return this.$store.state.examInfo.result.list[this.page - 1].question
        },
        option1() {
            return this.$store.state.examInfo.result.list[this.page - 1].option1
        },
        option2() {
            return this.$store.state.examInfo.result.list[this.page - 1].option2
        },
        option3() {
            return this.$store.state.examInfo.result.list[this.page - 1].option3
        },
        option4() {
            return this.$store.state.examInfo.result.list[this.page - 1].option4
        }
    },
    methods: {
        //继续测试时获取历史记录选择
        getLocalRes() {
            if(!localStorage.getItem('examRes')) return;
            let res = JSON.parse(localStorage.getItem('examRes'))
            return res.map(item => item.choice);
        },
    },
    beforeUnmount() {
        //保存答卷
        this.$store.commit('setExamRes', this.checkedArr.map((item, i) => {
            return {
                choice: item,
                answer: this.$store.state.examInfo.result.list[i].answer,
                explain: this.$store.state.examInfo.result.list[i].explain
            }
        }));
    }
}
</script>

<style>
:root {
    --van-blue: #17C162; 
    --van-cell-font-size: 18px;
}
.question-wrap {
    padding: 15px;
    font-size: 18px;
}
.img-wrap {
    width:100%;
    display: flex;
    justify-content: center;
}
.option-wrap {
    padding-left: 0;
}
.option-radio {
    padding-right: 10px;
}
.option-radio .wrong-color {
    background-color: red;
    border-color: red;
}
</style>