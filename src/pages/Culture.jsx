import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const Culture = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Культура'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default Culture;
