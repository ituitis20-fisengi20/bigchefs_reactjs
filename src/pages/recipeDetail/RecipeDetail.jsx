import Ingredients from "../../components/ingredientsTable/Ingredients";

import "./recipeDetail.css";
import Layout from "../layout/layout";

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeSteps from "../../components/recipeSteps/RecipeSteps";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipeDetail, setRecipeDetail] = useState(null);

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await fetch(`/api/v1/recipes/${recipeId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                setRecipeDetail(data);
            } catch (error) {
                console.error("Error fetching recipe data:", error);
            }
        };

        fetchRecipeData();
    }, [recipeId]);

    if (!recipeDetail) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Layout>
                {/* <div className="recipeDetailContainer">
                    <div className="detailTitle">
                        <h1>{recipeDetail.name} </h1>
                    </div>

                    <div className="detailContent">
                        <div className="detailLeft">
                            <div className="ingredients">
                                <Ingredients
                                    recipeIngredients={recipeDetail.ingredients}
                                    subrecipeIngredients={
                                        recipeDetail.subRecipes
                                    }
                                />
                            </div>
                        </div>
                        <div className="detailRight">
                            {`${process.env.PUBLIC_URL}/assets/image/${recipeDetail.id}.png` !=
                                null && (
                                <img
                                    className="recipeImage"
                                    src={`${process.env.PUBLIC_URL}/assets/image/${recipeDetail.id}.png`}
                                    alt={`${recipeDetail.name}`}
                                />
                            )}

                            <div className="prep">
                                <RecipeSteps steps={recipeDetail.steps} />
                            </div>
                        </div>
                    </div>
                </div> */}

                <Grid container sx={{ margin: 3 }}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            maxHeight: "100vh",
                            overflowY: "scroll",
                            paddingBottom: "30px",
                        }}
                    >
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography
                                variant="h1"
                                component="h2"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: "1.8rem",
                                    paddingBottom: "10px",
                                    color: "#001f3f",
                                    fontFamily: '"Public Sans", sans-serif',
                                    marginBottom: "20px",
                                    borderBottom: "solid 3px #2f4f4f",
                                }}
                            >
                                {recipeDetail.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    paddingBottom: "5px",
                                    color: "#2f4f4f",
                                    fontFamily: '"Public Sans", sans-serif',
                                }}
                            >
                                Not:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    paddingBottom: "10px",
                                    paddingRight: "10px",
                                    color: "#011325",
                                    fontFamily: '"Public Sans", sans-serif',
                                }}
                            >
                                Öncelikle, tavuk göğsünü marine etmek için
                                yoğurt, zeytinyağı, sarımsak, taze sıkılmış
                                limon suyu ve seçtiğiniz baharatlar gibi zengin
                                malzemeler kullanın; bu, etin hem yumuşak hem de
                                aromatik olmasını sağlar. Marinasyon süreci en
                                az 4 saat, ideal olarak bir gece sürmelidir.
                                Tavukları pişirirken, her iki tarafın da eşit
                                şekilde kızarmasına özen gösterin; bu, lezzetin
                                dengeli bir şekilde dağılmasına yardımcı olur.
                                Sultan Kebabı'nın sosu için, domates ve biber
                                salçasının yanı sıra ince doğranmış soğan ve
                                sarımsak kullanarak zengin bir taban oluşturun
                                ve sosun kıvamını ayarlamak için uygun miktarda
                                su ekleyin. Sosunuzu tavukla birleştirirken,
                                sosun tavuğun her yerine nüfuz etmesine izin
                                verin ki, her lokmada maksimum lezzet elde
                                edilsin. Yanında pirinç pilavı veya patates
                                püresi gibi garnitürlerle servis yaparak Tavuk
                                Sultan Kebabı'nızı zengin bir sofra sunumuna
                                dönüştürebilirsiniz.
                            </Typography>

                            <Ingredients
                                recipeIngredients={recipeDetail.ingredients}
                                subrecipeIngredients={recipeDetail.subRecipes}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            maxHeight: "100vh",
                            overflowY: "scroll",
                            overflowX: "hidden",
                            paddingBottom: "30px",
                            paddingLeft: "10px",
                        }}
                    >
                        {`${process.env.PUBLIC_URL}/assets/image/${recipeDetail.id}.png` !=
                            null && (
                            <Box
                                component="img"
                                sx={{
                                    maxHeight: { xs: 300, md: 600 }, // Adjusted for demonstration
                                    maxWidth: "max-content", // This will make the image's maxWidth equal to its intrinsic content size
                                    width: "80%", // Ensures the image is responsive and scales down on smaller screens
                                    height: "auto", // Maintains the aspect ratio of the image
                                }}
                                src={`${process.env.PUBLIC_URL}/assets/image/${recipeDetail.id}.png`}
                                alt={`${recipeDetail.name}`}
                            />
                        )}
                        <RecipeSteps steps={recipeDetail.steps} />
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
};
export default RecipeDetail;
