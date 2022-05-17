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
                { id: 1, title: "Appels" },
                { id: 2, title: "milk" },
                { id: 77, title: "cabbage" },
                { id: 78, title: "broccoli" }
            ], 
            shoppingCartItems: 
            []
            }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
    }

    addItemToShoppingCart(newTitle) {
        
        // this.setState((prevState) => {
        //     console.log(`newTitle: ${newTitle}`)
            
        //     console.log('prevState 1a:')
        //     console.log(prevState)

            //2do later: use symbol to create unique id.
            const id = Math.floor(Math.random() * 100000) + 1;
            const newItemInShoppingCart = {id, title: newTitle };
            console.log('new item in shoppingcart')
            console.log(newItemInShoppingCart)  

        // 2do (later): debug why code below does not work.
        //     console.log('prevState 1b:')
        //     console.log(prevState)

        //     // copy shoppingCartItems of the old state:
        //     const newShoppingCartItems = [...prevState.shoppingCartItems];
        //     console.log('new shoppingcart items (before update')
        //     console.log(newShoppingCartItems)

        //     console.log('prevState 2:')
        //     console.log(prevState)

        //     // add shoppinglist item to shopping cart:
        //     newShoppingCartItems.push(newItemInShoppingCart);
        //     console.log('new shoppingcart items (after update)')
        //     console.log(newShoppingCartItems)


        //     console.log('prevState 3:')
        //     console.log(prevState)
            
        //     const newState = {...prevState, shoppingCartItems: newShoppingCartItems }
        //     console.log('new state:')
        //     console.log(newState);
        //     return newShoppingCartItems;
        // });

    
        this.setState({
            ...this.state,
            shoppingCartItems: [...this.state.shoppingCartItems].concat([newItemInShoppingCart])
        });
    }
    
    addItemToGroceryList = (newTitle) => {
        console.log(`fn addToGroceryList is working: ${newTitle}`) 

        const id = Math.floor(Math.random() * 100000) + 1;
        const newItemOnGroceryList = {id, title: newTitle };
        console.log('new item on grocery list')
        console.log(newItemOnGroceryList)            

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

    //"onItemClick" in assignment. 
    handleClickGroceryItem = (event) => {
        
        // console.log(event.target.attributes.value.value)
        let newItemToAddToShoppingCart = event.target.attributes.value.value;
        console.log(`hier: ${newItemToAddToShoppingCart}`)
        this.addItemToShoppingCart(newItemToAddToShoppingCart);
        // console.log(event.target.attributes)
        // const myGroceries = Array.from(event.target.attributes.value.childNodes)
        // console.log(myGroceries)
        // for(let myGrocery of myGroceries){
        //     console.log(myGrocery)
        // }
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