import Image from 'next/image'
import Link from 'next/link'


export function caraousel() {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Image
      height = {200}
      width = {200}
      alt='caraousel image'
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Link href="#slide4" className="btn btn-circle">❮</Link>
        <Link href="#slide2" className="btn btn-circle">❯</Link>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <Image
      height = {200}
      width = {200}
      alt='caraousel image'
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Link href="#slide1" className="btn btn-circle">❮</Link>
        <Link href="#slide3" className="btn btn-circle">❯</Link>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <Image
      height = {200}
      width = {200}
      alt='caraousel image'
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Link href="#slide2" className="btn btn-circle">❮</Link>
        <Link href="#slide4" className="btn btn-circle">❯</Link>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <Image
      height = {200}
      width = {200}
      alt='caraousel image'
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Link href="#slide3" className="btn btn-circle">❮</Link>
        <Link href="#slide1" className="btn btn-circle">❯</Link>
      </div>
    </div>
  </div>
  )
}


