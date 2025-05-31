
import { Element, Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Навигация */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-lg">
          <div className="text-indigo-600 font-bold text-xl">🎨 Jenny Barten</div>
          <ul className="flex gap-6">
            <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">Over Mij</Link></li>
            <li><Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">Galerij</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24">
        {/* Home Section */}
        <Element name="home">
          <section className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4" style={{ backgroundImage: 'url(/images/watermark.png)' }}>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl md:text-5xl font-bold font-serif text-gray-800">
                “Ieder kind is een kunstenaar...”<br /> <span className="text-indigo-600">— Pab Pic</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                Welkom op mijn creatieve kunst- en educatiesite!
              </motion.p>
            </div>
          </section>
        </Element>

        {/* About Section */}
        <Element name="about">
          <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
            <img src="/images/watermark-soft.png" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" alt="bg" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <img src="/images/jenny.png" alt="Jenny Barten" className="w-64 h-64 object-cover rounded-full shadow-lg" />
              <div className="space-y-5 text-[17px] leading-relaxed text-gray-800 max-w-3xl"> <h2 className="text-4xl font-bold font-serif mb-6 text-indigo-800">Over Mij</h2> <p><strong>Jenny Barten-Jonkers,</strong> geboren in Hoogwoud (1967)</p> <p> Als kleuter vond ik creatief bezig zijn al iets magisch. Ik weet nog precies hoe ik mij voelde toen ik aan het schilderen was op een groot vel papier en met hoeveel “vuur” ik beeldjes van klei maakte. </p> <p> In mijn puberteit maakte en vermaakte ik bijna al mijn kleding en accessoires zelf, tekende ik, maakte collages en verbouwde ik mijn kamer wekelijks. Een creatief beroep lag dan ook voor de hand. </p> <p> Na het propedeusejaar TeHaTex (lerarenopleiding 2e graads) heb ik, geïnspireerd door de inpakkunst van Christo, de overstap gemaakt naar Textielvormgeving en Kunstgeschiedenis (1e graads) aan de HKA in Amsterdam. </p> <p> Na mijn studie werkte ik als meubelstoffeerder, gaf ik workshops soft furnishing, werkte ik in het theater en als decorontwerper bij het Wereld Kindertheater. Ik deed ook stylingwerk, werd moeder, en werkte in de kinderopvang, vooral met kinderen met een rugzakje. </p> <p> De rode draad door al mijn werk? Creativiteit. Het helpt bij levensprocessen, ontspanning, leren anders denken — en natuurlijk om mooie dingen te maken. </p> <p> Sinds 10 jaar geef ik weer les in beeldende vorming via culturele instellingen op basis- en middelbare scholen. Sinds 2022 werk ik op een ISK-school (voor nieuwkomers van 12–18 jaar). </p> <p> Mijn werkstijl kenmerkt zich door hergebruik: decors van oude dozen, collages met beschilderde kranten, papier uit de afvalbak van een drukkerij — alles krijgt een tweede leven. </p> <p> Hoewel lesgeven mijn passie is, maak ik als kunstenaar ook eigen werk: mixed-media collages op het platte vlak, en ruimtelijke fantasiewezens van afvalmateriaal. </p> </div>
            </motion.div>
          </section>
        </Element>

        {/* Gallery Section */}
        <Element name="gallery">
          <section className="py-20 px-6 bg-white relative overflow-hidden">
            <img src="/images/watermark-soft.png" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" alt="bg" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-serif text-center mb-12">Galerij</h2>
              <div className="space-y-12">
                {['Kinderworkshops', 'Samenwerken', 'Volwasseneneducatie', 'Eigen Werk'].map((title, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <div className="flex overflow-x-auto gap-4 pb-2">
                      {Array.from({ length: 9 }, (_, i) => (
                        <img
                          key={i}
                          src={`/images/${title.toLowerCase().replace(/ /g, '-')}-${i + 1}.png`}
                          alt={`${title} ${i + 1}`}
                          className="min-w-[200px] h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <section className="py-20 px-6 bg-slate-100 relative overflow-hidden">
            <img src="/images/watermark-soft.png" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" alt="bg" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 max-w-xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold font-serif mb-6">Contact</h2>
              <p className="text-lg text-gray-600">Stuur mij een bericht of volg mij op sociale media:</p>
              <div className="flex justify-center gap-8 text-2xl text-indigo-600">
                <a href="mailto:jenny.j.barten@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="hover:text-indigo-400 transition" /></a>
                <a href="https://www.instagram.com/---" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-pink-500 transition" /></a>
                <a href="https://www.facebook.com/---" target="_blank" rel="noreferrer"><FaFacebookF className="hover:text-blue-500 transition" /></a>
              </div>
            </motion.div>
          </section>
        </Element>
      </main>

      <footer className="text-center py-6 bg-white border-t text-sm text-gray-500">
        © {new Date().getFullYear()} Jenny Barten — alle rechten voorbehouden.
      </footer>
    </div>
  )
}
