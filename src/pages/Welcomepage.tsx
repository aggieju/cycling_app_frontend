import { Button, Input, Title } from "../styled"

/* eslint-disable jsx-a11y/img-redundant-alt */
export const Welcomepage = () => {
    return (

        <div className="container ">
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
                <div className="img-fluid"></div>
                <img
                    alt="landing picture"
                    src="./assets/homepage-landing.jpg"
                    className="aggie-img--fixed-img"></img>
            </div>

        </div>
    );
};

export default Welcomepage;
