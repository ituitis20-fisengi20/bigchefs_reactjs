import React from "react";
import "./recipeSteps.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RecipeSteps = ({ steps }) => {
    return (
        <div className="recipeStepsContainer">
            <div>
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
                    Adımlar
                </Typography>
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
