<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus"
import { Orange } from "@element-plus/icons-vue"
import { reactive, ref } from "vue"

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"))
    } else {
      if (value < 18) {
        callback(new Error("Age must be greater than 18"))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"))
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField("checkPass")
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "blur" }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!")
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="flex items-center justify-center bg-gray-300 h-screen">
    <div class="flex h-full items-center">
      <div class="shadow-md bg-white p-6 rounded-xl w-4/5 opacity-80">
        <div class="text-center">
          <div>
            <el-icon size="26">
              <Lock />
            </el-icon>
          </div>
          <h3 class="mb-2">Welcome back</h3>
          <span>Don't have an account? Sign up.</span>
        </div>

        <el-form
          ref="ruleFormRef"
          class="mt-6"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-position="top"
          label-width="50"
        >
          <el-form-item label="Password" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-full mt-3"
              round
              @click="submitForm(ruleFormRef)"
            >
              Continue
              <el-icon class="el-icon--right">
                <Right />
              </el-icon>
            </el-button>
          </el-form-item>
        </el-form>

        <div class="flex flex-col gap-3">
          <div>
            <el-divider content-position="center">or</el-divider>
          </div>
          <div>
            <el-button
              type="primary"
              :icon="Orange"
              color="#0f172a"
              class="w-full"
              round
              >Continue with Github</el-button
            >
          </div>
          <div>
            <span> By signing in, you agree to our Terms of Service. </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__label) {
  margin-bottom: 3px !important;
}

.el-input {
  --el-input-height: 36px;
}

.el-button {
  height: 36px;
}
</style>
