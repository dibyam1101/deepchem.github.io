import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import ModelCard from "../components/Models/ModelCard";
import FilterButton from "../components/Models/FilterButton";

import deepchemPyTorch from "../public/icons/deepchem-pytorch.png";
import deepchemKeras from "../public/icons/deepchem-keras.png";
import deepchemClassifier from "../public/icons/deepchem-classifier.png";
import deepchemRegressor from "../public/icons/deepchem-regressor.png";

import models from "../data/models.json";
import backendList from "../data/backends.json";
import typeList from "../data/types.json";
import featurizerList from "../data/featurizers.json";

export default function Models() {
    const [filteredModels, setFilteredModels] = useState(models);
    const [backends, setBackends] = useState([]);
    const [types, setTypes] = useState([]);
    const [featurizers, setFeaturizers] = useState([]);

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
            <div className="flex flex-col items-start px-[25px] 2xl:px-[300px] py-16 gap-12">
                {/* HEADER BEGIN */}
                <div className="flex flex-row items-start py-2.5">
                    <div className="text-4xl">
                        Our Models
                    </div>
                </div>
                {/* HEADER END */}

                <div className="flex flex-row items-start gap-12">
                    {/* FILTER SECTION BEGIN */}
                    <div className="flex flex-col items-start gap-5">

                        {/* BACKEND BEGIN */}
                        <div className="category-filter">
                            <div className="category-text-filter">
                                Backend
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
                    </div>
                    {/* FEATURIZER END */}
                    {/* FILTER SECTION END */}

                    {/* MODEL CARDS SECTION BEGIN */}
                    <div className="flex flex-col items-start gap-12">
                        <div className="flex flex-row items-start gap-12 flex-wrap shrink">
                            {filteredModels && filteredModels.map((model) => (
                                <ModelCard key={model.id} model={model} />
                            ))}
                        </div>
                    </div>
                    {/* MODEL CARDS SECTION END */}
                </div>
            </div>
        </>
    );
}