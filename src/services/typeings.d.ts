declare namespace API {
  interface LoginParams {
    username?: string
    password?: string
  }

  interface TaskItem {
    _id: string
    name?: string
    nameCN?: string
    state?: string
    args?: string
    kwargs?: string
    result?: string
    received?: string
    started?: string
    runtime?: string
    worker?: string
    createdAt?: string
  }
}
