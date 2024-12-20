"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const MatchSetupForm = () => {
  const {user} = useUser()
  const today = new Date();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const team1 = form.team1.value;
    const team2 = form.team2.value;
    const over = form.over.value;
    const dateTime = form.dateTime.value;
    const location = form.location.value;
    const ballType = form.ballType.value;
    const matchOwner = user?.emailAddresses[0].emailAddress

    if (dateTime < today.toISOString()) {
      toast.error("Please select a future date and time.");
      return;
    }

    const newMatch = {
      team1,
      team2,
      over,
      dateTime,
      location,
      ballType,
      matchOwner
    };

    try {
      const response = await axios
        .post("/api/match-setup", newMatch)
        .then((response) => response.data)
        .catch((error) => console.log(error));

      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Error creating match");
    }

    console.log(team1, team2, over, dateTime, location, ballType);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Match Setup</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Team 1 Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="team1">
            Team 1 Name
          </label>
          <input
            type="text"
            id="team1"
            name="team1"
            className="mt-2 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Team 1 Name"
            required
          />
        </div>

        {/* Team 2 Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="team2">
            Team 2 Name
          </label>
          <input
            type="text"
            id="team2"
            name="team2"
            className="mt-2 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Team 2 Name"
            required
          />
        </div>

        {/* Overs */}
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="over">
            Overs
          </label>
          <input
            type="number"
            id="over"
            name="over"
            className="mt-2 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Number of Overs"
            required
          />
        </div>

        {/* Date and Time */}
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="dateTime">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            className="mt-2 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-600" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-2 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Match Location"
            required
          />
        </div>

        {/* Ball Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Ball Type</label>
          <div className="mt-2 flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="ballType"
                value="tennis"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Tennis</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="ballType"
                value="leather"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Leather</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Match
          </button>
        </div>
      </form>
    </div>
  );
};

export default MatchSetupForm;
