import { useEffect} from "react";
import AOS from "aos";
import ho from "/gunung-meletus2.jpg";


export default function EarthquakeDefiniton() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
    <main id='1' className=" lg:px-24 flex justify-between w-full">
        <section className="flex justify-between">
            <section data-aos="fade-right" className="w-1/2 h-full flex flex-col justify-center">
                <h3 className=" font-bold text-4xl">Apa itu Gunung Meletus?</h3>
                <p className="mt-6 first-letter:ml-4">Gunung berarti bukit yang sangat besar dan tinggi. Sedangkan Meletus berarati pecah atau terbuka dengan tiba-tiba. Sehingga dapat diartkan secara harfiah yaitu peristiwa keluarnya endapan magma dari dalam perut bumi yang didorong keluar oleh gas yang bertekanan tinggi.</p>
                <p className='first-letter:ml-4 mt-4'>Gunung adalah formasi alam yang ditandai dengan ukuran besar dan tinggi, terbentuk melalui proses geologis yang panjang. Mereka memengaruhi lanskap, iklim, dan kehidupan di sekitarnya. Di sisi lain, meletusnya gunung berapi merupakan fenomena alam yang disebabkan oleh tekanan dan panas di dalam bumi yang mencapai titik tertentu. Magma yang terkumpul di dalam bumi pun menemukan jalan keluar melalui retakan dan celah, mengakibatkan letusan yang sering disertai dengan pelepasan gas, abu, dan material lainnya. Dampaknya meliputi kerusakan lingkungan, ancaman terhadap keselamatan manusia, dan perubahan topografi wilayah sekitarnya.</p>
            </section>
            <section data-aos="fade-left" className="earthquakedefinition-second w-[40vw] flex justify-end h-screen overflow-hidden">
            <img src={ho} alt="" className='w-full h-screen duration-500'/>
            </section>
        </section>
    </main>
    </>
  )
}
