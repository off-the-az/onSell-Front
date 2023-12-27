import { Link, useParams } from "react-router-dom";
import PageTemplate from "../Page.template";
import TestLogo from "../assets/icons/Test Game Icon.svg";

export default function ItemsByGame() {
  const { game } = useParams();
  return (
    <PageTemplate
      props={
        <div className="gil-con">
          <div className="gil-header">
            <p>{game}</p>
            <img src={TestLogo} alt="Game Logo" />
          </div>
          <div className="gil-subheader">
            <p>
              БИТВА ЗА ВИЖИВАННЯ МІЖ «БРАЦТВОМ» АБО «МИСТЕЦТВОМ ПЕРЕМОЖТИ».БИТВА
              МІЖ ДВОМА СТРАТЕГІЯМИ ПОЧАЛОСЯ. ЧОМУ ВОНИ ВИБРАЛИ РОНДО НА ЯКІ
              ПОЛЯ БІВ?
            </p>
          </div>
          <div className="gil-categories">
            <Link className="gil-btn" to={"/items/VALORANT/items"}>
              Предмет
            </Link>
            <Link className="gil-btn" to={"/items/VALORANT/accounts"}>
              Аккаунт
            </Link>
            <Link className="gil-btn" to={"/items/VALORANT/donates"}>
              Донат
            </Link>
            <Link className="gil-btn" to={"/items/VALORANT/other"}>
              Інше
            </Link>
          </div>
        </div>
      }
    />
  );
}
