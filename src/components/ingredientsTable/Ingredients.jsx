import "./ingredients.css";
import React from "react";

const recipes = [
    {
        name: "Cut & Portion the Pork",
        ingredients: [
            {
                quantity: "2040",
                unit: "g",
                name: "Sous Vide Pork Belly",
                note: 'cut into 1" pieces',
            },
        ],
    },
    {
        name: "For the Marinade",
        ingredients: [
            { quantity: "170", unit: "g", name: "Gochujang" },
            { quantity: "96.3", unit: "g", name: "Dijon Mustard" },
            { quantity: "68", unit: "g", name: "Honey" },
            {
                quantity: "31.7",
                unit: "g",
                name: "Blended Oil",
                note: "for searing",
            },
        ],
    },
];

export default function Ingredients() {
    return (
        <div className="ingredientsContainer">
            {recipes.map((recipe) => (
                <div key={recipe.name}>
                    <div className="header">{recipe.name}</div>
                    <table>
                        <tbody>
                            {recipe.ingredients.map((ingredient, index) => (
                                <tr key={index}>
                                    <td>{ingredient.quantity}</td>
                                    <td> {ingredient.unit}</td>
                                    <td>{ingredient.name}</td>
                                    {ingredient.note && (
                                        <td>{ingredient.note}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
