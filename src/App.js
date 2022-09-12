import React from 'react'


import { Route, Routes } from 'react-router-dom'
// import Cards from './Cards/Cards'
import Navbar from './Header/Navbar'
import HomePage from './HomePage'
import Services from './Services'
const App = () => {
	return (
		<>
			<Navbar/>
			<Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/services' element={<Services />}/>
            </Routes>
			{/* <Cards/> */}
		</>
	)
}

export default App