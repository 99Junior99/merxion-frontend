import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' end>
                <img src="/src/assets/logo-A2hPLwK0.png" alt="" />
            </NavLink>
            <div className='list-left'>
                <a id=''>Funcionalidades</a>
                <a id=''>Como funciona</a></div>

            <div className='list-right'>
                <NavLink className='cad-login' to='/login' end >Entrar</NavLink>
                <NavLink className="cad-btn" to='/cadastro' end>Começar grátis</NavLink>
            </div>


        </nav>
    )
}

export default Navbar
