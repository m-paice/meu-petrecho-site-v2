import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export function Search() {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        padding: "10px",
        borderRadius: 10,
        border: "1px solid #e6e6e6",
      }}
    >
      <MagnifyingGlassIcon width={20} color="gray" />
      <input
        type="text"
        placeholder="Pesquisa"
        value={""}
        onChange={() => {}}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
        }}
      />
    </div>
  );
}
