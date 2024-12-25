"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AllMatchPage() {
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get("/api/get-matches");
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
      <div className="p-5 space-x-2">
        <button className="btn btn-primary">All Matches</button>
        <button className="btn btn-primary">Upcoming Matches</button>
        <button className="btn btn-primary">Live Matches</button>
      </div>

      <div className="flex flex-wrap justify-center">
        {allMatches?.map((match) => (
          <div key={match._id} className="p-5 space-x-2  ">
            <div className="bg-primary p-5 rounded">
              <div className="flex justify-center gap-5 text-xl font-bold">
                <p>{match.team1}</p>
                <p>vs</p>
                <p>{match.team2}</p>
              </div>
              <div className="font-bold">
              <p>Over: {match.over}</p>
              <p>Date and Time: {new Date(match.dateTime).toLocaleString()}</p>
              <p>Location: {match.location}</p>
              <p>Ball: {match.ballType}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllMatchPage;
