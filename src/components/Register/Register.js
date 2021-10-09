import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import Logo from "../Logo/Logo";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Register({ onRegister, serverResponse, isActive }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        const { name, email, password } = values;

        e.preventDefault();
        onRegister(name, email, password);
        resetForm({}, {}, false);
    }

    return (
        <section className="register">
            <Logo />

            <h2 className="register__title auth__title">Добро пожаловать!</h2>
            <form className="register__form auth__form" onSubmit={handleSubmit}>
                <fieldset className="register__fields auth__fields">
                    <p className="register__input-name auth__input-name">Имя</p>
                    <input value={values.name || ""} onChange={handleChange} type="text" name="name" className="register__input auth__input" required minLength="2" maxLength="30" pattern="[a-zA-Zа-яА-ЯёЁ\- ]{1,}" />
                    <span className="register__error auth__error">{errors.name}</span>

                    <p className="register__input-name auth__input-name">E-mail</p>
                    <input value={values.email || ""} onChange={handleChange} type="email" name="email" className="register__input auth__input" required />
                    <span className="register__error auth__error">{errors.email}</span>

                    <p className="register__input-name auth__input-name">Пароль</p>
                    <input value={values.password || ""} onChange={handleChange} type="password" name="password" className="register__input auth__input" required minLength="8" />
                    <span className="register__error auth__error">{errors.password}</span>
                </fieldset>
                <p className="register__submit-error auth__submit-error">{serverResponse}</p>
                <button type="submit" className="register__submit-button auth__submit-button" disabled={!isValid}>
                    {isActive ? <Preloader isActive={isActive} isAuth={true} /> : "Зарегистрироваться"}
                </button>
            </form>
            <p className="register__subtitle auth__subtitle">
                Уже зарегистрированы?{" "}
                <Link to="/signin" className="register__link auth__link">
                    Войти
                </Link>
            </p>
        </section>
    );
}

export default Register;
