import React from "react";
import "./recipeSteps.css";

const recipeSteps = [
    {
        name: "Cut & Portion Pork Belly",
        steps: [
            "If necessary, cut the belly in half to have manageable size pieces.",
            'Next cut into 1" pieces again crosswise.',
            "Make sure to make even cuts, you're looking for 30g per pc.",
            "Make sure your scale is prepared with plastic wrap before portioning.",
            "Portion into 3 pc - should be roughly 90g total per portion.",
        ],
    },
    {
        name: "To Marinate the Pork",
        steps: [
            "Dress one slice to test the consistency of the marinade, it should be thick but not gloopy. Add a pinch of oil if necessary to adjust.",
            "Dress all of the pork belly and keep in portions.",
        ],
    },
    {
        name: "To Sear the Pork on the Pickup",
        steps: [
            "On the pickup, sear the belly at 500ºF on the griddle.",
            "Make sure all sides are deep golden brown (almost black) seared so you get a really nice char.",
        ],
    },
];

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
