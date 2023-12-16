import React from 'react';
import {MyDate} from "../dates/util";


export const name = "This is so Old";
export const created_on = new MyDate(2022, 3, 28);
export const mod = () => {
    return (
        <div className="row">
            <h1 className="align left">{name}</h1>
            <content className="align left">
                <p>
                    This blog is so old that I forgot how to write it!
                </p>
            </content>
        </div>
    );
}
