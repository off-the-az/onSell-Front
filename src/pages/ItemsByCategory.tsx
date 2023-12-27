import { useParams } from "react-router-dom";
import PageTemplate from "../Page.template";

export default function ItemsByCategory() {
  const { game, category } = useParams();
  return (
    <PageTemplate
      props={
        <>
          {game} <br />
          {category}
        </>
      }
    />
  );
}
