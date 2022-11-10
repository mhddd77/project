import { useState } from "react";
import "./App.css";

function checkFormValidation(form_name, input_name){
  var input = document.forms[form_name][input_name].value;
  
  if(input === null || input === ""){
      alert("فیلد نام نباید خالی باشد");
      return false;
  }
}
function App() {
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [loading, setLoading] = useState("");
  const [unLoading, setUnLoading] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [dec, setDec] = useState("");


  const sendApi = {
    id : Math.floor(Math.random() * 10000),
    productType: type,
    weight: weight,
    vehicleType: vehicle,
    loadingLocation: loading,
    unloadingLoc: unLoading,
    loadingData: date,
    name: name,
    time: time,
    dec : dec
  }
  const typeOnChange = (event) => {
    setType(event.target.value);
  };
  const weightOnChange = (event) => {
    setWeight(event.target.value);
  };
  const vehicleOnChange = (event) => {
    setVehicle(event.target.value);
  };
  const loadingOnChange = (event) => {
    setLoading(event.target.value);
  };
  const unLoadingOnChange = (event) => {
    setUnLoading(event.target.value);
  };
  const dateOnChange = (event) => {
    setDate(event.target.value);
  };
  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const timeOnChange = (event) => {
    setTime(event.target.value);
  };
  const decOnChange = (event) => {
    setDec(event.target.value);
  };


  const onSubmitForm = async (event) => {
    event.preventDefault();
    console.log(sendApi)

    const send = await fetch("http://localhost:8000/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(sendApi)
    })
    // const sendData = await send.json()
    await send.json()
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        // return response.text();
        return send.json()
      })
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
      });
      setType('')
      setWeight('')
      setVehicle('')
      setLoading('')
      setUnLoading('')
      setDate('')
      setName('')
      setTime('')
  }

  return (
    <div className="center">
      <h1>سفارشات</h1>
      <form name="form-1" action="#" method="post" onsubmit="return checkFormValidation('form-1', 'input-1');" onSubmit={onSubmitForm}>
        <input
          type="text"
          value={type}
          onChange={typeOnChange}
          placeholder="نوع کالا"
        />
        <input
          required
          type="text"
          value={weight}
          onChange={weightOnChange}
          placeholder="وزن"
        />
        <input
          required
          type="text"
          value={vehicle}
          onChange={vehicleOnChange}
          placeholder="نوع ناوگان"
        />
        <input
          required
          type="text"
          value={loading}
          onChange={loadingOnChange}
          placeholder="محل بارگیری"
        />
        <input
          required
          type="text"
          value={unLoading}
          onChange={unLoadingOnChange}
          placeholder="محل تخلیه"
        />
        <div className="label" >
        <label className="label-1" for="date">تاریخ بارگیری</label>
        <input
          required
          type="date"
          value={date}
          id = "date"
          onChange={dateOnChange}
          placeholder="تاریخ بارگیری"
        />
        </div>
        <input
          required
          type="text"
          value={name}
          onChange={nameOnChange}
          placeholder="نام اعلام کننده بار"
        />
        <div>
        <label className="label-2" for="time">ساعت بارگیری</label>
        <input
          required
          type="time"
          value={time}
          id = "time"
          onChange={timeOnChange}
          placeholder="ساعت بارگیری"
        />
        </div>
        <textarea
        type="text"
        value={dec}
        onChange={decOnChange}
        placeholder="توضیحات..."
        ></textarea>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;