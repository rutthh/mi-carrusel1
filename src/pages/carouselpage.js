import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './carousel.css';

import Imagen1 from '../images/imagen1.jpg';
import Imagen2 from '../images/imagen2.jpg';
import Imagen3 from '../images/imagen3.jpg';
import Imagen4 from '../images/imagen4.jpg';
import Imagen5 from '../images/imagen5.jpg';
import Imagen6 from '../images/imagen6.jpg';

function App() {
const [currentButton, setCurrentButton] = useState(1);

const selectCurrentButton = (currentIndex) => {
    setCurrentButton(currentIndex);
};

const Buttons = () => {
    return Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
    <input
        key={i}
        type="button"
        position={i}
        className={i !== currentButton ? 'navinput' : 'activeButton'}
        onClick={() => selectCurrentButton(i)}
    />
    ));
};
const navigate = useNavigate();

const handleBack = () => {
    navigate('/');
};


return (
    <div className="main_section">
    <button onClick={handleBack} className="back-button">
    Back
    </button>
    <div className="carousel__content">
        <div className="cards_content">
        <main className="carousel" id="carousel">
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen1}/>
            <div className="footer_card"></div>
            </div>
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen2}/>
            <div className="footer_card"></div>
            </div>
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen3}/>
            <div className="footer_card"></div>
            </div>
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen4}/>
            <div className="footer_card"></div>
            </div>
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen5}/>
            <div className="footer_card"></div>
            </div>
            <div className={"item pos" + currentButton + ""}>
            <div className="head_card"></div>
            <img className="body_card" src={Imagen6}/>
            <div className="footer_card"></div>
            </div>
        </main>
        <div className="buttons__groups">
            <Buttons/>
        </div>
        </div>
    </div>
    </div>
);
}

export default App; 