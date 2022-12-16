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

export default function Datasets() {
    const [currDataset, setCurrDataset] = useState(datasets[0]);
    const [attributes, setAttributes] = useState([]);

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
            <div className="flex flex-col items-start w-full px-[25px] 2xl:px-[300px] py-8 lg:py-16 gap-6">
                {/* HEADING BEGIN */}
                <div className="flex flex-row items-center py-2.5">
                    <div className="lg:text-4xl text-[26px]">
                        Our Datasets
                    </div>
                </div>
                {/* HEADING END */}

                {/* BODY BEGIN */}
                <div className="flex flex-row items-start gap-32 w-full">
                    {/* SIDEBAR BEGIN */}
                    <div className="flex flex-col items-start gap-0.5">
                        {datasets.map((dataset) => (
                            <button className={currDataset === dataset ? "text-dc-orange" : "text-dc-gray"} key={dataset}
                                onClick={() => {
                                    setCurrDataset(dataset);
                                }}>
                                {dataset}
                            </button>))}
                    </div>
                    {/* SIDEBAR END */}

                    {/* TABLE BEGIN */}
                    <div className="flex flex-col items-start gap-8 w-full overflow-auto">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row text-2xl text-dc-light-blue">
                                {currDataset}
                            </div>
                            <div className="flex flex-row items-start gap-5">
                                <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                    <Image src={deepchemLink} width={20} height={20} />
                                </div>
                                <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                    <Image src={deepchemDownload} width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full box-border">
                            <TableContainer className="" component={Paper}>
                                <Table sx={{ minWidth:0, overflowX:'auto' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {attributes.map((attribute) => (
                                                <TableCell align="center">{`${attribute.toString().substring(0, 10)}`}</TableCell>
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
                                                    <TableCell align="center">{row[attribute] ? row[attribute] : "NaN"}</TableCell>
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