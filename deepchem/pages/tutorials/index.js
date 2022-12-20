import tutorials from "../../data/tutorials/tutorials";
import {useRouter} from "next/router";
import {useEffect} from "react"

export default function Tutorials() {
    const router = useRouter();

    const firstTutorial = tutorials[0];

    useEffect(() => {
        router.replace(`tutorials/${firstTutorial.urlifiedFileName}`)
    });
    return <></>;

}
