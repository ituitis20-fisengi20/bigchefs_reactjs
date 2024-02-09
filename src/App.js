import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RecipeList from "./pages/recipeList/RecipeList";
import RecipeDetail from "./pages/recipeDetail/RecipeDetail";
import Sample from "./components/sample/Sample";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sample />} />
                    <Route path="/recipes" element={<RecipeList />} />
                    <Route
                        path="/recipes/:recipeId"
                        element={<RecipeDetail />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
