import React from 'react'

const Cards = (props) => {
    return (
        <>
           {/*  <div className="main__card__section">
                <div className="inner__card__section">
                    <h2>
                        <img src={props.icon} alt="icon" />
                    </h2>
                    <h3>{props.cardHeading} </h3>
                    <p>{props.cardTitle} </p>
                </div>
            </div>
 */}

            <div className="col-lg-2 my-4 mx-3 text-center">
                <div className="card py-4 inner__card__section" style={{ width: "15rem", }}>
                    <h2>
                    <img src={props.icon}  alt="..." />
                    </h2>
                    <div className="card-body">
                        <h5 className="card-title">{props.cardHeading}</h5>
                        <p className="card-text">{props.cardTitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards