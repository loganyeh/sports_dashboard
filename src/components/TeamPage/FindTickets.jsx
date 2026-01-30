
function FindTickets(){

    return(
        <>
            <div className="border border-black h-auto w-80 my-2 mr-5 rounded-xl">
                <div className="border-b border-dashed border-gray-300 h-13 w-full flex">
                    <div className="h-full w-1/2 pl-4 flex justify-start items-center font-medium">Find Tickets</div>
                    <div className="h-full w-1/2">
                        <div className="h-1/2 w-full pr-8 flex justify-end items-end text-xs text-gray-400"><span className="cursor-pointer">Powered By</span></div>
                        <div className="h-1/2 w-full pr-4 flex justify-end items-center text-sm text-blue-900 font-bold"><span className="cursor-pointer">Vivid Seats</span></div>
                    </div>
                </div>

                <div className="border-b border-gray-300 h-auto w-full">
                    <div className="h-7 w-full flex justify-center items-center text-lg font-semibold">Braves @ Rays</div>
                    <div className="h-7 w-full flex justify-center items-center text-sm text-gray-400 font-light">Charlotte Sports Park - Sat 2/21/26, 1:05</div>
                    <div className="h-7 w-full flex justify-center items-center text-sm text-blue-600"><span className="hover:text-blue-900 hover:underline cursor-pointer">Tickets as low as $13</span></div>
                </div>
                <div className="border-b border-gray-300 h-10 w-full flex justify-center items-center text-sm"><span>Buy <span className="text-blue-600 hover:text-blue-900 hover:underline cursor-pointer" >Braves tickets</span> with <span className="text-blue-600 hover:text-blue-900 hover:underline cursor-pointer" >VividSeats</span></span></div>
                <div className="h-13 w-full flex justify-around items-center">
                    <div className="h-full w-35 flex justify-end items-center text-md font-light">Other Games</div>
                    <div className="border border-gray-400 h-8 w-38 flex justify-center items-center bg-gray-50 text-xs rounded-2xl hover:bg-white cursor-pointer">Search by Team<i className='bx bx-chevron-down text-lg pl-1 text-blue-600'></i></div>
                </div>
            </div>
        </>
    )
}

export default FindTickets;