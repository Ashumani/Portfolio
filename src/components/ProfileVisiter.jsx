import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileVisitCounter = () => {
    const [dailyCount, setDailyCount] = useState(0);
    const [weeklyCount, setWeeklyCount] = useState(0);
    const [monthlyCount, setMonthlyCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const now = new Date();
        const visitData = JSON.parse(localStorage.getItem('profileVisits') || '[]');
    
        // Add current visit
        visitData.push(now.toISOString());
        localStorage.setItem('profileVisits', JSON.stringify(visitData));
        // let total = localStorage.getItem('totalProfileVisits');
    
        // Define time boundaries
        const oneDayAgo = new Date(now);
        oneDayAgo.setDate(now.getDate() - 1);
    
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 7);
    
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(now.getMonth() - 1);
    
        // Filter counts
        const daily = visitData.filter(date => new Date(date) > oneDayAgo).length;
        const weekly = visitData.filter(date => new Date(date) > oneWeekAgo).length;
        const monthly = visitData.filter(date => new Date(date) > oneMonthAgo).length;
        const total = visitData.length;

        // if(total){
        //     total += 1
        // }else{
        //    total = 0
        // }
    
        setDailyCount(daily);
        setWeeklyCount(weekly);
        setMonthlyCount(monthly);
        setTotalCount(total);
    }, []);

    return (
        <> <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Porfolio Visitor Count</p>
            <h2 className={styles.sectionHeadText}>Profile Insights</h2>
        </motion.div>
            <div className="flex flex-wrap gap-4 justify-center p-4">
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold ">Total Visits by : &nbsp;  </h4>
                    <p className=" text-2xl font-bold text-blue-600">{totalCount}</p>
                </div>

                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Monthly Visits by :&nbsp; </h4>
                    <p className="text-2xl font-bold text-purple-600">{monthlyCount}</p>
                </div>
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Weekly Visits by : &nbsp; </h4>
                    <p className="text-2xl font-bold text-green-600">{weeklyCount}</p>
                </div>
                <div className="flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5">
                    <h4 className="text-lg font-semibold">Daily Visits by : &nbsp;</h4> 
                    <p className="text-2xl font-bold text-blue-600">{dailyCount}</p>
                </div>
            </div>
        </>

    );
};

export default ProfileVisitCounter;
