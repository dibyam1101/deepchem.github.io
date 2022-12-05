import Image from "next/image";
import Link from "next/link";

import deepchemPytorch from "../../public/icons/deepchem-pytorch.png";
import deepchemKeras from "../../public/icons/deepchem-keras.png";
import deepchemClassifier from "../../public/icons/deepchem-classifier.png";
import deepchemRegressor from "../../public/icons/deepchem-regressor.png";

function parseName(name) {
    // name = name.replace(/Model$/i, '');
    name = name.replaceAll(/([A-Z]+)/g, ' $1');
    name = name.replace(/([^ ])(Model)/, '$1 Model')
    name = name.replace(/([^ ])(Classifier)/, '$1 Classifier')
    return name;
}

export default function ModelCard({ model }) {
    const TRUNC_LENGTH = 50;

    let featurizers = model.featurizers.length ? model.featurizers.join(', ') : "N/A";

    return (
        <>
            <Link href={model.url} target="_blank">
                <div className="flex flex-col gap-4 py-4 px-5 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg model-card">
                    <div className="flex flex-row justify-between w-full gap-8 items-start">
                        <p className="text-xl font-semibold tracking-wider text-dc-orange">{parseName(model.name)}</p>
                        <div className="flex flex-row items-center bg-dc-light-blue/5 px-2 py-1 rounded-md">
                            <p className="font-medium text-sm font-[#252422]">
                                {model.category}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between flex-row">
                        <div className="flex flex-col gap-0.5">
                            {model.backends.map((backend) => (
                                <div className="flex flex-row justify-center items-center gap-2.5 w-fit">
                                    {backend == "PyTorch" && <Image src={deepchemPytorch} alt="PyTorch" width={16} />}
                                    {backend == "Keras" && <Image src={deepchemKeras} alt="Keras" width={16} />}
                                    <div className="text-base font-semibold text-[#3A6EA5]">
                                        {backend}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {<div className="flex flex-col gap-0.5">
                            {model.types.map((type) => (
                                <div className="flex flex-row items-center px-3 gap-2.5 border-box bg-[rgba(235, 235, 235, 0.2)] border-l-4 border-solid border-[#C0C0C0]">
                                    {type == "Classifier" && <Image src={deepchemClassifier} alt="" width={16} />}
                                    {type == "Regressor" && <Image src={deepchemRegressor} alt="" width={16} />}
                                    <div className="text-base font-medium text-[#252422]">
                                        {type}
                                    </div>
                                </div>
                            ))}
                        </div>}
                    </div>
                    {/* model.featurizers.length != 0 && */ <div className="text-base font-medium text-[#3A6EA5]">
                        <p>Acceptable Featurizers</p>
                        <p className="text-[0.75rem] leading-[1rem] text-dc-gray/60 font-bold break-all">
                            {featurizers}
                            {/* {featurizers.length > TRUNC_LENGTH ? featurizers.substring(0, TRUNC_LENGTH) + "..." : featurizers} */}
                        </p>
                    </div>}
                </div>
            </Link>
        </>
    );
}
