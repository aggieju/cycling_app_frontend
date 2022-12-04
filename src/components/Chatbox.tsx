import styled from "styled-components";
import { useMemo } from "react";

const ChatBox = (message: { id: number, text: string; createdAt: string; }) => {


  const colors = ["264653", "2a9d8f", "e9c46a", "f4a261", "e76f51", "D43D8A"]
  const randomColor = useMemo(() => colors[Math.floor(Math.random() * colors.length)], []);

  const { text, createdAt } = message

  const date = createdAt

  return (
    <MessageBox>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
        <img style={{ width: 15, margin: 8 }} src={`https://source.boringavatars.com/beam/20?colors=${randomColor}`} />
        <p> <span style={{ fontWeight: "bold" }}>says:</span> {text} </p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {date}
      </div>
    </MessageBox>
  )
}

export default ChatBox



const MessageBox = styled.div`
  /* border: 2px solid #dedede; */
  display: flex;
  flex-direction: column;
  background-color: #dedede;
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  width: relative;
  /* width: 250px; */`