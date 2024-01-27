import Ingredients from "../../components/ingredientsTable/Ingredients";

import "./recipeDetail.css";
import Layout from "../layout/layout";

import React from "react";
import RecipeSteps from "../../components/recipeSteps/RecipeSteps";

const RecipeDetail = () => {
    return (
        <>
            <Layout>
                <div className="recipeDetailContainer">
                    <div className="detailTitle">
                        <h1>Marinated Pork Belly </h1>
                    </div>
                    <div className="detailContent">
                        <div className="ingredients">
                            <Ingredients />
                        </div>
                        <div className="prep">
                            <RecipeSteps />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default RecipeDetail;
