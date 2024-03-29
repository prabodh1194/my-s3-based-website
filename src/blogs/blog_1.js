import React from 'react';
import {MyDate} from "../dates/util";

export const name = "Why?"
export const created_on = new MyDate(2018, 8, 8);

export const mod = () => {
    return (
        <>
            <p>
                This is some place to collect thoughts about what I discover,
                see and observe around me. This is the place which I believe
                will motivate me to carry on doing the same.
            </p>
            <p>
                I need a daily fix of code & caffeine. This blog is written
                in <a href="//reactjs.org/"><em>ReactJS</em></a> and my exercise to pick up this
                latest <a href="//www.destroyallsoftware.com/talks/wat"><em>JS beauty</em></a> is
                what partially led to me start up this blog. I plan to take up
                other tech topics soon. Probably once when I've made my peace with
                ReactJS.
            </p>
            <p>
                My endeavors to <em> save on my income tax </em>
                has sent me down the equity route. Thanks to multitude of blogs &
                videos which I follow, my ideas are a mush. It's high time I start
                recording them. Probably, I'll start researching
                better. <a href="//www.starwars.com/may-the-4th">
                    <span> Let this blog be a positive feedback loop</span>
                </a>.
            </p>
        </>
    );
}
