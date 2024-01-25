import React from "react";
import "./recipeTable.css";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";

const transactions = [
    {
        id: 1,
        user: "Annette Black",
        action: "Receive money from",
        date: "23 Jan 2024 2:24 AM",
        amount: "$68.71",
        status: "Progress",
        statusClass: "status-progress",
    },
    {
        id: 2,
        user: "Courtney Henry",
        action: "Payment for",
        date: "22 Jan 2024 1:24 AM",
        amount: "$85.21",
        status: "Completed",
        statusClass: "status-completed",
    },
    {
        id: 3,
        user: "Theresa Webb",
        action: "Payment for",
        date: "21 Jan 2024 12:24 AM",
        amount: "$52.17",
        status: "Failed",
        statusClass: "status-failed",
    },
    // ... other transactions
];

const RecipeTable = () => {
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
                    {transactions.map((transaction) => (
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
                <div className="footerTable">
                    <button className="view-all">View All</button>
                </div>
            </table>
        </div>
    );
};

export default RecipeTable;
