import React from 'react'
import { AccordionCardData } from '../DataBase'

const CustomerSay = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-5" id='accordion__section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-6 flex-column order-lg-1 order-1 d-flex">
                                    <h1>{props.heading}</h1>
                                    <p> {props.title} </p>
                                    <button type="button" className="btn">view more</button>
                                </div>
                                <div className="col-lg-5  order-1 order-lg-1 align-items-center ">
                                    {
                                        AccordionCardData.map((value, index) => {
                                            const {id} = value
                                            return (
                                                <AccordionCard
                                                    key={id}
                                                    {...value}
                                                />
                                            )
                                        })
                                    } 
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CustomerSay



export const AccordionCard = ({id, name, user_img, message}) => {
    // console.log(id);
    return (
        <>
            <div id="accordion_card_section" className='d-flex align-items-center'>
                <img src={user_img} alt="team" className="img-fluid" height='auto' />
                <div className="row d-flex align-items-center">
                    <h4>{name}</h4>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}
