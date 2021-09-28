import promo from "../../images/promo_image.svg";
import "./Promo.css";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__body">
                <div className="promo_text">
                    <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img alt="Фон" className="promo__image" src={promo} />
            </div>
            <button className="promo__button">Узнать больше</button>
        </section>
    );
}

export default Promo;
