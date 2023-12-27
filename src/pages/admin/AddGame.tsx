import React, { FormEvent } from "react";
import PageTemplate from "../../Page.template";
import { Link } from "react-router-dom";

export default function AddGame() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <PageTemplate
      props={
        <div className="auth-block">
          <h1 className="header">НОВА ГРА</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              required={true}
              type="text"
              placeholder="Логін"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              //type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="button-con">
              <button type="submit">ВХІД</button>
              <div>
                <p>
                  Не маєте аккаунту на нашому сайті? Тоді{" "}
                  <Link to={"/register"}>зареєструйтесь</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      }
    />
  );
}
