import React from 'react';
import {MyDate} from "../dates/util";

export const name = "Karpathy zero-to-hero";
export const created_on = new MyDate(2025, 11, 22);

export const mod = () => {
    return <>
        <p>
            I finally got around to watching the neural nets video by Karpathy & all I can say is that I get it.
            Yep! I do. I
            totally & absolutely get it.
        </p>
        <p>
            The biggest takeaway is learning how to learn. I have watched Kaggle's intro to DS a bunch of times. I still
            remember them giving intro to python/pandas & then some model that shows the iris dataset. I could never
            go beyond this.
            <br/>
            Then I thought I'll read a few ML books. I tried to read the deeplearning books & a bunch of Algebra books
            to refresh all the theory on matrices, on vectors, on span, on transforms, on transposes and, what not.
            <br />
            Then continuous theorems, lemmas & proofs.
        </p>
        <p>
            All I could say that it was overwhelming. More so because, my day-to-day job didn't involve data science. It
            was oriented towards myriad software engineering tasks. So after 2-3 days of effort, I would naturally drop
            off. Even worst, I would end up in random rabbit holes. e.g., I once ended up watching some 3-4 hours worth
            of maths videos on some theorems by Euler and I ended up losing track on data science. I probably picked up
            wrong courses to follow, I agree.
        </p>
        <p>
            That's where Andrej Karpathy's series is a kicker. The guy has spent hours creating a video on creating a
            neural net from scratch. His only pre-requisite, as clearly spelt out in the video itself; is to know quite
            basic Python & Calculus. Believe me, he doesn't break this assumption at all. His 2.5 hour video is
            completely self-sufficient. No gimmicks. It took me 3-4 hours to watch it as I followed along with all the
            code. I typed everything alongwith him. 0 copy-paste. I really liked the way he builds up the concept of
            back propagation & then the MLP architecture. I have never ever ever worked on Neural Nets. I never
            understood neural nets beyond the fact that there are weights, inputs & then some hidden layers. The dude
            just unravels everything & exposes what underlies the seeming complexity of these systems.
        </p>
        <p>
            Once I could understand his video, I spent my next hour understanding & iterating through his demo notebook
            to walk myself through his scatter-plot based binary classification problem solution. In that solution, I
            could further understand & appreciate the science underlying data science & how does the complexity of
            defining loss functions & accuracy parameters creeps in.
            <br/>
            Now I don't know how good or bad is this, but today I definitely feel better about my skillset in data
            science today than last week 😉.
        </p>
    </>
}
