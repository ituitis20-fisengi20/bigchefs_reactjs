import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RecipeList from "./pages/recipeList/RecipeList";
import RecipeDetail from "./pages/recipeDetail/RecipeDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes" element={<RecipeList />} />
                    <Route path="/:recipeId" element={<RecipeDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
