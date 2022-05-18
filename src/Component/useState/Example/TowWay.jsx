import React, { useState } from 'react';
import PropTypes from 'prop-types';

TowWay.propTypes = {
    
};
const arrays = [
    {
        id: 1,
        name: 'Hoàng'
    },
    {
        id: 2,
        name: 'Văn'
    },
    {
        id: 3,
        name: 'Luân'
    }
]
function TowWay(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [luan, setLuan] = useState('')
    const [checked, setChecked] = useState(2)
    const [checked1, setChecked1] = useState()
    const [checkbox, setCheckbox] = useState([])

    console.log(checkbox)

    const handleSubmit =()=>{
       setLuan({
           name,
           email
       })
    }
    const handleSubmit1 = () => {
        setChecked1(checked)
    }

    const handleCheckbox = (id) => {
        setCheckbox(prev => {
            const isChecked = checkbox.includes(id)
            if (isChecked) {
                return checkbox.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    return (
        <div style={{padding: 32}}>
            {/*  */}
            <h1>Ví dụ 1</h1>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button onClick={()=>setName('Nguyễn Văn B')}>Change</button>
            {/*  */}
            <h1>Ví dụ 2</h1>
            <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>Tên: {name}</div>
            <div>Email: {email}</div>
            <div>Submit: {JSON.stringify(luan)}</div>
            {/*  */}
            <h1>Ví dụ 3</h1>
            {arrays.map(array =>(
                <div key={array.id}>
                    <input 
                    type="radio"
                    checked={checked === array.id} 
                    onChange={()=>setChecked(array.id)}    
                    />
                    {array.name}
                </div>
            ))}
            <button onClick={handleSubmit1}>Submit</button>
            <div>id: {checked1}</div>
            {/*  */}
            <h1>Ví dụ 4</h1>
            {arrays.map(array =>(
                <div key={array.id}>
                    <input 
                    type="checkbox"
                    checked={checkbox.includes(array.id)} 
                    onChange={()=>handleCheckbox(array.id)}     
                    />
                    {array.name}
                </div>
            ))}
            <button onClick={handleSubmit1}>Submit</button>
        </div>
    );
}

export default TowWay;
