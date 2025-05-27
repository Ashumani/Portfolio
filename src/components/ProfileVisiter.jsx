import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import axios from 'axios';

const ProfileVisitCounter = () => {
    const [dailyCount, setDailyCount] = useState(0);
    const [weeklyCount, setWeeklyCount] = useState(0);
    const [monthlyCount, setMonthlyCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [city, setCity] = useState([]);
    const [visitCity, setVisitCity] = useState('');

    useEffect(() => {
        const now = new Date();


        fetch('https://sheetdb.io/api/v1/0byzew43sn0jh')
            .then((response) => response.json())
            .then(async (visitData) => {

                const maxId = Math.max(...visitData.map(item => parseInt(item.id, 10)));
                const uniqueCities = [...new Set(visitData.map(item => item.city))].join(", ");

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
                        longitude = response.data.latitude
                        pincode = response.data.latitude
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
                        lat:latitude,
                        long: longitude,
                        postal:pincode,
                        state:state,
                        country:country
    
                    }
                await add(params);
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

    const add = (params) => {
        fetch('https://sheetdb.io/api/v1/0byzew43sn0jh', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: params
            })
        })
    }
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
        </>

    );
};

export default ProfileVisitCounter;
