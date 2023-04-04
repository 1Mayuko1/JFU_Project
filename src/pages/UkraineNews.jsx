import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const UkraineNews = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Новости в Украине'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default UkraineNews;
