import React from 'react';
import {MyDate} from "../dates/util";
import {PinkEM, MonoText} from "../formats/text";

export const name = "How to do LLMs for dummys";
export const created_on = new MyDate(2025, 5, 31);
export const mod = () => {
    return (
        <>
            <p>
            I am finally figuring out how to use LLMs for my case. For starters, I am selecting a design problem statement to prototype using LLMs.
            </p>
            <p>
            I am going to parse Annual Reports of companies and index them. Idea is to send in general queries and understand which companies do what.
            </p>
            <p>
            For example, I want to figure out companies that are well positioned to take advantage of electronics component manufacturing in India.
            I will send in a query like <span className='rainbow'>"Which companies are well positioned to take advantage of electronics component manufacturing in India?"</span> and the LLM should return a list of companies that have mentioned this in their annual reports.
            🤑💰🤑
            </p>
            <p>
                At this point of time, I am aware of the following keywords:
                <ul>
                    <li><PinkEM>LLM</PinkEM> - <span>Large Language Model</span></li>
                    <li><PinkEM>Embedding</PinkEM> - <span>A way to represent text in a vector space</span></li>
                    <li><PinkEM>Vector Database</PinkEM> - <span>A database that stores vectors</span></li>
                    <li><PinkEM>Retrieval Augmented Generation (RAG)</PinkEM> - <span>A way to use LLMs to generate text based on a retrieval system</span></li>
                    <li><PinkEM>Prompt Engineering</PinkEM> - <span>A way to design prompts for LLMs to get the desired output</span></li>
                </ul>
            </p>
            <p>
                My first step is to fetch a PDF of the annual report of a company and convert it to text. I will use <MonoText>PyMuPDF</MonoText> to
                extract text from the PDF. This extraction is not perfect, but for starters, I don't want to get distracted by the quality of the text extraction.
                <br/>
                For my embedding, I am using <MonoText>Alibaba-NLP/gte-Qwen2-7B-instruct</MonoText> model. I am running it on a <MonoText>g6e.xlarge</MonoText> EC2 
                instance on AWS using <MonoText>vllm</MonoText>. My application is using the <MonoText>OpenAPI</MonoText> client to interact with the model.
            </p>
            <p>
                I am using the <MonoText>chromadb</MonoText> vector database to store the embeddings.
            </p>
            <p>
                I'll keep you posted on my progress. I am eager to see how this works out as well.
            </p>
        </>
    );
}
