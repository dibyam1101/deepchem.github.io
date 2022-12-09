import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import Image from "next/image";

import ModelCard from "/components/Models/ModelCard";
import FilterButton from "/components/Models/FilterButton";

import models from "/data/models.json";
import backendList from "/data/backends.json";
import typeList from "/data/types.json";
import featurizerList from "/data/featurizers.json";

import deepchemPyTorch from "/public/icons/deepchem-pytorch.png";
import deepchemKeras from "/public/icons/deepchem-keras.png";
import deepchemClassifier from "/public/icons/deepchem-classifier.png";
import deepchemRegressor from "/public/icons/deepchem-regressor.png";
import deepchemFilter from "/public/icons/deepchem-filter.png";
import deepchemClose from "/public/icons/deepchem-close.png";


export default function Models() {
    const [filteredModels, setFilteredModels] = useState(models);
    const [backends, setBackends] = useState([]);
    const [types, setTypes] = useState([]);
    const [featurizers, setFeaturizers] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false);

    const handleClick = (category, value) => {
        switch (category) {
            case "backends":
                (backends.includes(value)) ? setBackends(backends.filter((item) => item !== value)) : setBackends([...backends, value]);
                break;
            case "types":
                (types.includes(value)) ? setTypes(types.filter((item) => item !== value)) : setTypes([...types, value]);
                break;
            case "featurizers":
                (featurizers.includes(value)) ? setFeaturizers(featurizers.filter((item) => item !== value)) : setFeaturizers([...featurizers, value]);
                break;
            default:
                break;
        }
    }

    const handlePopUp = () => {
        setIsPopUp(!isPopUp);
    }

    useEffect(() => {
        let newmodels = [], fmodels = models;
        if (backends.length === 0 && types.length === 0 && featurizers.length === 0) {
            newmodels = models;
        } else {
            fmodels.map(fmodel => {
                let exist = 1;
                backends.map(value => {
                    if (!fmodel.backends.includes(value)) {
                        exist = 0;
                    }
                })

                types.map(value => {
                    if (!fmodel.types.includes(value)) {
                        exist = 0;
                    }
                })

                featurizers.map(value => {
                    if (!fmodel.featurizers.includes(value)) {
                        exist = 0;
                    }
                })

                if (exist == 1) {
                    newmodels.push(fmodel);
                }
            })
        }

        setFilteredModels(newmodels);
    }, [backends, types, featurizers]);

    return (
        <>
            <div className={` ${isPopUp ? "" : ""} flex flex-col items-start w-full px-[25px] 2xl:px-[300px] py-16 gap-6`}>
                {/* HEADER BEGIN */}
                <div className="flex flex-row w-[100%] items-center justify-between py-2.5">
                    <div className="lg:text-4xl text-[26px]">
                        Our Models
                    </div>
                    <div className="lg:hidden">
                        <Button className="min-w-0" onClick={handlePopUp}>
                            <Image src={deepchemFilter} alt={"Filter Button"} width={18} />
                        </Button>
                    </div>
                </div>
                {/* HEADER END */}

                <div className="flex flex-row items-start gap-12">
                    {/* FILTER SECTION BEGIN */}
                    <div className={`${isPopUp ? "fixed flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] w-[89%]" : "hidden"} lg:flex lg:relative lg:left-0 lg:top-0 lg:translate-x-0 lg:translate-y-0 lg:shadow-none lg:rounded-none flex-col items-start gap-5 lg:min-w-[240px] lg:max-w-[240px] lg:border-r-2 lg:py-0 lg:pl-0 pr-4 lg:border-dc-light-gray`}>
                        {/* BACKEND BEGIN */}
                        <div className="category-filter w-full">
                            <div className={`${isPopUp ? "flex flex-row justify-between items-center gap-1 w-full" : ""}`}>
                                <div className="category-text-filter">
                                    Backend
                                </div>
                                <div className="lg:hidden">
                                    <Button className="min-w-0" onClick={handlePopUp}>
                                        <Image src={deepchemClose} alt={"Close Button"} width={18} />
                                    </Button>
                                </div>
                            </div>

                            <div className="btn-container-filter">
                                {backendList.map((backend) => (
                                    <Button className="rmv-filter" onClick={() => {
                                        handleClick("backends", backend);
                                    }}>
                                        <FilterButton category={backends} name={backend} image={backend == "PyTorch" ? deepchemPyTorch : backend == "Keras" ? deepchemKeras : null} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                        {/* BACKEND END */}

                        {/* TYPE BEGIN */}
                        <div className="category-filter">
                            <div className="category-text-filter">
                                Type
                            </div>
                            <div className="btn-container-filter">
                                {typeList.map((type) => (
                                    <Button className="rmv-filter" onClick={() => {
                                        handleClick("types", type);
                                    }}>
                                        <FilterButton category={types} name={type} image={type == "Classifier" ? deepchemClassifier : type == "Regressor" ? deepchemRegressor : null} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                        {/* TYPE END */}

                        {/* FEATURIZER BEGIN */}
                        <div className="category-filter">
                            <div className="category-text-filter">
                                Featurizer
                            </div>
                            <div className="btn-container-filter">
                                {featurizerList.map((featurizer) => (
                                    <Button className="rmv-filter" onClick={() => {
                                        handleClick("featurizers", featurizer);
                                    }}>
                                        <FilterButton category={featurizers} name={featurizer} image={null} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                        {/* FEATURIZER END */}
                    </div>
                    {/* FILTER SECTION END */}

                    {/* MODEL CARDS SECTION BEGIN */}
                    <div className="items-start gap-8 justify-center model-container">
                        {filteredModels && filteredModels.map((model) => (
                            <ModelCard key={model.id} model={model} />
                        ))}
                    </div>
                    {/* MODEL CARDS SECTION END */}
                </div>
            </div>
        </>
    );
}
