import React from 'react';

export default function HomePage() {
  return (
    <div
      className="min-h-screen pt-10 pb-20 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <header className="w-full max-w-6xl px-6 mb-12">
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: '#1a8080' }}
        >
          Daily Medication Summary
        </h1>
        <p className="mt-3 text-center text-gray-600">
          Keep track of your daily doses and access your medication records
        </p>
      </header>

      {/* Summary Cards */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl px-6">
        <div
          className="rounded-xl p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ borderLeft: '8px solid #1a8080' }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Total Daily Doses
          </h2>
          <p className="mt-4 text-5xl font-bold text-indigo-600">12</p>
        </div>

        <div
          className="rounded-xl p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ borderLeft: '8px solid #1a8080' }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Pending Medications
          </h2>
          <p className="mt-4 text-5xl font-bold text-indigo-600">3</p>
        </div>

        <div
          className="rounded-xl p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ borderLeft: '8px solid #1a8080' }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Completed Today
          </h2>
          <p className="mt-4 text-5xl font-bold text-indigo-600">9</p>
        </div>
      </section>

      {/* Medication List */}
      <section className="max-w-6xl w-full mt-16 px-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Medications
        </h3>
        <ul className="space-y-4">
          {[
            {
              name: 'Aspirin 100mg',
              dose: '1 tablet',
              time: '08:00 AM',
              status: 'Taken',
            },
            {
              name: 'Lipitor 20mg',
              dose: '1 tablet',
              time: '12:00 PM',
              status: 'Pending',
            },
            {
              name: 'Metformin 500mg',
              dose: '2 tablets',
              time: '07:00 PM',
              status: 'Taken',
            },
          ].map((med, idx) => (
            <li
              key={idx}
              className="p-6 rounded-lg shadow-lg bg-white flex flex-col sm:flex-row justify-between items-center"
              style={{
                borderLeft: idx % 2 === 0 ? '4px solid #1a8080' : '4px solid #1a8080',
              }}
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {med.name}
                </h4>
                <p className="text-sm text-gray-500">Dose: {med.dose}</p>
                <p className="text-sm text-gray-500">Time: {med.time}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  med.status === 'Taken'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {med.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-20 w-full max-w-6xl px-6 text-center text-gray-500">
        © {new Date().getFullYear()} MedTrack – All rights reserved
      </footer>
    </div>
  );
}