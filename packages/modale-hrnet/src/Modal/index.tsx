import React, { useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  triggerText: string;
  children: ReactNode;
  validate?: () => boolean;
}

const Modal: React.FC<ModalProps> = ({ triggerText, children, validate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (validate && !validate()) {
      return;
    }
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="hrnet-bg-green-400 hrnet-text-white hrnet-rounded-full hrnet-py-4 hrnet-px-8 hrnet-font-bold"
      >
        {triggerText}
      </button>
      {isOpen &&
        createPortal(
          <div className="hrnet-fixed hrnet-inset-0 hrnet-flex hrnet-items-center hrnet-justify-center hrnet-bg-black hrnet-bg-opacity-50">
            <div className="hrnet-bg-white hrnet-rounded-lg hrnet-overflow-hidden hrnet-shadow-lg hrnet-max-w-md hrnet-w-full hrnet-mx-4">
              <div className="hrnet-p-4 hrnet-text-center hrnet-font-bold">
                {children}
              </div>
              <button
                className="hrnet-bg-green-400 hrnet-text-white hrnet-py-2 hrnet-px-4 hrnet-rounded-lg hrnet-m-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
