import { Button, Input, Title } from "../styled"
import styled from "styled-components"
import ReactPlayer from 'react-player'

export const Video = () => {

    return (

        <div className="container">
            <div className="mt-5">
                <div className="mt-5" style={{ textAlign: "center" }}>
                    <div className="d-flex flex-column">
                        <div className="">
                            <div className="card  text-center">
                                <div className="card-body">

                                    <Title>Life is better on a bike</Title>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >


                <div>
                    <div className="centered_image" >
                        <ReactPlayer className="aggie_video" url='https://www.youtube.com/watch?v=v66tQQ4TfI8&feature=youtu.be' playing={true}
                            frameborder="0" allowfullscreen
                            width='100%'
                        />

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Video;




