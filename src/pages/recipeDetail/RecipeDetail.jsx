import Ingredients from "../../components/ingredientsTable/Ingredients";

import "./recipeDetail.css";
import Layout from "../layout/layout";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeSteps from "../../components/recipeSteps/RecipeSteps";

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
                <div className="recipeDetailContainer">
                    <div className="detailTitle">
                        <h1>{recipeDetail.name} </h1>
                    </div>
                    <div className="detailContent">
                        <div className="ingredients">
                            <Ingredients
                                recipeIngredients={recipeDetail.ingredients}
                                subrecipeIngredients={recipeDetail.subRecipes}
                            />
                        </div>
                        <div className="prep">
                            <RecipeSteps steps={recipeDetail.steps} />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default RecipeDetail;
