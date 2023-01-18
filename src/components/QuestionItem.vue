<template>
  <!-- 问题 -->
  <div class="question-wrap">
    <p>
      {{page}}.
      <span v-if="!this.option3">(判断)</span>
      <span v-else-if="this.isMulti">(多选)</span>
      <span v-else>(单选)</span>
       {{question}}
    </p>
    <div class="img-wrap" v-show="imgUrl">
        <van-image width="70%" height="4.2rem" :src="imgUrl" />
    </div>
  </div>
  <!-- 单选选项 -->
  <van-radio-group v-if="!this.isMulti" v-model="checkedArr[page - 1]" :disabled="Boolean(!examIng)">
      <van-cell-group inset>
        <!-- 选项1描述 -->
          <van-cell class="option-wrap" :title="option1 ?? '对' " 
            @click="checkedArr[page - 1] = examIng ? option1 ? 'A' : '对' : checkedArr[page - 1]">
            <!-- 单选框 -->
              <template #icon>
                  <van-radio class="option-check" :name="this.option1 ? 'A' : '对'">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                  </van-radio>
              </template>
          </van-cell>
        <!-- 选项2描述 -->
          <van-cell class="option-wrap" :title="option2  ?? '错'"  
            @click="checkedArr[page - 1] = examIng ? option2 ? 'B' : '错' : checkedArr[page - 1]">
            <!-- 单选框 -->
              <template #icon>
                  <van-radio class="option-check" :name="this.option1 ? 'B' : '错'">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                  </van-radio>
              </template>
          </van-cell>
        <!-- 选项3描述 -->
          <van-cell v-show="option3" class="option-wrap" :title="option3" clickable 
            @click="checkedArr[page - 1] = examIng ? 'C' : checkedArr[page - 1]">
            <!-- 单选框 --> 
            <template #icon>
                <van-radio class="option-check" name="C" :disabled="Boolean(!examIng)">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                    <van-icon v-else :name="props.checked ? 'cross': ''" 
                        :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                </van-radio>
            </template>
          </van-cell>
        <!-- 选项4描述 -->
          <van-cell v-show="option4" class="option-wrap" :title="option4" clickable
            @click="checkedArr[page - 1] = examIng ? 'D' : checkedArr[page - 1]">
            <!-- 单选框 -->
            <template #icon>
                <van-radio class="option-check" name="D">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                </van-radio>
            </template>
          </van-cell>
      </van-cell-group>
  </van-radio-group>

  <!-- 多选选项 -->
<van-checkbox-group v-else v-model="checkedArr[page - 1]" :disabled="Boolean(!examIng)">
    <van-cell-group inset>
        <!-- 选项1描述 -->
        <van-cell class="option-wrap" clickable :title="option1"
            @click="this.clickCheckbox(page-1, 'A')">
            <!-- 多选框 -->
            <template #icon>
                <van-checkbox class="option-check" name="A">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''"/>
                    </template>
                </van-checkbox>
            </template>
        </van-cell>
        <!-- 选项2描述 -->
        <van-cell class="option-wrap" clickable :title="option2  ?? '错'"
            @click="this.clickCheckbox(page-1, 'B')">
            <!-- 多选框 -->
            <template #icon>
                <van-checkbox class="option-check" name="B">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''" />
                    </template>
                </van-checkbox>
            </template>
        </van-cell>
        <!-- 选项3描述 -->
        <van-cell v-show="option3" class="option-wrap" :title="option3" clickable 
            @click="this.clickCheckbox(page-1, 'C')">
            <!-- 多选框 -->
            <template #icon>
                <van-checkbox class="option-check" name="C">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''" />
                    </template>
                </van-checkbox>
            </template>
        </van-cell>
        <!-- 选项4描述 -->
        <van-cell v-show="option4" class="option-wrap" :title="option4" clickable 
            @click="this.clickCheckbox(page-1, 'D')">
            <!-- 多选框 -->
            <template #icon>
                <van-checkbox class="option-check" name="D">
                    <template #icon="props">
                        <van-icon v-if="correct" :name="props.checked ? 'success': ''"
                            :class="props.checked ? 'right-color' : ''"/>
                        <van-icon v-else :name="props.checked ? 'cross': ''" 
                            :class="props.checked ? 'wrong-color' : ''" />
                    </template>
                </van-checkbox>
            </template>
        </van-cell>
    </van-cell-group>
</van-checkbox-group>
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
            checkedArr: this.getChoice()
        }
    },
    computed:{
        //是否为多选
        isMulti() {
            return this.$store.state.examInfo.result.list[this.page - 1].answer.length > 1
        },
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
        },
        examIng() {
            return this.$store.state.examIng
        },
        examRes() {
            return this.$store.state.examRes
        },
    },
    methods: {
        getChoice() {
            //初始化单选/多选默认绑定值
            if (this.$store.state.examRes.length === 0) {
                return new Array(10).fill('').map((str, i) => 
                    this.$store.state.examInfo.result.list[i].answer.length > 1 ? [] : str
                )
            }
            //获取历史记录选择
            let res = JSON.parse(localStorage.getItem('examRes'));
            return res.map(item => {
                if (item.answer.length > 1) {
                    return Array.from(item.choice.split(','))
                }
                return item.choice
            });
        },
        //处理多选框点击事件
        clickCheckbox(index, choice) {
            //答卷中禁用选择
            if(!this.examIng) return;
            //该选项是否未被选中
            if (this.checkedArr[index].indexOf(choice) === -1) {
                this.checkedArr[index].push(choice);
                this.checkedArr[index].sort();
            } else {
                this.checkedArr[index] = this.checkedArr[index].filter(item => item != choice);
            }
        }
    },
    beforeUnmount() {
        //在提交卷子时保存答卷
        if(this.examIng) {
            this.$store.commit('setExamRes', this.checkedArr.map((item, i) => {
                return {
                    choice: typeof item === "string" ? item : item.join(','),
                    answer: this.$store.state.examInfo.result.list[i].answer,
                    explain: this.$store.state.examInfo.result.list[i].explain
                }
            }));
        }
        }
        
}
</script>

<style>
:root {
    --van-blue: #17C162; 
    --van-cell-font-size: 18px;
    --van-radio-disabled-background-color: #fff;
    --van-checkbox-disabled-background-color: #fff;
}
.question-wrap {
    padding: 15px;
    font-size: 18px;
}
.img-wrap {
    padding-top: 10px;
    width:100%;
    display: flex;
    justify-content: center;
}
.option-wrap {
    padding-left: 0;
}
.option-wrap .option-check {
    padding-right: 10px;
}
.option-wrap .option-check .wrong-color {
    background-color: red;
    border-color: red;
    color: #fff;
}
.option-wrap .option-check .right-color {
    background-color: #17C162;
    border-color: #17C162;
    color: #fff;
}
</style>