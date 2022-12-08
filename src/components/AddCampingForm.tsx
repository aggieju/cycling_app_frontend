import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { postCamping } from "../store/user/thunks"
import { Button, Input, LinkWord, Title, Image } from '../../src/styled';
import { fileURLToPath } from "url";


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
    const [photo1, setPhoto1] = useState<string>("");
    const [photo2, setPhoto2] = useState("")
    const [photo3, setPhoto3] = useState("")

    const [image, setImage] = useState<string>("");

    const uploadImage = async (e: any) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        //first parameter is always upload_preset, second is the name of the preset
        data.append('upload_preset', "bjcenfdg")

        //post request to Cloudinary, remember to change to your own link
        const res = await fetch("https://api.cloudinary.com/v1_1/dyt7qyt0y/image/upload", {
            method: "POST",
            body: data
        })



        const file = await res.json()
        console.log("file", file) //check if you are getting the url back
        setPhoto1(file.url) //put the url in local state, next step you can send it to the backend
    }


    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log("submitting this info:", photo1)
        dispatch(postCamping(name, description, wild_camping, pricePerNightPp, currency,
            latitude, longitude, country, photo1, photo2, photo3))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <br></br>
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
                        Country: <input value={country} onChange={(event) => setCountry(event.target.value)} />
                    </p>
                </div>
                <div style={{ textAlign: "center" }}>
                    Photo:  <input type="file" className="btn btn-light" onChange={uploadImage} />
                    <div>
                        <img src={photo1 ? photo1 : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}
                            style={{ width: "300px", borderRadius: "0.5em" }} />
                        {photo1 ? <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title> : ""}
                    </div>
                </div>
                <p>
                    Photo url: <input value={photo1} onChange={(event) => setPhoto1(event.target.value)} />
                </p>

                <button className="btn btn-secondary" type="submit" >Submit</button>
            </form>
        </div>
    )
}

