import Image from 'next/image'
import Browse from './browse'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Hero />
      <Browse />
      <Footer />
    </main>
  )
}
