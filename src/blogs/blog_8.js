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
        </>
    );
}
