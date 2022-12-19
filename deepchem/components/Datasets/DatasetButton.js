import Link from "next/link";
import { useRouter } from "next/router";

export default function DatasetButton({ dataset, currDataset }) {
    const router = useRouter();

    return (
        <>
            <div className={`mx-0 py-1 lg:my-1 border-b-[1px] lg:border-0 cursor-pointer font-poppins hover:bg-dc-light-gray/30 lg:border-l-8 ${currDataset === dataset ? "border-dc-blue" : "border-dc-light-gray"} px-2 py-1`}
            onClick={() => {
                router.push(`/datasets#${dataset}`);
            }}
            >
                <p className={`text-[14px] text-dc-${currDataset === dataset ? "blue font-bold" : "gray"}`}>{dataset}</p>
            </div>
        </>

    );
}
