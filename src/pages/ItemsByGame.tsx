import { useParams } from "react-router-dom";
import PageTemplate from "../Page.template";

export default function ItemsByGame() {
  const { game } = useParams();
  return (
    <PageTemplate
      props={
        <>
          <h1>{game}</h1>
        </>
      }
    />
  );
}
