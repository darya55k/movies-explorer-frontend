import student__photo from "../../images/me.jpg";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading section__heading">Студент</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Дарья</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 19 лет</p>
                    <p className="about-me__description-paragraph">Я родилась и живу в Москве, учусь на третьем курсе Отделения интеллектуальных систем в гуманитарной сфере РГГУ. Начинаю свой путь в веб-разработке.</p>
                    <div className="about-me__description-links">
                        <a href=" " target="_blank" rel="noreferrer" className="about-me__description-link">
                            Facebook
                        </a>
                        <a href="https://github.com/darya55k" target="_blank" rel="noreferrer" className="about-me__description-link">
                            Github
                        </a>
                    </div>
                </div>
                <img src={student__photo} alt="Дарья" className="about-me__description-photo" />
            </div>
        </section>
    );
}

export default AboutMe;
