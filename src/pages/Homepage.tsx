import { useEffect } from "react";
import { fetchUsers, updateUser } from "../store/user/thunks"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectUsers } from "../store/user/selectors"
import { UserType } from "../../src/typed";
import { useState } from "react";
import { ChangeDetailsForm } from "../../src/components/ChangeDetailsForm"
//import { Listing } from "../../src/typed";



export const Homepage = () => {
    const dispatch = useAppDispatch();

    //const [name, setName] = useState("");

    const [displayForm, setDisplayForm] = useState<Boolean | undefined>(false);

    const userProfile = useAppSelector(selectUsers);

    console.log("selector", userProfile)

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div>

            <h2>My info</h2>
            {!userProfile
                ? ("Loading"
                ) : <div>


                    <p>Name: {userProfile.name} </p>
                    <p>Email: {userProfile.email} </p>
                    <p>Phone number: {userProfile.phone} </p>
                    <p>Date of birth: {new Date(userProfile.date_of_birth).toDateString()} </p>
                    <p>Instagram/blog: {userProfile.instagram_blog} </p>

                    <button onClick={() => setDisplayForm(!displayForm)}>Update email, phone and instagram/blog</button>
                    {displayForm && <ChangeDetailsForm />}
                </div>



            }


        </div>

    )

}

export default Homepage;