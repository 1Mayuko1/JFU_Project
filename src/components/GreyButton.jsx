import React from 'react';
import {Link} from "react-router-dom";

const GreyButton = ({title}) => {
    return (
        <div>
            <div className="group cursor-pointer flex-1 min-w-[200px] bg-gray-200 rounded-lg border">
                {/*<Link to={`${linkTo}`}>*/}
                    <div className="flex-1 flex justify-center items-center flex-row m-3">
                        <button type="button" className="text-sm font-medium text-gray-900 outline-none items-center text-gray-700 font-semibold">
                            {title}
                        </button>
                    </div>
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default GreyButton;
