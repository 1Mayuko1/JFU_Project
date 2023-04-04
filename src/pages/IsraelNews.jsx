import React from 'react';
import {newsFromWebsite} from "../constants/constants";
import {NewsByNameComponent} from "../components";

const IsraelNews = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Новости в Израиле'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default IsraelNews;
