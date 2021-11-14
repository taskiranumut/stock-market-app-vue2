export default {
  SET_INPUT_VALUE: (state, value) => (state.inputValue = value),
  SET_DAILY_DATAS: (state, data) => (state.symbolDatas.dailyDataSet = data),
  SET_WEEKLY_DATAS: (state, data) => (state.symbolDatas.weeklyDataSet = data),
  SET_MONTHLY_DATAS: (state, data) => (state.symbolDatas.monthlyDataSet = data),
  SET_CURRENT_SYMBOL_DATA: (state, data) => (state.currentSymbolData = data),
  RESET_INPUT_VALUE: (state) => (state.inputValue = null),
  RESET_SYMBOL_DATAS: (state) => {
    for (const key in state.symbolDatas) state.symbolDatas[key] = null;
    // state.currentSymbolData = null;
  },
  SET_IS_ADMIN: (state, status) => (state.isAdmin = status),
  SET_IS_ACTIVE_SNACKBAR: (state, status) => (state.isActiveSnackBar = status),
  SET_LOG: (state, data) => state.log.push(data),
  FILL_LOG: (state, data) => (state.log = data),
};
