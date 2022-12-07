import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { Button, Input, LinkWord, Title } from '../../src/styled';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectToken } from '../store/user/selectors';
import { login } from '../store/user/thunks';

export const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const token = useAppSelector(selectToken)

    useEffect(() => {
        //  if (token !== null) {
        if (token) {
            navigate("/user");
        }
    }, [token, navigate]);

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div style={{ textAlign: "center" }} className="container mt-5">
            <div className='card shadow'>
                <div className='card-body'>
                    <Container>
                        <Title>Login</Title>
                        <form onSubmit={submitForm}>
                            <div className='d-flex flex-column align-items-center'   >
                                <Input
                                    className='form-control mb-4'
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    className='form-control mb-4'
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button className="btn btn-primary" type="submit">Login</Button>
                            </div>
                        </form>
                        <p className='text-center mt-3'>
                            Don't have an account yet? Click <Link to="/signup" style={LinkWord}>here</Link> to sign up
                        </p>
                    </Container>
                </div>
            </div>


        </div>
    )
}


const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  margin: 15%;
`



