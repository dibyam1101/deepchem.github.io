
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/The_Basic_Tools_of_the_Deep_Life_Sciences.js";
                    import {useEffect} from "react";
                    import scrollnav from "scrollnav";

                    const The_Basic_Tools_of_the_Deep_Life_Sciences = () => {

                    useEffect(() => {
                            document.getElementsByClassName('scroll-nav')[0]?.remove();
                            const content = document.querySelector(".notebook");
                            const insertTarget = document.querySelector(".notebook");

                            if (insertTarget && content) {
                                scrollnav.init(content, {
                                    sections: "h1, h2", insertTarget: insertTarget, insertLocation: "after",
                                });
                            }

                            MathJax?.Hub?.Queue(["Typeset", MathJax.Hub]);
                        }, []);

                    return <div dangerouslySetInnerHTML={{
                                           __html: `${innerHTML.html} ${notebookStyles}`,
                                       }}
                                   ></div>
                                   }

                    The_Basic_Tools_of_the_Deep_Life_Sciences.Layout = TutorialLayout;

                    export default The_Basic_Tools_of_the_Deep_Life_Sciences;
                