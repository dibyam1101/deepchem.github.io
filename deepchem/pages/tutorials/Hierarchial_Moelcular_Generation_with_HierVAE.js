
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/Hierarchial_Moelcular_Generation_with_HierVAE.js";
                    import {useEffect} from "react";
                    import scrollnav from "scrollnav";

                    const Hierarchial_Moelcular_Generation_with_HierVAE = () => {

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

                    Hierarchial_Moelcular_Generation_with_HierVAE.Layout = TutorialLayout;

                    export default Hierarchial_Moelcular_Generation_with_HierVAE;
                