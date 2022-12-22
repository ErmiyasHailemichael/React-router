import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Price() {
  const apiKey = "f8fdab1a391a8f783a17a37065b7ce62";

  const params = useParams();

  const symbol = params.symbol;

  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;
  
  console.log(url)
  const [prices, setPrices] = useState("null");

  const getPrices = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPrices(data);
  };

  useEffect(() => {
    getPrices();
  }, []);
  console.log(prices[0])
  return (
    <div className="price">
      {!prices === "null" ? (
        <h2>Waiting...</h2>
      ) : (
        <div>
          <h1>{prices[0].symbol}</h1>
          <h2>{prices[0].price}</h2>
          <h3>{prices[0].ceo}</h3>
        </div>
      )}
    </div>
  );
}


export default Price;
