import Modal from "react-modal";
import { FaUser, FaHeart } from "react-icons/fa";
import { useState } from "react";
import Loader from "../Loader/Loader";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "column",
    maxWidth: "80vw",
    maxHeight: "80vh",
    minHeight: "150px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function ImageModal({ onClose, image }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={handleClose}
      contentLabel="Image Modal"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {isLoading && (
        <div className={css.loaderContainer}>
          <Loader />
        </div>
      )}

      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.modalImage}
        onLoad={handleImageLoad}
      />
      {!isLoading && (
        <div className={`${css.infoContainer} ${isVisible ? css.visible : ""}`}>
          <div className={css.infoText}>
            <FaUser className={css.icon} />
            <span>{image.user.name}</span>
          </div>
          <div className={css.infoText}>
            <FaHeart className={css.icon} />
            <span>{image.likes}</span>
          </div>
        </div>
      )}
    </Modal>
  );
}
