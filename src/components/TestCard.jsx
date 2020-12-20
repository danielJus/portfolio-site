import React from "react"
import styled, { keyframes } from "styled-components"

const TestCard = () => {
  return (
    <Card>
      <CardAnimationWrapper>
        <CircleAnimationWrapper>
          <Circle></Circle>
          <InnerCircle></InnerCircle>
        </CircleAnimationWrapper>
      </CardAnimationWrapper>
    </Card>
  )
}

export default TestCard

const upAnimation = keyframes`

  from{
    transform: translateY(5%);
  }

  to{
    transform: translateY(0%);
  }




`

const Card = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px,
    rgba(255, 255, 255, 0.25) 0px 0px 0px 0.5px inset;
  place-content: center;
  border-radius: 5px;
  background-color: #172a45;
`

const CardAnimationWrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  place-content: center;
  mix-blend-mode: overlay;
`

const CircleAnimationWrapper = styled.div`
  width: 410px;
  height: 410px;
  position: relative;
  animation: 3s linear 1s 1 normal forwards running ${upAnimation};
  transform: translateY(5%);
`

const Circle = styled.div`
  position: aboslute;
  width: 100%;
  height: 100%;
  border-radius: 210px;
  left: calc(50% - 210px);
  top: calc(50% - 210px);
  background: linear-gradient(
    rgb(159, 225, 255) 0%,
    rgba(23, 42, 69, 0.086) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
`
const InnerCircle = styled.div`
  position: absolute;
  background: linear-gradient(
    rgb(159, 225, 255) 0%,
    rgba(23, 42, 69, 0.086) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 260px;
  height: 260px;
  border-radius: 135px;
  left: calc(50% - 130px);
  top: calc(50% - 130px);
`
