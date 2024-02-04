import "./ingredients.css";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

import { Link } from "react-router-dom";

export default function Ingredients({
    recipeIngredients,
    subrecipeIngredients,
}) {
    const [open, setOpen] = useState(false);

    const toggleOpen = (recipeName) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            // Toggle the boolean value for the specific recipeName
            [recipeName]: !prevOpen[recipeName],
        }));
    };
    return (
        <div className="ingredientsContainer">
            <div className="header">Malzemeler</div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Miktar</th>
                            <th>Birim</th>
                            <th>İsim</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeIngredients.map((ingredient) => (
                            <tr key={ingredient.id}>
                                <td>{ingredient.amount}</td>
                                <td>{ingredient.unit}</td>
                                <td>{ingredient.name}</td>
                                {ingredient.note && <td>{ingredient.note}</td>}
                            </tr>
                        ))}
                        {subrecipeIngredients.map((subrecipe) => (
                            <React.Fragment key={subrecipe.recipeName}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="subrecipe">
                                        {subrecipe.recipeName}
                                    </td>
                                    <td>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() =>
                                                toggleOpen(subrecipe.recipeName)
                                            }
                                        >
                                            {open[subrecipe.recipeName] ? (
                                                <KeyboardArrowUpIcon />
                                            ) : (
                                                <KeyboardArrowDownIcon />
                                            )}
                                        </IconButton>
                                    </td>
                                </tr>

                                {open[subrecipe.recipeName] && (
                                    <>
                                        {subrecipe.ingredients.map(
                                            (ingredient) => (
                                                <tr key={ingredient.id}>
                                                    <td>{ingredient.amount}</td>
                                                    <td>{ingredient.unit}</td>
                                                    <td>{ingredient.name}</td>
                                                    {ingredient.note && (
                                                        <td>
                                                            {ingredient.note}
                                                        </td>
                                                    )}
                                                </tr>
                                            )
                                        )}
                                        <tr>
                                            <td colSpan={4}>
                                                {/* Set the colspan to the number of columns in your table */}
                                                <div className="subrecipeBtn">
                                                    <Link
                                                        to={`/recipes/${subrecipe.id}`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                        className="subrecipeLink"
                                                    >
                                                        Ara Reçetenin Adımları
                                                        için
                                                        <LaunchIcon />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
