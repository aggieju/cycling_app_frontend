import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../typed";


interface UserState {
    token: string; //| null;
    userProfile: UserType | null
    //  userProfile: UserType[];
    //  currentUser: UserType | null
}
const initialState: UserState = {
    // token: null,
    token: "",
    userProfile: null
    // userProfile: [],
    // currentUser: null
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersFetched: (state, action: PayloadAction<UserType>) => {
            // 3. Write a case in the slice/reducer to update the store
            console.log("action", action);
            // 4. Test: check the Redux store
            state.userProfile = action.payload;
        },
        loginSuccess: (state, action: PayloadAction<UserState>) => {
            console.log("action login", action)
            localStorage.setItem("token", action.payload.token);
            state.token = action.payload.token;
            state.userProfile = action.payload.userProfile;
        },
        logOut: (state, action: PayloadAction<undefined>) => {
            localStorage.removeItem("token");
            state.token = "";
            //  state.userProfile = [];



        },

        persistToken: (state, action: PayloadAction<string>) => {
            console.log("persistToken", action.payload)
            state.token = action.payload

        },




        tokenStillValid: (state, action: PayloadAction<UserType>) => {
            console.log("lala", action.payload)
            state.userProfile = action.payload;
            //    const token = localStorage.getItem("token")
            //    if (token) {
            //        state.token = token;
            //    }
        },


    }
});

export const { usersFetched, loginSuccess, logOut, tokenStillValid, persistToken } = usersSlice.actions;

export default usersSlice.reducer;

