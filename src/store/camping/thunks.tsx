import { apiUrl } from "../../config/constants";
import axios from "axios";
import { RootState, AppDispatch } from "../../app/store"
import { CampingType } from "../../typed";


export const fetchCampings = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const response = await axios.get<CampingType[]>(`${apiUrl}/campings`);
    // console.log("response users", response.data);
    // dispatch(usersFetched(response.data));

};