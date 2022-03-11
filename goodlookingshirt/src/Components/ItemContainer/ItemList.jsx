import React from 'react'
import Item from './Item'

const ItemList = ({card}) => {
return (
    <div>
        <h2>Lista de productos</h2>
        <Item card={card}/>
    </div>
)
}

export default ItemList