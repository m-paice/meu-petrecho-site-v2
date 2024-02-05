export function Header() {
  return (
    <header
      style={{
        gridArea: "header",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div>
        Home - <strong>Agenda</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "#8e8e8e",
          }}
        >
          Ultimo acesso: 20/02/2024 14:00:25
        </p>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#e6e6e6",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </header>
  );
}
