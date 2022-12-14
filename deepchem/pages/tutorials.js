import TutorialLink from "./../components/Tutorials/TutorialLink";
import {useEffect, useState} from "react";

import tutorials from "../data/tutorials/tutorials";

import scrollnav from "scrollnav";

import Script from "next/script";

export default function Tutorials() {
    const [currentTutorialIndex, setCurrentTutorialIndex] = useState(1);

    useEffect(() => {
        document.getElementsByClassName('scroll-nav')[0]?.remove();
        const content = document.querySelector(".notebook");
        const navpane = document.querySelector(".notebook");
        scrollnav.init(content, {
            sections: "h1, h2",
            insertTarget: navpane,
            insertLocation: "after",
        });

        MathJax?.Hub?.Queue(["Typeset", MathJax.Hub]);
    }, [currentTutorialIndex]);

    useEffect(() => {
            document.addEventListener("scroll", event => {
                var doc = document.documentElement;
                var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);


                let multiplier = 1;
                var x = window.matchMedia("(resolution: 1.25dppx)")
                if (x.matches)
                    multiplier = 1.25;

                if (document.querySelector("nav.scroll-nav")) {
                    document.querySelector("nav.scroll-nav").style.margin = `${Math.ceil(top) * multiplier}px 0 0 0`
                }
            });

        }
        , []);
    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"/>
            <Script>
                {`MathJax = {
                    TeX: {
                        equationNumbers: {
                            autoNumber: "AMS",
                            useLabelIds: true
                        }
                    },
                    tex2jax: {
                        inlineMath: [['$', '$']],
                        displayMath: [['$$', '$$']],
                        processEscapes: true,
                        processEnvironments: true
                    },
                    displayAlign: 'center',
                    CommonHTML: {
                        linebreaks: {
                            automatic: true
                        }
                    }
                }`}
            </Script>

            <h1 className="text-3xl tutorials px-[25px] 2xl:px-[300px] mt-16 font-semibold">Tutorials</h1>
            <div
                className="tutorials flex flex-row px-[25px] 2xl:px-[300px] items-start p-8 overflow-x-auto gap-4 lg:gap-8">
                <div className="basis-1/6 shrink-0">
                    {
                        tutorials.map((tutorial, i) => {
                            return <TutorialLink key={i} title={tutorial.title.slice(0, tutorial.title.length - 1)}
                                                 active={i === currentTutorialIndex} onClick={setCurrentTutorialIndex}
                                                 index={i}/>
                        })
                    }
                </div>
                <div
                    className="basis-4/6 notebook flex-1 overflow-auto  bg-dc-light-gray/10 "

                    dangerouslySetInnerHTML={{
                        __html: `${tutorials[currentTutorialIndex].html}`,
                    }}
                ></div>

            </div>
        </>
    );
}
