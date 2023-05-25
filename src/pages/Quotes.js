import React from 'react';
import data from '../data';
import { Quote } from '../components/Quote';
import uuid from 'react-uuid';

export const Quotes = () => {
    return (
        <main>
            <ul>
                {data.map((item) => {
                    const { quote, author, context } = item;
                    return (
                        <Quote key={uuid()} quote={quote} author={author} context={context}/>
                    );
                })}
            </ul>
        </main>
    );
};