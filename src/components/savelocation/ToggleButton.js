import { useState } from 'react'

export const Toggle = ({ label, toggled, onToggle }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = (event) => {
    const newValue = event.target.checked;
    setIsToggled(newValue);
    onToggle(newValue);
  };

  return (
    <label className="togglelabel">
      <input className="toggleinput" type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="toggle" />
      <strong className="togglestrong">{label}</strong>
    </label>
  );
};