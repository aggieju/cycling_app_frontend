import { useState } from "react"
import { Button, Input, LinkWord, Title, Image } from '../../src/styled';

export const Cloudinary = () => {

    const [image, setImage] = useState<string>("");

    //CHECK THIS VIDEO FOR SET UP: https://www.youtube.com/watch?v=Y-VgaRwWS3o

    //1. You need to create an account on Cloudinary
    //2. You to replace "lpsty2kc" on line 21 with your own folder name
    //3. Also change line 24 to your own link

    const uploadImage = async (e: any) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        //first parameter is always upload_preset, second is the name of the preset
        data.append('upload_preset', "lpsty2kc")

        //post request to Cloudinary, remember to change to your own link
        const res = await fetch("https://api.cloudinary.com/v1_1/delvoxvyc/image/upload", {
            method: "POST",
            body: data
        })


        const file = await res.json()
        console.log("file", file) //check if you are getting the url back
        setImage(file.url) //put the url in local state, next step you can send it to the backend
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Title>Hey, how cool is it if you user can upload an image directly?</Title>
            <a rel="noreferrer" target="_blank" href="https://github.com/karlaevelize/leaflet-cloudinary/blob/master/src/pages/Cloudinary.js">
                <Button>Go to source code ➚</Button>
            </a>
            <br />
            <input type="file" onChange={uploadImage} />
            <div>
                <img src={image ? image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} />
                {image ? <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title> : ""}
            </div>
        </div>
    );
}

export default Cloudinary;
