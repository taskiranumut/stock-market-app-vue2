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
            commit("SET_DAILY_DATAS", res.data);
            break;
          case "TIME_SERIES_WEEKLY":
            commit("SET_WEEKLY_DATAS", res.data);
            break;
          case "TIME_SERIES_MONTHLY":
            commit("SET_MONTHLY_DATAS", res.data);
            break;
          default:
            break;
        }
      })
      .catch((e) => console.log(e));
  },
};
