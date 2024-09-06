// src/App.jsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const App = () => {
  const [contracts, setContracts] = useState([
    { id: 2134, crop: 'Potato', bids: 0 },
    { id: 2447, crop: 'Tomato', bids: 3 },
  ]);

  // Function to add new contract dynamically
  const addNewContract = () => {
    const newId = contracts.length + 1 + 2000;
    setContracts([
      ...contracts,
      { id: newId, crop: `New Crop ${newId}`, bids: Math.floor(Math.random() * 10) },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#2F855A] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Krishi Connect</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white text-[#2F855A] rounded-md shadow-md hover:bg-gray-200 transition">
              Dashboard
            </button>
            <button className="px-4 py-2 bg-white text-[#2F855A] rounded-md shadow-md hover:bg-gray-200 transition">
              Profile
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Static Sidebar */}
        <aside className="w-1/4 p-4 bg-[#2F855A] text-white flex flex-col space-y-4 sticky top-0 h-screen">
          <button
            onClick={addNewContract}
            className="w-full py-3 bg-white text-[#2F855A] rounded-md shadow-md hover:bg-[#E6FFFA] transition duration-300"
          >
            Create A New Bid
          </button>
          <button className="w-full py-3 bg-white text-[#2F855A] rounded-md shadow-md hover:bg-[#E6FFFA] transition duration-300">
            Current Running Contracts
          </button>
        </aside>

        {/* Dynamic Right Section */}
        <main className="w-3/4 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-[#2F855A] mb-4">Open Contracts</h2>
          <div className="space-y-4">
            {contracts.map((contract) => (
              <Transition
                key={contract.id}
                show={true}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-[#2D3748]">Contract Id: {contract.id}</span>
                    <span className="text-sm text-gray-600">Total Applied Bids: {contract.bids}</span>
                  </div>
                  <div className="mt-2 text-gray-700">Crop: {contract.crop}</div>
                </div>
              </Transition>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
