import React from 'react';

const HeaderCard = ({data}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 max-w-[400px] max-h-[200px] p-4 lg:border-r-2 border-gray-300">
            <div className="flex flex-row">
                <div className="flex justify-center items-center">
                    <img className="max-w-[80px] max-h-[80px] object-cover" src="https://picsum.photos/200/200" alt="placeholder" />
                </div>
                <div className="px-4">
                    <p className="text-[14px] font-medium mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p className="text-[12px] text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti impedit nihil.</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;
