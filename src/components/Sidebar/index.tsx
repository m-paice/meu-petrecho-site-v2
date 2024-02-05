import { useNavigate } from "react-router-dom";

const routes = [
  {
    path: "/schedules",
    label: "Agenda",
    icon: "/logo-meu-petrecho.png",
  },
  {
    path: "/clients",
    label: "Clientes",
    icon: "/logo-meu-petrecho.png",
  },
  {
    path: "/services",
    label: "Serviços",
    icon: "/logo-meu-petrecho.png",
  },
];

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        gridArea: "sidebar",
        backgroundColor: "#fff",
        borderRight: "1px solid #e6e6e6",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            padding: "10px",
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
            Roane Rocha
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
              }}
            >
              <img width="20" src="/logo-meu-petrecho.png" alt="" />
              <p>{route.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
