import { ReactNode } from "react";
import './styles/MainComponent.css';

interface MyComponentProps{
    content: ReactNode;
}

const MainContent: React.FC<MyComponentProps> = ({content}) =>{
    return (
        <div className="main-content">
         {
            content
         }
        </div>
    )
}

export default MainContent;