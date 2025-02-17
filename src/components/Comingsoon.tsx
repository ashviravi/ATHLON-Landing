import React from 'react';

const ComingSoonPage = () => {
    return (
        <section className="mb-16" style={{ marginTop: "2px" , marginBottom:"2px"}}>

            <div className="flex justify-center items-center h-screen bg-[#ffffff] text-white  px-0 py-0">

                <div className="container flex w-4/5 max-w-[1200px]">
                    <div className="left-side flex-1 flex justify-center items-center">
                        <img
                            src="\images\comingsoonathlon.jpg"
                            alt="Athlon Coming Soon"
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className="right-side flex-1 flex flex-col justify-left items-left text-left p-16" style={{ marginLeft: "40px" }}>
                        {/* Mobile Apps with Yellow Text */}
                        <div className="mobileapp text-2xl font-bold mb-5 text-[#e8a418]">MOBILE APPS</div>

                        {/* Coming Soon with Dark Blue Text */}
                        <div className="coming-soon text-4xl font-bold mb-5 text-[#020d30]">Athlon is Coming Soon!</div>

                        {/* Message with Dark Blue Text */}
                        <div className="message text-1xl mb-14 text-[#020d30] font-poppins">
                            We’re excited to bring you the ultimate sports booking experience. Stay tuned for more
                            updates and
                            be the first to experience Athlon!
                        </div>


                        <div className="app-buttons flex justify-left gap-8">
                            <a href="#">
                                <img
                                    src="\images\googleplay.jpeg"
                                    alt="Google Play"
                                    className="h-10"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="\images\app.png"
                                    alt=" App Store"
                                    className="h-10"
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