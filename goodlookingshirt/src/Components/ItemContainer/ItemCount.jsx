import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1 )
        } 
    }
    const restar = () =>{
        if(contador > 0 ){
            setContador(contador - 1 )
        }
    }
return (
    <>
        <div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
        <button onClick={onAdd}> sumar al carrito</button>
    </>
)
}

export default ItemCount