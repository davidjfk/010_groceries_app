import styled from "styled-components";

export const StyledFlexBoxInForm = styled.div`
    display: flex;
    flex-direction: column;
    align items: center;

    & >  input,
    & > div,
    & >  button {
        flex: 1;
    }
 
    margin-left: ${({marginLeft}) => marginLeft };
    margin-right: ${({marginRight}) => marginRight};
`
