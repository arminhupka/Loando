import { useState } from 'react';

const useModalState = (initial = false) => {
  const [isVisible, setIsVisible] = useState(initial);

  const onToggle = () => setIsVisible(!isVisible);

  const onClose = () => setIsVisible(false);
  const onOpen = () => setIsVisible(true);

  return { isVisible, onToggle, onOpen, onClose };
};

export default useModalState;
