
import { earthquakeImpacts } from "../variable/EarthquakeImpacts.js"
import { useEffect } from "react"
import AOS from "aos";
export default function EarthquakeImpacts() {
    useEffect(() => {
        AOS.init()
      }, [])
  return (
    <main id="5" className="mx-24 ">
        <div className="text-center h-[30vh] flex justify-center items-center">
    <h2 data-aos="zoom-in" className="font-bold text-5xl text-center ">Lalu Apa Saja Dampak dari Gunung Meletus?</h2>
        </div>
    <section>
        <div className="cards flex flex-wrap justify-around gap-x-6 gap-y-8 mt-8">
            {
                earthquakeImpacts.map((item, index) => {
                    return (
                        <div key={index}>
                            <div data-aos="zoom-in" className={` ${item.co} hover:bg-inherit border-2 border-black rounded-lg w-[600px] h-[300px] hover:-translate-y-2 hover:shadow-md duration-200`}>
                                <div className="flex items-center flex-col text-center justify-center h-full px-8">
                                <h3 className="mt-6 font-bold text-3xl">{item.title}</h3>
                                <p className=" mt-4 text-md">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    <div className="h-screen" />
    </main>
  )
}
