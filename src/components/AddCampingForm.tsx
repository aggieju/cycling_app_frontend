import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { postCamping } from "../store/user/thunks"

export const AddCampingForm = () => {

    const dispatch = useAppDispatch()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [wild_camping, setWild_camping] = useState(false)
    const [pricePerNightPp, setPricePerNightPp] = useState(0)
    const [currency, setCurrency] = useState("")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [country, setCountry] = useState("")
    const [photo1, setPhoto1] = useState("")
    const [photo2, setPhoto2] = useState("")
    const [photo3, setPhoto3] = useState("")


    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log("submitting this info:", name, description, wild_camping, pricePerNightPp, currency,
            latitude, longitude, country, photo1, photo2, photo3)
        dispatch(postCamping(name, description, wild_camping, pricePerNightPp, currency,
            latitude, longitude, country, photo1, photo2, photo3))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Name: <input value={name} onChange={(event) => setName(event.target.value)} />
                </p>
                <p>
                    Description: <input value={description} onChange={(event) => setDescription(event.target.value)} />
                </p>
                <p>
                    Latitude: <input type='number' value={latitude} onChange={(event) => setLatitude(event.target.valueAsNumber)} />
                </p>
                <p>
                    Longitude: <input type='number' value={longitude} onChange={(event) => setLongitude(event.target.valueAsNumber)} />
                </p>
                <p>
                    Conutry: <input value={country} onChange={(event) => setCountry(event.target.value)} />
                </p>

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

