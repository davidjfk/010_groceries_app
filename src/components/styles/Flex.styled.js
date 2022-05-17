import styled from "styled-components";

// uc: implement flexbox inside a form. 
export const StyledFormWithFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    align items: center;

    & >  input,
    & > div,
    & >  button {
        flex: 1;
    }

    margin-left: 17rem;
    margin-right: 17rem;
    
    onSubmit={onSubmit} 
`
