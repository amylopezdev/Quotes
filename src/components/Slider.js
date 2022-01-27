import React, { useState, useEffect } from 'react';
import data from '../data';

export const Slider = () => {
    const [quote, setQuote] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, quote]);

    return (
        <section>
            <main>
                {
                    data.map((item, itemIndex) => {
                        const { id, quote, author } = item;

                        let position = 'nextSlide';
                        if (itemIndex === index) {
                            position = 'activeSlide';
                        }
                        if (
                            itemIndex === index - 1 ||
                            (index === 0 && itemIndex === quote.length - 1)
                        ) {
                            position = 'lastSlide';
                        }

                        return (
                            <article className={position} key={id}>
                                <p className="quote">{quote}</p>
                                <p className="author">{author}</p>
                            </article>
                        );
                    })
                }
            </main>
            <div className="buttons">
                <button aria-label="previous" className="prev" onClick={() => setIndex(index - 1)}>
                    <i className="fas fa-chevron-left" />
                </button>
                <button aria-label="next" className="next" onClick={() => setIndex(index + 1)}>
                    <i className="fas fa-chevron-right" />
                </button>
            </div>
        </section>
    );
};

export default Slider;