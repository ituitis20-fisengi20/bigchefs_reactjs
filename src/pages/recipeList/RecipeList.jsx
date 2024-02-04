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

    if (!allRecipes.recipes) return <div>No recipes available.</div>;

    if (error) return <div>Error: {error}</div>;
    var recipeNumber = allRecipes.recipes.length;
    var subrecipeNumber = allRecipes.subrecipes.length;
    var total = recipeNumber + subrecipeNumber;

    return (
        <>
            <Layout>
                <div className="recipeListContainer">
                    <div className="cards">
                        <Card title="Reçete Sayısı" number={total} />
                        <Card title="Ana Reçete Sayısı" number={recipeNumber} />
                        <Card
                            title="Ara Reçete Sayısı"
                            number={subrecipeNumber}
                        />
                    </div>
                    <div>
                        <RecipeTable recipes={allRecipes.recipes} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default RecipeList;
