import RecipeTable from "../../components/recipeListTable/RecipeTable";
import Card from "../../components/card/Card";
import "./recipeList.css";
import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";

const RecipeList = () => {
    const [allRecipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("/api/v1/recipes/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (!allRecipes) return <div>No recipes available.</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Layout>
                <div className="recipeList-Container">
                    <div className="recipeList-MetricCards">
                        <Card
                            title="Toplam Reçete Sayısı"
                            number={allRecipes.length}
                        />
                        <Card
                            title="Ana Reçete Sayısı"
                            number={
                                allRecipes.filter(
                                    (recipe) => recipe.type === "main"
                                ).length
                            }
                        />
                        <Card
                            title="Ara Reçete Sayısı"
                            number={
                                allRecipes.filter(
                                    (recipe) => recipe.type === "sub"
                                ).length
                            }
                        />
                    </div>
                    <div className="recipeList-Table">
                        <RecipeTable recipes={allRecipes} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default RecipeList;
