import { useEffect } from "react"
import AOS from "aos" 
import 'aos/dist/aos.css';

import lp from "/gunung-meletus.gif"
export default function LandingPage() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className="h-screen flex flex-col justify-between">
        <section className="landingpage-first mt-10 h-3/4 w-full flex flex-col items-center text-center">
            <h2 data-aos="flip-down" className="font-bold text-6xl">TenTu</h2>
            <p data-aos="zoom-in" className="mt-6 w-[70vw]">TenTu adalah website sederhana guna memberikan pemahaman secara singkat mengenai gunung meletus sehingga pengunjung dapat memahaminya dengan cepat. Dengan tampilan sederhana yang hanya berfokus pada teks memberikan kesan yang klasik, tetapi tetap modern.</p>
            <div data-aos="zoom-in" className="w-full flex items-center flex-col">
            <div className="w-1/2 h-[2px] mt-4 bg-black rounded-full"/>
            <ul className="flex gap-x-6 mt-2">
                <li className='hover:text-orange-600 font-bold mt-4'><a href="#1">Mulai jelajahi sekarang!</a></li>
            </ul>
            </div>
        </section>

        <section data-aos="fade-up" className="h-full rounded-t-xl overflow-hidden">
          <img src={lp} alt="" className='w-full object-center' />
        </section>
    </main>
  )
}
