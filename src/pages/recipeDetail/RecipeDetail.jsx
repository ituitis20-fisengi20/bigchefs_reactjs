import RecipeDetailTable from "../../components/recipeDetailTable/RecipeDetailTale";
import Sidebar from "../../components/sidebar/Sidebar";
import "./recipeDetail.css";

import React from "react";
import {
    Paper,
    ListItem,
    List,
    Typography,
    Grid,
    TableContainer,
    TableCell,
    TableRow,
    TableBody,
    Table,
    Divider,
    Container,
    IconButton,
} from "@mui/material";

const RecipeDetail = () => {
    return (
        <div className="recipeDetailPage">
            <Sidebar />
            <div className="recipeDetailContainer">
                <Container maxWidth={"xl"}>
                    <Typography variant="h3">Food name</Typography>
                    <Divider sx={{ marginBottom: 3, marginTop: 1 }} />
                    <Grid container spacing={3}>
                        {/* First Grid Item */}
                        <Grid item xs={4}>
                            <Typography variant="h6">Malzemeler</Typography>
                            <Divider sx={{ marginBottom: 3, marginTop: 1 }} />
                            <TableContainer component={Paper}>
                                <Table
                                    sx={{ minWidth: 500, border: "none" }}
                                    aria-label="simple table"
                                >
                                    <TableBody>
                                        <TableRow
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{ width: "50px" }}
                                            >
                                                200
                                            </TableCell>
                                            <TableCell sx={{ width: "50px" }}>
                                                gram
                                            </TableCell>
                                            <TableCell>alo</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        {/* Divider */}

                        {/* Second Grid Item */}
                        <Grid item xs={8}>
                            <Typography variant="h6">Tarif</Typography>
                            <Divider sx={{ marginBottom: 3, marginTop: 1 }} />
                            <List sx={{ margin: 0 }}>
                                <React.Fragment>
                                    <ListItem>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                padding: 2,
                                                width: "100%",
                                                alignItems: "center",
                                                display: "flex",
                                                gap: 2,
                                            }}
                                        >
                                            <Typography variant="h6">
                                                20.
                                            </Typography>
                                            alo
                                        </Paper>
                                    </ListItem>
                                </React.Fragment>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
export default RecipeDetail;
