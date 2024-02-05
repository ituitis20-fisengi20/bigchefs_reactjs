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
                                <td>{ingredient.ingredient.name}</td>
                                {ingredient.note && <td>{ingredient.note}</td>}
                            </tr>
                        ))}
                        {subrecipeIngredients.map((subrecipe) => (
                            <React.Fragment key={subrecipe.id}>
                                <tr>
                                    <td>{subrecipe.amount}</td>
                                    <td>{subrecipe.unit}</td>
                                    <td className="subrecipe">
                                        {subrecipe.recipe.name}
                                    </td>
                                    <td>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() =>
                                                toggleOpen(
                                                    subrecipe.recipe.name
                                                )
                                            }
                                        >
                                            {open[subrecipe.recipe.name] ? (
                                                <KeyboardArrowUpIcon />
                                            ) : (
                                                <KeyboardArrowDownIcon />
                                            )}
                                        </IconButton>
                                    </td>
                                </tr>

                                {open[subrecipe.recipe.name] && (
                                    <>
                                        {subrecipe.recipe.ingredients.map(
                                            (ingredient) => (
                                                <tr key={ingredient.id}>
                                                    <td>{ingredient.amount}</td>
                                                    <td>{ingredient.unit}</td>
                                                    <td>
                                                        {
                                                            ingredient
                                                                .ingredient.name
                                                        }
                                                    </td>
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
                                                <div className="subrecipeBtn">
                                                    <Link
                                                        to={`/recipes/${subrecipe.recipe.id}`}
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
