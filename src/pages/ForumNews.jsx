import React from 'react';
import {NewsByNameComponent} from "../components";
import {newsFromWebsite} from "../constants/constants";

const ForumNews = () => {
    return (
        <section>
            <div className="">
                <NewsByNameComponent text={'Новости форма'} newsDataInfo={newsFromWebsite}/>
            </div>
        </section>
    );
};

export default ForumNews;
