import React from "react";

export default function CalendarPage() {
  // Sample data for a 5-week calendar view
  const weeks = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 1, 2, 3, 4],
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-8">
      {/* Page Header */}
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-[#1a8080] via-[#0b6464] to-[#000000] bg-clip-text text-transparent">
          Medication Calendar
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Track your daily doses and log your daily consumption.
        </p>
      </header>

      {/* Calendar Grid */}
      <section className="w-full max-w-4xl flex flex-col items-center space-y-4">
        {/* Weekday Labels */}
        <div className="grid grid-cols-7 gap-2 w-full">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <span
              key={day}
              className="text-center text-sm md:text-base text-gray-200 font-semibold"
            >
              {day}
            </span>
          ))}
        </div>

        {/* Weeks */}
        <div className="grid grid-cols-7 gap-4 w-full">
          {weeks.map((week, weekIdx) =>
            week.map((day, dayIdx) => {
              const isCurrentMonth = day <= 28 && weekIdx > 0;
              return (
                <div
                  key={`${weekIdx}-${dayIdx}`}
                  className={`relative rounded-xl p-4 flex flex-col items-center transition-all duration-300 ${
                    isCurrentMonth
                      ? "bg-[#1a8080] text-white shadow-xl hover:shadow-2xl"
                      : "bg-gray-800 text-gray-400 shadow-none"
                  }`}
                >
                  {/* Day Number */}
                  <span className="font-bold text-lg">{day}</span>

                  {/* Dose Placeholder */}
                  {isCurrentMonth && (
                    <div className="mt-2 text-sm sm:text-base">
                      <span className="block text-center">
                        <strong className="font-medium">Dose:</strong> 1 Tablet
                      </span>
                      <span className="block text-center">
                        <strong className="font-medium">Time:</strong> 8:00 AM
                      </span>
                    </div>
                  )}

                  {/* Log Button */}
                  <button
                    className={`mt-3 px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      isCurrentMonth
                        ? "bg-white text-[#1a8080] hover:bg-gray-200 transition-colors"
                        : "bg-gray-600 text-gray-300 pointer-events-none"
                    }`}
                  >
                    {isCurrentMonth ? "Add Log" : ""}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}