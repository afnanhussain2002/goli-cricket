"use client";
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

export default function QuickMatchForm () {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const hostTeam = form.hostTeam.value;
        const visitorTeam = form.visitorTeam.value;
        const toss = form.toss.value;
        const opted = form.opted.value;
        const overs = form.overs.value;

        console.log(hostTeam, visitorTeam, toss, opted, overs);

        const newQuickMatch = {
            hostTeam,
            visitorTeam,
            toss,
            opted,
            overs,
        };

        try {
          const response = await axios
            .post("/api/quick-match", newQuickMatch)
            .then((response) => response.data)
            .catch((error) => console.log(error));
    
          console.log(response);
        } catch (error) {
          console.log(error);
          toast.error("Error creating match");
        }
    }
  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Cricket Scorer</h1>
        <form onSubmit={handleSubmit}>
          {/* Team Names */}
          <div className="mb-4">
            <label htmlFor="host-team" className="block text-gray-700 font-medium mb-1">
              Host Team
            </label>
            <input
              id="host-team"
              name='hostTeam'
              type="text"
              placeholder="Enter host team name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="visitor-team" className="block text-gray-700 font-medium mb-1">
              Visitor Team
            </label>
            <input
              id="visitor-team"
              name='visitorTeam'
              type="text"
              placeholder="Enter visitor team name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Toss Winner */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Toss won by?</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-black">
                <input type="radio" name="toss" value="host" className="mr-2" />
                Host Team
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="toss" value="visitor" className="mr-2" />
                Visitor Team
              </label>
            </div>
          </div>

          {/* Opted To */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Opted to?</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-black">
                <input type="radio" name="opted" value="bat" className="mr-2" />
                Bat
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="opted" value="bowl" className="mr-2" />
                Bowl
              </label>
            </div>
          </div>

          {/* Overs */}
          <div className="mb-4">
            <label htmlFor="overs" className="block text-gray-700 font-medium mb-1">
              Overs
            </label>
            <input
              id="overs"
              name='overs'
              type="number"
              placeholder="Enter number of overs"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-green-700 font-medium hover:underline"
            >
              Advanced settings
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Start Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
