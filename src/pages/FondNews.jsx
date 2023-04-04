import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const FondNews = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Новости фонда'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default FondNews;
