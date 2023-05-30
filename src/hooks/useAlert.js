import { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
      setAlert({
        type: type,
        message: message,
      });
          setTimeout(() => {
            setAlert(false);
          }, 3000);
    }

  return [alert, showAlert];
};

export default useAlert;
