import request from '@/utils/http'
// 例子
export const addTask = (data) => {
  console.log(data)
  request(`get|bets/bets`, data)
}
