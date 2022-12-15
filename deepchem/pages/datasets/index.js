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
                <div className="flex flex-row items-center py-2.5 w-full">
                    <div className="lg:text-4xl text-[26px]">
                        Our Datasets
                    </div>
                </div>
                {/* HEADING END */}

                {/* BODY BEGIN */}
                <div className="flex flex-row items-start gap-40 justify-between w-full">
                    <div className="flex flex-col items-start gap-8 basis-3/4">
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
                        {/* <div className="flex flex-col items-start gap-2 rounded-lg">
                            <div className="flex flex-row w-[42.9vw] items-center overflow-x-scroll gap-1.5">
                                {attributes.map((attribute) => (
                                    <div>{attribute}</div>
                                ))}
                            </div>
                        </div> */}
                        {/* <div className="overflow-x-scroll w-[42.9vw]">
                            <table className="">
                                <thead>
                                    <tr>
                                        {attributes.map((attribute) => (
                                            <th className="px-4 py-2">{attribute}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data[currDataset].map((row) => (
                                        <tr>
                                            {attributes.map((attribute) => (
                                                <td className="px-4 py-2">{row[attribute]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> */}
                        <div className="lg:w-[61vw] 2xl:w-[43vw]">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {attributes.map((attribute) => (
                                                <TableCell>{attribute}</TableCell>
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
                                                    <TableCell align="center">{row[attribute]}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                    {/* SIDEBAR BEGIN */}
                    <div className="flex flex-col items-end gap-0.5 basis-1/4 shrink-0">
                        {datasets.map((dataset) => (
                            <button className={currDataset === dataset ? "text-dc-orange" : "text-dc-gray"} key={dataset}
                                onClick={() => {
                                    setCurrDataset(dataset);
                                }}>
                                {dataset}
                            </button>))}
                    </div>
                    {/* SIDEBAR END */}
                </div>
                {/* BODY END */}
            </div>
        </>
    );
}