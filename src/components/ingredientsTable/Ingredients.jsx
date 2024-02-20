import "./ingredients.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Ingredients({
    recipeIngredients,
    subrecipeIngredients,
}) {
    const [open, setOpen] = useState(false);

    const toggleOpen = (recipeName) => {
        setOpen((prevOpen) => ({
            ...prevOpen,

            [recipeName]: !prevOpen[recipeName],
        }));
    };
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    paddingBottom: "10px",
                    marginTop: "20px",
                    color: "#2f4f4f",
                    fontFamily: '"Public Sans", sans-serif',
                }}
            >
                Malzemeler
            </Typography>
            <TableContainer>
                <Table sx={{ overflow: "hidden" }}>
                    <TableBody
                        sx={{
                            borderBottom: "hidden",
                        }}
                    >
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
                                    width="25%"
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#0F3847;",
                                        }}
                                    >
                                        {ingredient.amount !== 0 &&
                                            ingredient.amount}{" "}
                                        {""}
                                        {ingredient.unit}
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align="left"
                                    style={{ paddingBottom: "0px" }}
                                    width="75%"
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 450,
                                            color: "#011325",
                                            fontFamily:
                                                '"Public Sans", sans-serif',
                                        }}
                                    >
                                        {capitalizeFirstLetter(
                                            ingredient.ingredient.name
                                        )}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                        {subrecipeIngredients.map((subrecipe) => (
                            <React.Fragment>
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
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#0F3847;",
                                            }}
                                        >
                                            {subrecipe.amount !== 0 &&
                                                subrecipe.amount}{" "}
                                            {subrecipe.unit}
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="left">
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 450,
                                                color: "#011325",
                                                fontFamily:
                                                    '"Public Sans", sans-serif',
                                            }}
                                        >
                                            {capitalizeFirstLetter(
                                                subrecipe.recipe.name
                                            )}
                                            <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() =>
                                                    toggleOpen(
                                                        subrecipe.recipe.name
                                                    )
                                                }
                                                sx={{
                                                    border: "1px solid #011325",
                                                    color: "#011325",
                                                    borderRadius: "50%",
                                                    padding: "0.1px",
                                                    marginLeft: "10px",
                                                    opacity: "0.4",
                                                }}
                                            >
                                                {open[subrecipe.recipe.name] ? (
                                                    <KeyboardArrowUpIcon />
                                                ) : (
                                                    <KeyboardArrowDownOutlinedIcon />
                                                )}
                                            </IconButton>
                                        </Typography>
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
                                                sx={{
                                                    padding: 2,
                                                    backgroundColor: "",
                                                    borderTop: "1px solid #ccc",
                                                    borderBottom:
                                                        "1px solid #ccc",
                                                }}
                                            >
                                                <Table
                                                    size="small"
                                                    aria-label="subrecipeIngredients"
                                                >
                                                    <TableBody>
                                                        <TableRow
                                                            sx={{
                                                                borderBottom:
                                                                    "hidden",
                                                            }}
                                                        >
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                width="20%"
                                                            ></TableCell>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                            >
                                                                <Typography
                                                                    variant="p"
                                                                    gutterBottom
                                                                    component="div"
                                                                    sx={{
                                                                        color: "#2f4f4f;",
                                                                        opacity:
                                                                            "0.95",
                                                                    }}
                                                                >
                                                                    Ara Reçete
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
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
                                                                        width="20%"
                                                                    ></TableCell>
                                                                    <TableCell
                                                                        component="th"
                                                                        scope="row"
                                                                        width="35%"
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            sx={{
                                                                                color: "#0F3847;",
                                                                            }}
                                                                        >
                                                                            {ingredient.amount !==
                                                                                0 &&
                                                                                ingredient.amount}{" "}
                                                                            {
                                                                                ingredient.unit
                                                                            }
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell
                                                                        align="left"
                                                                        width="45%"
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            sx={{
                                                                                fontWeight: 450,
                                                                                color: "#011325",
                                                                                fontFamily:
                                                                                    '"Public Sans", sans-serif',
                                                                            }}
                                                                        >
                                                                            {capitalizeFirstLetter(
                                                                                ingredient
                                                                                    .ingredient
                                                                                    .name
                                                                            )}
                                                                        </Typography>
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
        </Grid>
    );
}
