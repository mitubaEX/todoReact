// 文字列定数
export const CHANGE_NAME     = 'CHANGE_NAME'
export const CHANGE_AGE      = 'CHANGE_AGE'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'

// action creaters
export const changeName = name => ({
  type: CHANGE_NAME,
  name,
})
export const changeAge = age => ({
  type: CHANGE_AGE,
  age,
})
export const initializeForm = () => ({
  type: INITIALIZE_FORM,
})
