import { useTimer } from "react-timer-hook";
import moment from "moment-timezone";

function Timer() {
  const targetTimeIST = moment.tz("2025-05-01 03:51", "Asia/Kolkata");
  const targetTimeUTC = targetTimeIST.clone().utc().toDate();
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: targetTimeUTC,
    onExpire: () => console.log("ended"),
  });

  return (
    <div>
      <h1>Countdown</h1>
      {isRunning ? (
        <div style={{ fontSize: "2em" }}>
          <span>{days}</span> days
          <span>{hours}</span> hours
          <span>{minutes}</span> minutes
          <span>{seconds}</span> seconds
        </div>
      ) : (
        <div style={{ fontSize: "1.5em", color: "green", marginTop: "20px" }}>
          It's Here 🎉
        </div>
      )}
    </div>
  );
}

export default Timer;
