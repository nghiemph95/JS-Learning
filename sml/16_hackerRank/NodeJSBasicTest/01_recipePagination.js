const recipes = require("../recipes.json");
const router = require("express").Router();

router.get("/", (req, res) => {
  /*
        Extracting variables from query and setting their default values
    */
  let { page = 1, limit = 3 } = req.query;

  /*
        Default page or limit
        Finding index of the first element 'page = n'
        P1 -->  (1 * 3) - 3 = 0
        P2 -->  (2 * 3) - 3 = 3
        P3 -->  (3 * 3) - 3 = 6 
        When 'limit=n'
        P1 -->  (1 * 2)  - 2 = 0
        P2 -->  (2 *  2) - 2 = 2
        P3 -->  (3 *  2) - 2 = 4
    */
  const startIndex = page * limit - limit;

  /* 
        Getting selected elements from the array - 
        first parameter means where should we start, 
        second parameter means how many elements should we get
        E.G from tests case 'recipes?limit=2&page=3'
        slice start --> startIndex === (3 * 2 ) - 2 = 4
        slice end  --> 4 + 2 = 6
        
        result --> recipe.slice(4,6)
        
        0	
             id	5
             name	"Cranberry and Apple Stuffed Acorn Squash Recipe"
        1	
             id	6
             name	"Mic's Yorkshire Puds
    */
  const paginatedRecipes = recipes.slice(
    startIndex,
    startIndex + parseInt(limit)
  );

  res.status(200).json(paginatedRecipes);
});

module.exports = router;
