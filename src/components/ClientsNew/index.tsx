import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function ClientsNew() {
  const navigate = useNavigate();
  return (
    <Button title="Novo cliente" onClick={() => navigate("/clients/new")} />
  );
}
