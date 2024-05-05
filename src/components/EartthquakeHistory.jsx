import "./style/EarthquakeHistory.css"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AOS from "aos";



export default function EarthquakeHistory() {
  useEffect(() => {
    AOS.init()
  }, [])

    useEffect(() => {
        const colors = ["#F2309B", "#25C7D9",  "#04BF8A", "#F2D338", "#F23030"]

gsap.set(".line", {background:gsap.utils.wrap(colors)})

const animation = gsap.fromTo(".line", {y:-100}, {y:200, ease:"none", duration:1, stagger:0.7})

ScrollTrigger.create({
  trigger: ".lineSections",
  start: "top 300",
  end:"bottom 300",
  animation: animation,
  scrub:1
})
    })

    return (
        <main id="2">
            <div className="w-[70vw] mx-auto h-[80vh] flex justify-center items-center">
              <div data-aos="fade-up" className="text-center">
              <h2 className="font-bold text-5xl">Sejarah Letusan Gunung Api Terbesar Sepanjang Sejarah</h2>
  <p className="mt-6 leading-6">Untuk menghitung kekuatan letusan gunung api, beberapa faktor utama yang dipertimbangkan adalah volume abu vulkanik yang dilepaskan, tinggi kolom abu vulkanik, durasi letusan, dan kecepatan aliran piroklastik. Semakin besar volume abu yang dilepaskan dan semakin tinggi kolom abu, semakin kuat letusan tersebut.</p>
  <p className="mt-4 leading-6">Durasi letusan yang berlangsung lama juga dapat menjadi indikator kekuatan, begitu juga dengan kecepatan aliran piroklastik yang bergerak turun dari gunung setelah letusan. Ahli vulkanologi menggunakan data-data ini untuk menentukan kekuatan letusan, sering kali menggunakan sistem klasifikasi VEI (Volcanic Explosivity Index) yang memiliki rentang dari 1 hingga 8, di mana 1 adalah letusan paling lemah dan 8 adalah yang paling kuat</p>
              </div>
            </div>
<div className="lineSections">
  <div className="lineSection border-2 hover:bg-[#25C7D9] duration-100">
    <div className="number">1</div>
    <div className="lineHolder">
      <div className="line"/>
    </div>
    <div className="flex flex-col h-[200px] pl-8">
        <h2 className="font-bold text-3xl">Gunung Yellowstone</h2>
        <p className="w-3/4 first-letter:ml-4 mt-4 leading-6">Live Science melaporkan bahwa Gunung Yellowstone di Amerika Serikat adalah letusan gunung api terbesar yang pernah tercatat dengan skala 8 VEI. Bekas letusannya membentuk kaldera besar di Wyoming barat, mengguncang daerah itu pada 2,1 juta tahun lalu, 1,2 juta tahun lalu, dan 640.000 tahun lalu. Penelitian Science 2013 menemukan gumpalan besar magma di bawah Yellowstone yang bisa memenuhi Grand Canyon 11 kali lipat. Tiga letusan supervolcano terbaru menciptakan kawah besar di taman, dengan peluang letusan seperti itu sekitar 1:700.000 setiap tahun.</p>
    </div>

  </div>
  <div className="lineSection hover:bg-[#04BF8A] duration-100">
    <div className="number">2</div>
    <div className="lineHolder">
      <div className="line"></div>
    </div>
    <div className="flex flex-col h-[200px] pl-8">
        <h2 className="font-bold text-3xl">Gunung Huaynaputuna</h2>
        <p className="w-3/4 first-letter:ml-4 mt-4 leading-6">Letusan Gunung Tambora, Indonesia pada tahun 1815 silam termasuk letusan gunung terdahsyat di dunia, yang mencapai 7 VEI. Letusan Tambora mencapai puncaknya pada April 1815, ketika meledak dengan sangat keras hingga terdengar di Pulau Sumatera, lebih dari 1.930 km jauhnya. Korban tewas akibat letusan Gunung yang berlokasi di Nusa Tenggara Barat (NTB) ini diperkirakan mencapai 71.000 orang.</p>
    </div>
  </div>
  <div className="lineSection hover:bg-[#F2D338] duration-100">
    <div className="number">3</div>
    <div className="lineHolder">
      <div className="line"></div>
    </div>
    <div className="flex flex-col h-[200px] pl-8">
        <h2 className="font-bold text-3xl">Gunung Krakatau</h2>
        <p className="w-3/4 first-letter:ml-4 mt-4 leading-6">Gunung yang berada di antara pulau Jawa dan pulau Sumatera, berada di urutan ketiga. Gunung Krakatau meletus tahun 1883 yang mengakibatkan ledakan besar pad 26-27 April. Letusan ini terdengar ribuan mil jauhnya. Ledakan gunung ini menimbulkan tsunami sekitar 40 meter. Sementara korban tewas diperkirakan mencapai 34.000 jiwa. AKibat ledakan Krakatau, pulau tersebut hancur total, hingga memunculkan anak Krakatau. Anak Krakatau sekarang ini menjadi gunung berapi aktif di Indonesia.</p>
    </div>
  </div>
  <div className="lineSection hover:bg-[#F23030] duration-100">
    <div className="number">4</div>
    <div className="lineHolder">
      <div className="line"></div>
    </div>

    <div className="flex flex-col h-[200px] pl-8">
        <h2 className="font-bold text-3xl">Gunung Santa Maria</h2>
        <p className="w-3/4 first-letter:ml-4 mt-4 leading-6">Gunung Santa Maria erupsi di tahun 1902. Ledakan gunung ini termasuk erupsi terbesar di abad 20. Gunung Santa Maria berada di pantai pasifik Guatemala. Gunung berapi ini sempat tidak aktif kira-kira 500 tahun. Letusan mengakibatkan kawah besar sekitar 1,5 km di bagian barat gunung. Tahun 1929, gunung Santa Maria merenggut ratusan nyawa dan kobran sekitar 5.000 orang.</p>
    </div>
  </div>
  <div className="lineSection hover:bg-[#F2309B] duration-100">
    <div className="number">5</div>
    <div className="lineHolder">
      <div className="line"></div>
    </div>
    <div className="flex flex-col h-[200px] pl-8">
        <h2 className="font-bold text-3xl">Gunung Santa Maria</h2>
        <p className="w-3/4 first-letter:ml-4 mt-4 leading-6">Gunung Novarupta termasuk gunung berapi aktif di Semenanjung Alaska. Novarupta termasuk wilayah Ring of Fire (Cincin Api) di Samudra Pasifik. Letusan gunung terjadi di tahun 1912, abad 20. Dampak letusan mengirimkan 12,5 km kubik magma ke udara. Selain itu abu vulkanik menutupi daerah seluas 7.800 km persegi.</p>
    </div>
  </div>
</div>
        </main>
    )
}