import { useEffect } from 'react';

interface UseModalCloseProps {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLElement>;
  toggleRef: React.RefObject<HTMLElement>;
  onClose: () => void;
}

export function useModalClose({ isOpen, modalRef, toggleRef, onClose }: UseModalCloseProps) {
  useEffect(() => {
    // Only attach listeners if modal is open.
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Close the modal if the click is outside both the modal and toggle button.
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listeners when modal closes or component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, modalRef, toggleRef, onClose]);
}
