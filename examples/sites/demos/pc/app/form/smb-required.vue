<template>
  <div class="demo-form">
    <div class="mb-12">
      是否隐藏星号：
      <tiny-switch v-model="hideRequiredAsterisk"></tiny-switch>
    </div>
    <tiny-form
      ref="ruleFormRef"
      :hide-required-asterisk="hideRequiredAsterisk"
      :model="createData"
      :rules="rules"
      :validate-on-rule-change="isvalidate"
      label-width="100px"
      validate-type="text"
      :inline-message="true"
      @validate="validate"
    >
      <tiny-form-item label="用户名" prop="username">
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="昵称（可选）" prop="nickname">
        <tiny-input v-model="createData.nickname"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit()"> 注册 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="jsx">
import { Form, FormItem, Input, Button, Modal, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinySwitch: Switch
  },
  data() {
    let validatePass = (rule, value, callback) => {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'))
      } else {
        callback()
      }
    }

    return {
      hideRequiredAsterisk: true,
      createData: {
        username: '',
        password: '',
        nickname: ''
      },
      isvalidate: true,
      rules: {
        username: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    validate(val) {
      Modal.message({
        message: `表单项被校验后触发的事件,所校验字段为:${val}`,
        status: 'info'
      })
    },
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          Modal.alert('校验通过，开始注册！')
        } else {
          Modal.message({ message: '校验不通过！！', status: 'warning' })
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.mb-12 {
  margin-bottom: 12px;
}
</style>
