import PageTemplate from "../Page.template";
import "./styles/Auth.css";
import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  /*const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
  };*/

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);    
  };

  const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);    
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password!== confirmedPassword) alert("Паролі не співпадаються");
    else alert(`На вашу пошту було відправлено лист з підтвердженням, будь ласка перевірьте скриньку. Дані для підтвердження - ${username} (${mail}) з паролем ${password}`);
  };
  return (
    <PageTemplate
      props={
        <div className="auth-block">
          <h1 className="header">РЕЄСТРАЦІЯ</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              required={true}
              type="text"
              placeholder="Логін"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              required={true}
              type="text"
              placeholder="Пошта"
              value={mail}
              onChange={handleMailChange}
            />
            <input
              //type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              //type={showPassword ? "text" : "password"}
              placeholder="Повторити пароль"
              value={confirmedPassword}
              onChange={handleConfirmedPasswordChange}
            />
            <div className="button-con">
              <button type="submit">РЕЄСТРАЦІЯ</button>
              <div>
                <p>
                  Вже маєте аккаунту на нашому сайті? Тоді{" "}
                  <Link to={"/login"}>авторизуйтесь</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      }
    />
  );
}
