import React from "react";
import Image from "next/image";

import ModelCard from "../components/Models/ModelCard";

import deepchemPytorch from "../public/icons/deepchem-pytorch.png";
import deepchemKeras from "../public/icons/deepchem-keras.png";
import deepchemClassifier from "../public/icons/deepchem-classifier.png";
import deepchemRegressor from "../public/icons/deepchem-regressor.png";

export default function Models() {
    return (
        <>
            <div className="flex flex-col items-start px-72 py-16 gap-12 self-stretch">
                {/* Header */}
                <div className="flex flex-row items-start py-2.5">
                    <p className="text-4xl">
                        Our Models
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-row items-start gap-12 self-stretch">
                    {/* Filter Selection */}
                    <div className="flex flex-col items-start box-border border-r border-solid border-[#1E1E1E] gap-5">
                        {/* Backend */}
                        <div className="flex flex-col items-start gap-2.5 self-stretch">
                            <p className="text-lg text-[#3A6EA5]">
                                Backend
                            </p>
                            <div className="flex flex-row items-start gap-2.5">
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <Image src={deepchemPytorch} alt="PyTorch Logo" width={16} />
                                    <p className="text-base text-[#252422]">
                                        PyTorch
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <Image src={deepchemKeras} alt="Keras Logo" width={16} />
                                    <p className="text-base text-[#252422]">
                                        Keras
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Type */}
                        <div className="flex flex-col items-start gap-2.5 self-stretch">
                            <p className="text-lg text-[#3A6EA5]">
                                Type
                            </p>
                            <div className="flex flex-row items-start gap-2.5">
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <Image src={deepchemClassifier} alt="PyTorch Logo" width={16} />
                                    <p className="text-base text-[#252422]">
                                        Classifier
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <Image src={deepchemRegressor} alt="Keras Logo" width={16} />
                                    <p className="text-base text-[#252422]">
                                        Regressor
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Featurizers */}
                        <div className="flex flex-col items-start gap-2.5 order-0 self-stretch">
                            <p className="text-lg text-[#3A6EA5]">
                                Featurizers
                            </p>
                            <div className="flex flex-row items-start gap-2.5">
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <p className="text-base text-[#252422]">
                                        CircularFingerPrint
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <p className="text-base text-[#252422]">
                                        RDKitDescriptors
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2.5 py-1.5 px-3 box-border bg-[#FFFFFF] border border-solid border-[#C0C0C0] rounded-md">
                                    <p className="text-base text-[#252422]">
                                        ElementPropertyFingerPrint
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-col items-start gap-12">
                        <div className="flex flex-row items-start gap-12">
                            <ModelCard name={"Name"} category={"Category"} backend={"Backend"} types={"type1"} 
                            content={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."} 
                            featurizers={"CircularFingerprint, RDKitDescriptors, CoulombMatrixEig, RdkitGridFeaturizer, BindingPocketFeaturizer, ElementPropertyFingerprint"} />
                            <ModelCard name={"Name"} category={"Category"} backend={"Backend"} types={"type1"} 
                            content={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."} 
                            featurizers={"CircularFingerprint, RDKitDescriptors, CoulombMatrixEig, RdkitGridFeaturizer, BindingPocketFeaturizer, ElementPropertyFingerprint"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}