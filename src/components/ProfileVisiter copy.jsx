import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import axios from 'axios';
import BarChart from './chart/barchart';
import PieChart from './chart/piechart';
import { object } from 'framer-motion/client';
import moment from "moment";


const ProfileVisitCounter = () => {
    const [dailyCount, setDailyCount] = useState(0);
    const [weeklyCount, setWeeklyCount] = useState(0);
    const [monthlyCount, setMonthlyCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [city, setCity] = useState([]);
    const [visitCity, setVisitCity] = useState('');

    const [showForm, setShowForm] = useState(true);
    const [email, setEmail] = useState('');
    const [counts, setCounts] = useState([])
    const [cities, setCities] = useState([])
    const [pincode, setPinCode] = useState([])
    const [pincountLast30, setPinCountLast30] = useState([])
    const [pincodeLast30, setPinCodeLast30] = useState([])
    const [pincount, setPinCount] = useState([])
    const showpassword = "show"
    const [bar2key, setBar2key] = useState([])
    const [bar2value, setBar2Value] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState("");

    const [pieData, setPieData] = useState({
        labels: [],
        datasets: [],
    });
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyVofE7rPPS7enQJR8NvUF6Nw3IUmVcEFrSKTcYhe1b-ePHka10OB_hCcfkjMkuYtMP5w/exec';
    const WEB_APP_URL_GT = 'https://script.google.com/macros/s/AKfycbzYjTAuIgmCK4vV4ppkaUC-9j1zIUFbeYGZ_UCN7FN3bYTeTJOKMY_CNiQIFj7ktmqEfA/exec';

    useEffect(() => {
        const now = new Date();


        fetch(WEB_APP_URL_GT)
            // fetch('/Portfolio/portfolio.json')
            .then((response) => response.json())
            .then(async (visitData) => {

                const maxId = Math.max(...visitData.map(item => parseInt(item.id, 10)));
                const uniqueCities = [...new Set(visitData.map(item => item.city))].join(", ");

                const cityCount = visitData.reduce((acc, curr) => {
                    const city = curr.city;
                    if (acc[city]) {
                        acc[city] += 1;
                    } else {
                        acc[city] = 1;
                    }
                    return acc;
                }, {});


                // Filter the data for visits that occurred on or after the cutoff date
                const recentVisits = visitData.filter(visit => {

                    // Calculate the Cutoff Date (30 days ago)
                    const thirtyDaysAgo = new Date();
                    // Subtract 30 days in milliseconds (30 * 24 * 60 * 60 * 1000)
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                    // Convert the cutoff date to a comparable timestamp (milliseconds since epoch)
                    const thirtyDaysAgoTime = thirtyDaysAgo.getTime();
                    // Convert the visit's ISO date string to a Date object and get its timestamp
                    const visitTime = new Date(visit.date).getTime();

                    // Return true if the visit occurred 30 days ago or more recently
                    return visitTime >= thirtyDaysAgoTime;
                });
                const pinCountLast30 = recentVisits.reduce((acc, curr) => {
                    const pincode = curr.postal;
                    const city = curr.city
                    const key = pincode + " - " + city + " - " + moment(curr.date).format("DD-MM-YYYY");
                    if (acc[key]) {

                        acc[key] += 1;
                    } else {
                        acc[key] = 1;
                    }
                    return acc;
                }, {});

                const pinCount = visitData.reduce((acc, curr) => {
                    const pincode = curr.postal;
                    const city = curr.city
                    const key = pincode + " - " + city
                    if (acc[key]) {

                        acc[key] += 1;
                    } else {
                        acc[key] = 1;
                    }
                    return acc;
                }, {});
                // alert(JSON.stringify(pinCount))
                setPinCodeLast30(Object.keys(pinCountLast30))
                setPinCountLast30(Object.values(pinCountLast30))

                setPinCode(Object.keys(pinCount))
                setPinCount(Object.values(pinCount))
                setCounts(Object.values(cityCount));        // ['Pune', 'Mumbai', 'Delhi']
                setCities(Object.keys(cityCount));

                const browserInfo = getBrowserDetails();
                let state = ''
                let country = ''
                let ct = ''
                let latitude = 0
                let longitude = 0
                let pincode = 0
                await axios.get('https://ipapi.co/json/')
                    .then(response => {
                        ct = response.data.city;
                        latitude = response.data.latitude
                        longitude = response.data.longitude
                        pincode = response.data.postal
                        state = response.data.region
                        country = response.data.country_name
                    })
                    .catch(error => {
                        console.error('Error fetching location:', error);
                    });

                let params = {
                    id: maxId + 1,
                    date: new Date().toISOString(),
                    city: ct,
                    lat: latitude,
                    long: longitude,
                    postal: pincode,
                    state: state,
                    country: country,
                    currentPage: window.location.pathname,
                    userAgent: browserInfo.userAgent

                }
                try {
                    await addDataToSheet(params);
                } catch (er) {
                    console.log(er.message)
                }

                const oneDayAgo = new Date(now);
                oneDayAgo.setDate(now.getDate() - 1);

                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(now.getDate() - 7);

                const oneMonthAgo = new Date(now);
                oneMonthAgo.setMonth(now.getMonth() - 1);

                // Filter counts
                const daily = visitData.filter(item => new Date(item.date) > oneDayAgo).length;
                const weekly = visitData.filter(item => new Date(item.date) > oneWeekAgo).length;
                const monthly = visitData.filter(item => new Date(item.date) > oneMonthAgo).length;
                const total = visitData.length;

                setBar2key(["Total", "Monthly", "weekly", "daily"])
                setBar2Value([total, monthly, weekly, daily])
                setDailyCount(daily);
                setWeeklyCount(weekly);
                setMonthlyCount(monthly);
                setTotalCount(total);
                setVisitCity(uniqueCities);
                setPieData({
                    // These are the labels for each slice (shown in the tooltip and legend)
                    labels: Object.keys(cityCount),

                    datasets: [
                        {
                            label: '# of Votes', // Label shown in the tooltip
                            data: Object.values(cityCount), // The actual values for each slice
                            backgroundColor: [ // The background color for each slice
                                'rgba(255, 99, 132, 0.6)', // Red
                                'rgba(54, 162, 235, 0.6)', // Blue
                                'rgba(255, 206, 86, 0.6)', // Yellow
                                'rgba(75, 192, 192, 0.6)', // Green
                                'rgba(153, 102, 255, 0.6)', // Purple
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                // ... (etc.)
                            ],
                            borderWidth: 1,
                        },
                    ],
                })

            }
            );

    }, []);


    
const handleSubmit = () => {
    console.log("Password:", password);

    // Validate password here
    // If correct, fetch/show details

    setShowModal(false);
    setPassword(password);
};

const getBrowserDetails = () => {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages.join(', '),
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
    };
};
const update = (id, date, city) => {
    fetch('https://sheetdb.io/api/v1/58f61be4dda40/id/' + id, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                id: id,
                date: date,
                city: city
            }
        })
    })
}
// Replace with the URL from your Apps Script web app deployment.
// This is the URL you get after deploying the script with access set to "Anyone".

