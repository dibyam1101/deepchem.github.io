
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/Training_a_Generative_Adversarial_Network_on_MNIST.js";
                    import {useEffect} from "react";
                    import scrollnav from "scrollnav";

                    const Training_a_Generative_Adversarial_Network_on_MNIST = () => {

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

                    Training_a_Generative_Adversarial_Network_on_MNIST.Layout = TutorialLayout;

                    export default Training_a_Generative_Adversarial_Network_on_MNIST;
                