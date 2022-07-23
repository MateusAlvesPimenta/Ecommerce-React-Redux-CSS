function Add(cart)
{
    return{
        type:"ADD_TO_CART",
        cart
    }
}

function Remove(cart)
{
    return{
        type:"REMOVE_FROM_CART",
        cart
    }
}

function Increase(cart)
{
    return{
        type:"INCREASE",
        cart
    }
}

function Decrease(cart)
{
    return{
        type:"DECREASE",
        cart
    }
}

export default {
    Add,
    Remove,
    Increase,
    Decrease
}