import React from 'react';
import {MyDate} from "../dates/util";
import {MonoText, PinkEM, RedMonoText} from "../formats/text";

export const name = "Dummying for LLMs is a bit odd";
export const created_on = new MyDate(2025, 10, 5);

export const mod = () => {
    return (
        <>
            <p>
                Over the past few months, I finally got swept up in the vibe coding mania. I have used Anthropic &
                Qwen coder models with both <RedMonoText>qwen-code</RedMonoText> & <RedMonoText>Claude
                Code</RedMonoText>. In all
                this, I won't claim to have solved on my previous problem statement yet. But I ended up creating a few
                personal apps.
            </p>
            <p>
                The first one I did is called
                <a style={{color: "#ff00ff"}} href={"https://github.com/prabodh1194/simple-4d-capture.git"}> 4D
                    Planner</a>. 4D planner is based on the
                principle of <em>Do</em>, <em>Defer</em>, <em>Delegate</em>, <em>Drop</em>. This planner uses the MacOS
                reminder as DB to save my tasks. Further, it runs out of my menu bar and also supports a handy
                shortcut <RedMonoText>&lt;shift&gt;</RedMonoText> + <RedMonoText>&lt;cmd&gt;</RedMonoText> + <RedMonoText>&lt;space&gt;</RedMonoText>.
            </p>
            <p>
                I did a few more, but none of those were in the direction of doing RAGs or embeddings. However, I did
                use <RedMonoText>qwen-code</RedMonoText> to redo the colors & theming on this website. I finally
                understood the importance & intricacies of prompts & prompt engineering. In efforts of doing this
                markets analysis RAG, I actually did a recent news analysis system for BSE 100 + NSE 100 stocks.
            </p>
            <p>
                This universe is of 116 stocks & can be accessed by a new endpoint
                called <a style={{color: "#0088ff"}} href={"/se"}>/se</a> on this blog.
            </p>
            <p>
                I have done a bunch of AWS lambdas that scrape news for these companies under multiple search terms &
                then uses LLMs to generate BUY/HOLD/SELL reccos for these stocks. This code is available under the
                repo: <a style={{color: "#00ff88"}} href={"https://github.com/prabodh1194/simple-4d-capture.git"}>
                https://github.com/prabodh1194/qwen-openai-agents
            </a>
                There is still some plumbing left to be done, but it is WIP.
            </p>
            <p>
                All this done & told, I think I am still quite sometime away from doing a RAG & building solutions for
                that purpose. There is a bunch of scope to understand how should large docs be chunked while retaining
                context so that they are queryable using LLMs. However, with a
                generous <RedMonoText>qwen-code</RedMonoText> access, I think this is a bit more doable now than before.
                I am pretty sure that I'll need more time, but it is happening.
            </p>
            <p>
                In another news, I have started doing some knowledge gain in basic CUDA techniques. I have developed
                some started path for learning. I found some recorded lectures from OLCF where they have started with
                how to do matmul in kernel. Pretty cool stuff. I learnt about multiple flavors of matmul with tiling
                being a complete mind opener 🤯.
            </p>
            <p>
                The productivity unlock that I have gained with this vibe-coding mania is insane & frankly speaking
                unparallel <em>(-- ed)?</em>. I have quite a few TODOs that I want to knock-off.
                <ul>
                    <li>
                        Add switchable themes on this blog. Current style is cyber-punk. I want to add anime, matrix as
                        well as solarised themes & also want to be able to switch between those
                    </li>
                    <li>
                        There are still a few manual steps in my stocks analysis system. I want to automate that.
                    </li>
                    <li>
                        I want to create a paper index of stocks where the portfolio is adjusted based on these reccos.
                        Need to create a benchmark as well & check how well is that portfolio performing 💰.
                    </li>
                </ul>

                With these many TODOs, I believe that my task of creating a RAG is well on the back-burner 😅.
            </p>
            <p> Happy dummying! 🐶 </p>
        </>
    );
}
