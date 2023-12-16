import React from 'react';
import {MyDate} from "../dates/util";

export const name = "How & Why to host your own website";
export const created_on = new MyDate(2023, 12, 16);

export const mod = () => {
    return (
        <>
            <p>
                I had written this website long time back as an effort to learn React.
                I had hosted it on Github pages initially. I later purchased a domain
                name & hosted this page on Digital Ocean. I maintained it on-and-off
                but the experience was not very smooth. I had to manually build the
                website & upload it to the server. I used to do this using a ssh into
                the VM & then SCP & stuff. When I switched to a new laptop, I misplaced
                the ssh keys & was not able to login to the server. And this happened
                thrice. For the first two times, I was able to recover the keys from
                by resetting digital ocean droplet. But the third time, I just didn't
                have the patience to do it again. And boom, the website was down forever.
            </p>
            <p>
                I recently learnt about using S3 to host static websites & the entire
                shazam of using Route53 to point to a cloudfront distribution which in
                turn points to an S3 bucket. I was able to setup this website in a
                matter of minutes.
            </p>
            <p>
                <span className="fst-italic">Voila!</span> I wrote a full blown
                terraform deployment to build & deploy this site. I also used the
                opportunity to redesign the website a bit & make it even more
                minimalistic.
            </p>
            <p>
                I am planning to write a detailed post on how to do this. I will also
                write about how to setup a CI/CD pipeline to automate the build & deploy
                process. The entire process of adding more pages to the website has also
                been improved now, so pages & routes are deployed automatically now.
            </p>

            <h6 className="fw-bold">Why host your own website?</h6>
            <p>
                Cuz it's fun! And it's not that hard. I have been using AWS for a while
                now & I have been using terraform for a while now. But my experience
                had been primarily third hand. I need to increase my level of exposure
                & I respect the fact that hosting & building websites is generally a very
                good starting point for learning new technologies. YMMV.
            </p>
            <p>
                Based on my past experience at maintaining & building websites, I have also
                come to appreciate the significance of CI/CD pipelines. My previous
                pipeline was super complex. My current pipeline is relatively simpler.
                It's still not perfect, but 99.999% better than what I had before. Chasing
                the perfect pipeline is a never ending task. But so is life.
            </p>
            <p>
                Today this page is being written in a ChatGPT era, so the github copilot
                is helping me write this page. So writing long form content is not that
                hard anymore. I feel I have put in enough effort to overcome the writer's
                block. So I expect myself to write more often now. :)
            </p>
        </>
    );
}
