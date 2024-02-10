import "./ingredients.css";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

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
            <TableContainer>
                <Table>
                    <TableBody>
                        {recipeIngredients.map((ingredient) => (
                            <TableRow
                                sx={{
                                    borderBottom: "hidden",
                                }}
                            >
                                <TableCell
                                    component="td"
                                    scope="row"
                                    style={{ paddingBottom: "0px" }}
                                >
                                    {ingredient.amount !== 0 &&
                                        ingredient.amount}{" "}
                                    {""}
                                    {ingredient.unit}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    style={{ paddingBottom: "0px" }}
                                >
                                    {ingredient.ingredient.name}
                                </TableCell>
                            </TableRow>
                        ))}
                        {subrecipeIngredients.map((subrecipe) => (
                            <React.Fragment>
                                <TableRow>
                                    <TableCell
                                        component="td"
                                        scope="row"
                                        style={{ paddingBottom: "0px" }}
                                    >
                                        {subrecipe.amount !== 0 &&
                                            subrecipe.amount}{" "}
                                        {subrecipe.unit}
                                    </TableCell>

                                    <TableCell align="left">
                                        {subrecipe.recipe.name}
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
                                                <KeyboardArrowDownOutlinedIcon />
                                            )}
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            paddingBottom: 0,
                                            paddingTop: 0,
                                        }}
                                        colSpan={2}
                                    >
                                        <Collapse
                                            in={open[subrecipe.recipe.name]}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            <Box
                                                sx={{ padding: 1 }}
                                                className="deneme"
                                            >
                                                <Typography
                                                    variant="p"
                                                    gutterBottom
                                                    component="div"
                                                    sx={{
                                                        color: "#2f4f4f;",
                                                        opacity: "0.8",
                                                    }}
                                                >
                                                    Ara Reçete
                                                </Typography>
                                                <Table
                                                    size="small"
                                                    aria-label="subrecipeIngredients"
                                                >
                                                    <TableBody>
                                                        {subrecipe.recipe.ingredients.map(
                                                            (ingredient) => (
                                                                <TableRow
                                                                    key={
                                                                        ingredient.id
                                                                    }
                                                                    sx={{
                                                                        borderBottom:
                                                                            "hidden",
                                                                    }}
                                                                >
                                                                    <TableCell
                                                                        component="th"
                                                                        scope="row"
                                                                    >
                                                                        {ingredient.amount !==
                                                                            0 &&
                                                                            ingredient.amount}{" "}
                                                                        {
                                                                            ingredient.unit
                                                                        }
                                                                    </TableCell>

                                                                    <TableCell align="left">
                                                                        {
                                                                            ingredient
                                                                                .ingredient
                                                                                .name
                                                                        }
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
