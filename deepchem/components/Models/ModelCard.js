import Image from "next/image";

import deepchemPytorch from "../../public/icons/deepchem-pytorch.png";
import deepchemKeras from "../../public/icons/deepchem-keras.png";
import deepchemClassifier from "../../public/icons/deepchem-classifier.png";
import deepchemRegressor from "../../public/icons/deepchem-regressor.png";

export default function ModelCard({ name, category, backend, types, content, featurizers}) {
    return (
        <div className="flex flex-col items-start py-4 px-5 gap-4 bg-[#FFFFFF] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg">
            <div className="flex flex-row justify-between items-center gap-2.5">
                <div className="flex flex-row items-center gap-8">
                    <p className="text-3xl font-semibold tracking-widest text-[#FF6700]">
                        {name}
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center py-1.5 px-3 gap-2.5 bg-[rgba(235, 235, 235, 0.15)] rounded-md">
                    <p className="font-medium text-sm font-[#252422]">
                        {category}
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2.5">
                <Image src={deepchemPytorch} alt="PyTorch Logo" width={16} />
                <p className="text-[20px] font-semibold text-[#3A6EA5]">
                    {backend}
                </p>
            </div>
            <div className="flex flex-row items-start gap-4">
                <div className="flex flex-row justify-center items-start gap-4">
                    <div className="flex flex-row items-start py-1.5 px-3 gap-2.5 border-box bg-[rgba(235, 235, 235, 0.2)] border-l-4 border-solid border-[#C0C0C0]">
                        <Image src={deepchemClassifier} alt="PyTorch Logo" width={16} />
                        <p className="text-sm text-[#252422]">
                            {types}
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-lg font-[#252422]">
                {content}
            </p>
            <p className="text-base">
                Acceptable Featurizers
                <br />
                {featurizers}
            </p>
        </div>
    );
}
