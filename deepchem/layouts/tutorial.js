import Script from "next/script";
import TutorialLink from "../components/Tutorials/TutorialLink";
import {useEffect, useState} from 'react';

import tutorials from "../data/tutorials/tutorials"

import {useRouter} from "next/router";



const TutorialLayout = ({children}) => {

    const [currentTutorialIndex, setCurrentTutorialIndex] = useState(1);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const router = useRouter();

    function toggleNavbar(){
        setIsNavbarOpen((prev) => !prev);
    }

    useEffect(() => {
        if (!router.isReady) return;
        const url = router.pathname;
        const tutorialName = url.split('\/')[2];
        let tutorialIndex = tutorials.findIndex((element) => element.fileName.includes(tutorialName))
        setCurrentTutorialIndex(tutorialIndex)
    }, [router.isReady]);

    useEffect(() => {


        // Runs after the component unmounts
        // return () => {
        //     scrollnav?.destroy();
        // }
    }, []);


    return <>
        <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"/>
        <Script id="mathjax-setup-script">
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

        <div className = "text-3xl px-[25px] 2xl:px-[300px] mt-8 font-semibold flex flex-row items-center gap-8">
            <h1 className="">Tutorials</h1>
        </div>
        <i className={`fa-solid ${isNavbarOpen ? "fa-xmark" : "fa-bars"} md:hidden cursor-pointer text-3xl px-[25px] 2xl:px-[300px] mt-8 font-semibold  gap-8`} onClick={toggleNavbar}></i>

        <div
            className="tutorials flex flex-row px-[25px] 2xl:px-[300px] items-start overflow-x-scroll gap-4 lg:gap-8 font-poppins">
            <div className={`overflow-x-scroll notebook-menu ${isNavbarOpen ? "" : "hidden"} md:block`}>
                {tutorials.map((tutorial, i) => {
                    return <TutorialLink key={i} title={tutorial.title.slice(0, tutorial.title.length - 1)}
                                         active={i === currentTutorialIndex} onClick={setCurrentTutorialIndex}
                                         index={i} fileName={tutorial.fileName.slice(0, -5)}/>
                })}
            </div>

            <div className={`${isNavbarOpen ? "hidden" : ""} notebook  overflow-x-scroll bg-dc-light-gray/10`}>
                {children}
            </div>

        </div>


    </>
}

export default TutorialLayout;