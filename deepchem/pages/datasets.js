import React, { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import datasets from "/data/datasets.json";

import Image from "next/image";

import deepchemLink from "/public/icons/deepchem-link.png";
import deepchemDownload from "/public/icons/deepchem-download.png";
import deepchemArrowRight from "/public/icons/deepchem-arrow-right.png";
import deepchemArrowLeft from "/public/icons/deepchem-arrow-left.png";

export default function Datasets() {
    const [currDataset, setCurrDataset] = useState(datasets[0]);
    const [attributes, setAttributes] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        setAttributes(Object.keys(data[currDataset][0]));
    }, [currDataset]);

    const loadData = () => {
        const requireContext = require.context('/data/datasetsFormat', false, /\.json$/);
        const data = {};
        requireContext.keys().forEach((key) => {
            const obj = requireContext(key);
            const simpleKey = key.split('/').pop().split('.').shift();
            data[simpleKey] = obj;
        });

        return data;
    }

    const data = loadData();

    return (
        <>
            <div className={`${isSidebarOpen ? "flex" : "hidden"} fixed bg-dc-gray/80 w-full h-[100vh] top-0 lg:hidden`} onClick={handleSidebar}></div>
            <div className="flex flex-col items-start w-full px-[25px] 2xl:px-[300px] py-8 lg:py-16 gap-6">
                {/* HEADING BEGIN */}
                <div className="flex flex-row w-full items-center justify-between py-2.5">
                    <div className="lg:text-4xl text-[26px]">
                        Our Datasets
                    </div>
                </div>
                {/* HEADING END */}

                {/* BODY BEGIN */}
                <div className="flex flex-row items-start gap-32 w-full">

                    {/* SIDEBAR BEGIN */}
                    <div className={`${isSidebarOpen ? "fixed flex top-0 text-sm gap-1 left-0 bg-white border-r-2 p-4 h-full" : "hidden"} lg:flex lg:text-base lg:relative flex-col items-start lg:pr-2 lg:min-w-[250px] lg:h-[60vh] overflow-x-hidden overflow-y-auto lg:gap-0.5`}>
                        <div className="lg:hidden flex flex-row text-lg pb-2.5 items-center justify-between w-full">
                            <div>
                                Our Datasets
                            </div>
                            <div>
                                <button className="" onClick={handleSidebar}>
                                    <i className="fa fa-close text-dc-gray text-lg"></i>
                                </button>
                            </div>
                        </div>
                        {datasets.map((dataset) => (
                            <div className="flex items-center gap-1">
                                <button className={currDataset === dataset ? "text-dc-orange" : "text-dc-gray"} key={dataset}
                                    onClick={() => {
                                        setCurrDataset(dataset);
                                    }}>
                                    <div className="break-all text-left">{dataset}</div>
                                </button>
                                <div className="lg:hidden">
                                    {currDataset === dataset && <Image src={deepchemArrowLeft} alt={"Filter Button"} width={5} />}
                                </div>
                            </div>))}
                    </div>
                    {/* SIDEBAR END */}

                    {/* TABLE BEGIN */}
                    <div className="flex flex-col items-start gap-8 w-full overflow-auto">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row items-center text-lg gap-1 lg:text-2xl text-dc-light-blue">
                                <div className="flex items-center lg:hidden">
                                    <button className="min-w-0 dc-light-blue" onClick={handleSidebar}>
                                        <Image src={deepchemArrowRight} alt={"Filter Button"} width={8} />
                                    </button>
                                </div>
                                {currDataset}
                            </div>
                            <div className="flex flex-row items-start gap-5">
                                <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                    <Image src={deepchemLink} width={16} height={16} />
                                </div>
                                <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                    <Image src={deepchemDownload} width={16} height={16} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full box-border">
                            <TableContainer className="" component={Paper}>
                                <Table sx={{ minWidth: 0, overflowX: 'auto' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {attributes.map((attribute) => (
                                                <TableCell align="center">{attribute.length < 20 ? attribute :
                                                    <div className="">
                                                        <span className="">{`${attribute.substring(0, 20)}...`}</span>
                                                    </div>
                                                }</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data[currDataset].map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                {attributes.map((attribute) => (
                                                    <TableCell align="center">{row[attribute] !== null ? row[attribute] : "-"}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    {/* TABLE END */}
                </div>
                {/* BODY END */}
            </div>
        </>
    );
}