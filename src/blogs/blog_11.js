import React from 'react';
import {MyDate} from "../dates/util";
import { MonoText, PinkEM } from '../formats/text';

export const name = "How to do LLMs while still being a dummy";
export const created_on = new MyDate(2025, 6, 9);

export const mod = () => {
    return (
        <>
            <p>
                I spent tha past two weekends trying to figure out how to create a knowledge base from Annual Reports of companies using LLMs.
                I am using documents from one of an Indian company for designing the system. I could parse the document using <MonoText>docling</MonoText> to
                convert the PDF to text. Then I used the <MonoText>Alibaba-NLP/gte-Qwen2-7B-instruct</MonoText> model to create embeddings for the text. Saving
                the embeddings in a vector database like <MonoText>chromadb</MonoText> was a breeze.
            </p>
            <p>
                Then I went down the rabbit hole of hosting an LLM. I started with the <MonoText>deepseek qwen distilled model - 8B params</MonoText>. I learnt
                quite a bit about limitations of the <MonoText>g6e.xlarge</MonoText> in hosting LLMs. Further, I learnt that context lengths are a bitch. But in
                the meantime, I also figured out that my embeddings are actually inaccurate 😅. So I am back to the drawing board.
            </p>
            <p>
                Simplest thing is e.g., <PinkEM>Show me corporate information of this company</PinkEM>. Now, there is a page in the document that clearly lists the
                information. But, my embedding doesn't bring up that page even in the top-5 results. So it seems I need to figure out how to be creative while creating
                embeddings on this document.
            </p>
            <p>
                Till now this is what I have done for embedding.
                <ol>
                    <li>Parse the document</li>
                    <li>Chunk the text 4k tokens at a time with 512 overlap</li>
                    <li>Preserve the page numbers as metadata in vector DB</li>
                </ol>

                Looks like this is too simplistic to make things work. I need to add some more metadata to the embeddings. This actually makes sense. Because, the theory
                of vector databases is that they are supposed to be used to understand the context of the text. So I need to generate context for each chunk of text & embed
                that as well. I'll be working on this over the next few days.
            </p>
            <p>
                Happy dummying! 🐶
            </p>
        </>
    );
}
