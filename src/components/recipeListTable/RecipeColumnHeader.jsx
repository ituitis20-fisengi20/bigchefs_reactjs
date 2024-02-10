import React from "react";
import Box from '@mui/material/Box';

const RecipeColumnHeader = (props) => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
        }}>
            {props.children}
        </Box>
    );
};

export default RecipeColumnHeader;
