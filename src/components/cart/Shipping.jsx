import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
const dispatch = useDispatch()
const navigate = useNavigate()
const submitHandler = (e)=>{
  e.preventDefault();
  dispatch({
    type: "addShippingInfo",
    payload: {
      hNo,
      city,
      state,
      country,
      pinCode,
      phoneNo,
    },
  });
  localStorage.setItem(
    "shippingInfo",
    JSON.stringify({
      hNo,
      city,
      state,
      country,
      pinCode,
      phoneNo,
    })
  );
  navigate("/confirmorder");
}
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input type="text" value = {hNo} onChange={(e) => setHNo(e.target.value)} placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" value = {city} onChange = {(e) => setCity(e.target.value)} placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>

            <select
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <label>Pin Code</label>
            <input type="number" value = {pinCode} onChange = {(e) => setPinCode(e.target.value)} placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" value = {phoneNo} onChange = {(e) => setPhoneNo(e.target.value)} placeholder="Enter Phone No." />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
