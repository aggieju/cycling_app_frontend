import { apiUrl } from "../../config/constants";
import axios from "axios";
import { RootState, AppDispatch } from "../../app/store"
import { usersFetched, campingPostSuccess } from "../user/slice"
import { UserType } from "../../typed";
//import { selectToken } from "./selectors";
import { appLoading, appDoneLoading } from "../appState/slice";
//import { showMessageWithTimeout } from "../appState/thunks";
import { loginSuccess, logOut, tokenStillValid, persistToken } from "./slice";


export const signUp = (name: string, email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    // console.log("im here")
    dispatch(appLoading());

    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      }); console.log("userr", name, email, password)


      dispatch(
        loginSuccess({ token: response.data.token, userProfile: response.data.user, camping: response.data.camping })
      );
      //  dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error: any) { console.log(error) }
    /*  } catch (error: any) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(
            setMessage({
              variant: "danger",
              dismissable: true,
              text: error.response.data.message,
            })
          );
        } else {
          console.log(error.message);
          dispatch(
            setMessage({
              variant: "danger",
              dismissable: true,
              text: error.message,
            })
          );
        }*/
    dispatch(appDoneLoading());
    //}
  };
};


export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    console.log("login data", response.data)
    dispatch(
      loginSuccess({ token: response.data.token, userProfile: response.data.user, camping: response.data.camping })
    );

  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    // get token from the state
    const token = localStorage.getItem("token")//selectToken(getState());
    console.log("token", token)
    if (token) {
      dispatch(persistToken(token))
    }


    // if we have no token, stop
    // if (token === null) return;
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get<UserType>(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      console.log("token response data", response.data)

      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());

      dispatch(appDoneLoading());
    }
  };
};




export const fetchUsers = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const response = await axios.get<UserType[]>(`${apiUrl}/users`);
  // console.log("response users", response.data);
  // dispatch(usersFetched(response.data));

};

export const updateUser = (email: string, phone: string, instagram_blog: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const response = await axios.patch(`${apiUrl}/updateUser`, {
    email, phone, instagram_blog,
  },
    { headers: { Authorization: `Bearer ${getState().user.token}` } }
  );

  dispatch(getUserWithStoredToken())
  console.log("response", response.data);


};

export const postCamping =
  (name: string,
    description: string,
    wild_camping: boolean,
    pricePerNightPp: number,
    currency: string,
    latitude: number,
    longitude: number,
    country: string,
    photo1: string,
    photo2: string,
    photo3: string,
  ) =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
      try {
        console.log("getsTATE", getState());
        const userId = getState().user.userProfile?.id;
        if (!userId) {
          return;
        }
        const response = await axios.post(`${apiUrl}/postCamping`,

          {
            name: name,
            description: description,
            latitude: latitude,
            longitude: latitude,
            country: country,
            /*name: name,
            description: description,
            wild_camping: wild_camping,
            pricePerNightPp: pricePerNightPp,
            currency: currency,
            latitude: latitude,
            longitude: latitude,
            country: country,*/
            photo1: photo1,
            /*  photo2: photo2,
              photo3: photo3,*/
            userId: userId,

          },
          { headers: { Authorization: `Bearer ${getState().user.token}` } }
        );

        console.log("response hereeee", response.data);
        dispatch(campingPostSuccess(response.data));
        //  dispatch(showMessageWithTimeout("success", false, "Camping added!", 1500));
      } catch (e) {
        console.log("error,e");
      }
    };