import React from "react";

function differenceInYearsAndMonths(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    // Calculate the time difference in milliseconds
    const timeDiff = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to years
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    return `${years}+`;
}

const About = () => {
    return (
        <main>
            <div className="page-wrapper">
                <h1>Hi Peeps,</h1>
                <div className="article-content">
                    <p>
                        Prabodh Agarwal is an engineer by qualification whose
                        certificate reads integrated dual degree in M.Sc.(Hons.)
                        Biological Sciences and B.E.(Hons.) Computer Science.
                        Only BITS Pilani awards such amazing degrees. You should
                        definitely visit the sleepy hamlet of Pilani to
                        understand what is going on there.
                    </p>
                    <p>
                        I'm employing my "skills" as a software
                        engineer while being employed by
                        <a href="https://toplyne.io/" target="_blank" rel="noopener noreferrer">
                            <span> Toplyne Labs PTE Ltd</span>
                        </a><span>, Bangalore, India</span>. I have been here since July '21.
                    </p>
                    <p>
                        Before Toplyne, I spent 11 months from September '20 to July '21 at
                        <a href="https://dunzo.com" target="_blank" rel="noopener noreferrer">
                            <span> Dunzo</span>
                        </a>, <span>Bangalore, India</span>.
                    </p>
                    <p>
                        I started my career in July'17 at
                        <a href="https://deshawindia.com" target="_blank" rel="noopener noreferrer">
                            <span> D. E. Shaw India Pvt. Ltd.</span>
                        </a>, <span>Hyderabad, India</span>. I was here till September '20 for 3
                        years.
                    </p>
                    <p>
                        My professional career has spanned {differenceInYearsAndMonths(new Date('July, 2017'), Date.now())}
                        years where I have gotten to work on
                        multiple business verticals, products & tech stacks.
                    </p>
                    <p>
                        Each & every career switch has literally been a life changing experience for me &
                        I am grateful. I would love
                        to talk about everything I have a perspective & everything
                        else I have an opinion on & everything else as well. :-).
                    </p>
                    <p>
                        Happy browsing!
                    </p>
                </div>
            </div>
        </main>
    );
}
export default About;
