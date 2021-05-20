export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'
export const ADDTASK = 'addTask'
export const REMOVETASK = 'removeTask'

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