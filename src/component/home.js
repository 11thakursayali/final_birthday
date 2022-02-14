import React from "react";
// import myJson from "./jsonFile";
import Calendar from "./calender";
// import Days from "./Days.js";



class Home extends React.Component {

    render() {
        return (

            <div>

                {/* <div class="app">

                    <h1 class="app__header">Birthday Cal &ndash; Work Area</h1>

                    <div class="app__content">

                        <div id="work-area">

                            <div class="calendar-container">
                                <em class="note">&lt;--- Render the 7-day calendar here ---&gt;</em>

                               


                            </div> */}

                            <>

                                <Calendar/>
                                {/* <Days /> */}
                                {/* <textarea
                                    class="app__txt js-json"
                                    id="json-input" placeholder="Paste the json here." value={JSON.stringify(Data, undefined, 4)}
                                    onChange={(e) => { this.onInput(e) }} >
                                    
                                </textarea> */}

                                {/* <div class="app__actions">
                                    <label>Year</label>
                                    <select class="js-year-input"
                                    value={setYears}
                                    onChange={handler}
                                    >
                                        <option value="2022" selected>2022</option>
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
                                </div> */}
                            </>
                        </div>

                        // <hr class="border-line app__border" />

            //         </div>
            //     </div>


            // </div>
        );
    }
}

export default Home;