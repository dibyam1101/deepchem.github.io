import Link from "next/link";
import {useRouter} from "next/router";

export default function TutorialLink({title, active, onClick, index, fileName}) {

    const router = useRouter();

    function handleClick(tutorialPagePath, index) {
        router.replace(`/tutorials/${tutorialPagePath}`);
        setCurrentTutorialIndex(index);
    }

    function setCurrentTutorialIndex(newIndex) {
        onClick(index);
    }

    return (

        <div
            className={`mx-0 py-1 lg:my-1 border-b-[1px] lg:border-0 cursor-pointer font-poppins hover:bg-dc-light-gray/30 lg:border-l-8 ${active ? "border-dc-blue" : "border-dc-light-gray"} px-2 py-1`}
            onClick={() => {
                handleClick(fileName, index);
            }}
        >
            <p className={`text-dc-${active ? "blue font-bold" : "gray"}`}>{title}</p>
        </div>

    );
}
