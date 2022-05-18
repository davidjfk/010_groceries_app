import React, { Component } from 'react';
import GroceryList from  './GroceryList';
import ShoppingCart from  './ShoppingCart';
import { StyledContainer } from './styles/Container.styled';


export class Container extends Component {
    constructor() {
        super(); 
        this.state = 
            {groceryListItems: 
            [  
                // { id: 1, title: "Appels" },
                // { id: 2, title: "milk" },
                // { id: 77, title: "cabbage" },
                // { id: 78, title: "broccoli" }
            ], 
            shoppingCartItems: 
            []
            }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.addGroceryListItemToShoppingCart = this.addGroceryListItemToShoppingCart.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
    }

    addGroceryListItemToShoppingCart(newTitle) {
        //2do later: use symbol to create unique id.
        const id = Math.floor(Math.random() * 100000) + 1;
        const newItemInShoppingCart = {id, title: newTitle, showQuantities: true, amount: 1};

        // option 1 of 2
        this.setState((prevState) => {
            // copy shoppingCart of the old state:
            const newShoppingCartItems = [...prevState.shoppingCartItems];
            // add groceryList item to (this copy of array) ShoppingCart
            newShoppingCartItems.push(newItemInShoppingCart);
            
            // merge the updated copy of array ShoppingCart back into a copy of the entire state of component Container
            const newState = {...prevState, shoppingCartItems: newShoppingCartItems }
            return newState;
        });

        // option 2 of 2 (status: working). I save it as building block. 
        // this.setState({
        //     ...this.state,
        //     shoppingCartItems: [...this.state.shoppingCartItems].concat([newItemInShoppingCart])
        // });
    }
    
    addItemToGroceryList = (newTitle) => {
        // console.log(`fn addToGroceryList is working: ${newTitle}`) 

        const id = Math.floor(Math.random() * 100000) + 1;
        const newItemOnGroceryList = {id, title: newTitle, showQuantities: false };
       
        this.setState({
            ...this.state,
            groceryListItems: [...this.state.groceryListItems].concat([newItemOnGroceryList])
        });
    }
    

    emptyCart = () => {
        console.log('fn emptyCart is working') 
        console.log(this.state.shoppingCartItems.length)
        this.setState({
            ...this.state,
            shoppingCartItems: []
        })
    }

    returnGroceryItemIfItAlreadyExistsInShoppingCartElseUndefined = (shoppingCartItems, newItemToAddToShoppingCart) => { 
        let groceryItemInShoppingCart = shoppingCartItems.find(shoppingCartItem => shoppingCartItem.title === newItemToAddToShoppingCart) 
        
        return groceryItemInShoppingCart;
    }

    // fn name in winc assignment: addAmountToItem
    addOneToPropertyAmountOfShoppingCartItem = (groceryItemInShoppingCart) => { 
        console.log(`fn addAmountToItem: `) 
        const copyOfgroceryItemInShoppingCart = {...groceryItemInShoppingCart};
        copyOfgroceryItemInShoppingCart.amount +=1; 
        console.log(copyOfgroceryItemInShoppingCart)


        this.setState((prevState) => {

            // copy shoppingCart of the old state:
            const copyOfShoppingCartItems = [...prevState.shoppingCartItems];
            // add groceryList item to (this copy of array) ShoppingCart
            const newShoppingCartItems = copyOfShoppingCartItems.map(item => 
                item.id === copyOfgroceryItemInShoppingCart.id ? copyOfgroceryItemInShoppingCart : item
            )
            // merge the updated copy of array ShoppingCart back into a copy of the entire state of component Container
            const newState = {...prevState, shoppingCartItems: newShoppingCartItems }
            console.log('new state:')
            console.log(newState);
        return newState;
        });
        // return copyOfgroceryItemInShoppingCart 
    }

    //"onItemClick" in assignment. 
    handleClickGroceryItem = (event) => {
        let newItemToAddToShoppingCart = event.target.attributes.value.value;
        console.log(`fn handleClickGroceryItem: ${newItemToAddToShoppingCart}`)

        const groceryItemInShoppingCart = this.returnGroceryItemIfItAlreadyExistsInShoppingCartElseUndefined(this.state.shoppingCartItems, newItemToAddToShoppingCart);

        if(groceryItemInShoppingCart) {
            console.log('grocery already exists in shoppingcart')
            this.addOneToPropertyAmountOfShoppingCartItem(groceryItemInShoppingCart)
        } else {
            this.addGroceryListItemToShoppingCart(newItemToAddToShoppingCart);
            console.log(`groceryItemInShoppingCart with 'amount:1 ':`)
            console.log(this.state.shoppingCartItems[0]);
        }  
    }

    render() {
        return (
            <StyledContainer>
                <GroceryList groceryListItems = {this.state.groceryListItems} onHandleClickGroceryItem = {this.handleClickGroceryItem} onAddToGroceryList = {this.addItemToGroceryList}/>
                <ShoppingCart shoppingCartItems = {this.state.shoppingCartItems}  callback = {this.emptyCart}/>
            </StyledContainer>
        )
  }
}

export default Container