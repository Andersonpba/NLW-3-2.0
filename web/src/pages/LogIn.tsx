import React from 'react'
import{FiArrowLeft} from 'react-icons/fi'
import{Link} from 'react-router-dom'


import logoImg from '../images/logo-login.svg'
import '../styles/pages/login.css'


function LogIn(){
    return (
        <div id="page-login">
        <div className="content-wrapper">    
           
            <div className="logo-location">
                <img src={logoImg} alt="Happy" />
                <strong>Santa Rita</strong>
                <span>Paraguay</span>
            </div>
            <div className="rectangle-login">
                
                <form onSubmit={()=>{}} className="login-form">
                    <div className="login-block">
                        <h1>Fazer Login</h1>
                        <div className="input-block">
                            <label htmlFor="E-mail">Email</label>
                            <input type="email"></input>
                        </div>
                        <div className="input-block">
                            <label htmlFor="Password">Senha</label>
                            <input type="password"></input>
                        </div>
                        <div className="input-block">
                            <div className="last-block">
                                <label className="container">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label>Lembrar-me<button className="Forget-password">Esqueci minha senha</button></label>
                                
                            </div>
                        </div>
                        <button className="confirm-button" type="submit">Entrar</button>
                    </div>
                </form> 
                <Link to="/app" className="back">
                    <FiArrowLeft size={24} color="#15C3D6" />
                </Link>           
            </div>
            
      </div>
    </div>

    );
}

export default LogIn