// const addDataToSheet = (dataParams) => {
//     fetch(WEB_APP_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataParams)
//     })

// };

// const visitorExpolre = async () =>{
//     try {
//         await useEffect()
//     } catch (error) {
//         console.error("Error posting data:", error.message);
//         throw error;
//     }
// }

const addDataToSheet = async (dataParams) => {
    try {
        // Use fetch instead of axios for better compatibility with Google Apps Script
        const response = await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'text/plain', // Changed from application/json
            },
            body: JSON.stringify(dataParams)
        });

        // Note: With mode: 'no-cors', you won't be able to read the response
        // but the request will succeed
        console.log('Data sent successfully');
        return { status: 'success' };
    } catch (error) {
        console.error("Error posting data:", error.message);
        throw error;
    }
};

const getCity = () => {
    axios.get('https://ipapi.co/json/')
        .then(response => {
            setCity(response.data.city);
            return response.data.city;
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });

}
return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
                People visited to Portfolio
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
                Visitor Insights
            </h2>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center p-4">

            <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                <h4 className="text-lg font-semibold ">Total Visits : &nbsp;  </h4>
                <p className=" text-2xl font-bold text-blue-600">{totalCount}</p>
            </div>
            <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                <h4 className="text-lg font-semibold">Monthly Visits :&nbsp; </h4>
                <p className="text-2xl font-bold text-purple-600">{monthlyCount}</p>
            </div>
            <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                <h4 className="text-lg font-semibold">Weekly Visits : &nbsp; </h4>
                <p className="text-2xl font-bold text-green-600">{weeklyCount}</p>
            </div>
            <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                <h4 className="text-lg font-semibold">Daily Visits : &nbsp;</h4>
                <p className="text-2xl font-bold text-red-600">{dailyCount}</p>
            </div>
            <button
               onClick = {() => setShowModal(true)}
                className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5"
            >
                Show Details
            </button>
        </div>



        {password == showpassword ? (<div>
            <div className="flex flex-wrap gap-4 justify-center p-4">

                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg text-purple-600 font-semibold">Visitor City : {visitCity || 'Loading...'}</h4>
                </div>
            </div>
        </div>
        ) : (
            <div></div>
        )}
        {cities.length > 1 && password == showpassword ? (

            <div>
                <div className="flex flex-wrap justify-center gap-8 px-4 py-6">

                    <div className="w-full md:w-[48%]">
                        <PieChart chartData={pieData} />
                    </div><div className="w-full md:w-[48%]">
                        <BarChart label={bar2key} dataSet={bar2value} />
                    </div>

                </div>
                <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
              
                    <div className="w-full md:w-[48%]">
                        <BarChart label={pincode} dataSet={pincount} />
                    </div>
                    <div className="w-full md:w-[48%]">
                        <BarChart label={pincodeLast30} dataSet={pincountLast30} />
                    </div>
                </div>
            </div>

        ) : (
            <div></div>
        )}

        {/* 
            {showForm ? (
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        placeholder="Enter your email"
                        className="border p-2 rounded block mt-2"
                    />
                </form>
            ) : (
                <div />
            )} */}

        {showModal && (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Enter Password
                </h2>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black"
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => {
                            setShowModal(false);
                            setPassword("");
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
        )}

    </>

);
};

export default ProfileVisitCounter;
