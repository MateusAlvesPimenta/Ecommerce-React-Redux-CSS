const INITIAL_STATE = {
    value: 0,
    Item: []
}

export function Cart(state = INITIAL_STATE, action)
{
    switch(action.type)
    {
        case "ADD_TO_CART":

            let product = {
                id: action.cart.Key,
                Image: action.cart.Image,
                Name: action.cart.Name,
                Price: action.cart.Price,
                Quantity: 1
            }

            if( state.value === 0 )
            {
                state.Item.push(product);
            }
            else
            {
                var check = state.Item.filter( item => item.id === action.cart.Key);

                if(!check[0])
                {
                    state.Item.push(product);
                }
                else
                {
                    state.Item.map( (item)=> 
                    {
                        if( item.id === check[0].id )
                        {
                             item.Quantity += 1;
                        }
                    });
                }
            }

            return{
                ...state,
                value: ( state.value + 1 )
            }

        case "REMOVE_FROM_CART":

            for(let i = 0; i < state.Item.length; i++)
            {
                if(state.Item[i].id === action.cart.id)
                {
                    state.Item.splice(i, 1);
                    return{
                        ...state,
                        value: ( state.value - action.cart.Quantity)
                    }
                }
            }
        break;
        
        case "INCREASE":

            for(let i = 0; i < state.Item.length; i++)
            {
                if(state.Item[i].id === action.cart.id)
                {
                    state.Item[i].Quantity += 1;
                    return{
                        ...state,
                        value: ( state.value + 1 )
                    }
                }
            }
        break;

        case "DECREASE":

            for(let i = 0; i < state.Item.length; i++)
            {
                if(state.Item[i].id === action.cart.id)
                {
                    if(state.Item[i].Quantity <= 1)
                    {
                        state.Item.splice(i, 1);
                    }
                    else
                    {
                        state.Item[i].Quantity -= 1;
                    }
                    return{
                        ...state,
                        value: ( state.value - 1)
                    }
                }
            }
        break;

        default:
    }
    return state;
}