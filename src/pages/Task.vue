<script lang="ts" setup>
import { computed, ref } from "vue"

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
  <div class="shadow-none bg-white p-8 rounded-md">
    <el-table :data="filterTableData" :stripe="true" :border="true" table-layout="auto">
      <el-table-column type="selection" width="55" :selectable="selectable" />
      <el-table-column label="UUID" prop="_id" />
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Name CN" prop="nameCN" />
      <el-table-column label="State" prop="state" />
      <el-table-column label="Args" prop="args" />
      <el-table-column label="Kwargs" prop="kwargs" />
      <el-table-column label="Result" prop="result" />
      <el-table-column label="Received" prop="received" />
      <el-table-column label="Started" prop="started" />
      <el-table-column label="Runtime" prop="runtime" />
      <el-table-column label="Started" prop="started" />
      <el-table-column label="Worker" prop="worker" />
      <el-table-column label="CreatedAt" prop="createdAt" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
