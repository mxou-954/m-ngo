import React, { useState } from 'react';
import Logo from '../assets/images/mango.svg';

export default function Navbar() {
    const [openSections, setOpenSections] = useState({
        rechercher: false,
        connecter: false,
        favoris: false,
        panier: false,
    });

    return (
        <div className="navbar">
            <div className="linkNavbar">
                <ul>
                    <a href="#"><li>Femme</li></a>
                    <a href="#"><li>Homme</li></a>
                    <a href="#"><li>Teen</li></a>
                    <a href="#"><li>Enfants</li></a>
                    <a href="#"><li>Home</li></a>
                </ul>
            </div>
            <div className="imageLogoMango">
                <img className='imageMango' src={Logo} alt='image logo mango'></img>
            </div>
            <div className="buttonNavbarMango">
                <div className="buttonRecherche">
                    <button>
                        <span className='emoji'>🔍</span>
                        <span>Rechercher</span>
                    </button>
                </div>
                <div 
                    className="buttonConnexion" 
                    onMouseEnter={() => setOpenSections({ ...openSections, connecter: true })}
                    onMouseLeave={() => setOpenSections({ ...openSections, connecter: false })}
                >
                    <button type='button'>
                        <span className='emoji'>👤</span>
                        <span>Se connecter</span>
                    </button>
                    {openSections.connecter && (
                        <div className='choixconnection'>
                        
                            <button>Se connecter</button>
                            <p>Vous n'avez pas de compte ? <a>Inscrivez vous </a></p> 

                            <div className='privateLifeButton'>
                            <button type="button"><p>Mes achats</p><span className='spanFleche'> </span></button>        
                            </div>     

                            <div className='privateLifeButton'>
                            <button type="button"><p>Mango likes you</p><span className='spanFleche'> </span></button>        
                            </div>  

                            <div className='privateLifeButton'>
                            <button type="button"><p>Aide</p><span className='spanFleche'> </span></button>        
                            </div>  

                        </div>
                    )}
                </div>
                <div className="buttonFavoris">
                    <button>
                        <span className='emoji'>❤️</span>
                        <span>Favoris</span>
                    </button>
                </div>
                <div className="buttonPanier">
                    <button>
                        <span className='emoji'>🛒</span>
                        <span>Panier</span>
                    </button>
                </div>
            </div>
        </div>
    );
}