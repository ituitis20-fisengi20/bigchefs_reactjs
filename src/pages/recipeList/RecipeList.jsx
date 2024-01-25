import RecipeTable from "../../components/recipeListTable/RecipeTable";
import Sidebar from "../../components/sidebar/Sidebar";
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
                    <div className="tableContainer">
                        <RecipeTable />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default RecipeList;
