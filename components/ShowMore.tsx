"use client"

import { ShowMoreProps } from "@/types"

const ShowMore = ({pageNumber, isNext, setLimit}:ShowMoreProps) => {
  
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10

        setLimit(newLimit)
    }

    return (
        <div className="mt-10 flex justify-center items-center">
            {!isNext && (
                <button
                    onClick={handleNavigation}
                    className="bg-orange-300 text-xl font-bold rounded-xl text-white w-[200px] h-[50px]"
                >
                    Show more
                </button>
            )}    
        </div>
  )
}

export default ShowMore