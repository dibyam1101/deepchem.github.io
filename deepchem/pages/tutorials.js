import TutorialLink from "./../components/Tutorials/TutorialLink";
import Head from "next/head";
import { useEffect, useState } from "react";

import tutorials from "../data/tutorials/tutorials";
import TutorialNavigationPane from "./../components/Tutorials/TutorialNavigationPane";

import scrollnav from "scrollnav";

export default function Tutorials() {
  const [currentTutorialIndex, setCurrentTutorialIndex] = useState(1);

  useEffect(() => {
    (function () {
     

      var head = document.getElementsByTagName("head")[0],
        script;
      script = document.createElement("script");
      script.type = "text/x-mathjax-config";
      script[window.opera ? "innerHTML" : "text"] = `MathJax.Hub.Config({
          TeX: {
              equationNumbers: {
              autoNumber: "AMS",
              useLabelIds: true
              }
          },
          tex2jax: {
              inlineMath: [ ['$','$']],
              displayMath: [ ['$$','$$']],
              processEscapes: true,
              processEnvironments: true
          },
          displayAlign: 'center',
          CommonHTML: {
              linebreaks: {
              automatic: true
              }
          }
      });`;
      head.appendChild(script);
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe";
      head.appendChild(script);

      script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js";

      head.appendChild(script);
    })();
  }, []);

  useEffect(() => {
    document.getElementsByClassName('scroll-nav')[0]?.remove();
    const content = document.querySelector(".notebook");
    const navpane = document.querySelector(".notebook");
    scrollnav.init(content, {
      sections: "h1, h2",
      insertTarget: navpane,
      insertLocation: "after",
    }); 
    document.getElementsByClassName('scroll-nav')[0].classList.add('basis-1/5');
    document.getElementsByClassName('scroll-nav')[0].classList.add('text-right');
    document.getElementsByClassName('scroll-nav')[0].classList.add('text-right');
    


    scrollnav.updatePositions();


  }, [currentTutorialIndex]);

  useEffect(() => {
    console.log("Here");
    document.addEventListener("scroll", event => {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      console.log(top);

      
      
      let multiplier = 1;
      var x = window.matchMedia("(resolution: 1.25dppx)")
     if(x.matches)
        multiplier = 1.25;

      document.querySelector("nav.scroll-nav").style.margin = `${Math.ceil(top) * multiplier}px 0 0 0`;
    });
      
    }
    , []);
  return (
    <>
    <h1 className = "text-3xl tutorials px-[25px] 2xl:px-[300px] mt-16 font-semibold">Tutorials</h1>
      <div className="tutorials flex flex-row px-[25px] 2xl:px-[300px] items-start p-8 overflow-x-auto gap-4 lg:gap-8">
        <div className="basis-1/5 flex-none">
         {
          tutorials.map((tutorial, i) => {
              return <TutorialLink key={i} title = {tutorial.title} active = {i === currentTutorialIndex} onClick = {setCurrentTutorialIndex} index = {i}/>
          })
         }
        </div>
        <div
          className="basis-3/5 notebook  shrink  flex-1 overflow-auto  bg-dc-light-gray/10 "
          
          dangerouslySetInnerHTML={{
            __html: `${tutorials[currentTutorialIndex].html}`,
          }}
        ></div>
       
      </div>
    </>
  );
}
