import Image from "next/image";
import Link from "next/link";

import deepchemPytorch from "../../public/icons/deepchem-pytorch.png";
import deepchemKeras from "../../public/icons/deepchem-keras.png";
import deepchemClassifier from "../../public/icons/deepchem-classifier.png";
import deepchemRegressor from "../../public/icons/deepchem-regressor.png";

export default function ModelCard({ model }) {
    return (
        <>
            <Link href={model.url}>
                <div className="flex flex-col items-start py-4 px-5 gap-4 bg-[#FFFFFF] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg w-80">
                    <div className="flex flex-row justify-between items-center gap-2.5">
                        <div className="text-base font-semibold tracking-wider text-[#FF6700]">
                            {model.name}
                        </div>
                    </div>
                    <div className="flex flex-row items-center bg-[rgba(235, 235, 235, 0.15)] rounded-md">
                        <div className="font-medium text-sm font-[#252422]">
                            {model.category}
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2.5">
                        {model.backends.map((backend) => (
                            <>
                                <Image src={deepchemPytorch} alt="PyTorch Logo" width={16} />
                                <div className="text-base font-semibold text-[#3A6EA5]">
                                    {backend}
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="flex flex-row items-start gap-4">
                        <div className="flex flex-row justify-center items-start gap-4">
                            {model.types.map((type) => (
                                <div className="flex flex-row items-start py-1.5 px-3 gap-2.5 border-box bg-[rgba(235, 235, 235, 0.2)] border-l-4 border-solid border-[#C0C0C0]">
                                    <Image src={deepchemClassifier} alt="PyTorch Logo" width={16} />
                                    <div className="text-sm text-[#252422]">
                                        {type}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-base text-[#252422]">
                        Something about the model here
                    </div>
                    <div className="flex flex-row text-base font-medium text-[#3A6EA5] flex-wrap">
                        Acceptable Featurizers
                        <br />
                        {model.featurizers.map((featurizer) => (
                            <div className="text-sm text-[#4d4d4a]">
                                {featurizer}, 
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </>
    );
}
