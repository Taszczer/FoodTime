"use client"

const ShowMore = ({pageNumber, isNext, setLimit}:any) => {
  
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10

        setLimit(newLimit)
    }

    return (
        <div className="mt-10 flex justify-center items-center">
            {!isNext && (
                <button
                    onClick={handleNavigation}
                    className="bg-orange-300 rounded-xl text-white w-[200px] h-[50px]"
                >
                    Show more
                </button>
            )}    
        </div>
  )
}

export default ShowMore