import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../Logo/Logo";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Login({ onLogin, serverResponse, isActive }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        const { email, password } = values;

        e.preventDefault();
        onLogin(email, password);
        resetForm({}, {}, false);
    }

    return (
        <section className="login">
            <Logo />

            <h2 className="login__title auth__title">Рады видеть!</h2>
            <form className="login__form auth__form" onSubmit={handleSubmit}>
                <fieldset className="login__fields auth__fields">
                    <p className="login__input-name auth__input-name">E-mail</p>
                    <input value={values.email || ""} onChange={handleChange} type="email" name="email" className="login__input auth__input" required />
                    <span className="login__error auth__error">{errors.email}</span>

                    <p className="login__input-name auth__input-name">Пароль</p>
                    <input value={values.password || ""} onChange={handleChange} type="password" name="password" className="login__input auth__input" required minLength="8" />
                    <span className="login__error auth__error">{errors.password}</span>
                </fieldset>
                <p className="login__submit-error auth__submit-error">{serverResponse}</p>
                <button type="submit" className="login__submit-button auth__submit-button" disabled={!isValid}>
                    {isActive ? <Preloader isActive={isActive} isAuth={true} /> : "Войти"}
                </button>
            </form>
            <p className="login__subtitle auth__subtitle">
                Ещё не зарегистрированы?{" "}
                <Link to="/signup" className="login__link auth__link">
                    Регистрация
                </Link>
            </p>
        </section>
    );
}

export default Login;
