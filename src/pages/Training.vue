<script lang="ts" setup>
import { useAxios } from "@vueuse/integrations/useAxios"
import { computed, ref } from "vue"
import { Edit } from "@element-plus/icons-vue"

const { data, isFinished } = useAxios("/api/tasks")

const search = ref("")
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const selectable = (row: API.TaskItem) => ![1, 31].includes(row.id)
const handleEdit = (index: number, row: API.TaskItem) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: API.TaskItem) => {
  console.log(index, row)
}

const tableData: API.TaskItem[] = [
  {
    _id: "123151",
    name: "123151",
    nameCN: "123151",
    state: "123151",
    args: "123151",
    kwargs: "123151",
    result: "123151",
    received: "123151",
    started: "123151",
    runtime: "123151",
    worker: "123151",
    createdAt: "123151",
  },
  {
    _id: "123151",
    name: "123151",
    nameCN: "123151",
    state: "123151",
    args: "123151",
    kwargs: "123151",
    result: "123151",
    received: "123151",
    started: "123151",
    runtime: "123151",
    worker: "123151",
    createdAt: "123151",
  },
  {
    _id: "123151",
    name: "123151",
    nameCN: "123151",
    state: "123151",
    args: "123151",
    kwargs: "123151",
    result: "123151",
    received: "123151",
    started: "123151",
    runtime: "123151",
    worker: "123151",
    createdAt: "123151",
  },
  {
    _id: "123151",
    name: "123151",
    nameCN: "123151",
    state: "123151",
    args: "123151",
    kwargs: "123151",
    result: "123151",
    received: "123151",
    started: "123151",
    runtime: "123151",
    worker: "123151",
    createdAt: "123151",
  },
]
</script>

<template>
  <div class="flex flex-row gap-4 h-full">
    <div class="basis-1/8 rounded-md bg-white p-6 shadow-none">
      <div class="training-list flex flex-col gap-2 gap-y-4">
        <div class="flex flex-col gap-y-2">
          <div>
            <el-input placeholder="Please input"> </el-input>
          </div>
          <div class="flex justify-between">
            <div></div>
            <div><el-button type="primary" :icon="Edit">Add</el-button></div>
          </div>
        </div>

        <div class="flex flex-col gap-y-2">
          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>
          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>
          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>
          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>

          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>

          <el-card class="training-card" shadow="hover">
            123155<br />
            123155<br />
            123155<br />
            123155<br />123155<br />
            123155<br />
          </el-card>
        </div>

        <div>
          <el-pagination
            background
            layout="prev, pager, next"
            :pager-count="4"
            :total="50"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 rounded-md bg-white p-8 shadow-none">2</div>
  </div>
</template>

<style lang="scss" scoped>
.el-input {
  height: 38px;
}

.el-button {
  height: 38px;
}
</style>
