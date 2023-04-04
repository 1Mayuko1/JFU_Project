import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const WorldNews = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Новости в мире'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default WorldNews;
