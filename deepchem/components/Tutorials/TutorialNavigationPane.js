import { useState, useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { formControlLabelClasses } from "@mui/material";

export default function TutorialNavigationPane({ headings }) {
  console.log("headings", headings);
  const [expanded, setExpanded] = useState({});
  const [activeSubheading, setActiveSubheading] = useState("");
  const [headingInViewport, setHeadingInViewport] = useState([]);
  const [flattenedHeadings, setFlattenedHeadings] = useState([]);

  useEffect(() => {
    let _flattenedHeadings = [];
    headings.levelOne.forEach((heading, i) => {
      _flattenedHeadings.push(heading);
      headings.levelTwo[i].forEach((subheading) => {
        _flattenedHeadings.push(subheading);
      });
      setFlattenedHeadings(_flattenedHeadings);
    });
    console.log(flattenedHeadings);

    let expanded = {};

    Object.keys(headings.levelOne).forEach((heading) => {
      expanded[heading.title] = false;
    });
    setExpanded(expanded);

    let options = {
      root: document.querySelector(null),
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);

    let _headings = document.querySelectorAll("h1, h2");
    _headings.forEach((heading) => {
      observer.observe(heading);
    });
  }, []);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      let headingIndex = -1;
      console.log(entry);
      for (let i = 0; i < flattenedHeadings.length; i++) {
        if (flattenedHeadings[i].id === entry.target.id) {
          headingIndex = i;
          break;
        }
      }

      if (headingIndex === -1) return;

      setHeadingInViewport((prev) => {
        prev[headingIndex] = entry.isIntersecting;
        return prev;
      });

      for (let i = 0; i < headingInViewport.length; i++) {
        if (headingInViewport[i]) {
          setActiveSubheading(flattenedHeadings[i].id);
          break;
        }
      }
    });

    console.log(headingInViewport);
  };

  function expandSection(e) {
    setExpanded({
      ...expanded,
      [e.target.innerText]: !expanded[e.target.innerText],
    });
  }

  useEffect(() => {
    for (let i = 0; i < flattenedHeadings.length; i++) {
      if (flattenedHeadings[i].id === activeSubheading) {
        document
          .getElementsByClassName(flattenedHeadings[i].id)[0]
          .classList.add("text-dc-orange");
      } else {
        document
          .getElementsByClassName(flattenedHeadings[i].id)[0]
          .classList.remove("text-dc-orange");
      }
    }
  }, [activeSubheading]);

  return (
    <>
      <h1>{activeSubheading}</h1>
      {headings.levelOne.map(({ title, id }, levelOneHeadingIndex) => {
        return (
          <div className="w-full flex flex-col items-end " on>
            <div className={"flex flex-row" + ` ${id}`} onClick={expandSection}>
              <i class="fa-solid fa-caret-down"></i>
              <p className="text-right ">{title}</p>
            </div>

            <div
              className={
                (!expanded[title] ? "hidden " : "") + "flex flex-col items-end"
              }
            >
              {headings.levelTwo[levelOneHeadingIndex].map((subHeading) => {
                return (
                  <Link
                    href={`#${subHeading.id}`}
                    className={` ${subHeading.id}`}
                  >
                    {subHeading.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
