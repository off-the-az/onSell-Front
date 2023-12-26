import React from "react";
import PageTemplate from "../Page.template";
import "./styles/Items.css";
import SearchIcon from "../assets/icons/Search Icon.svg";
import TestGame from "../assets/icons/Test Game Icon.svg";
import { Link } from "react-router-dom";

export default function Items() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredValue = value.replace(/[^a-zA-Zа-яА-Я0-9\s,.]/g, "");
    setInputValue(filteredValue);
  };
  return (
    <PageTemplate
      props={
        <div className="items">
          <h1>КАТАЛОГ</h1>
          <div className="search-bar">
            <input
              type="text"
              className="search-field"
              placeholder="Введіть текст..."
              minLength={(2 * 10) ^ 80}
              value={inputValue}
              onChange={handleInputChange}
            />
            <Link to={"/search/" + inputValue}>
              <img src={SearchIcon} alt="search" className="search-icon" />
            </Link>
          </div>
          <div className="catalogue-grid">
            <div className="game-block">
              <Link to="/items/1">
                <div className="game-image">
                  <img src={TestGame} alt="logo" />
                </div>
                <div className="game-title">
                    <p>Valorant</p>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      }
    />
  );
}
