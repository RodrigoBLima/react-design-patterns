import { useEffect, useState } from "react";

function InternetAvailabilityObserver() {
  const [isOnline, setOnline] = useState<any>(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
    
    return () => {
      // when component gets unmounted, remove the event listeners to prevent memory leaks
      window.removeEventListener("online", () => setOnline(true));
      window.removeEventListener("offline", () => setOnline(false));
    };
  }, []);

  return (
    <>
      <h1>Internet Availability Observer</h1>
      <p>
        {isOnline ? (
          <span>
            <b>online</b>
          </span>
        ) : (
          <span>
            <b>offline</b>
          </span>
        )}
      </p>
    </>
  );
}

export default InternetAvailabilityObserver;
