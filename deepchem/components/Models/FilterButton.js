import Image from "next/image";

import deepchemCross from "../../public/icons/deepchem-cross.png";

export default function FilterButton({ category, name, image }) {
    return (
        <div className={`${category.includes(name) ? "btn-selected-filter" : "btn-filter"
            }`}>
            {image ? <Image src={category.includes(name) ? deepchemCross : image} alt={name} width={16} /> : category.includes(name) && <Image src={deepchemCross} alt={name} width={16} />}
            <p className={`${(category.includes(name)) ? "btn-text-selected-filter" : "btn-text-filter"
                }`}>
                {name}
            </p>
        </div>
    );
}