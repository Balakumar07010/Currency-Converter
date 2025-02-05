import axios from "axios";
import React, { useEffect, useState } from "react";
// import currency from "../../public/currency/currency.png";

export const Currency = () => {
  const [amout, setAmout] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertCurrency, setConvertCurrency] = useState(null);
  let [country, setCountry] = useState({});
  const [checkNo, setCheckNo] = useState("false");
  const [errMessage, seterrMessage] = useState("");

  const newRates = async () => {
    try {
      const URL = await axios(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      let x = URL.data.rates;
      setConvertCurrency(x[toCurrency]);
      setCountry(x);
    } catch (error) {
      console.error("error : ", error);
    }
  };
  useEffect(() => {
    newRates();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    let checkAmout = isNaN(amout) ? 0 : amout;
    if (checkAmout != 0) {
      setConvertCurrency(amout * country[toCurrency]);
      setCheckNo(false);
    } else if (checkAmout == "") {
      setCheckNo(true);
      seterrMessage("No of Notes is Required");
      setConvertCurrency(0);
      console.error("Error  ");
    } else {
      setCheckNo(true);
      seterrMessage("Enter Digits Only");
      setConvertCurrency(0);
      console.error("Error  ");
    }
  }, [amout]);
  const currencyKeys = Object.keys(country);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center ">
      <div className=" md:w-2/6 rounded-md  flex flex-col gap-y-2 p-4 shadow-3xl z-100 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white ">
        <div>
          <h1 className="lg:text-3xl text-center uppercase font-semibold md:text-lg sm:text-base ">
            Currency Converter
          </h1>
        </div>
        <div className="w-20 h-20 mx-auto">
          <img
            src="/currency/currency.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="notes" className="font-semibold">
            No Of Notes
          </label>
          <input
            type="text"
            id="notes"
            className="w-full border-2 border-gray-400 rounded-md outline-none p-2 bg-transparent"
            value={amout}
            onChange={(e) => setAmout(e.target.value)}
          />
          {checkNo && <small className="text-red-700">{errMessage}</small>}
        </div>

        <div className="flex flex-col items-start gap-2">
          <label htmlFor="currencyFrom" className="font-semibold">
            Currency From
          </label>
          <select
            name=""
            id="currencyFrom"
            className="w-full border-2 border-gray-400 rounded-md outline-gray-400 p-2 bg-transparent"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyKeys.map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-transparent text-black"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="currencyTo" className="font-semibold">
            Currency To
          </label>
          <select
            name=""
            id="currencyTo"
            className="w-full border-2 border-gray-400 outline-gray-400 p-2 rounded-md bg-transparent"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyKeys.map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-transparent text-black"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full bg-blue-600 font-semibold my-4 p-2 rounded-md">
          <p className="text-center">
            {amout} {fromCurrency} is equal to {convertCurrency} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};
