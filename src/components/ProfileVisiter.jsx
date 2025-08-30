import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import axios from 'axios';
import BarChart from './chart/barchart';

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
    const [bar2key, setBar2key] = useState([])
    const [bar2value, setBar2Value] = useState([])

    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzYjTAuIgmCK4vV4ppkaUC-9j1zIUFbeYGZ_UCN7FN3bYTeTJOKMY_CNiQIFj7ktmqEfA/exec';

    useEffect(() => {
        const now = new Date();


        fetch(WEB_APP_URL)
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

                setCounts(Object.values(cityCount));        // ['Pune', 'Mumbai', 'Delhi']
                setCities(Object.keys(cityCount));


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
                    date: now.toISOString(),
                    city: ct,
                    lat: latitude,
                    long: longitude,
                    postal: pincode,
                    state: state,
                    country: country

                }
                await addDataToSheet(params);
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
            }
            );

    }, []);

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

const addDataToSheet = async (dataParams) => {
    try {
        const response = await axios.post(WEB_APP_URL, dataParams, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // You might need to adjust this depending on the actual error structure.
        console.error("Error posting data:", error.response?.data || error.message);
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
            </div>
            <div className="flex flex-wrap gap-4 justify-center p-4">

                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg text-purple-600 font-semibold">Visitor City : {visitCity || 'Loading...'}</h4>
                </div>
            </div>
            {cities.length > 1 ? (
                <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
                    <div className="w-full md:w-[48%]">
                        <BarChart label={cities} dataSet={counts} />
                    </div>
                    <div className="w-full md:w-[48%]">
                        <BarChart label={bar2key} dataSet={bar2value} />
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

        </>

    );
};

export default ProfileVisitCounter;
