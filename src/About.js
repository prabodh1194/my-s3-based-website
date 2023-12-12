
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
        <div className="row justify-content-evenly align-items-center h-75">
            <div className="fs-5 fw-light">
                <h1 className="align left">Hi Peeps,</h1>
                <content className="align left">
                    <p>
                        Prabodh Agarwal is an engineer by qualification whose
                        certificate reads integrated dual degree in M.Sc.(Hons.)
                        Biological Sciences and B.E.(Hons.) Computer Science.
                        Only BITS Pilani awards such amazing degrees. You should
                        definitely visit the sleepy hamlet of Pilani to
                        understand what is going on there.
                    </p>
                    <p>
                        I'm employing my "<span className="fst-italic">skills</span>" as a software
                        engineer while being employed by
                        <a className="link-offset-2 link-underline link-underline-opacity-0 fw-light" href="https://toplyne.io/">
                            <span> Toplyne Labs PTE Ltd</span>
                        </a><span className="fw-lighter">, Bangalore, India</span>. I have been here since July '21.
                    </p>
                    <p>
                        Before Toplyne, I spent 11 months from September '20 to July '21 at
                        <a className="link-offset-2 link-underline link-underline-opacity-0 fw-light" href="https://dunzo.com">
                        <span> Dunzo</span>
                        </a>, <span className="fw-lighter">Bangalore, India</span>.
                    </p>
                    <p>
                        I started my career in July'17 at
                        <a className="link-offset-2 link-underline link-underline-opacity-0 fw-light" href="https://deshawindia.com">
                            <span> D. E. Shaw India Pvt. Ltd.</span>
                        </a>, <span className="fw-lighter">Hyderabad, India</span>. I was here till September '20 for 3 years.
                    </p>
                    <p>
                        My professional career has spanned {differenceInYearsAndMonths(new Date('July, 2017'), Date.now())}
                        years where I have gotten to work on
                        multiple business verticals, products & tech stacks.
                    </p>
                    <p>
                        Each & every career switch has literally been a life changing experience for me &
                        I am <span style={{"color": "var(--bs-gray-600)"}}>grateful</span>. I would love
                        to talk about everything I have a perspective & everything
                        else I have an opinion on & everything else as well. :-).
                    </p>
                    <p>
                        Happy browsing!
                    </p>
                </content>
            </div>
        </div>
    );
}
export default About;