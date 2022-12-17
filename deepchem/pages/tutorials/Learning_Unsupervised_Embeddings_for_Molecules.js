
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/Learning_Unsupervised_Embeddings_for_Molecules.js";
                    import {useEffect} from "react";
                    import scrollnav from "scrollnav";

                    const Learning_Unsupervised_Embeddings_for_Molecules = () => {

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

                    Learning_Unsupervised_Embeddings_for_Molecules.Layout = TutorialLayout;

                    export default Learning_Unsupervised_Embeddings_for_Molecules;
                