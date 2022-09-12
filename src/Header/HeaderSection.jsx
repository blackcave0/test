import React from 'react'

const HeaderSection = (props) => {
    return (
        <>
            <div className="d-flex align-items-center main__header__section">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-10  mx-auto">
                            <div className="row justify-content-between new__m">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column inner__text">
                                    <h1>
                                        {props.heading}
                                    </h1>
                                    <p>{props.title}</p>
                                    <div className="text__content__buttons">
                                        <button className='btn__contact'>Contact Us</button>
                                        <button className='btn__hire'>Hire Us</button>
                                    </div>
                                </div>
                                <div className="col-lg-5   order-1 order-lg-2 header-img header__items " id='image__content'>
                                    <img src={props.image} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSection






// THIS IS MAIN FILE CREATED BY ME
export const Original = (props) => {
    return (
        <>
            <div className="main__header__section">
                <div className="header__items text__content">
                    <div className="inner__text">
                        <h1>
                            {props.heading}
                        </h1>
                        <p>{props.title}</p>
                        <div className="text__content__buttons">
                            <button className='btn__contact'>Contact Us</button>
                            <button className='btn__hire'>Hire Us</button>
                        </div>
                    </div>
                </div>
                <div className="header__items image__content">
                    <img src={props.image} alt="" />
                </div>
            </div>
        </>
    )
}