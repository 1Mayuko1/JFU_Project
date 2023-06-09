import React from 'react';
import {InfinitySpin} from "react-loader-spinner";

const Loader = ({load}) => {
    return (
        <div className={`${load ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 z-[50]`}>
            <InfinitySpin width={200} color="#616161" />
        </div>
    );
};

export default Loader;
