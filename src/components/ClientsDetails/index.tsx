import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function ClientsDetails() {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: 10,
        }}
      >
        <Avatar />
        <div>
          <h4>João</h4>
          <p>{"99999999999".replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</p>
          <p>january</p>
        </div>
      </div>
    </div>
  );
}
