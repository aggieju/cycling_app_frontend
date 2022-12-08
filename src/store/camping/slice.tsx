import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, CampingType } from "../../typed";


interface CampingState {
    // token: string; //| null;
    // userProfile: UserType | null;
    camping: CampingType[] | null
    //  userProfile: UserType[];
    //  currentUser: UserType | null
}
const initialState: CampingState = {
    // token: null,
    //token: "",
    // userProfile: null,
    camping: [],
    // userProfile: [],
    // currentUser: null
};

export const campingsSlice = createSlice({
    name: "campings",
    initialState,
    reducers: {
        campingsFetched: (state, action: PayloadAction<CampingType[]>) => {
            // 3. Write a case in the slice/reducer to update the store
            console.log("action", action);
            // 4. Test: check the Redux store
            state.camping = action.payload;
        },


    }
});

export const { campingsFetched } = campingsSlice.actions;

export default campingsSlice.reducer;

