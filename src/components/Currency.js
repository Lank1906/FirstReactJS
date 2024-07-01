import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);
    const handleChangeCurrency = (va) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: va,
        });
    };
    return (
        <div className='alert alert-primary'>
            <select value={currency} onChange={(e)=>handleChangeCurrency(e.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
