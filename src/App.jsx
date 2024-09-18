// import { useState, useEffect } from "react";
// import Map from "./components/Map";
import SafeZones from './components/SafeZones'
import Footer from './components/Footer'

function App() {
  // const [coordinates, setCoordinates] = useState({
  //   latitude: null,
  //   longitude: null,
  // });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Function to get the user's location
  //   const getLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setCoordinates({
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude,
  //           });
  //           setLoading(false);
  //         },
  //         (err) => {
  //           setError("Failed to retrieve location");
  //           setLoading(false);
  //         }
  //       );
  //     } else {
  //       setError("Geolocation is not supported by this browser");
  //       setLoading(false);
  //     }
  //   };

  //   // Get location when component mounts
  //   getLocation();
  // }, []);

  return (
    <section className="app size-8 w-full">
     
      <div className="grid  grid-cols-2 grid-rows-2 gap-4 p-4 h-[80vh]">
        {/* <Map className="col-start-1 col-end-2 row-start-1 row-end-3 rounded-xl h-full w-full bg-amber-500" /> */}
        <SafeZones
          title="Alerts"
          className="bg-gray-200 h-full w-full col-start-2 row-start-1 col-end-3 row-end-2 rounded-xl prediction border-2 border-gray-100 p-4 flex flex-col gap-4"
          colour="red"
        >
          <p className="text-center">No Alerts Currently!😀</p>
        </SafeZones>

        <SafeZones
          title="Guidelines for Emergency"
          className="bg-gray-200 h-full w-full col-start-2 row-start-2 col-end-3 row-end-3 rounded-xl prediction border-2 border-gray-100 p-4 flex flex-col gap-4"
          colour="green"
        >
          <marquee behavior="" direction="up" scrollamount="2">
            <ul className="space-y-2 list-disc px-8 mt-4">
              <li>Monitor weather updates and emergency alerts.</li>
              <li>Pack an emergency kit with essential supplies.</li>
              <li>Plan and know your evacuation routes.</li>
              <li>Secure your home and turn off utilities.</li>
              <li>Evacuate immediately if advised by authorities.</li>
              <li>Avoid walking or driving through floodwaters.</li>
              <li>Move to higher ground if trapped.</li>
              <li>If driving, turn around and find a safe route.</li>
              <li>Keep your phone charged and stay in touch.</li>
              <li>Listen to and follow official instructions.</li>
              <li>Avoid contact with contaminated floodwater.</li>
              <li>Wear protective clothing and prevent hypothermia.</li>
              <li>Return home only when it's declared safe.</li>
              <li>Document property damage for insurance.</li>
              <li>Clean up safely and dispose of hazardous items.</li>
              <li>Seek assistance from disaster relief services.</li>
              <li>Watch for secondary hazards like landslides.</li>
              <li>Continue monitoring local news for updates.</li>
            </ul>
          </marquee>
        </SafeZones>
      </div>
      <Footer />
    </section>
  );
}

export default App;
