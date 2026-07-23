import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrency } from "../API/Api";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [shouldConvert, setShouldConvert] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["currency", amount, from, to],
    queryFn: fetchCurrency,
    enabled: shouldConvert,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...{error.message}</h1>;
  const handleChange = () => {
    setShouldConvert(true);
  };
const convertedAmount= from===to?amount :data?.rates?.[to.toUpperCase()]

  return (
    <div className="converter">
        <span className="live-exchange">LIVE EXCHANGE</span>
      <h1>CURRENCY CONVERTER</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="gbp">GBP</option>
        <option value="inr">INR</option>
        <option value="jpy">JPY</option>
        <option value="aud">AUD</option>
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="gbp">GBP</option>
        <option value="inr">INR</option>
        <option value="jpy">JPY</option>
        <option value="aud">AUD</option>
      </select>

      <button className="convert-btn" onClick={handleChange} disabled={from===to || amount==""} >Convert</button>
      <p>{convertedAmount}</p>
    </div>
  );
};
