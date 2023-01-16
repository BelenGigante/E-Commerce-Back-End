const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll();
    res.json(categoryData);
  } catch (err){
    console.error(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const idData = await Product.findByPk(req.params.id, {
      include:[{
        model: Trip,
        attributes: [
          'id',
          'traveller_amount',
          'trip_budget',
        ]
      }]
    });
    res.json(locationData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
