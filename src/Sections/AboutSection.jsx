import React from "react";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const AboutSection = ({ id, heading, title, listLine1, listLine2, listLine3, imgsrc }) => {
    return (
        <>
            <div id="about__section" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto my-5">
                            {id === 2 ? (
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-6 flex-column order-lg-2 order-2 d-flex">
                                        <h1>{heading}</h1>
                                        <p>
                                            {title}

                                        </p>
                                        <ul>
                                            {
                                                listLine1 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine1}
                                                </li> : null
                                            }
                                            {
                                                listLine2 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine2}
                                                </li> : null
                                            }
                                            {
                                                listLine3 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine3}
                                                </li> : null
                                            }

                                        </ul>
                                        <button type="button" className="btn">view more</button>
                                    </div>
                                    <div className="col-lg-5 d-flex order-1 order-lg-1 align-items-center">
                                        <img src={imgsrc} alt="team" className="img-fluid" height='auto' />
                                    </div>
                                </div>
                            ) :
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-6 flex-column order-lg-1 order-2 d-flex">
                                        <h1>{heading}</h1>
                                        <p>
                                            {title}

                                        </p>
                                        <ul>
                                            {/*  <li> <CheckCircleRoundedIcon className="check_icon" />
                                            {listLine1}
                                        </li>
                                        <li> <CheckCircleRoundedIcon className="check_icon" />
                                            {listLine2}
                                        </li>
                                        <li> <CheckCircleRoundedIcon className="check_icon" />
                                            {listLine3}
                                        </li> */}
                                            {
                                                listLine1 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine1}
                                                </li> : null
                                            }
                                            {
                                                listLine2 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine2}
                                                </li> : null
                                            }
                                            {
                                                listLine3 ? <li> <CheckCircleRoundedIcon className="check_icon" />
                                                    {listLine3}
                                                </li> : null
                                            }


                                        </ul>
                                        <button type="button" className="btn">view more</button>
                                    </div>
                                    <div className="col-lg-5 d-flex order-1 order-lg-2 align-items-center">
                                        <img src={imgsrc} alt="team" className="img-fluid" height='auto' />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutSection;
