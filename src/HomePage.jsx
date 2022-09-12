import React from 'react'
import HeaderSection from './Header/HeaderSection'
import { HeaderData, CardData, AboutSectionData, AccordionCustomerSay } from './DataBase'
import Cards from './Cards/Cards'
import AboutSection from './Sections/AboutSection'
import CustomerSay from './Sections/CustomerSay'

const HomePage = () => {
	return (
		<>
			{/* home page  */}
			{
				HeaderData.map((values, index) => {
					return (
						<HeaderSection
							heading={values.heading}
							title={values.title}
							id={values.id}
							image={values.image}
							key={index}
						/>
					);
				})
			}

			{/* card section  */}
			{
				<div className="d-flex justify-content-evenly  flex-wrap card_data_map ">
					<div className="c-w-left">
						<div className="circle-l"></div>
					</div>
					<div className="c-w-right">
						<div className="circle-r"></div>
					</div>
					<div className="spin"> <h1>🥓</h1> </div>
					{
						CardData.map((value, index) => {
							return (
								<Cards
									cardHeading={value.cardHeading}
									cardTitle={value.cardTitle}
									icon={value.icon}
									id={value.id}
									key={index}
								/>
							);
						})
					}
				</div>}

			{/* ABOUT SECTION AND FEATURES */}
			{
				AboutSectionData.map((value, index) => {
					const { id } = value
					return (
						<AboutSection
							key={index}
							id={id}
							{...value}
						/* heading={value.heading}
						imgsrc={value.imgsrc}
						title={value.title}
						listLine1={value.listLine1}
						listLine2={value.listLine2}
						listLine3={value.listLine3} */

						/>
					)
				})

			}

			{
				AccordionCustomerSay.map((value, index) => {
					// const { id } = value
					return (
						<CustomerSay
							key={index}
							id={value.id}
							// {...value}
							name={value.name}
							title={value.title}
							heading={value.heading}
							message={value.message}
							user_img={value.user_img}

						/>
					)
				})
			}


		</>

	)
}

export default HomePage