import React from 'react'
import '../assets/Styles/navbar.css'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <p className='logoName'> <Link to='/'>PropertyWala</Link> </p>
                <div className='navItems'>
                    <p><Link to="/show-properties/rent">Rent</Link></p>
                    <p><Link to="/show-properties/sale">Buy</Link></p>
                    <p><Link to="/list-property">Sell</Link></p>
                    <p>Portfolio</p>
                    <p>Resources</p>
                    <p>About Us</p>
                    <p>Premium</p>
                    <p>Compose</p>
                    <p>Admin Controls</p>
                </div>
                <div className='navButton'>
                    <Link to='/login'><button className='navLogin'>Login</button></Link>
                    <Link to='/register'><button className='navSignup'>register</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar