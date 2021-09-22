import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  const myStyle = {
    minHeight: "100vh",
  };
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={myStyle}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
