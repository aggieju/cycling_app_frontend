import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { updateUser } from "../store/user/thunks"

export const ChangeDetailsForm = () => {

    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [instagram_blog, setInstagram_blog] = useState("")


    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log("submitting this info:", email, phone, instagram_blog)
        dispatch(updateUser(email, phone, instagram_blog))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br></br>
                <p>
                    Email: <input value={email} onChange={(event) => setEmail(event.target.value)} />
                </p>
                <p>
                    Phone: <input value={phone} onChange={(event) => setPhone(event.target.value)} />
                </p>
                <p>
                    Insta: <input value={instagram_blog} onChange={(event) => setInstagram_blog(event.target.value)} />
                </p>
                <button className="btn btn-secondary" type="submit" >Submit</button>
            </form>
        </div>
    )
}

