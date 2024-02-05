import { Fragment } from "react";
import { Menu as MenuContainer, Transition } from "@headlessui/react";
import { colors } from "../../theme";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

interface Props {
  title?: string;
  options: {
    title: string;
    onClick: () => void;
  }[];
}

export function Menu({ title, options }: Props) {
  return (
    <MenuContainer as="div">
      <div>
        <MenuContainer.Button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          {title || (
            <EllipsisHorizontalIcon style={{ color: colors.primary }} />
          )}
        </MenuContainer.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuContainer.Items
          style={{
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#fff",
            padding: "3px",
            borderRadius: "7px",
          }}
        >
          {options.map((option, index) => (
            <MenuContainer.Item key={index}>
              <button
                style={{
                  margin: "5px 0",
                  width: "100%",
                  padding: "7px",
                  backgroundColor: "transparent",
                  border: `2px solid ${colors.primary}`,
                  color: colors.primary,
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                onClick={option.onClick}
              >
                {option.title}
              </button>
            </MenuContainer.Item>
          ))}
        </MenuContainer.Items>
      </Transition>
    </MenuContainer>
  );
}
