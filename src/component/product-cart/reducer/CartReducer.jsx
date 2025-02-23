export const CartReducer = (state,action)=>{
    
    switch (action.type){
        case 'ADD_PRODUCT':
            return { ...state, products : action.payload }
        case 'ADD_TO_CART':
            return { ...state, cart : state.products }
        case 'REMOVE_FROM_CART':
            return { ...state, products : action.payload }
        default : 
            return state
        
    }

}