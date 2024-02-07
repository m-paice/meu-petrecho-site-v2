import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function ServicesNew() {
  const navigate = useNavigate();
  return (
    <Button title="Novo serviço" onClick={() => navigate("/services/new")} />
  );
}
