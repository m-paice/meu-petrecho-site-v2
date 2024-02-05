import { useNavigate } from "react-router-dom";

import { CalendarIcon, UsersIcon, WrenchIcon } from "@heroicons/react/20/solid";

import "./style.css";
import { useLayoutContext } from "../../context/layout";

const routes = [
  {
    path: "/schedules",
    label: "Agenda",
    icon: <CalendarIcon width={20} />,
  },
  {
    path: "/clients",
    label: "Clientes",
    icon: <UsersIcon width={20} />,
  },
  {
    path: "/services",
    label: "Serviços",
    icon: <WrenchIcon width={20} />,
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const { hideSidebar } = useLayoutContext();

  return (
    <div
      style={{
        gridArea: "sidebar",
        backgroundColor: "#fff",
        borderRight: "1px solid #e6e6e6",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        transition: "0.3s",
        width: hideSidebar ? 80 : 250,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: hideSidebar ? 0 : 20,
          }}
        >
          <img width="40" src="/logo-meu-petrecho.png" alt="" />
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {hideSidebar ? null : "Meu Petrecho"}
          </h4>
        </div>

        <ul
          style={{
            padding: 10,
          }}
        >
          {routes.map((route) => (
            <li
              key={route.path}
              onClick={() => navigate(route.path)}
              style={{
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                gap: 10,
                alignItems: "center",
                backgroundColor: "white",
                margin: "15px 0",
                borderRadius: 5,
                backgroundColor:
                  location.pathname === route.path ? "#ED3B47" : "white",
                color: location.pathname === route.path ? "white" : "black",
                transition: "0.3s",
              }}
            >
              {route.icon}
              {hideSidebar ? null : <p>{route.label}</p>}
            </li>
          ))}
        </ul>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: 14,
        }}
      >
        versão 1.0.0
      </p>
    </div>
  );
}
