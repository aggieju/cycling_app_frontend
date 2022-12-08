import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useState } from "react";
import { Button, Input, LinkWord, Title } from '../../src/styled';
import styled from "styled-components"
import { selectCamping } from "../store/camping/selectors"

export const Campings = () => {
  const dispatch = useAppDispatch();

  //const [name, setName] = useState("");

  /*  const [displayForm, setDisplayForm] = useState<Boolean | undefined>(false);*/

  const userProfile = useAppSelector(selectCamping);

  console.log("selector", userProfile)

  //useEffect(() => {
  //  dispatch(fetchUsers());
  //}, [dispatch]);


  return (
    <div style={{ textAlign: "center" }}>

    </div>
  )

}

export default Campings;

const Container = styled.div`
  display: 'center';
`
