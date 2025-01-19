<script lang="ts" setup>
import { useAxios } from "@vueuse/integrations/useAxios"
import { computed, ref } from "vue"

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
  <div class="flex flex-row gap-4">
    <div class="basis-1/6 rounded-md bg-white p-8 shadow-none">
      <div class="training-list flex flex-col p-2 gap-2">
        <div class="training-card rounded-md shadow-none">
          123155<br/>
          123155<br/>
          123155<br/>
          123155<br/>123155<br/>
          123155<br/>
        </div>

        <div class="training-card rounded-md shadow-none">
          123155<br/>
          123155<br/>
          123155<br/>
          123155<br/>123155<br/>
          123155<br/>
        </div>

        <div class="training-card rounded-md shadow-none">
          123155<br/>
          123155<br/>
          123155<br/>
          123155<br/>123155<br/>
          123155<br/>
        </div>

      </div>
    </div>
    <div class="flex-1 rounded-md bg-white p-8 shadow-none">2</div>
  </div>
</template>
