import { RootState } from "../../app/store";

export const selectCamping = (reduxState: RootState) => {
    return reduxState.camping.camping;
};


