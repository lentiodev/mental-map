import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material";
import {
  AnxietyIcon,
  DepressionIcon,
  AutismIcon,
  AddictionIcon,
} from "./icons";

const SectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eefcfb;
  padding: 40px 0;
`;

const SectionTitle = styled(Typography)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 56px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  font-family: "Josefin Sans", sans-serif;
  background-color: #ffcf43;
  padding: 10px 20px;
  &:hover {
    background-color: #e2bc3d;
  }
`;

const IconWrapper = styled("span")`
  font-size: 32px;
  margin-right: 10px;
`;

const ConditionsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Mental Health Conditions</SectionTitle>
      <ButtonContainer>
        <StyledButton
          startIcon={
            <IconWrapper>
              <AnxietyIcon />
            </IconWrapper>
          }
          variant="contained"
          onClick={() => (window.location.href = "/anxiety")}
        >
          Anxiety
        </StyledButton>
        <StyledButton
          startIcon={
            <IconWrapper>
              <DepressionIcon />
            </IconWrapper>
          }
          variant="contained"
          onClick={() => (window.location.href = "/depression")}
        >
          Depression
        </StyledButton>
        <StyledButton
          startIcon={
            <IconWrapper>
              <AutismIcon />
            </IconWrapper>
          }
          variant="contained"
          onClick={() => (window.location.href = "/autism")}
        >
          Autism
        </StyledButton>
        <StyledButton
          startIcon={
            <IconWrapper>
              <AddictionIcon />
            </IconWrapper>
          }
          variant="contained"
          onClick={() => (window.location.href = "/addiction")}
        >
          Addiction
        </StyledButton>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default ConditionsSection;
