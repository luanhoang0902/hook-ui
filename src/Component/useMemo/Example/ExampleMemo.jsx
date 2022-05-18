import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

ExampleMemo.propTypes = {
    
};

function ExampleMemo(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: Number(price)
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(()=>{
        const result = products.reduce((result, prob) =>{
            console.log('Tính toán lại...')
            return result + prob.price
        }, 0)
        return result
    },[products])

    return (
        <div style={{padding: '10px 32px'}}>
            <input
            ref = {nameRef}
            value={name}
            placeholder="Enter name..."
            onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
            value={price}
            placeholder="Enter name..."
            onChange={e => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br/>
            Total: {total}
                <ul>
                {products.map((product, index) =>(
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
                </ul>
        </div>
    );
}

export default ExampleMemo;