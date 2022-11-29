import { RootState } from "../../app/store";

export const selectUsers = (reduxState: RootState) => {
    return reduxState.user.userProfile;
};

export const selectToken = (reduxState: RootState) => {
    return reduxState.user.token;
};

