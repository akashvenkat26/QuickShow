import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {

    const [currentTrailer,setCurrentTrailer]=useState(dummyTrailers[0])
    console.log(currentTrailer);
  
    
    
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
      <BlurCircle top="-100px" right="-100px" />
       <ReactPlayer url={currentTrailer.videoUrl}  
       controls  className="mx-auto max-w-full" width="960px" height="540px" />
      </div>

      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer)=>(
            <div key={trailer.image} className='relative cursor-pointer transition duration-300 
                 hover:-translate-y-1 
                 group-hover:opacity-50 
                 hover:!opacity-100' onClick={() => setCurrentTrailer(trailer)} >

                <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75' />
                <PlayCircleIcon strokeWidth={1.6} className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection

// import React, { useState } from 'react'
// import ReactPlayer from 'react-player'
// import { PlayCircleIcon } from 'lucide-react'
// import { dummyTrailers } from '../assets/assets'


// const TrailerSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
//   console.log(dummyTrailers);
  

//   return (
//     <div style={{ padding: 40 }}>
//       {/* 🔑 key forces reload, NO autoplay */}
//       <ReactPlayer
//         key={currentTrailer.videoUrl}
//         url={currentTrailer.videoUrl}
//         controls
//         width="100%"
//         height="500px"
//       />

//       <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
//         {dummyTrailers.map((trailer, index) => (
//           <div
//             key={index}
//             style={{ position: 'relative', cursor: 'pointer' }}
//             onClick={() => setCurrentTrailer(trailer)}
//           >
//             <img src={trailer.image} width="220" alt="trailer" />
//             <PlayCircleIcon
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 color: 'white',
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default TrailerSection


