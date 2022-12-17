
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/Large_Scale_Chemical_Screens.js";
                    import {useEffect} from "react";
                    import scrollnav from "scrollnav";

                    const Large_Scale_Chemical_Screens = () => {

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

                    Large_Scale_Chemical_Screens.Layout = TutorialLayout;

                    export default Large_Scale_Chemical_Screens;
                