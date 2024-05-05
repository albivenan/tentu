import "./style/EarthquakeStatus.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function Earthquakestatus() {

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
        <main >
         <div ref={container} className="wrapper">
         <div className="container scrollx">
         <section className="head sec1 pin">
           
           <div className="head flex flex-col items-center w-screen">
            <div>
               <h2 className="text-5xl font-bold">Level Status Pada Gunung Berapi</h2>
              <p className="first-letter:ml-4 leading-8 mt-4">Status Gunung Merapi atau gunung api lainnya ditentukan oleh ahli vulkanologi melalui pemantauan seismik, pengamatan visual, analisis gas vulkanik, deformasi tanah, dan data multi-parameter lainnya. Peningkatan aktivitas seismik, perubahan visual seperti aktivitas fumarol, dan konsentrasi gas vulkanik yang tinggi bisa menjadi indikator penting.</p>
            </div>
           </div>
       </section>
      <section className="sec1 pin bg-green-300">
           <h2 className="font-bold text-3xl">Level 1 (Normal)</h2>
   
           <div className="col">
           <p className="first-letter:ml-4 leading-6 mt-4">Status normal pada gunung meletus menandakan tidak adanya tanda-tanda aktivitas vulkanik yang mencurigakan. Ini menunjukkan bahwa gunung tersebut stabil dan tidak menunjukkan potensi letusan dalam waktu dekat.</p>
               <p className="first-letter:ml-4 leading-6 mt-4">Melalui pemantauan dan koordinasi yang baik antara pihak berwenang, ilmuwan, dan masyarakat, risiko dapat diminimalkan dan keselamatan masyarakat terjaga. Tim ilmuwan vulkanologi secara teratur memantau aktivitas gunung menggunakan berbagai alat seperti seismograf, GPS, dan sensor gas untuk mendeteksi perubahan yang mungkin menunjukkan peningkatan aktivitas vulkanik.
</p>
           </div>
       </section>
       <section className="sec2 pin bg-yellow-300">
           
           <h2 className="anim font-bold text-3xl">Level 2 (Waspada)</h2>
   
           <div className="col anim">
               <p className="first-letter:ml-4 leading-6 mt-4">Status waspada pada gunung meletus mengindikasikan adanya peningkatan aktivitas vulkanik yang memerlukan perhatian khusus. Ini bisa mencakup peningkatan jumlah dan kekuatan gempa bumi, peningkatan emisi gas, atau perubahan bentuk lahan di sekitar gunung.</p>
               <p className="first-letter:ml-4 leading-6 mt-4">Pada saat status waspada, penduduk di sekitar gunung perlu meningkatkan kewaspadaan mereka terhadap potensi bahaya vulkanik dan mengikuti petunjuk evakuasi jika diperlukan.</p>
               </div>
       </section>
       <section className="sec3 pin bg-orange-300">
           
           <h2 className="anim font-bold text-3xl">Level 3 (Siaga)</h2>
   
           <div className="col anim">
               <p className="first-letter:ml-4 leading-6 mt-4">Status siaga pada gunung meletus menunjukkan tingkat aktivitas vulkanik yang tinggi dan potensi letusan dalam waktu dekat. Ini memicu peringatan serius kepada masyarakat untuk segera mengambil langkah-langkah persiapan darurat.</p>
               <p className="first-letter:ml-4 leading-6 mt-4">Kerjasama masyarakat dalam mematuhi petunjuk evakuasi sangat penting untuk menjaga keselamatan bersama. Dengan kesiapan dan koordinasi yang baik, risiko dapat diminimalkan dan keselamatan penduduk terjaga.</p>
           </div></section>
       <section className="sec3 pin bg-red-400">
           
           <h2 className="anim font-bold text-3xl">Level 4 (Awas)</h2>
   
           <div className="col anim">
               <p className="first-letter:ml-4 leading-6 mt-4">Status Awas pada gunung meletus merupakan peringatan terakhir sebelum letusan yang potensial atau sedang berlangsung. Ini menunjukkan bahwa aktivitas vulkanik telah mencapai tingkat yang sangat tinggi dan letusan bisa terjadi kapan saja.</p>
               <p className="first-letter:ml-4 leading-6 mt-4">Pemerintah mengaktifkan semua rencana darurat dan menyediakan fasilitas kesehatan serta tempat pengungsian darurat bagi penduduk yang dievakuasi. Kepatuhan masyarakat terhadap instruksi evakuasi sangat penting untuk menjaga keselamatan mereka.</p>
           </div></section>
</div>
</div>
        </main>
    )
}