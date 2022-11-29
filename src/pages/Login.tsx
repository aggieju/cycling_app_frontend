import styled from "styled-components"
import { Button, Input, Title, LinkWord } from "../../src/styled"
import { Link } from "react-router-dom"
import { FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { login } from "../store/user/thunks"
import { selectToken } from "../store/user/selectors"

export const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const token = useAppSelector(selectToken)

    useEffect(() => {
        //  if (token !== null) {
        if (token) {
            navigate("/users");
        }
    }, [token, navigate]);

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Container>
                <Title>Login</Title>
                <form onSubmit={submitForm}>
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <Button type="submit">Login</Button>
                </form>
                <SubText>
                    Don't have an account yet? Click <Link to="/signup" style={LinkWord}>here</Link> to sign up
                </SubText>
            </Container>
        </div>
    )
}

const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  margin: 15%;
`

const SubText = styled.p`
  text-align: center;
  color: #1E3163;
  padding: 20px 0px 5px 0px;
`;

