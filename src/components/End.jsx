import { useEffect } from "react"
import AOS from "aos"
export default function End() {
    useEffect(() => {
        AOS.init()
      }, [])
  return (
    <div className="h-screen flex justify-center items-center">
          <h2 data-aos="zoom-in" className="text-5xl font-bold">
            Terima Kasih Sudah Membaca:)
          </h2>
        </div>
  )
}
