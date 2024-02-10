import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { TablePagination } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


import "./recipeTable.css";
import RecipeColumnHeader from "../RecipeColumnHeader"

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const RecipeTable = ({ recipes }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const recipTableColumns = [
        { 
            field: 'name',
            flex: 1,
            renderHeader: () => (
                <RecipeColumnHeader>
                    <ReceiptLongOutlinedIcon></ReceiptLongOutlinedIcon>
                    Recete
                </RecipeColumnHeader>
            ),
        },
        {
            field: 'type',
            flex: 1,
            renderHeader: () => (
                <RecipeColumnHeader>
                    <DnsOutlinedIcon></DnsOutlinedIcon>
                    Recete Turu
                </RecipeColumnHeader>
            ),
        },
        {
            field: 'lastModifiedAt',
            flex: 1,
            renderHeader: () => (
                <RecipeColumnHeader>
                    <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
                    Son Duzenlenme Tarihi
                </RecipeColumnHeader>
            ),
        },
    ]
    
    const recipeTableRows = recipes.map(recipe => ({
        id: recipe.id,
        name: recipe.name,
        type: recipe.type,
        lastModifiedAt: formatDate(recipe.lastModifiedAt)
    }))

    return (
        <div className="recipeTable-container">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={recipeTableRows}
                        columns={recipTableColumns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        sx = {{
                           '& .MuiDataGrid-columnHeader': { 
                                backgroundColor: 'rgb(244, 246, 248)',
                                color: 'rgb(99, 115, 129)',
                                fontSize: "14px",
                                fontWeight: 600,
                            },
                            '& .MuiDataGrid-cell': {
                                borderStyle: 'dashed',
                                borderWidth: '1px',
                                borderColor: 'rgb(241, 243, 244)',  
                                borderLeft: 'none',
                                borderRight: 'none',
                            },
                        }}  
                    />
                </div>
            <div className="tableTitle">
                <h2>Reçeteler</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Reçete</th>
                        <th>Reçete Tipi</th>
                        <th>Son Düzenlenme Tarihi</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {recipes
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((recipes) => (
                            <tr key={recipes.id}>
                                <td className="type">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/image/${recipes.id}.png`}
                                        alt={`${recipes.name}`}
                                    />
                                    <span>
                                        {recipes.type == "main" && "Ana Reçete"}
                                        {recipes.type == "sub" && "Ara Reçete"}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to={`/recipes/${recipes.id}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        {recipes.name}
                                    </Link>
                                </td>
                                <td>{formatDate(recipes.lastModifiedAt)}</td>
                                <td className="options">
                                    <DehazeRoundedIcon />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="footerTable">
                <button className="view-all">Reçete Ekle</button>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={recipes.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
};

export default RecipeTable;
