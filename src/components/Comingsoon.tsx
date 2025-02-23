import React from 'react';

const ComingSoonPage = () => {
    return (
        <section className="mb-16" style={{ marginTop: "2px" , marginBottom:"2px"}}>

            <div className="flex justify-center items-center h-screen bg-[#ffffff] text-white  px-0 py-0">

                <div className="container flex w-4/5 max-w-[1200px]">
                    <div className="left-side flex-1 flex justify-center items-center">
                        <img
                            src="\images\coming.png"
                            alt="Athlon Coming Soon"
                            className="w-3/5 h-auto"
                        />
                    </div>
                    <div className="right-side flex-1 flex flex-col justify-left items-left text-left p-16" style={{ marginLeft: "40px", marginTop: "40px" }}>
                        {/* Mobile Apps with Yellow Text */}
                        <div className="mobileapp text-2xl font-bold mb-5 text-[#020409]">MOBILE APPS</div>

                        {/* Coming Soon with Dark Blue Text */}
                        <div className="coming-soon text-4xl font-bold mb-5 text-[#020d30]">Athlon is Coming Soon!</div>

                        {/* Message with Dark Blue Text */}
                        <div className="message text-1xl mb-14 text-[#272728] font-poppins ">
                        We are thrilled to announce that Athlon, the ultimate sports booking platform, is on its way! 
                        Stay tuned for more updates and be among the first to experience the convenience and innovation Athlon brings!
                       
                        
                        </div>


                        <div className="app-buttons flex justify-left gap-5">
                            <a href="#">
                                <img
                                    src="\images\playstore.png"
                                    alt="Google Play"
                                    className="h-26rem w-40 "
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="\images\app.png"
                                    alt=" App Store"
                                    className="h-11 w-36 object-contain "
                                />
                            </a>
                        </div>
                    </div>
                </div>

        </div>
        </section>

)
    ;
};

export default ComingSoonPage;
export{};