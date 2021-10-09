import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Profile({ loggedIn, onSignOut, onUpdateUser, serverResponse, isActive }) {
    const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();
    const currentUser = React.useContext(CurrentUserContext);
    const [isDisable, setIsDisable] = React.useState(false);

    React.useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    const checkValuesInput = () => currentUser.name !== values.name || currentUser.email !== values.email;

    function handleSubmit(e) {
        const { name, email } = values;

        e.preventDefault();
        onUpdateUser(name, email);
        setIsDisable(false);
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" name="profile" noValidate onSubmit={handleSubmit}>
                    <fieldset className="profile__fields">
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Имя</p>
                            <input value={values.name || ""} onChange={handleChange} type="text" name="name" className="profile__form-input-field" required minLength="2" maxLength="30" pattern="[a-zA-Zа-яА-ЯёЁ\- ]{1,}" />
                        </div>
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Email</p>
                            <input value={values.email || ""} onChange={handleChange} className="profile__form-input-field" type="email" name="email" />
                        </div>
                    </fieldset>
                    <span className="form__error profile__error">{errors.email}</span>
                    <button className="profile__button profile__button_type_edit" tape="submit" aria-label="Редактировать" disabled={!isValid}>
                        Редактировать
                    </button>
                </form>
                {!checkValuesInput() || isDisable ? (
                    <Link to="/" className="profile__signout-link" onClick={onSignOut}>
                        Выйти из аккаунта
                    </Link>
                ) : (
                    ""
                )}
            </section>
        </>
    );
}

export default Profile;
