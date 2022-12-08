import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useState } from "react";
import { Button, Input, LinkWord, Title } from '../../src/styled';
import styled from "styled-components"
import { selectCamping } from "../store/camping/selectors"
import { fetchCampings } from "../store/camping/thunks"


export const Campings = () => {
  const dispatch = useAppDispatch();

  //const [name, setName] = useState("");

  /*  const [displayForm, setDisplayForm] = useState<Boolean | undefined>(false);*/

  const campings = useAppSelector(selectCamping);

  console.log("selector", campings)

  useEffect(() => {
    dispatch(fetchCampings());
  }, [dispatch]);


  return (
    <div style={{ textAlign: "center" }}>
      <Title>List of campings</Title>
      <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {!campings
          ? ("Loading"
          ) :
          campings.map((camping) => {
            return (
              <div>
                <br></br>
                <p>Name: {camping.name}</p>
                <p>Description: {camping.description}</p>
                <img
                  alt={camping.name}
                  src={camping.photo1}
                  className="center"
                  style={{ width: "300px", borderRadius: "0.5em" }}
                />



              </div>
            );
          })}
      </div>


    </div>
  )

}

export default Campings;

const Container = styled.div`
  display: 'center';
`
