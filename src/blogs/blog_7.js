import React from 'react';
import {MyDate} from "../dates/util";


export const name = "This is so Old";
export const created_on = new MyDate(2022, 3, 28);
export const mod = () => {
    return (
        <>
            <p>
                This blog is so old that I forgot how to write it!
            </p>
        </>
    );
}
