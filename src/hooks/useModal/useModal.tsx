import React, { useCallback, useState } from "react";
import Modal from "./Modal";

interface Props {
  children: React.ReactNode;
}

export default function useModal(size: "xs" | "sm" | "md" | "lg" | "xl") {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      close();
    },
    [close]
  );

  const ModalWrapper = useCallback(
    ({ children }: Props) =>
      isOpen ? (
        <Modal size={size} onBackdropClick={handleBackdropClick}>
          {children}
        </Modal>
      ) : null,
    [isOpen, handleBackdropClick, size]
  );

  return { open, close, ModalWrapper };
}
