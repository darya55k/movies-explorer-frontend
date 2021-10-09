import React from "react";
import "./SearchForm.css";
//import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search__icon from "../../images/search_icon.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SearchForm({ onSubmit, onHandleCheckbox }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(values.searchInput);
    }

    return (
        <section className="search">
            <form className="search__form" name="search" noValidate onSubmit={handleSubmit}>
                <div className="search__films">
                    <img src={search__icon} alt="Поиск" className="search__icon" />
                    <fieldset className="search__form-fields">
                        <input value={values.searchInput || ""} onChange={handleChange} type="text" name="searchInput" className="search__form-input" placeholder="Фильм" required />
                    </fieldset>
                </div>

                <div className="search__box">
                    <button className="search__form-button" disabled={!isValid}>
                        Найти
                    </button>
                    <span className="search__toggle-border" />
                    <div className="search__toggle-box">
                        <label className="search__toggle-label">
                            <input type="checkbox" className="search__toggle" onClick={onHandleCheckbox} />
                            <span className="search__toggle_visible"></span>
                        </label>
                        <h3 className="search__toggle-text">Короткометражки</h3>
                    </div>
                </div>
            </form>
            <span className="search__form-error">{errors.searchInput}</span>
        </section>
    );
}

export default SearchForm;
