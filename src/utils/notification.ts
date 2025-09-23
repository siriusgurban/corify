import { toast, Slide, type TypeOptions } from "react-toastify";

const showNotification = (type: TypeOptions = "default", text?: string) => {
  if (!text) {
    text =
      type === "success"
        ? "Successfully completed !"
        : type === "error"
        ? "system error !"
        : "Operation completed !";
  }

  // @ts-ignore
  toast[type](text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
  });
};

export default showNotification;
