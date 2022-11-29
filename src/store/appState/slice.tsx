import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    loading: Boolean;
}

const initialState: UserState = {
    loading: false,
};

export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        appLoading: (state) => {
            state.loading = true;
        },
        appDoneLoading: (state) => {
            state.loading = false;
        },

    },
});

export const { appLoading, appDoneLoading } =
    appStateSlice.actions;

export default appStateSlice.reducer;