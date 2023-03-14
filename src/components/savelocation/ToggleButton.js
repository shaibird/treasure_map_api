import { useState } from 'react'
import './ToggleButton.css'

export const Toggle = ({ label, toggled, onToggle }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = (event) => {
    const newValue = event.target.checked;
    setIsToggled(newValue);
    onToggle(newValue);
  };

  return (
    <label>
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="toggle" />
      <strong>{label}</strong>
    </label>
  );
};