import Select from "react-select";

const Component = () => {
  const customStyles = {
    control: () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      border: "0.25em solid transparent",
      backgroundImage:
        "linear-gradient(#fff, #fff), linear-gradient(120deg, #fdab61 0%, #c97bcc 50%, #50bec9 100%)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      borderRadius: "1.8em",
      backgroundSize: "200% 100%",
      transition: "background-position 0.8s ease-out",
    }),
  };

  return (
    <Select
      options={[
        { label: "test1", value: 1 },
        { label: "test2", value: 2 },
        { label: "test3", value: 3 },
        { label: "test4", value: 4 },
        { label: "test5", value: 5 },
        { label: "test6", value: 6 },
        { label: "test7", value: 7 },
        { label: "test8", value: 8 },
        { label: "test9", value: 9 },
        { label: "test10", value: 10 },
        { label: "test11", value: 11 },
        { label: "test12", value: 12 },
      ]}
      isSearchable={true}
      styles={customStyles}
    />
  );
};

export default Component;
