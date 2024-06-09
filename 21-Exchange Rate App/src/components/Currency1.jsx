import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_TaUcoJZlNWLeIRTzcNGYRS5BcYM4gMarJFJvUoYa";


function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
       const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency] * amount).toFixed(3))
    }




    return (
        <div className='currency-div'>
            <div>
                <h1 className='title'>Currency Converter</h1>
            </div>
            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)}
                    className='input-amount' type="number" />

                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowRightArrowLeft style={{ fontSize: "15px" }} />
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)}
                    className='result' type="number" />
            </div>
            <div>
                <button onClick={exchange}
                    className='exchange-button'>Exchange</button>
            </div>
        </div>
    )
}

export default Currency