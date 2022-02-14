import React, { useState, useEffect } from "react";
import "./css/a.css";
import "./css/b.css";
import "./css/c.css";
import Data from './data';

// import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = () => {


  const [year, setyear] = useState("2022");

  const monday = [],tuesday = [],wednesday = [],thursday = [],friday = [],saturday = [],sunday = [];
  const [mon, setMonValue] = useState([]);
  const [tue, setTueValue] = useState([]);
  const [wed, setWedValue] = useState([]);
  const [thu, setThuValue] = useState([]);
  const [fri, setFriValue] = useState([]);
  const [sat, setSatValue] = useState([]);
  const [sun, setSunValue] = useState([]);

  const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [allData, setallData] = useState(Data);
  console.log("DATA ", allData);

  const renderDay = (year, allData) => {
    allData.map((data, key) => {
      console.log("ALL DATA ", data);

      let birthDate = data.birthday;
      birthDate = birthDate.substring(0, 5);
      birthDate = birthDate + "/" + year;
      const birthday = new Date(birthDate);

      let days = birthday.getDay();
      const weekday = day[days];
      console.log(weekday);
      console.log("DATA ", birthDate);

      let nameString = data.name;
      nameString = nameString.split(" ");
      nameString =  nameString[0].substring(0, 1).toUpperCase();
      if (nameString.length > 1) {
      nameString += nameString[nameString.length - 1].substring(0, 1).toUpperCase();
      }
      console.log(nameString);
      if (weekday === "MON") {
        monday.push({
          name: nameString,
        });
        setMonValue(monday);
      }
      if (weekday === "TUE") {
        tuesday.push({
          name: nameString,
        });
        setTueValue(tuesday);
      }
      if (weekday === "WED") {
        wednesday.push({
          name: nameString,
        });
        setWedValue(wednesday);
      }
      if (weekday === "THU") {
        thursday.push({
          name: nameString,
        });
        setThuValue(thursday);
      }
      if (weekday === "FRI") {
        friday.push({
          name: nameString,
        });
        setFriValue(friday);
      }
      if (weekday === "SAT") {
        saturday.push({
          name: nameString,
        });
        setSatValue(saturday);
      }
      if (weekday === "SUN") {
        sunday.push({
          name: nameString,
        });
        setSunValue(sunday);
      }
      return null;
    });
  };

  const handler = (event) => {
    const value = event.target.value;
    setyear(value);
    renderDay(year, allData);
  };

  useEffect(() => {
    renderDay(year, allData);
  }, [year, allData]);

  return (
    <>
      <div className="app">
        <h1 className="app__header">Birthday Cal &ndash; Work Area</h1>

        <div className="app__content">
          <div id="work-area">
            <div className="calendar-container">
              <div className="row seven-cols">
                <div className="col-md-1">
                  <p className="day">MON</p>
                  <div className='row'>
                    {mon.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <p className="dname">{data.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">TUE</p>
                  <div className='row'>
                    {tue.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">WED</p>
                  <div className="row">
                    {wed.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">THU</p>
                  <div className="row">
                    {thu.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">FRI</p>
                  <div className="row">
                    {fri.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">SAT</p>
                  <div className="row">
                    {sat.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-1">
                  <p className="day">SUN</p>
                  <div className="row">
                    {sun.map((data, key) => {
                      return (
                        <div key={key} className={"column key" + key}>
                          <div className="dname">{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="app__inputs">
              <textarea
                className="app__txt js-json"
                id="json-input"
                placeholder="Paste the json here."
                value={JSON.stringify(allData, undefined, 4)}
                onChange={event => setallData(JSON.parse(event.target.value))}
              />

              <div className="app__actions">
                <label>Year</label>
                <select
                  className="js-year-input"
                  value={year}
                  onChange={handler}
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-line app__border" />
        </div>
      </div>
    </>
  );
};

export default Calendar;
