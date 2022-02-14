import "./css/a.css";
import "./css/b.css";
import "./css/c.css";
import { useState, useEffect } from "react";
import Data from './data';

function Days() {
    const [years, setYears] = useState("2022");
    const [allData, setAllData] = useState(Data);
    const [weeks, setWeeks] = useState([]);


    console.log(allData);

    const monday = [];
    const tuesday = [];
    const wednesday = [];
    const thursday = [];
    const friday = [];
    const saturday = [];
    const sunday = [];
    const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];


    function renderAllDays(allData) {
        console.log(allData);
        // let initials;

        Object.keys(Data).map((birthData, index) => {

            let initial = Data[birthData].name.split(' ').reduce((acc, nameString) =>
                acc + nameString[0], '')
            console.log("INITIAL", initial);

            console.log(Data[birthData].name);
            // console.log(Data[birthData].birthday.substring(0,5));
            let a = Data[birthData].birthday.substring(0, 5);
            console.log(a);

            let b = new Date(a);
            let d = b.getDay();
            console.log(d);

            const weekday = day[d];
            console.log(weekday);


            if (weekday === "MON") {
                monday.push({
                    name: initial
                });
                setWeeks(weeks[monday]);

            }
            else if (weekday === "TUE") {
                tuesday.push({
                    name: initial
                });
                setWeeks(weeks[tuesday]);
            }
            else if (weekday === "WED") {
                wednesday.push({
                    name: initial
                });
                setWeeks(weeks[wednesday]);
            }
            else if (weekday === "THU") {
                thursday.push({
                    name: initial
                });
            }
            else if (weekday === "FRI") {
                friday.push({
                    name: initial
                });
            }
            else if (weekday === "SAT") {
                saturday.push({
                    name: initial
                });
            }
            else if (weekday === "SUN") {
                sunday.push({
                    name: initial
                });
            }
            // return null;
        });
        // return allData;

    }

    const handler = (event) => {
        const value = event.target.value;
        setYears(value);
        renderAllDays(allData);
    };

    useEffect(() => {
        renderAllDays(allData);
    }, [allData,years]);

    return (
        <div class="app">

            <h1 class="app__header">Birthday Cal &ndash; Work Area</h1>

            <div class="app__content">

                <div id="work-area">

                    <div class="calendar-container">
                        <em class="note">&lt;--- Render the 7-day calendar here ---&gt;</em>
                        <div className="row seven-cols">
                            <div className="col-md-1">
                                <p className="day">MON</p>
                                <div className='row'>
                                    {monday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <p className="dname">{data.initial}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">TUE</p>
                                <div className='row'>
                                    {tuesday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <div className="dname">{data.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">WED</p>
                                <div className='row'>
                                    {wednesday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <div className="dname">{data.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">THU</p>
                                <div className='row'>
                                    {thursday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <div className="dname">{data.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">FRI</p>
                                <div className='row'>
                                    {friday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <div className="dname">{data.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">SAT</p>
                                <div className='row'>
                                    {saturday.map((data, key) => {
                                        return (
                                            <div key={key} className={"column key" + key}>
                                                <div className="dname">{data.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="day">SUN</p>
                                <div className='row'>
                                    {sunday.map((data, key) => {
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
                    <div class="app__inputs">
                        <div><textarea
                            className="app__txt js-json"
                            id="json-input"
                            placeholder="Paste the json here."
                            value={JSON.stringify(allData, undefined, 4)}
                            onChange={event => setAllData(JSON.parse(event.target.value))}
                        /></div>

                        <div className="app__actions">
                            <label>Year</label>
                            <select
                                className="js-year-input"
                                value={setYears}
                                onChange={(elem) => { handler(elem) }}
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
                <hr class="border-line app__border" />
            </div>
        </div>
    );
}
export default Days;