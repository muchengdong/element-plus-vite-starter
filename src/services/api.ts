/* eslint-disable style/comma-dangle */
import service from "./request"

/** 登录接口 POST /api/login/account */
export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any }
) {
  return service<API.LoginResult>("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取规则列表 GET /api/rule */
export async function tasks(
  params: {
    // query
    /** 当前的页码 */
    current?: number
    /** 页面的容量 */
    pageSize?: number
  },
  options?: { [key: string]: any }
) {
  return service<API.TaskItemList>("/api/tasks", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 新建规则 POST /api/task */
export async function addTask(options?: { [key: string]: any }) {
  return service<API.TaskItem>("/api/task", {
    method: "POST",
    data: {
      method: "post",
      ...(options || {}),
    },
  })
}
