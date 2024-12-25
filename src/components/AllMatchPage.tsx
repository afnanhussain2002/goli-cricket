"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllMatchPage() {

    const [allMatches, setAllMatches] =useState([])

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get('/api/get-matches');
                console.log("response=====", response.data);
                setAllMatches(response.data.matches);
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };
    
        fetchMatches();
    }, []);


  return (
    <div>
        <div className='p-5 space-x-2'>
        <button className='btn btn-primary'>All Matches</button>
        <button className='btn btn-primary'>Upcoming Matches</button>
        <button className='btn btn-primary'>Live Matches</button>
        </div>

        <div>
            {allMatches?.map((match) => (
                <div key={match._id} className='p-5 space-x-2'>
                    <p>{match.team1}</p>
                    <p>{match.team2}</p>
                    <p>{match.over}</p>
                    <p>{match.dateTime}</p>
                    <p>{match.location}</p>
                    <p>{match.ballType}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllMatchPage