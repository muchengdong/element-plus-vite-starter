<!-- eslint-disable style/brace-style -->
<!-- eslint-disable no-console -->
<!-- eslint-disable antfu/top-level-function -->
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from "element-plus"
import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { login } from "~/services/api"

const ruleFormRef = ref<FormInstance>()
const loading = ref<boolean>(false)
const route = useRoute()
const router = useRouter()
const ruleForm = reactive<API.LoginParams>({})

const rules = reactive<FormRules<API.LoginParams>>({
  username: [{ required: true, trigger: "blur" }],
  password: [{ required: true, trigger: "blur" }],
})

const handleLogin = async (params: API.LoginParams) => {
  loading.value = true
  try {
    const res = await login(params)
    console.log(res)
    if (res.status === 200) {
      ElMessage.success("Successfully.")
      const {
        query: { redirect },
      } = route
      const path = typeof redirect === "string" ? redirect : "/"
      router.replace(path)
    }
    console.log(res)
  } catch (error) {}

  loading.value = false
}

const handleSubmitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return false
  }
  await formEl.validate((valid) => {
    if (valid) {
      handleLogin(ruleForm)
      console.log("submit!")
    } else {
      console.log("error submit!")
    }
  })
}
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-300">
    <div class="h-full flex flex-col items-center justify-center">
      <div class="absolute top-4">
        <el-button type="primary" class="w-5 shadow-sm" color="#fff" round
          ><div class="i-ri-home-4-line mr-1" />
          Home
        </el-button>
      </div>
      <div class="w-auto rounded-xl bg-white p-6 opacity-80 shadow-md">
        <div class="text-center">
          <div>
            <el-icon size="26">
              <Lock />
            </el-icon>
          </div>
          <h3 class="mb-2">Welcome back</h3>
          <span>Don't have an account? <a href="">Sign up</a>.</span>
        </div>

        <el-form
          ref="ruleFormRef"
          class="mt-6"
          :model="ruleForm"
          :rules="rules"
          label-position="top"
          label-width="50"
          status-icon
        >
          <el-form-item label="Username" prop="username">
            <el-input
              v-model="ruleForm.username"
              type="text"
              maxlength="120"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              maxlength="120"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="mt-3 w-full"
              :loading="loading"
              :disabled="loading"
              round
              @click="handleSubmitForm(ruleFormRef)"
            >
              Continue
              <el-icon class="el-icon--right">
                <Right />
              </el-icon>
            </el-button>
          </el-form-item>
        </el-form>

        <div class="flex flex-col gap-2">
          <div>
            <el-divider content-position="center">or</el-divider>
          </div>
          <div>
            <el-button type="primary" color="#0f172a" class="w-full" round>
              <div class="i-ri-github-fill mr-1" />
              Continue with Github
            </el-button>
          </div>
          <div>
            <p class="text-sm">
              By signing in, you agree to our Terms of Service.
            </p>
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
