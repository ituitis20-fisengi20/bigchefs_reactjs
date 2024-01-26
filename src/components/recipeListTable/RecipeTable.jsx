import React, { useState } from "react";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { TablePagination } from "@mui/material";
import "./recipeTable.css";

const transactions = [
    {
        id: 1,
        user: "Annette Black",
        action: "Receive money from",
        date: "1",
        amount: "$68.71",
        status: "Progress",
        statusClass: "status-progress",
    },
    {
        id: 2,
        user: "Courtney Henry",
        action: "Payment for",
        date: "2",
        amount: "$85.21",
        status: "Completed",
        statusClass: "status-completed",
    },
    {
        id: 7,
        user: "Theresa Webb",
        action: "Payment for",
        date: "3",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    {
        id: 8,
        user: "Theresa Webb",
        action: "Payment for",
        date: "4",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    {
        id: 9,
        user: "Theresa Webb",
        action: "Payment for",
        date: "5",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    {
        id: 10,
        user: "Theresa Webb",
        action: "Payment for",
        date: "6",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    {
        id: 11,
        user: "Theresa Webb",
        action: "Payment for",
        date: "7",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    {
        id: 12,
        user: "Theresa Webb",
        action: "Payment for",
        date: "8",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },

    // ... other transactions
];

const RecipeTable = () => {
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
                    {transactions
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="type">
                                    <img
                                        src={`https://placehold.co/50x50?text=${transaction.user}`}
                                        alt={`${transaction.user} avatar`}
                                    />
                                    <span>Ana Reçete</span>
                                </td>
                                <td>Alfredo Makarna</td>
                                <td>{transaction.date}</td>
                                <td className="options">
                                    <DehazeRoundedIcon />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="footerTable">
                <button className="view-all">View All</button>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={transactions.length}
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
