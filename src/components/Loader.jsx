import React from 'react';
import {InfinitySpin} from "react-loader-spinner";

const Loader = ({load}) => {
    return (
        <div className={`${load ? 'flex' : 'hidden'} fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-gray-200 z-[50]`}>
            <InfinitySpin width={200} color="#4fa94d" />
        </div>
    );
};

export default Loader;
