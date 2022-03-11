import React from 'react'
import ItemCount from './ItemCount'

const Item = ({card}) => {

const onAdd = () =>{
    console.log('agregué al carrito')
}
return (
    <div>
        <div>
            <p>{card}</p>
            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>

    </div>
)
}

export default Item