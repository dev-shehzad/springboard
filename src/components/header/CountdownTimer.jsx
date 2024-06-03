import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date for the countdown (YYYY-MM-DD format)

  const targetDate = new Date("2024-02-20T00:00:00");
  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "numeric", month: "long" };
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    return { day, month };
  };

  const { day, month } = getCurrentDate();

  // Initialize state variables
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  // Function to calculate the time remaining until the target date
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    // Update the remaining time every second
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  // Render the countdown timer
  return (
    <div className="flex gap-4 ">
      <div className="py-4 px-1 bg-[#7E22CE] text-white text-center h-full rounded-[5px] -mt-[25px]">
        <span className="text-[20px]">{day}</span>
        <br />
        <span className="uppercase text-[12px]">{month}</span>
      </div>
      <h2 className="-mt-[10px] uppercase text-[13px]">
        <span>Next</span> <br /> <span >Upcoming Event</span>
      </h2>

      <div className="flex items-stretch justify-stretch ml-2 gap-[10px] px-3 bg-[#7e22ce23]  border border-solid border-black border-opacity-[0.2] rounded-[8px]">
        <div className="border-r text-center p-2 border-solid border-black border-opacity-[0.2] h-full ">
          <p className="text-[20px] text-black">{remainingTime.days}</p>
          <p>DAYS</p>
        </div>
        <div className="border-r text-center p-2 border-solid border-black border-opacity-[0.2] h-full">
          <p className="text-[20px] text-black">{remainingTime.hours}</p>
          <p>HR</p>
        </div>
        <div className="border-r text-center p-2 border-solid border-black border-opacity-[0.2] h-full">
          <p className="text-[20px] text-black">{remainingTime.minutes}</p>
          <p>MN</p>
        </div>
        <div className=" text-center p-2 h-full">
          <p className="text-[20px] text-black">{remainingTime.seconds}</p>
          <p>SEC</p>
        </div>
        
      </div>
    </div>
  );
};

export default CountdownTimer;
