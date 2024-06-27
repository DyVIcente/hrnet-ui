import React, { useState } from "react";
import { Button } from "modale-hrnet";
import { Modal } from "modale-hrnet";

function App() {
  const [formFilled, setFormFilled] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFilled(e.target.value.length > 0);
  };

  const validateForm = () => {
    return formFilled;
  };

  return (
    <div>
      <h1>Hello world</h1>
      <form>
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Enter something"
        />
      </form>
      <Modal triggerText="Save" validate={validateForm}>
        <h2 className="hrnet-text-lg hrnet-font-bold">Employee Created!</h2>
      </Modal>
    </div>
  );
}

export default App;
