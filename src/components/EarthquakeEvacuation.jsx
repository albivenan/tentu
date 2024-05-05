import "./style/EarthquakeEvacuation.css";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export default function HorizontalScrolling() {

    const container =useRef(null)

    useGSAP(() => {
    
        const container = document.querySelector(".container");
        const sections = gsap.utils.toArray(".container section");
    
        if (!container) return;
    
        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 2,
            end: "+=3000",
          }
        });
    
        sections.forEach((section) => {
            const text = section.querySelectorAll(".anim");
      
            if (text.length === 0) return;
      
            gsap.from(text, {
              y: -130,
              opacity: 0,
              duration: 2,
              ease: "elastic",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left 85%",
                toggleActions: "play none reatart reverse"
              }
            });
          });
    
      }, { scope: container});
    

    return (
        <>
         <div ref={container} className="wrapper">
         <div className="container scrollx">
         <section className="sec1 pin">
           
         <div className="head flex flex-col items-center w-screen">
            <div>
               <h2 className="text-5xl font-bold">Evakuasi Pada Saat Terjadi Gunung Meletus</h2>
              <p className="first-letter:ml-4 leading-8 mt-4">Evakuasi saat gunung meletus merupakan proses yang sangat penting untuk keselamatan masyarakat yang tinggal di sekitar daerah yang terancam. Langkah pertama adalah mendengarkan peringatan resmi dari otoritas setempat dan segera mengikuti instruksi evakuasi yang diberikan. Warga harus segera meninggalkan area yang terancam dengan cepat dan tertib, membawa barang-barang penting seperti makanan, air minum, obat-obatan, dan dokumen penting. Jalan evakuasi harus diikuti dengan hati-hati, menghindari daerah rawan longsor, banjir lahar, atau aliran piroklastik.</p>
            </div>
           </div>
       </section>
      <section className="sec1 pin bg-green-300">
           <h2 className="font-bold text-3xl">Pemantauan Status Gunung</h2>
   
           <div className="col">
           <p className="first-letter:ml-4 leading-6 mt-4">Segera periksa informasi terbaru dari otoritas setempat dan pakar gunung untuk mengetahui status dan perkembangan situasi gunung. Informasi ini penting untuk menentukan langkah selanjutnya.</p>
           </div>
       </section>
       <section className="sec2 pin bg-yellow-300">
           
           <h2 className="anim font-bold text-3xl">Pengaturan Rute Evakuasi</h2>
   
           <div className="col anim">
               <p className="first-letter:ml-4 leading-6 mt-4">Identifikasi rute evakuasi yang aman dari lokasi Anda menuju zona yang lebih aman atau pusat evakuasi yang telah ditetapkan. Pastikan rute tersebut bebas dari bahaya seperti lahar, aliran piroklastik, atau benda-benda yang bisa jatuh.</p>
               </div>
       </section>
       <section className="sec3 pin bg-orange-300">
           
           <h2 className="anim font-bold text-3xl">Pengumpulan Barang Penting</h2>
   
           <div className="col anim">
            <p className="first-letter:ml-4 leading-6 mt-4">Siapkan barang-barang penting seperti makanan, air minum, pakaian, obat-obatan, ponsel, dan dokumen penting lainnya dalam tas evakuasi. Pastikan untuk membawa barang-barang ini saat evakuasi.</p>
           </div></section>
       <section className="sec3 pin bg-red-400">
           
           <h2 className="anim font-bold text-3xl">Pemakaian Masker dan pakaian Pelindung</h2>
   
           <div className="col anim">
            <p className="first-letter:ml-4 leading-6 mt-4"> Gunakan masker atau kain penutup hidung dan mulut serta pakaian pelindung untuk melindungi diri dari debu, gas beracun, dan benda-benda tajam selama evakuasi.</p>
           </div></section>
       <section className="sec3 pin bg-blue-400">
           
           <h2 className="anim font-bold text-3xl">Mendengarkan Intruksi yang Berwenang</h2>
   
           <div className="col anim">
            <p className="first-letter:ml-4 leading-6 mt-4">Dengarkan instruksi dan peringatan dari petugas penanganan bencana, otoritas setempat, atau peralatan komunikasi yang tersedia. Ikuti petunjuk evakuasi dengan cepat dan disiplin.</p>
           </div></section>
       <section className="sec3 pin bg-purple-400">
           
           <h2 className="anim font-bold text-3xl">Bantuan Kepada yang Lebih Membutuhkan</h2>
   
           <div className="col anim">
            <p className="first-letter:ml-4 leading-6 mt-4">Selama proses evakuasi, berikan bantuan kepada orang lain yang membutuhkan, terutama kepada mereka yang mungkin kesulitan bergerak atau mengikuti proses evakuasi.</p>
           </div></section>
</div>
</div>
        </>
    )
}