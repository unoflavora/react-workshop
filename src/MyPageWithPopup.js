import React, { useEffect, useState } from 'react';

function RegisterPopup() {
  const [registered, setRegistered] = useState(false);

  function handleRegister(event) {
    event.preventDefault();
    setRegistered(true);
  }

  if(registered) {
    return <div>You are registered</div>
  }

  return (<React.Fragment>
    <div>Register to get benefits</div>
    <button type="button" onClick={handleRegister}>Register Now!</button>
  </React.Fragment>)
}

export default function MyPageWithPopup() {
  const [popupShown, setPopupShown] = useState(false);

  useEffect(
    () => {
      if (!popupShown) {
        setTimeout(
          () => {
            setPopupShown(true)
          }, 500
        )
      }
    }
  )

  return (
    <React.Fragment>
      {popupShown ? <RegisterPopup /> : null}
    </React.Fragment>
  )
}