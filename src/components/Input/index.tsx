import "./style.css";

interface Props {
  label: string;
  placeholder: string;
  id?: string;
}

export function Input({ label, placeholder, id }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className="input"
        style={{
          width: "100%",
          padding: 10,
          outline: "none",
          border: "1px solid",
          borderRadius: 5,
          borderColor: "#ccc",
          transition: "0.3s",
        }}
        placeholder={placeholder}
        type="text"
        id={id}
      />
    </div>
  );
}
