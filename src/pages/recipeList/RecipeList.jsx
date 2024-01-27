import RecipeTable from "../../components/recipeListTable/RecipeTable";
import Card from "../../components/card/Card";
import "./recipeList.css";
import Layout from "../layout/layout";

const RecipeList = () => {
    return (
        <>
            <Layout>
                <div className="recipeListContainer">
                    <div className="cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div>
                        <RecipeTable />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default RecipeList;
