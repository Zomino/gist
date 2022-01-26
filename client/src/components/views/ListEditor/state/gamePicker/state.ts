import React, { useState } from 'react';

export type ToggleGamePickerOpen = () => void;

export default function useGamePickerState(): [boolean, ToggleGamePickerOpen] {
  const [gamePickerOpen, setGamePickerOpen] = useState(false);
  const toggleGamePickerOpen = (): void => {
    setGamePickerOpen(!gamePickerOpen);
  };

  return [gamePickerOpen, toggleGamePickerOpen];
}
