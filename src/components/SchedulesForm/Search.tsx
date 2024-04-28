import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useBebounce } from "../../hooks/useDebounce";

interface Props {
  executeFiltered({
    page,
    where,
  }: {
    page: number;
    where?: Record<string, unknown>;
  }): void;
}

export function Search({ executeFiltered }: Props) {
  const debounce = useBebounce((value) => {
    if (!value) {
      executeFiltered({
        page: 1,
        where: {
          name: "undefined",
        },
      });
      return;
    }

    executeFiltered({
      page: 1,
      where: {
        name: { $iLike: `%${value}%` },
      },
    });
  });
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        padding: "10px",
        borderRadius: 10,
        border: "1px solid #e6e6e6",
        marginBottom: 10,
      }}
    >
      <MagnifyingGlassIcon width={20} color="gray" />
      <input
        type="text"
        placeholder="Pesquisa"
        onChange={(event) => debounce(event.target.value)}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
        }}
      />
    </div>
  );
}
