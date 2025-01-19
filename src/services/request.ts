/* eslint-disable no-console */
/* eslint-disable style/brace-style */
/* eslint-disable style/comma-dangle */
// 导入axios
import axios from "axios"
// 使用element-ui Message用以消息提醒
import { ElMessage, ElMessageBox } from "element-plus"
// 导入QS
import qs from "qs"

// 创建新的axios实例
const service = axios.create({
  // 超时时间 单位是ms
  timeout: 20 * 1000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.withCredentials = true
    config.xsrfCookieName = "csrf_access_token"
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求添加
    // config.data = qs.stringify(config.data) // json数据转化
    // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // 判断localStorage是否存在token
    // if (localStorage.getItem("token")) {
    //   // 携带token到axios参数
    //   config.headers.Authorization = "111"
    //   config.params = {
    //     // 固定携带参数
    //   }
    // }
    // const token = getCookie('名称');//这里取token之前，需要先拿到token,存一下
    // if(token){
    //     config.params = {'token':token} //如果要求携带在参数中
    //     config.headers.token= token; //如果要求携带在请求头中
    // }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("进入响应拦截器")
    // 接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response
  },
  (error) => {
    console.log(error)
    // 接收到异常响应的处理开始
    if (error && error.response) {
      // 根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求"
          break
        case 401:
          error.message = "未授权，请重新登录"
          break
        case 403:
          error.message = "拒绝访问"
          break
        case 404:
          error.message = "请求错误,未找到该资源"
          window.location.href = "/NotFound"
          break
        case 405:
          error.message = "请求方法未允许"
          break
        case 408:
          error.message = "请求超时"
          break
        case 500:
          error.message = "服务器端出错"
          break
        case 501:
          error.message = "网络未实现"
          break
        case 502:
          error.message = "网络错误"
          break
        case 503:
          error.message = "服务不可用"
          break
        case 504:
          error.message = "网络超时"
          break
        case 505:
          error.message = "http版本不支持该请求"
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        ElMessage.error("服务器响应超时，请刷新当前页")
      }
      error.message = "连接服务器失败"
    }
    ElMessage.error(error.message)
    return Promise.resolve(error.response)
  }
)

export default service
