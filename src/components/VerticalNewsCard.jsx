import React from 'react';

const VerticalNewsCard = ({title, content, date, mainImage, elIndex}) => {

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    return (
        <div className="w-[90%] break-inside relative flex flex-col w-[300px] h-auto bg-gray-100 shadow-2xl object-cover justify-between cursor-pointer rounded-2xl m-auto mb-[30px]" >
            <div className="flex w-full items-center justify-center mt-[20px]">
                <img className="shadow-xl h-[300px] xs:h-[400px] semiLg:h-[300px] w-[90%] rounded-xl object-cover object-top" src={mainImage} alt="image"/>
            </div>
            <div className="relative mt-[10px] semiLg:mt-[10px]">
                <div className="px-5">
                    <h5 className="mb-3 font-poppins text-gray-700 text-[16px] font-semibold text-gray-700">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 text-[14px] font-poppins">
                        {content}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 text-[14px] font-poppins">
                        {formatDate(date)}
                    </p>
                </div>
            </div>
        </div>
        // <div className={`${elIndex === 0 ? "mx-10" : "mx-5"} h-auto bg-gray-100 shadow-2xl rounded-2xl`}>
        //     <div className="">
        //         <img className="shadow-xl h-[200px] w-[90%]" src={mainImage} alt="image"/>
        //     </div>
        //     <div className="">
        //         <div className="">
        //             <h5 className="mb-3 font-poppins text-gray-700 text-[16px] font-semibold text-gray-700">
        //                 {title}
        //             </h5>
        //             <p className="mb-3 font-normal text-gray-700 text-[14px] font-poppins">
        //                 {content}
        //             </p>
        //             <p className="mb-3 font-normal text-gray-700 text-[14px] font-poppins">
        //                 {formatDate(date)}
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default VerticalNewsCard;
