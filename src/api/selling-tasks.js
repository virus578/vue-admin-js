import request from '@/utils/http'
// 添加新任务
export const addTask = (data) => request(`post|task/create`, data)
