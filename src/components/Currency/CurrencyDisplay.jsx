
import React, { useContext } from 'react'
import CurrencyContext from './CurrencyContext'

const CurrencyDisplay = (currency, rate) => {
    const priceInDollars = useContext(CurrencyContext)
    const convertedPrice = priceInDollars * rate;
  return (
    <div>
      <h4>Ціна в {currency} : {convertedPrice.toFixed(2)}</h4>
    </div>
  )
}

export default CurrencyDisplay
