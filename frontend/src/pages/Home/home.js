import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [acceptCookies, setAcceptCookies] = useState(() => {
    return localStorage.getItem('acceptCookies') || "";
  });
  const [paramsButtons, setParamsButtons] = useState(false);
  const [openSections, setOpenSections] = useState({
    privateLife: true,
    necessaryCookies: false,
    preferenceCookies: false,
    analyticCookies: false,
    behavioralCookies: false,
    socialCookies: false
  });

  useEffect(() => {
    if (acceptCookies) {
      localStorage.setItem('acceptCookies', acceptCookies);
    }
  }, [acceptCookies]);

  const handleAcceptCookies = (event) => {
    event.preventDefault();
    setAcceptCookies(true);
  };

  const handleParamsButton = (event) => {
    event.preventDefault();
    setParamsButtons(true);
  };

  const toggleSection = (section) => {
    setOpenSections((prevSections) => ({
      privateLife: false,
      necessaryCookies: false,
      preferenceCookies: false,
      analyticCookies: false,
      behavioralCookies: false,
      socialCookies: false,
      [section]: !prevSections[section]
    }));
  };

  if (acceptCookies === "" && !paramsButtons) {
    return (
      <div className='page_home'>
        <form className='cookies_accept'>
          <div className='DontAccept'>
            <Link to={"/404"}><span>Continuer sans accepter</span></Link>
          </div>
          <div className='ExplainCookies'>
            <p>Nous utilisons nos propres cookies et ceux de tiers à des fins d'analyse et pour vous montrer des publicités et des contenus adaptés à votre expérience de navigation. Vous pouvez accepter tous les cookies ou gérer vos préférences dans le panneau de configuration. Pour plus d'informations, consultez la
              <Link to={"/404"}><span> Politique de cookies.</span></Link>
            </p>
          </div>
          <div className='div_gene_buttons'>
            <div className='buttonparametterCookies'>
              <button onClick={handleParamsButton}>
                Paramétrer les cookies
              </button>
            </div>
            <div className='buttonacceptCookies'>
              <button type="submit" onClick={handleAcceptCookies}>Accepter tous</button>
            </div>
          </div>
        </form>
      </div>
    );
  } else if (paramsButtons) {
    return (
      <div className='page_home'>
        <form className='paramsConseptions'>
          <h1 className='paramstitle'>Paramétrages des cookies</h1>
          <div className='privateLifeButton'>
            <button type="button" onClick={() => toggleSection('privateLife')}><p>Votre vie privée</p><span className='spanFleche'> </span></button>
            {openSections.privateLife && (
              <div className='ExplainCookies'>
                <p>Lorsque vous visitez un site Web, il peut obtenir ou stocker des informations dans votre navigateur, généralement par l'utilisation de cookies. Ces informations peuvent vous concerner, concerner vos préférences ou votre appareil, et sont utilisées principalement pour faire fonctionner le site comme prévu. En général, les informations ne permettent pas de vous identifier directement, mais peuvent vous offrir une expérience Web plus personnalisée. Nous respectons votre droit à la vie privée, vous pouvez donc ne pas autoriser l'utilisation de certains cookies. Veuillez consulter chaque catégorie pour en savoir plus et pour modifier nos paramètres par défaut. Veuillez noter que le fait de bloquer certains types de cookies peut affecter votre expérience sur le site et les services que nous pouvons vous offrir.
                </p>
                <p>ID: 8ae2481726c21000a9f84566db02000057d91100</p>
              </div>
            )}
          </div>
          <div className='privateLifeButton'>
            <button type="button" onClick={() => toggleSection('necessaryCookies')}><p>Cookies strictement nécessaires</p><span className='spanFleche'> </span></button>
            {openSections.necessaryCookies && (
              <div className='ExplainCookies'>
                <p>Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés sur nos systèmes. Ils sont généralement paramétrés pour répondre aux actions que vous avez prises pour recevoir des services, comme le réglage de vos préférences en matière de confidentialité, la connexion à votre compte ou le remplissage de formulaires. Vous pouvez configurer votre navigateur pour qu'il bloque ou vous avertisse de la présence de ces cookies, mais certaines parties du site Web ne fonctionneront pas. Ces cookies ne stockent aucune information permettant d'identifier une personne.</p>
                <h2>Informations sur les cookies</h2>
                <input className='checkk' type='checkbox'></input>Actifs
              </div>
            )}
          </div>
          <div className='privateLifeButton'>
            <button type="button" onClick={() => toggleSection('preferenceCookies')}><p>Cookies de préférence ou de personnalisation</p><span className='spanFleche'> </span></button>
            {openSections.preferenceCookies && (
              <div className='ExplainCookies'>
                <p>Ce sont ceux qui vous permettent d’accéder au service en mémorisant des caractéristiques prédéfinies en fonction d’une série de critères tels que, par exemple, la langue, le type de navigateur par lequel vous accédez au service, la configuration régionale à partir de laquelle vous accédez au service, etc. Le fait de ne pas accepter ces cookies peut entraîner des performances lentes ou des recommandations mal adaptées.</p>
                <h2>Informations sur les cookies</h2>
                <input className='checkk' type='checkbox'></input>Inactifs
              </div>
            )}
          </div>
          <div className='privateLifeButton'>
            <button type="button" onClick={() => toggleSection('analyticCookies')}><p>Cookies analytiques</p><span className='spanFleche'> </span></button>
            {openSections.analyticCookies && (
              <div className='ExplainCookies'>
                <p>Ce sont ceux qui, traités par nous ou par des tiers, nous permettent de quantifier le nombre d'utilisateurs et ainsi de réaliser la mesure et l'analyse statistique de l'utilisation faite par les utilisateurs du service proposé. Pour ce faire, votre navigation sur notre site Internet est analysée afin d'améliorer l'offre de produits ou de services que nous proposons.</p>
                <h2>Informations sur les cookies</h2>
                <input className='checkk' type='checkbox'></input>Inactifs
              </div>
            )}
          </div>
          <div className='privateLifeButton'>
            <button type="button" onClick={() => toggleSection('behavioralCookies')}><p>Cookies de publicité comportementale</p><span className='spanFleche'> </span></button>
            {openSections.behavioralCookies && (
              <div className='ExplainCookies'>
                <p>Ce sont ceux qui, traités par nous ou par des tiers, nous permettent d'analyser vos habitudes de navigation sur Internet afin de pouvoir vous montrer des publicités liées à votre profil de navigation.</p>
                <h2>Informations sur les cookies</h2>
                <input className='checkk' type='checkbox'></input>Inactifs
              </div>
            )}
          </div>
          <div className='privateLifeButton_different'>
            <button type="button" onClick={() => toggleSection('socialCookies')}><p>Cookies de réseaux sociaux</p><span className='spanFleche'> </span></button>
            {openSections.socialCookies && (
              <div className='ExplainCookies'>
                <p>Ces cookies sont définis par un certain nombre de services de réseaux sociaux que nous avons ajoutés au site pour vous permettre de partager notre contenu avec vos amis et réseaux sociaux. Ils sont capables d'offrir un suivi de votre navigateur sur d'autres sites et de créer un profil de vos intérêts. Cela peut modifier le contenu et les messages que vous trouvez sur les autres sites Web que vous visitez. Si vous n'autorisez pas l'utilisation de ces cookies, vous ne pourrez pas visualiser ou utiliser ces outils de partage.</p>
                <h2>Informations sur les cookies</h2>
                <input className='checkk' type='checkbox'></input>Inactifs
              </div>
            )}
          </div>
          <div className='div_gene_buttons'>
            <div className='buttonparametterCookies'>
              <button type="submit" onClick={setAcceptCookies === true}>
                Sauvegarder les paramètres
              </button>
            </div>
            <div className='buttonneccessaryCookies'>
              <button type="submit" onClick={setAcceptCookies === true} >Uniquement les cookies nécessaires</button>
            </div>
            <div className='buttonacceptCookies'>
              <button type="submit" onClick={setAcceptCookies === true}>Accepter tous</button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className='page_home'>
          
      </div>
    );
  }
}

export default Home;