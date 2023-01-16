import { React } from 'react'
import Flat from './flat';

const OnChoosePick = () => {
    return(
        <div className='w-full flex'>
            <div className='flex flex-row gap-4 items-center w-full'>
                <div className='flex w-8/12 relative h-full'>
                    <img src={process.env.PUBLIC_URL + "/images/image18.png"} alt="bgTitle" className="absolute w-full h-full object-cover" />
                    <img src={process.env.PUBLIC_URL + "/images/image19.png"} alt="bgTitle" className="absolute w-full h-full object-contain" />
                </div>
                <div className='w-fit grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <Flat />
                    <Flat />
                    <Flat />
                    <Flat />
                    <Flat />
                    <Flat />
                </div>
            </div>
        </div>
    );
}

export default OnChoosePick;