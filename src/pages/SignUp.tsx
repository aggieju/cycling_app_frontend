import styled from "styled-components"
import { Button, Input, Title } from "../styled"
import { FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { signUp } from "../store/user/thunks"
import { selectToken } from "../store/user/selectors"
//import { Checkbox } from "@mui/material"

export const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const token = useAppSelector(selectToken)

    useEffect(() => {
        //  if (token !== null) {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        dispatch(signUp(name, email, password))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Container>
                <Title>Sign Up</Title>
                <form onSubmit={submitForm}>
                    <Input
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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

                    <Button type="submit">Sign Up</Button>
                </form>
            </Container>
        </div>
    )
}

const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  margin: 15%;
`