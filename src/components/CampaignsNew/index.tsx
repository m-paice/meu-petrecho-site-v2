import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function CampaignsNew() {
  const navigate = useNavigate();
  return (
    <Button title="Nova campanha" onClick={() => navigate("/campaigns/new")} />
  );
}
