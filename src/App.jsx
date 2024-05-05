import EarthquakeDefiniton from "./components/EarthquakeDefiniton"
import LandingPage from "./components/LandingPage"
import EarthquakeAnticipation from "./components/EarthquakeStatus"
import EarthquakeImpacts from "./components/EarthquakeImpacts"
import EarthquakeEvacuation from "./components/EarthquakeEvacuation"
import EarthquakeHistory from "./components/EartthquakeHistory"
import End from "./components/End"

function App() {
  return (
    <>
      <main className="mobile bg-black text-center flex justify-center items-center h-screen w-screen overflow-hidden">
        <h2 className="font-bold text-white">Oops ... Kamu perlu mengubahnya ke tampilan dekstop untuk menampilkan website.</h2>
      </main>
      <main className="dekstop flex flex-col gap-y-12 ">
        <LandingPage />
        <EarthquakeDefiniton />
        <EarthquakeHistory />
        <EarthquakeAnticipation />
        <EarthquakeEvacuation />
        <EarthquakeImpacts />
        <End />
      </main>
    </>
  );
}

export default App;