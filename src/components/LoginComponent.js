import React, {useState, useRef, useEffect} from 'react';
import { CDBInput, CDBCard, CDBCardBody,CDBBtn,CDBContainer} from 'cdbreact';
import Axios from 'axios';
import Main from './MainComponent';

const Login = () => {
    // get the errors
    const userRef = useRef();
    const errRef = useRef();

    //crear nuestro estado inicial
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(()=>{
        
    }, [])

    useEffect(()=>{
        setErrMsg('');
    }, [username, password])

    const loginUser = async(e) => {
        e.preventDefault();
        alert("username: "  + username +" Password: " + password);
        setUsername('');
        setPassword('');
        setSuccess(true);
    };
  return (
    <>
        {success ?(
            <Main/>
        ):(
            <CDBContainer style={{ width: '70rem', padding: '10rem', alignItems: 'center', justifyContent: 'center',}} >
                <CDBCard style={{ width: '50rem'}} >
                    <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                            <p className="h4"> Iniciar Sesión </p>
                        </div>
                        <CDBInput material hint="Usuario" 
                                    type="text"
                                    id="user"
                                    onChange={(e) =>{
                                        setUsername(e.target.value);}}
                                    value = {username}
                        />
                        <CDBInput material hint="Contraseña" 
                                    type="password" 
                                    id="password"
                                    onChange={(e) =>{
                                        setPassword(e.target.value);}} 
                                    value = {password}
                                    required = {true}
                        />
                        <CDBBtn color="dark" className="btn-block my-3 mx-0" onClick={loginUser}>
                            Ingresar
                        </CDBBtn>
                    </CDBCardBody>
                </CDBCard>
            </CDBContainer>
        )}
    </>
  );
};
export default Login;