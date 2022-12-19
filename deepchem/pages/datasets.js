import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import datasets from "/data/datasets.json";

import Image from "next/image";
import Link from "next/link";

import DatasetButton from "/components/Datasets/DatasetButton";

import deepchemLink from "/public/icons/deepchem-link.png";
import deepchemDownload from "/public/icons/deepchem-download.png";

const loadData = () => {
    const requireContext = require.context('/data/datasetsJSON', false, /\.json$/);
    const data = {};
    requireContext.keys().forEach((key) => {
        const obj = requireContext(key);
        const simpleKey = key.split('/').pop().split('.').shift();
        data[simpleKey] = obj;
    });

    return data;
}

const data = loadData();
const space = '\xa0\xa0';

export default function Datasets() {
    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const [currDataset, setCurrDataset] = useState('');
    const [attributes, setAttributes] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [documentationLink, setDocumentationLink] = useState('');
    const [dataLoaderLink, setDataLoaderLink] = useState('');
    const router = useRouter();

    useEffect(() => {
        const dataset = router.asPath.split('#').pop();
        const docLink = "https://deepchem.readthedocs.io/en/latest/api_reference/moleculenet.html#" + dataset + "-datasets";
        const loaderLink = "https://github.com/deepchem/deepchem/blob/master/deepchem/molnet/load_function/" + dataset + "_datasets.py";
        if (dataset === '/datasets') {
            router.push(`/datasets#${datasets[0]}`);
        } else {
            setCurrDataset(dataset);
            setAttributes(Object.keys(data[dataset][0]));
            setDocumentationLink(docLink);
            setDataLoaderLink(loaderLink);
        }
    }, [router]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                setIsSidebarOpen(false);
            }
        })
    }, [])

    return (
        <>
            <div className={`${isSidebarOpen ? "flex" : "hidden"} fixed bg-dc-gray/80 w-full h-[100vh] top-0 lg:hidden`}
                onClick={handleSidebar}>
            </div>
            <div className="flex flex-col items-start w-full px-[25px] 2xl:px-[300px] py-8 lg:py-16 gap-6">

                {/* HEADING BEGIN */}
                <div className="flex flex-row items-center">
                    <i className="block lg:hidden fas fa-angle-right text-lg mr-5 cursor-pointer"
                        onClick={handleSidebar}></i>
                    <h2 className="mb-0">Datasets</h2>
                </div>
                {/* HEADING END */}

                {/* BODY BEGIN */}
                <div className="flex flex-row justify-between gap-5 w-full">

                    {/* SIDEBAR BEGIN */}
                    <nav
                        className={`z-10 fixed flex flex-col lg:!h-[70vh] overflow-y-scroll px-0 lg:!translate-x-0 lg:!static lg:!shadow-none ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white ease-in-out duration-300 lg:duration-0 fixed top-0 left-0 shadow-xl py-8 lg:py-0 h-screen w-[70vw] max-w-[300px]`}>
                        {datasets?.map((dataset, index) => {
                            return <DatasetButton key={index} dataset={dataset} currDataset={currDataset} />
                        })}
                    </nav>
                    {/* SIDEBAR END */}

                    {/* TABLE BEGIN */}
                    <div className="flex flex-col items-start gap-6 w-full overflow-auto">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row items-center text-lg gap-1 lg:text-2xl text-dc-light-blue font-poppins font-semibold">
                                <div>{currDataset}</div>
                            </div>
                            <div className="flex flex-row items-start gap-5">
                                <Link href={documentationLink} target="_blank">
                                    <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                    <i class="fa-solid fa-link text-white"></i>
                                    </div>
                                </Link>
                                <Link href={dataLoaderLink} target="_blank">
                                    <div className="flex flex-row items-start p-2.5 gap-2.5 bg-dc-light-gray rounded-lg">
                                        <i class="fa-solid fa-download text-white"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full box-border">
                            <TableContainer sx={{ 
                                minWidth: 0,
                                overflowX: 'auto',
                                'th, td': {
                                    border: 1,
                                    borderColor: '#252422',
                                    fontFamily: 'Poppins',
                                    paddingX: 1,
                                    fontSize: '0.75rem',
                                },
                                'td': {
                                    paddingY: 0.5,
                                },
                                'th': {
                                    paddingY: 0.75,
                                    // fontSize: '1rem',
                                    backgroundColor: '#252422',
                                    color: '#fff',
                                }
                            }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {attributes?.map((attribute, index) => (
                                                <TableCell key={index} align="center">{attribute.length < 20 ?
                                                    attribute : `${attribute.substring(0, 20)}...`
                                                }</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data[currDataset]?.map((row, index) => (
                                            <TableRow
                                                key={index}
                                            >
                                                {attributes?.map((attribute, index) => (
                                                    <TableCell key={index} align="center">{row[attribute] !== null ? row[attribute] : "-"}</TableCell>
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