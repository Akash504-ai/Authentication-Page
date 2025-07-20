import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {
        !isAuthenticated ? 
        <div>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
        : 
        <div>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      }
    </>
  )
}

export default App
