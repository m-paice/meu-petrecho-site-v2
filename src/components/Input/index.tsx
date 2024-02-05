import "./style.css";

interface Props {
  label: string;
  placeholder: string;
  id?: string;
}

export function Input({ label, placeholder, id }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        style={{
          paddingTop: "5px",
          paddingBottom: "10px",
          paddingLeft: 0,
          outline: "none",
          transition: "0.3s",
        }}
        placeholder={placeholder}
        type="text"
        id={id}
      />
    </div>
  );
}
