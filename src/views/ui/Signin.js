import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

function Signin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkValidity = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");

    console.log("its working");
    dispatch(login(email, password));
  };

  return (
    <Container
      fluid
      style={{ marginTop: "9rem", height: "100vh", backgroundColor: "#f1f1f1" }}
    >
      <Row className='p-4 w-100 d-flex justify-content-center'>
        <Col className='p-5' xs={12} md={6}>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag='h2' className='border-bottom p-3 mb-0'>
              Sign In
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Email</Label>
                  <Input
                    id='exampleEmail'
                    name='email'
                    placeholder='Email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword'>Password</Label>
                  <Input
                    id='examplePassword'
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
              </Form>
              <Button disabled={!checkValidity()} onClick={handleSubmit}>
                Submit
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
// const Signin = () => {
//   return Signin;
//   // <Row>
//   //   <Col>
//   //     {/* --------------------------------------------------------------------------------*/}
//   //     {/* Card-1*/}
//   //     {/* --------------------------------------------------------------------------------*/}
//   //     <Card>
//   //       <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
//   //         <i className='bi bi-bell me-2'> </i>
//   //         Sign In
//   //       </CardTitle>
//   //       <CardBody>
//   //         <Form>
//   //           <FormGroup>
//   //             <Label for='exampleEmail'>Email</Label>
//   //             <Input
//   //               id='exampleEmail'
//   //               name='email'
//   //               placeholder='with a placeholder'
//   //               type='email'
//   //             />
//   //           </FormGroup>
//   //           <FormGroup>
//   //             <Label for='examplePassword'>Password</Label>
//   //             <Input
//   //               id='examplePassword'
//   //               name='password'
//   //               placeholder='password placeholder'
//   //               type='password'
//   //             />
//   //           </FormGroup>
//   //           <Button>Submit</Button>
//   //         </Form>
//   //       </CardBody>
//   //     </Card>
//   //   </Col>
//   // </Row>
// };

// export default Signin;
