import { RootState } from "../../app/store";

export const selectAppLoading = (reduxState: RootState) => {
    return reduxState.appState.loading;
};

