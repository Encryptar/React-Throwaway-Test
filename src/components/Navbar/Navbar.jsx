import Hamburger from '../Hamburger/Hamburger'
import './Navbar.css'
import {useState} from 'react'

export default function Navbar(){
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const closeHamburger = () =>{
        setHamburgerActive(false);
    }
    const toggleHamburger = () =>{
        setHamburgerActive(!hamburgerActive);
    }
    return (
            <nav>
                <h1 className='navigation'>Hayden Gray</h1>
                    <div className='menu' id={hamburgerActive ? "dropdownMenu" : ""}>
                        <a onClick={closeHamburger} href='#about'>About</a>
                        <a onClick={closeHamburger} href='#portfolio'>Projects</a>
                        <a onClick={closeHamburger} href='#contact'>Contact</a>
                    </div>
                    <div className={hamburgerActive ? "hamburger toggleHamburger" : 'hamburger'} onClick={toggleHamburger}>
                        <Hamburger />
                    </div>
            </nav>
    )
}