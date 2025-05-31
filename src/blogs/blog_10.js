import React from 'react';
import {MyDate} from "../dates/util";

export const name = "How to do LLMs for dummys";
export const created_on = new MyDate(2025, 5, 31);

const PinkEM = ({children}) => (
    <em style={{color: '#e91e63'}}>{children}</em>
);

export const mod = () => {
    return (
        <>
            <p>
            I am finally figuring out how to use LLMs for my case. For starters, I am selecting a design problem statement to prototype using LLMs.
            </p>
            <p>
            I am going to parse Annual Reports of companies and index them. Idea is to send in general queries and understand which companies do what.
            </p>
            <p>
            For example, I want to figure out companies that are well positioned to take advantage of electronics component manufacturing in India.
            I will send in a query like <span className='rainbow'>"Which companies are well positioned to take advantage of electronics component manufacturing in India?"</span> and the LLM should return a list of companies that have mentioned this in their annual reports.
            🤑💰🤑
            </p>
            <p>
                At this point of time, I am aware of the following keywords:
                <ul>
                    <li><PinkEM>LLM</PinkEM> - <span>Large Language Model</span></li>
                    <li><PinkEM>Embedding</PinkEM> - <span>A way to represent text in a vector space</span></li>
                    <li><PinkEM>Vector Database</PinkEM> - <span>A database that stores vectors</span></li>
                    <li><PinkEM>Retrieval Augmented Generation (RAG)</PinkEM> - <span>A way to use LLMs to generate text based on a retrieval system</span></li>
                    <li><PinkEM>Prompt Engineering</PinkEM> - <span>A way to design prompts for LLMs to get the desired output</span></li>
                </ul>
            </p>
        </>
    );
}
