import React, { useState, useEffect } from "react";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { TablePagination } from "@mui/material";
import "./recipeTable.css";
import { Link } from "react-router-dom";

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
                <h2>Recipes</h2>
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
                                        src={`https://placehold.co/50x50?text=${recipes.name}`}
                                        alt={` avatar`}
                                    />
                                    <span>Ana Reçete</span>
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
                                <td>12.12.2023</td>
                                <td className="options">
                                    <DehazeRoundedIcon />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="footerTable">
                {/* <button className="view-all">View All</button> */}
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
