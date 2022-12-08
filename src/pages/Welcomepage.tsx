import { Button, Input, Title } from "../styled"
import styled from "styled-components"
import '../styling-project/index.scss'
/* eslint-disable jsx-a11y/img-redundant-alt */
import ReactPlayer from 'react-player'
//import video from '../../public/Videos/IMG_7700.MOV'

export const Welcomepage = () => {

    return (

        <div className="container">
            <div className="mt-5">
                <div className="mt-5" style={{ textAlign: "center" }}>
                    <div className="d-flex flex-column">
                        <div className="">
                            <div className="card  text-center">
                                <div className="card-body">

                                    <Title>Welcome page</Title>
                                    <p>
                                        Its a cycling community where you can find all info necessary for starting your bike touring journey, as
                                        well as share your stories.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="centered_image">
                    <img className="aggie_img" alt="landing picture" src="./assets/homepage-landing.jpg" />
                </div>


            </div>
        </div>


    );
};

export default Welcomepage;


