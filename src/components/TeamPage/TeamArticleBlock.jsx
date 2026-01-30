
function TeamArticleBlock(){

    return(
        <>
            <div className="border border-black h-auto w-full mt-4 rounded-xl flex flex-col items-center">
                {/* top half */}
                <div className="h-auto w-275 flex">
                    <div className="h-auto w-46 flex">
                        <div className="h-20 w-23 flex justify-center items-center bg-cover bg-center"><img src="/images/braves.jpg" alt="braves logo" className="h-16 w-16" /></div>
                        <div className="h-20 w-1/2">
                            <div className="h-1/2 w-full flex justify-start items-end text-lg font-medium">BRAVES</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-sm font-normal">MLB</div>
                        </div>
                    </div>
                    <div className="h-full w-10/12"></div>
                </div>

                {/* bottom half */}
                <div className="h-auto w-full mb-4 flex justify-center items-center">
                    <div className="border border-black h-auto w-275 rounded-xl shadow-md hover:text-blue-800 cursor-pointer">
                        <div className="border-b-4 border-gray-400 h-110 w-full"><img src="/images/article_img1.jpg" alt="article" className="h-full w-full rounded-t-xl"/></div>
                        <div className="h-18 w-full">
                            <div className="h-9 w-full pl-2 flex justify-start items-center text-xl font-medium">
                                <span>Just missed the top 100? No problem! Rookie of the Year candidates, breakout prospects from Nos. 101 to 200</span>
                            </div>
                            <div className="h-9 w-full flex justify-start items-center text-sm text-gray-600">
                                <span className="h-full ml-2 flex justify-center items-center">13h</span>
                                <span className="h-full mx-2 flex justify-center items-center">.</span>
                                <span className="h-full flex justify-center items-center">Kiley McDaniel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamArticleBlock;