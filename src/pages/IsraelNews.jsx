import React from 'react';
import {newsFromWebsite} from "../constants/constants";

const IsraelNews = () => {

    const findHistoryObjects = (array, tag) => {
        return array.filter(obj => obj.mainTag === tag)
    }

    const findUniqueTags = (array) => {
        const historyObjects = findHistoryObjects(array)
        const uniqueTags = new Set()
        historyObjects.forEach(obj => {
            obj.tags.forEach(tag => uniqueTags.add(tag))
        })
        return Array.from(uniqueTags)
    }

    console.log('data --', newsFromWebsite)
    console.log('findHistoryObjects --', findHistoryObjects(newsFromWebsite, 'Израиль'))
    console.log('findUniqueTags --', findUniqueTags(newsFromWebsite))

    return (
        <div>

        </div>
    );
};

export default IsraelNews;
