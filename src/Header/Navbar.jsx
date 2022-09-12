import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
	return (
		<>
			<div className="container-fluid header__main__div">

				<div className="row navbar__section nav__items">
					<div className="col-12 col-sm-12 col-md-11 mx-auto">
						<nav className="navbar navbar-expand-lg">
							<div className="container-fluid">
								<NavLink className="navbar-brand" to="/">
								{/* <div className="navbar__section logo__img"> */}
                    <h1>🦋</h1>
                {/* </div> */}
								</NavLink>
								<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<div className="collapse navbar-collapse" id="navbarSupportedContent">

									<ul className="navbar-nav ms-lg-auto mb-2 mb-lg-auto ul__text">
										<li className="nav-item">
											<NavLink className='nav-link nav__links' to='/'>Home</NavLink>
										</li>
										<li className="nav-item">
											<NavLink className='nav-link nav__links' to='/services'>services</NavLink>
										</li>
										<li className="nav-item">
											<NavLink className='nav-link nav__links' to='/contact'>contact-us</NavLink>
										</li>
										<li className="nav-item">
											<NavLink className='nav-link nav__links' to='/about'>about-us</NavLink>
										</li>
										<li className="nav-item">
											<NavLink className='nav-link nav__links' to='/career'>career</NavLink>
										</li>
									</ul>
								</div>

							</div>
						</nav>
					</div>

				</div>
			</div>
		</>
	)
}

export default Navbar