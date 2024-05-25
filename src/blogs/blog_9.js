import React from 'react';
import mds from './images/big_data_stack.png';
import {MyDate} from "../dates/util";

export const name = "Of data & lakes & the houses next to them";
export const created_on = new MyDate(2024, 5, 25);

export const mod = () => {
    return (
        <>
            <p>
                I have always loved systems and the idea of working close to the metal. One of the best
                ways of understanding the fundamentals of a system is to push it to its limits. Big data
                is a fantastic way to do this. Processing such a large data inherently forces us to reason
                about multiple things, language of choice, data structures, algorithms, CPU, memory, disk.
                This is the full stack of computing. It is a great way to learn about the system.
            </p>
            <p>
                Internet scale technologies face a similar set of challenges as mentioned above. Let's think
                of companies like Google, Facebook, Amazon, Netflix, Twitter, Uber, etc. who have created
                these technologies. But, on the flip side, very few engineers get to work on such systems. But
                big data is a great way to get a taste of this. Data problems exist everywhere and irrespective
                of the scale of the domain, the data is always big. Particularly, today one can easily dig up
                sample problem statements and look to solve those.
            </p>
            <p>
                Now we know where to find the next big data problem. Let's now understand more about the ecosystem
                around big data. If you are marginally familiar with the Modern Data Stack choupsey, you would have
                seen this diagram.
            </p>
            <img className="img-fluid" src={mds} alt="Big Data Stack" />
            <p>

            </p>
            <p>
                Well this is the <span className="rainbow">stack</span>!. We need to immerse ourselves in it one layer
                at a time.
            </p>
        </>
    );
}
