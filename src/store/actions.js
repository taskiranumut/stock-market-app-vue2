import { appAxios } from "@/utils/appAxios";

export default {
  getSymbolDataFromApi({ commit, state }, dataQuery) {
    return appAxios
      .get("/", {
        params: {
          function: dataQuery,
          symbol: state.inputValue,
          outputsize: "compact",
          datatype: "json",
        },
      })
      .then((res) => {
        switch (dataQuery) {
          case "TIME_SERIES_DAILY":
            commit(
              "SET_DAILY_DATAS",
              formatData(res.data, "Time Series (Daily)")
            );
            break;
          case "TIME_SERIES_WEEKLY":
            commit(
              "SET_WEEKLY_DATAS",
              formatData(res.data, "Weekly Time Series")
            );
            break;
          case "TIME_SERIES_MONTHLY":
            commit(
              "SET_MONTHLY_DATAS",
              formatData(res.data, "Monthly Time Series")
            );
            break;
          default:
            break;
        }
      })
      .catch((e) => console.log(e));
  },
  postLogToLocalStorage({ commit, state }, logData) {
    commit("SET_LOG", logData);
    localStorage.setItem("log", JSON.stringify(state.log));
  },
  getLogFromLocalStorage({ commit }) {
    if (localStorage.getItem("log")) {
      const log = JSON.parse(localStorage.getItem("log"));
      commit("FILL_LOG", log);
    }
  },
};

const formatData = (data, timeSeriesName) => {
  let datas = Object.keys(data[timeSeriesName]).map((item) => ({
    [item]: data[timeSeriesName][item],
  }));
  return datas.slice(0, 50);
};
