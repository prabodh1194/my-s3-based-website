import React from 'react';
import {MyDate} from "../dates/util";


export const name = "Back to JS";
export const created_on = new MyDate(2018, 8, 19);

export const mod = () => {
    return (
        <>
            <p>
                My journey away from JS and back to it! Pretty fantastic I would say.
            </p>
            <p>
                My first internship in May 2014 exposed me to web development for
                the very first time. My manager just gave me the problem statement
                & suggested I use the latest available JS tech in our project.
                Lo & behold! I used <a href="//nodejs.org/en/"><span>NodeJS</span></a> and
                <> </><a href="//angularjs.org/"><span>AngularJS</span></a> on that
                project. My manager for my internship in May 2015 again gave me
                a free hand in tech to select and I ended up
                using <a href=""><span>D3JS</span></a> to solve that problem.
            </p>
            <p>
                During the interview for my internship in May 2016, I requested the
                panelist, to ignore my JS projects as I would like to pursue non
                web projects in my internship. Today, I'm working with the same firm,
                and guess what! I work on web technologies; by choice.
            </p>
            <p>
                <em>Why?</em> Sheer love for how different, simple and smart does web
                development feel with React! This blog is partially borne out of self
                tutoring exercises that I have taken up after becoming POC for web tech
                in my team.
            </p>
        </>
    );
}
