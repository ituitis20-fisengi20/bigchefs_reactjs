import React from "react";
import "./recipeSteps.css";

const RecipeSteps = ({ steps }) => {
    return (
        <div className="recipeStepsContainer">
            <div>
                <h2>Adımlar</h2>
                <ol>
                    {steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeSteps;
