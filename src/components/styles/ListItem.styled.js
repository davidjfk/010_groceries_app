
import styled from "styled-components";

export const StyledListItem = styled.li`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 12px;
    justify-content: flex-end;
    gap: 500px;

    :nth-child(2n+1) {
        background-color: ${({theme}) => theme.colorsGroceryList && theme.colorsGroceryList.oddRows};
    }
    :nth-child(2n) {
    background-color: ${({theme}) => theme.colorsGroceryList && theme.colorsGroceryList.evenRows};
    }

    :nth-child(2n+1) {
        background-color: ${({theme}) => theme.colorsShoppingCart && theme.colorsShoppingCart.oddRows};
    }
    :nth-child(2n) {
        background-color: ${({theme}) => theme.colorsShoppingCart &&  theme.colorsShoppingCart.evenRows};
        }
    
    margin-bottom: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;   
`

 
