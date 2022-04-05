import toast from "react-hot-toast";

const correct = () =>
  toast.success("Correcto, vamos con otra!!", {
    style: {
      backgroundColor: "#6EE7B7",
      padding: "1rem",
      borderRadius: "15px",
      fontWeight: "500",
    },
  });

const incorrect = () =>
  toast.error("Incorrecto, intenta de nuevo!!", {
    style: {
      backgroundColor: "#FCA5A5",
      padding: "1rem",
      borderRadius: "15px",
      fontWeight: "500",
    },
  });

const simplifyParam = (param) => {
  if (param === "suma") {
    return "add";
  } else if (param === "resta") {
    return "sub";
  } else if (param === "multiplicación") {
    return "mul";
  } else if (param === "división") {
    return "div";
  }
};

export { correct, incorrect, simplifyParam };
