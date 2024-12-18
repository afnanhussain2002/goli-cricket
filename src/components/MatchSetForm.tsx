"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MatchSetupForm = () => {
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
    };

    try {
      const response = await axios
        .post("/api/match-setup", newMatch)
        .then((response) => response.data)
        .catch((error) => console.log(error));

      if (response.status === 201) {
        toast.success("Match created successfully");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error creating match");
    }

    console.log(team1, team2, over, dateTime, location, ballType);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Match Setup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Team 1 Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="team1"
          >
            Team 1 Name
          </label>
          <input
            type="text"
            id="team1"
            name="team1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter Team 1 Name"
            required
          />
        </div>

        {/* Team 2 Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="team2"
          >
            Team 2 Name
          </label>
          <input
            type="text"
            id="team2"
            name="team2"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter Team 2 Name"
            required
          />
        </div>

        {/* Overs */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="over"
          >
            Overs
          </label>
          <input
            type="number"
            id="over"
            name="over"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter Number of Overs"
            required
          />
        </div>

        {/* Date and Time */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dateTime"
          >
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter Match Location"
            required
          />
        </div>

        {/* Ball Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ball Type
          </label>
          <div className="mt-1 flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="ballType"
                value="tennis"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Tennis</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="ballType"
                value="leather"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Leather</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Match
          </button>
        </div>
      </form>
    </div>
  );
};

export default MatchSetupForm;
