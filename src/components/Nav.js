import React, {useState, useEffect} from 'react'
import '../styles/Nav.css'
import logoImage from '../images/netflix.png'

function Navbar(){
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
    }, []);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src ={logoImage} alt="logo" />
            <img className = "nav__avatar" src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR55osOG8tnW5HlQ90n28eU-AUG2Hp1F5II8Q&usqp=CAU' alt = "logo" />


        </div>
    );
}

export default Navbar