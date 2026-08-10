import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import axios from 'axios';
import BarChart from './chart/barchart';
import PieChart from './chart/piechart';
import moment from "moment";

const ProfileVisitCounter = ({ source = 'direct' }) => {
    const [dailyCount, setDailyCount] = useState(0);
    const [weeklyCount, setWeeklyCount] = useState(0);
    const [monthlyCount, setMonthlyCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [visitCity, setVisitCity] = useState('');

    const [cities, setCities] = useState([]);
    const [pincode, setPinCode] = useState([]);
    const [pincount, setPinCount] = useState([]);
    const [pincodeLast30, setPinCodeLast30] = useState([]);
    const [pincountLast30, setPinCountLast30] = useState([]);

    const showpassword = "show";
    const [bar2key, setBar2key] = useState([]);
    const [bar2value, setBar2Value] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [authenticatedPassword, setAuthenticatedPassword] = useState("");
    const [rawVisitData, setRawVisitData] = useState([]);
    const [sourceKeys, setSourceKeys] = useState([]);
    const [sourceValues, setSourceValues] = useState([]);

    const [pieData, setPieData] = useState({
        labels: [],
        datasets: [],
    });

    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyVofE7rPPS7enQJR8NvUF6Nw3IUmVcEFrSKTcYhe1b-ePHka10OB_hCcfkjMkuYtMP5w/exec';
    const WEB_APP_URL_GT = 'https://script.google.com/macros/s/AKfycbzYjTAuIgmCK4vV4ppkaUC-9j1zIUFbeYGZ_UCN7FN3bYTeTJOKMY_CNiQIFj7ktmqEfA/exec';

    // Helper 1: Extract browser details
    const getBrowserDetails = () => {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: navigator.languages ? navigator.languages.join(', ') : '',
            platform: navigator.platform,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            devicePixelRatio: window.devicePixelRatio,
        };
    };

    // Helper 2: Reverse Geolocation
    const getUserLocation = async () => {
        let locationData = {
            city: '',
            state: '',
            country: '',
            latitude: 0,
            longitude: 0,
            pincode: ''
        };

        const getGpsPosition = () => {
            return new Promise((resolve) => {
                if (!navigator.geolocation) return resolve(null);
                navigator.geolocation.getCurrentPosition(
                    (pos) => resolve(pos.coords),
                    () => resolve(null),
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                );
            });
        };

        const coords = await getGpsPosition();

        if (coords) {
            try {
                const res = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&addressdetails=1`
                );
                const addr = res.data.address || {};

                const detectedCity =
                    addr.city ||
                    addr.town ||
                    addr.suburb ||
                    addr.city_district ||
                    addr.neighbourhood ||
                    addr.village ||
                    addr.county ||
                    addr.state_district ||
                    'Unknown';

                let detectedPincode = addr.postcode || '';

                if (!detectedPincode) {
                    try {
                        const bdcRes = await axios.get(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`
                        );
                        detectedPincode = bdcRes.data.postcode || '';
                    } catch (e) {
                        console.warn("Secondary pincode fetch failed");
                    }
                }

                locationData = {
                    city: detectedCity,
                    state: addr.state || '',
                    country: addr.country || '',
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    pincode: detectedPincode
                };

                return locationData;
            } catch (err) {
                console.warn('Reverse geocoding failed, falling back to IP location:', err);
            }
        }

        try {
            const ipRes = await axios.get('https://ipapi.co/json/');
            locationData = {
                city: ipRes.data.city || '',
                state: ipRes.data.region || '',
                country: ipRes.data.country_name || '',
                latitude: ipRes.data.latitude || 0,
                longitude: ipRes.data.longitude || 0,
                pincode: ipRes.data.postal || ''
            };
        } catch (error) {
            console.error('Error fetching IP location:', error);
        }

        return locationData;
    };

    // Helper 3: Post data payload to Google Apps Script
    const addDataToSheet = async (dataParams) => {
        try {
            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(dataParams)
            });
            return { status: 'success' };
        } catch (error) {
            console.error("Error posting data:", error.message);
            throw error;
        }
    };

    // Main Effect Hook
    useEffect(() => {
        fetch(WEB_APP_URL_GT)
            .then((response) => response.json())
            .then(async (visitData) => {
                const safeData = Array.isArray(visitData) ? visitData : [];
                setRawVisitData(safeData);

                // Group and count visits by traffic source
                const sourceCountMap = safeData.reduce((acc, curr) => {
                    const src = (curr.source || 'direct').toLowerCase().trim();

                    if (src.includes('linkedin')) {
                        acc['LinkedIn'] = (acc['LinkedIn'] || 0) + 1;
                    } else if (src.includes('instagram')) {
                        acc['Instagram'] = (acc['Instagram'] || 0) + 1;
                    } else if (src.includes('direct')) {
                        acc['Direct'] = (acc['Direct'] || 0) + 1;
                    }
                    return acc;
                }, { Instagram: 0, LinkedIn: 0, Direct: 0 });

                setSourceKeys(Object.keys(sourceCountMap));
                setSourceValues(Object.values(sourceCountMap));

                const maxId = safeData.length > 0
                    ? Math.max(...safeData.map(item => parseInt(item.id, 10) || 0))
                    : 0;

                const uniqueCities = [...new Set(safeData.map(item => item.city).filter(Boolean))].join(", ");

                const cityCount = safeData.reduce((acc, curr) => {
                    const city = curr.city || 'Unknown';
                    acc[city] = (acc[city] || 0) + 1;
                    return acc;
                }, {});

                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                const thirtyDaysAgoTime = thirtyDaysAgo.getTime();

                const recentVisits = safeData.filter(visit => {
                    const visitTime = new Date(visit.date).getTime();
                    return visitTime >= thirtyDaysAgoTime;
                });

                const pinCountLast30Map = recentVisits.reduce((acc, curr) => {
                    const pincodeVal = curr.postal || 'N/A';
                    const cityVal = curr.city || 'Unknown';
                    const dateVal = curr.date ? moment(curr.date).format("DD-MM-YYYY") : '';
                    const key = `${pincodeVal} - ${cityVal} - ${dateVal}`;
                    acc[key] = (acc[key] || 0) + 1;
                    return acc;
                }, {});

                const pinCountMap = safeData.reduce((acc, curr) => {
                    const pincodeVal = curr.postal || 'N/A';
                    const cityVal = curr.city || 'Unknown';
                    const key = `${pincodeVal} - ${cityVal}`;
                    acc[key] = (acc[key] || 0) + 1;
                    return acc;
                }, {});

                setPinCodeLast30(Object.keys(pinCountLast30Map));
                setPinCountLast30(Object.values(pinCountLast30Map));

                setPinCode(Object.keys(pinCountMap));
                setPinCount(Object.values(pinCountMap));

                setCities(Object.keys(cityCount));

                // Fetch Location & Browser Specs
                const loc = await getUserLocation();
                const browserInfo = getBrowserDetails();

                const params = {
                    id: maxId + 1,
                    date: new Date().toISOString(),
                    city: loc.city,
                    lat: loc.latitude,
                    long: loc.longitude,
                    postal: loc.pincode,
                    state: loc.state,
                    country: loc.country,
                    currentPage: window.location.pathname,
                    source: source || 'direct',
                    userAgent: browserInfo.userAgent
                };

                // Prevent duplicate posting per browser session
                // const hasLoggedVisit = sessionStorage.getItem("visit_logged");
                // if (!hasLoggedVisit) {
                    try {
                        await addDataToSheet(params);
                        sessionStorage.setItem("visit_logged", "true");
                    } catch (er) {
                        console.error('Error logging visit data:', er.message);
                    }
                // }

                // Date ranges & counters
                const now = new Date();

                const oneDayAgo = new Date(now);
                oneDayAgo.setDate(now.getDate() - 1);

                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(now.getDate() - 7);

                const oneMonthAgo = new Date(now);
                oneMonthAgo.setMonth(now.getMonth() - 1);

                const daily = safeData.filter(item => new Date(item.date) > oneDayAgo).length;
                const weekly = safeData.filter(item => new Date(item.date) > oneWeekAgo).length;
                const monthly = safeData.filter(item => new Date(item.date) > oneMonthAgo).length;
                const total = safeData.length;

                setBar2key(["Total", "Monthly", "Weekly", "Daily"]);
                setBar2Value([total, monthly, weekly, daily]);
                setDailyCount(daily);
                setWeeklyCount(weekly);
                setMonthlyCount(monthly);
                setTotalCount(total);
                setVisitCity(uniqueCities);

                setPieData({
                    labels: Object.keys(cityCount),
                    datasets: [
                        {
                            label: 'Visits by City',
                            data: Object.values(cityCount),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                });
            })
            .catch(err => console.error("Error loading visit data:", err));
    }, [source]);

    const handleSubmit = () => {
        setAuthenticatedPassword(passwordInput);
        setShowModal(false);
    };

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
                    <h4 className="text-lg font-semibold">Total Visits : &nbsp;</h4>
                    <p className="text-2xl font-bold text-blue-600">{totalCount}</p>
                </div>
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Monthly Visits :&nbsp;</h4>
                    <p className="text-2xl font-bold text-purple-600">{monthlyCount}</p>
                </div>
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Weekly Visits : &nbsp;</h4>
                    <p className="text-2xl font-bold text-green-600">{weeklyCount}</p>
                </div>
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Daily Visits : &nbsp;</h4>
                    <p className="text-2xl font-bold text-red-600">{dailyCount}</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5 hover:bg-gray-700 transition"
                >
                    Show Details
                </button>
            </div>

            {authenticatedPassword === showpassword && (
                <div>
                    <div className="flex flex-wrap gap-4 justify-center p-4">
                        <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                            <h4 className="text-lg text-purple-600 font-semibold">
                                Visitor City : {visitCity || 'Loading...'}
                            </h4>
                        </div>
                    </div>
                </div>
            )}

            {cities.length > 0 && authenticatedPassword === showpassword && (
                <div>
                    <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
                        <div className="w-full md:w-[48%]">
                            <PieChart chartData={pieData} />
                        </div>
                        <div className="w-full md:w-[48%]">
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
                    <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
                        {/* Traffic Source Bar Chart (Instagram vs LinkedIn vs Direct) */}
                        <div className="w-full md:w-[48%]">
                            <BarChart label={sourceKeys} dataSet={sourceValues} />
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Enter Password
                        </h2>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black focus:outline-none focus:border-blue-500"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setPasswordInput("");
                                }}
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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