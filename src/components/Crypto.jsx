import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa'


const Crypto = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='mx-auto w-full md:px-12 lg:px-[120px] xl:px-[300px] max-w-[1440px] py-6 md:py-12  px-8 items-center justify-center'>

     

        <div className="space-y-8 text-gray-700 ">

          <Link
            to='/'
            className='text-accent text-xl '
            >
              <div className='flex flex-row items-center  gap-3 text-primary border boreder-solid w-[100px] p-3 rounded-3xl'>
              <FaArrowLeft/>
              <p>Back</p>
              </div>
              
            </Link>
    

        <h1 className="text-4xl font-bold text-accent font-[yellowtail]  mb-8">Crypto-World</h1>

        <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/crypto.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover ]"
                />
              </div>
          
          <div>
            <h2 className="text-2xl text-accent font-semibold mb-2">Overview</h2>
            <p>
              Crypto-world is a responsive web platform designed to provide users with real-time cryptocurrency data, historical insights, and daily news updates. Powered by the CoinGecko API, the website offers a reliable and comprehensive experience for both crypto enthusiasts and newcomers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">Project Goals</h2>
            <ul className="list-disc list-inside  space-y-4">
              <li>Deliver up-to-date market data.</li>
              <li>Provide a historical overview of key cryptocurrencies.</li>
              <li>Share daily news related to blockchain and crypto markets.</li>
              <li>Create a user-friendly and responsive design.</li>
              <li>Ensure high API efficiency and fast page load times.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Live cryptocurrency data with real-time updates.</li>
              <li>Interactive historical price charts.</li>
              <li>Crypto news aggregation from reputable sources.</li>
              <li>Search and filter functionality for easy coin lookup.</li>
              <li>Responsive design with mobile optimization.</li>
              <li>Dark/Light mode toggle for personalized UX.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">Tools and Technologies</h2>
            <ul className="list-disc list-inside space-y-4">
              <li><strong>Frontend:</strong> React.js, Tailwind CSS, Framer Motion</li>
              <li><strong>API:</strong> CoinGecko REST API</li>
              <li><strong>Hosting:</strong> Vercel</li>
              <li><strong>Version Control:</strong> GitHub</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">API Integration</h2>
            <p>
              The site integrates the CoinGecko API for live prices, metadata, historical charts, and market statistics. Optimizations include debounced search queries, lazy loading for coin lists, and caching frequent API responses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">Design Approach</h2>
            <p>
              The design focuses on clarity, simplicity, and engagement, with clean layouts, dynamic cards, and micro-interactions to make data exploration easy and enjoyable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">Challenges</h2>
            <ul className="list-disc list-inside space-y-4"> 
              <li>Managing API rate limiting with caching and smart fetching.</li>
              <li>Filtering and curating high-quality crypto news content.</li>
              <li>Visualizing market volatility clearly with intuitive UI elements.</li>
            </ul>
          </div>

          {/* Screenshot Mockup */}
          <div className="flex flex-col gap-12 justify-center">

             

              <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/cryptopage2.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover"
                />
              </div>

              <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/cryptopage3.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover"
                />
              </div>

              <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/cryptopage4.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover"
                />
              </div>

              <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/cryptopage5.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover"
                />
              </div>

              <div className="border-8 border-gray-200 p-4 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/cryptopage6.png" 
                  alt="CryptoVerse Website Screenshot"
                  className="w-full object-cover"
                />
              </div>
            </div>

                <div>
                  <h2 className="text-2xl font-semibold text-accent mb-2">Outcomes</h2>
                  <ul className="list-disc list-inside space-y-4">
                    <li>Performance scores above 95 on Lighthouse across all categories.</li>
                    <li>Average user session time of 5+ minutes browsing crypto data and news.</li>
                    <li>Scalable architecture ready for future enhancements like portfolios and alerts.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-accent mb-2">Future Enhancements</h2>
                  <ul className="list-disc list-inside space-y-4">
                    <li>User accounts for watchlists and alerts.</li>
                    <li>Portfolio tracking and management tools.</li>
                    <li>More advanced analytics like on-chain data and whale tracking.</li>
                    <li>Multi-language support for global reach.</li>
                  </ul>
                </div>
             </div>

       <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 text-sm text-primary hover:underline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          ↑ Back to top
        </motion.button>
        
    </div>
  )
}

export default Crypto