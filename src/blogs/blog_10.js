import React from 'react';
import mds from './images/big_data_stack.png';
import {MyDate} from "../dates/util";

export const name = "How to do LLMs for dummys";
export const created_on = new MyDate(2025, 5, 31);

export const mod = () => {
    return (
        <>
            <p>
            I am finally figuring out how to use LLMs for my case. For starters, I am selecting a design problem statement to prototype using LLMs.
            I am going to parse Annual Reports of companies and index them. Idea is to send in general queries and understand which companies do what.

            For example, I want to figure out companies that are well positioned to take advantage of electronics component manufacturing in India.
            I will send in a query like "Which companies are well positioned to take advantage of electronics component manufacturing in India?" and the LLM should return a list of companies that have mentioned this in their annual reports.
            </p>
        </>
    );
}
