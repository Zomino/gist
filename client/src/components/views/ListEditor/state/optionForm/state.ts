import React, { useState } from 'react';

export type ToggleOptionFormOpen = () => void;

export default function useOptionFormState(): [boolean, ToggleOptionFormOpen] {
  const [optionFormOpen, setOptionFormOpen] = useState(false);
  const toggleOptionFormOpen = (): void => {
    setOptionFormOpen(!optionFormOpen);
  };

  return [optionFormOpen, toggleOptionFormOpen];
}
