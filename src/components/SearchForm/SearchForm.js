import './SearchForm.css';
import search__icon from '../../images/search_icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__films">
                <img src={search__icon} alt="Поиск" className="search__icon"/>
                <fieldset className="search__form-fields">
                    <input type="text" placeholder="Фильм" className="search__form-input" required/>
                </fieldset>
                </div>
                <div className="search__box">
                <button className="search__form-button" type="submit">Найти</button>
                <span className="search__toggle-border" />
                <div className="search__toggle-box">
                    <FilterCheckbox />
                    <h3 className="search__toggle-text">Короткометражки</h3>
                </div>
                </div>

            </form>
        </section>
    )
}

export default SearchForm;