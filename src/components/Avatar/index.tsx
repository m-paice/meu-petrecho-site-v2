interface Props {
  size?: "small" | "medium" | "large";
}

export function Avatar({ size = "medium" }: Props) {
  const sizes = {
    small: 40,
    medium: 80,
    large: 120,
  };

  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: "#e6e6e6",
        borderRadius: sizes[size],
      }}
    />
  );
}
