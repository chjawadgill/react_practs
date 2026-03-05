import { useState } from "react";   
function Check() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input 
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
}export default Check;