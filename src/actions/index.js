export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'
export const ADDTASK = 'addTask'
export const REMOVETASK = 'removeTask'
export const CHECKTASK = 'checkTask'

// Actionを記載（オブジェクトです）
export const countPlus = () => ({
  type: COUNTPLUS
})

export const countMinus = () => ({
  type: COUNTMINUS
})
 
export const addTask = (task) => ({
  type: ADDTASK,
  task: {
    title:task,
    flg: false
  }
})

export const removeTask = index => ({
  type: REMOVETASK,
  remove: {
    index:index
  }
})

export const checkTask = (flg,index) => ({
  type: CHECKTASK,
  flg: !flg,
  index: index,
})