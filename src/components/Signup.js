import { EmailAuthCredential } from "@firebase/auth";
import React,{useRef} from "react";
import { Card, Button, Form } from "react-bootstrap";
import {useAuth} from '../contexts/AuthContext'

export default function Signup() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const {signup}=useAuth();

  function handleSubmit(e){
      e.preventDefault();
      signup(emailRef.current.value,passwordRef.current.value)
  }
    return (
    <>
      <Card>
          <Card.Body >
              <h2 className="text-center mb-4 ">SignUp</h2>
              <Form>
                  <Form.Group id="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                  </Form.Group>
                  <Form.Group id="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                  </Form.Group>
                  <Form.Group id="Password-Confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                  </Form.Group>
                  <Button className="w-100 mt-3" type="submit">Sign Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          Already have an Account?Login
      </div>
    </>
  );
}
