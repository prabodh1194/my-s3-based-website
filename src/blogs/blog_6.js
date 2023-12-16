import React from 'react';
import {MyDate} from "../dates/util";

export const name = "Return of the Blog";
export const created_on = new MyDate(2020, 9, 17);

export const mod = () => {
    return (
        <div className="row">
            <h1 className="align left">{name}</h1>
            <content className="align left">
                <p>
                    So it is back to work after a long time. There is a
                    solid excuse for why I couldn't put in anything. And
                    yes, COVID-19 is 10 take a 1000% blame.<br/>
                    I generally, travel to my hometown over vacations, but
                    never carry my laptop. Since, my firm's systems can be
                    remotely accessed using remote desktop, one laptop is
                    as good as the other for working. Plus, my team is good
                    enough to never bother me during vacations. So, if ever
                    need arises, I can just use the laptop at my home in
                    Meerut, to do some office stuff. Although, Hyd had a
                    corona scare during March, I didn't think any lockdown
                    or extended WFH situations would come to fruition. So,
                    I happily travelled to Meerut for Holi, and lo and
                    behold, our firm went into an extended WFH. This left
                    me with my college laptop and I lost access to my work
                    laptop. For some reason, I haven't hosted this site on
                    github, so losing access to the laptop, means losing
                    access to the blog.
                </p>
                <p>
                    <em>Oll korrect.</em> There is another update. I am no
                    longer employed at D. E. Shaw India Pvt. Ltd. I
                    couldn't convince myself to stay any longer. Shaw was a
                    nice place to be in, but, meh. Around every half yearly
                    performance review, I take note of how did I grow, what
                    did I learn, and what does the future hold for me.
                    During, this year's PAS, things just didn't work out.
                    Nothing stood out for me in the learning section. Plus,
                    the extended WFH at Shaw was not compatible for me.
                    Working over remote desktop is not a smooth experience.
                    And I am anything but a patient soul. There were days
                    when slowness over RDP would just throw me off and I
                    would chill for rest of the day. I raised this issue
                    with my team and we believed that a better WFH policy
                    is being drafted. I thought that they'll move to
                    replacing RDP with work on laptop, but that didn't
                    happen. So yeah, the WFH at Shaw didn't work well for
                    me. For some time I thought, I'll wait it out, but
                    COVID uncertainty is a thing now. I didn't want to lose
                    an year of productivity.
                </p>
                <p>
                    I ended up scrolling through recruiter messaged on my
                    Linkedin and the message from a recruiter for Dunzo
                    stood out. And I applied and was placed within 2 weeks
                    of application. Yes! It happened that fast. Man they
                    are efficient.
                </p>
                <p>
                    Looking back, had it not been for COVID, I would have
                    preferred a job switch, if ever, in Hyderabad itself.
                    Prospects of shifting to a city are a bit dampening,
                    but, I see myself in Meerut for a good amount of time
                    thanks to WFH, so I don't mind working for a Bangalore
                    based company.
                </p>
                <p>
                    I am two weeks into Dunzo now and I hope this is just
                    the beginning of a great journey.
                </p>
            </content>
        </div>
    );
}