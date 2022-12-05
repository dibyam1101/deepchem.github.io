import Image from "next/image";

import deepchemCross from "../../public/icons/deepchem-cross.png";

export default function FilterButton({ category, name, image }) {
    const TRUNC_LENGTH = 20;

    name = name.replace(/Featurizer$/g, '');

    return (
        <div className={`${category.includes(name) ? "btn-selected-filter" : "btn-filter"}`} title={name}>
            {image ? <Image src={category.includes(name) ? deepchemCross : image} alt={name} width={14} /> : category.includes(name) && <Image src={deepchemCross} alt={name} width={14} />}
            <p className={`${(category.includes(name)) ? "btn-text-selected-filter" : "btn-text-filter"}`}>
                {name.length > TRUNC_LENGTH ? name.substring(0, TRUNC_LENGTH) + "..." : name}
            </p>
        </div>
    );
}