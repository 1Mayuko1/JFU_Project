import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const OurProjects = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Наши проекты'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default OurProjects;
