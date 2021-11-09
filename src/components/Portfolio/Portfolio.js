import './Portfolio.css';
function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__heading">Портфолио</h4>
            <ul className="portfolio__links">
                <li className="portfolio__links-item">
                    <a href="https://darya55k.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">Статичный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://darya55k.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">Адаптивный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://mesto.darya55k.nomoredomains.monster/" target="_blank" rel="noreferrer" className="portfolio__link">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;