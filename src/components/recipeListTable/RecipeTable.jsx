import React, { useState, useEffect } from "react";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { TablePagination } from "@mui/material";
import "./recipeTable.css";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const RecipeTable = ({ recipes }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="recipeTable-container">
            <div className="headerTable">
                <h2>Reçeteler</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Reçete Tipi</th>
                        <th>Reçete Adı</th>
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
