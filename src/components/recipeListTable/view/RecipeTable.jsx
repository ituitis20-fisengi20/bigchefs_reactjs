import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { TablePagination } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Avatar } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';



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

    const recipeTableColumns = [
        {
            field: 'type',
            flex: 0.5,
            renderHeader: () => (
                <RecipeColumnHeader>
                    <DnsOutlinedIcon></DnsOutlinedIcon>
                    Recete Turu
                </RecipeColumnHeader>
            ),
            renderCell: (params) => (
                <span
                  style={{
                    color: params.row.type === "main" ? "rgb(183, 110, 0)" : "rgb(0, 108, 156)",
                    backgroundColor: params.row.type === "main" ? "rgba(255, 171, 0, 0.16)" : "rgba(0, 184, 217, 0.16)",
                    fontWeight: 700,
                    borderRadius: "9px",
                    padding: "4px"
                }}
                >
                  {params.row.type === "main" ? "Ana Reçete" : "Ara Reçete"}
                </span>
            )
        },
        { 
            field: 'name',
            flex: 2,
            renderHeader: () => (
                <RecipeColumnHeader>
                    <ReceiptLongOutlinedIcon></ReceiptLongOutlinedIcon>
                    Recete
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
            <CardHeader 
                title={
                    <Typography variant="h5" sx={{fontWeight: 700}}>
                        Receteler
                    </Typography>
                }
                avatar={<MenuBookOutlinedIcon/>}
                sx={{ mt: 3, p:3}}
            />
            <box>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={recipeTableRows}
                        columns={recipeTableColumns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10, 20, 50]}
                        checkboxSelection
                        rowHeight={70}
                        columnHeaderHeight={70}
                        sx = {{
                            '& .MuiDataGrid-columnHeaders': { 
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
            </box>
            
        </div>
    );
};

export default RecipeTable;

/*
<div className="footerTable">
                <button className="view-all">Reçete Ekle</button>
            </div>
*/