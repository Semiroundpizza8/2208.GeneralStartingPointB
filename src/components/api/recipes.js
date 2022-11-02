export const fetchRecipes = async () => {
    const response = await axios.get('/api/recipes');
    console.log(response.data);
    return response.data
}