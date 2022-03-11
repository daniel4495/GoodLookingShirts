import React,{useState} from 'react'
import ItemCount from './ItemCount'

const Item = ({card}) => {
const [show, setShow]=useState(false)

const verMas = () =>{
    console.log(show)
    setShow(!show)
}
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