// pages/index.js
import Head from 'next/head'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio home page</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Torjus Nilsen" />
        <meta name="description" content="here is my portfolio site" />
        <meta name="keywords" content="html, css, javascript. index/home page" />
       
      </Head>
      <body className="bg-body-color text-bg-color">
        <a href="#home" className="fixed bottom-8 right-6">
          <i className="bx bx-up-arrow-alt p-2 text-xl bg-box-color text-bg-color rounded hover:bg-container-color transition duration-300"></i>
        </a>

        <header className="fixed w-full top-0 left-0 z-50 bg-box-color shadow transition duration-500">
          <div className="flex items-center justify-between px-10 py-5 container mx-auto">
            <i className="bx bx-menu text-xl cursor-pointer hidden md:block"></i>
            <a href="#" className="text-xl font-bold text-text-color"><span className="text-main-color">Torjus</span></a>
            <ul className="hidden md:flex space-x-8 uppercase font-medium">
              <li><a href="#home" className="hover:text-main-color transition">Hjem</a></li>
              <li><a href="#about" className="hover:text-main-color transition">Om meg</a></li>
              <li><a href="#services" className="hover:text-main-color transition">Tjenester</a></li>
              <li><a href="#portfolio" className="hover:text-main-color transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-main-color transition">Kontakt</a></li>
            </ul>
            <i className="bx bx-search text-xl cursor-pointer hidden md:block"></i>
          </div>
          <div className="search-box container mx-auto bg-bg-color shadow rounded transition duration-500">
            <input type="search" placeholder="Search here..." className="w-full p-5 bg-transparent outline-none" />
          </div>
        </header>

        <main>
          <section id="home" className="min-h-screen flex items-center justify-center container mx-auto pt-28">
            <div className="text-center">
              <h3 className="relative inline-flex items-center text-main-color mb-4">
                <span className="w-5 h-0.5 bg-main-color mr-2"></span> Hallo <span className="w-5 h-0.5 bg-main-color ml-2"></span>
              </h3>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">jeg heter <span className="text-main-color">Torjus</span></h2>
              <p className="mb-6 text-lg">
                Hei jeg er Torjus og jeg studerer front-end utvikling på Noroff høyskole og fagskole campus i Oslo.
                <br /> under kan du lese litt mer <span className="text-main-color">om meg</span>
              </p>
            </div>
          </section>

          <section id="about" className="container mx-auto py-20">
            <h2 className="text-5xl text-heading-color text-center mb-10">om meg</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="text-main-color uppercase font-medium">lit om meg</span>
                <h2 className="text-2xl font-bold my-4">front-end utvikler og web designer</h2>
                <a href="CV Torjus Nilsen.pdf" download className="inline-flex items-center space-x-2 text-bg-color bg-main-color px-4 py-3 rounded mt-4 hover:bg-blue-600 transition">
                  last ned CV
                  <i className="bx bx-download"></i>
                </a>
              </div>
              <div>
                <p className="text-lg text-justify">
                  Hei mitt navn er Torjus og fyller 24 år dette året. Jeg studerer nå fulltid front-end utvikling hos Noroff høgskole og fagskole i Oslo,
                  på skolen fokuserer vi veldig mye på å bli eksperter på javascript og front-end design. før jeg begynte å studere var jeg 3 år i
                  forsvaret 1 år som vernepliktig i 2 Battalion og 2 år som ansatt hos Task Force Telemark Battalion, min hoved rolle
                  var å være sambands spesialist gjennom hele forsvars karrieren min. det var i forsvaret interessen av it begynte of valget videre til å studere.
                </p>
              </div>
            </div>
          </section>

          <section id="services" className="container mx-auto py-20">
            <h2 className="text-5xl text-heading-color text-center mb-10">Tjenester</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center bg-container-color p-6 rounded transition transform hover:scale-105">
                <i className="bx bx-code-alt text-4xl text-main-color mb-4"></i>
                <h2 className="text-xl font-medium mb-4 text-main-color">html og css</h2>
                <p className="text-lg">html og css er noe vi også lærer masse om, uttover skole årene vil vi lære flere css libraries til å viderbygge på det vi allerede kan</p>
              </div>
              <div className="flex flex-col items-center text-center bg-container-color p-6 rounded transition transform hover:scale-105">
                <i className="bx bx-brush text-4xl text-main-color mb-4"></i>
                <h2 className="text-xl font-medium mb-4 text-main-color">Web design</h2>
                <p className="text-lg">Figma er et av hoved programene vi bruker gjennom skole årene for designe alle prosjektene vi skal lage til ulike skoleoppgaver.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-container-color p-6 rounded transition transform hover:scale-105">
                <i className="bx bx-code-alt text-4xl text-main-color mb-4"></i>
                <h2 className="text-xl font-medium mb-4 text-main-color">javascript</h2>
                <p className="text-lg">javascript er et av hoved code språkene vi kommer til å lære på skolen. jeg har fortsatt mye å lære men jeg
                  er motivert til lære mer om språket og forbedre meg selv som utvikler. vi vil ettervært påføre react.js som et av kodespråkene vi kommer til å lære.
                  så når endt skole gang er over vil jeg forhåpe tlighvis være javascript eksperter.
                </p>
              </div>
            </div>
          </section>

          <section id="portfolio" className="container mx-auto py-20">
            <h2 className="text-5xl text-heading-color text-center mb-10">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
              <Image src="/Skjermbilde_2023-10-24_173908.png" width={600} height={400} className="w-full h-full object-cover rounded" alt="Portfolio 1" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsla(234,45%,16%,0.7)] opacity-0 group-hover:opacity-100 transition">
                  <h2 className="text-2xl font-bold mb-4">web utvikling</h2>
                  <a href="#" className="text-2xl bg-main-color text-bg-color p-2 rounded hover:bg-blue-600 transition">
                    <i className="bx bx-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="relative group">
              <Image src="/port2.png" width={600} height={400} className="w-full h-full object-cover rounded" alt="Portfolio 1" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsla(234,45%,16%,0.7)] opacity-0 group-hover:opacity-100 transition">
                  <h2 className="text-2xl font-bold mb-4">web utvikling</h2>
                  <a href="#" className="text-2xl bg-main-color text-bg-color p-2 rounded hover:bg-blue-600 transition">
                    <i className="bx bx-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Image src="/port1.png" width={600} height={400} className="w-full h-full object-cover rounded" alt="Portfolio 1" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsla(234,45%,16%,0.7)] opacity-0 group-hover:opacity-100 transition">
                  <h2 className="text-2xl font-bold mb-4">web utvikling</h2>
                  <a href="#" className="text-2xl bg-main-color text-bg-color p-2 rounded hover:bg-blue-600 transition">
                    <i className="bx bx-link-alt"></i>
                  </a>
                </div>
              </div>
          </section>

        
        </main>

        <footer className="bg-footer-color text-center py-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <a href="#" className="text-xl font-bold mb-4 md:mb-0"><span className="text-main-color">Torjus</span></a>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-main-color transition"><i className="bx bxl-facebook text-xl"></i></a>
              <a href="#" className="hover:text-main-color transition"><i className="bx bxl-instagram text-xl"></i></a>
              <a href="#" className="hover:text-main-color transition"><i className="bx bxl-twitter text-xl"></i></a>
            </div>
            <p className="mt-4 md:mt-0">Laget med <i className="bx bxs-heart text-main-color"></i> av Torjus Nilsen</p>
          </div>
        </footer>
      </body>
    </>
  )
}
