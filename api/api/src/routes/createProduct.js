const { Router } = require('express');
const { Category, Mark, Product} = require('../db');
const p = require('../../productos.json');

const router = Router()
//routes cargar db
const categorias = [{title:'Comida'}, {title:'Juguetes'}, {title:'Paseo'},{title:'Cuidado'} , {title: 'Para la casa'}, ];



const createCategory = async () => {
  try {
    await Category.bulkCreate(categorias)  
   return  'Se crearon categorias'
  } catch (error) {
      console.log(error)
  }

}


const createProduct = async () => {
  try {
let category = '';
let producto = '';
let allProducts = []
let agregarCategory = []



  for (let i = 0; i < p.products.length; i++) {
      category = await Category.findOne({
          where: { title: p.products[i].category }
      })
     
      producto = await Product.create({
          title: p.products[i].title,
          price: p.products[i].price,
          detail: p.products[i].detail,
          img: p.products[i].img,
          stock: p.products[i].stock,
      })

     
      let addC = producto.addCategory(category);
      allProducts.push(producto)
      agregarCategory.push(addC)
      
  }

 await Promise.all([...allProducts, ...agregarCategory ])

  return 'La base de datos se ha cargado con exito'
  } catch (error) {
      console.log(error)
  }
}



const filterByCategory = async (producto) => {
  const data = await Category.findAll({
    where: { title: categorias },
    include: {
      model: Product,
      attributes: ["id", "title", "price", "detail", "img", "stock"],
      through: {
        attributes: [],
      },
    },
  });
  return data[0].Products;
};




router.get('/db', async (req, res) => {
try {
  const categories = await createCategory();


  const products = await createProduct();

  return res.status(200).json(products)

} catch (error) {
  console.log(error)
  return res.status(404).json(error)
}
})

router.get('/filter', async (req, res) => {
    try {
            const { tipo, categorias} = req.query;
            
            const data = await filterByCategoryAndMark(tipo, categorias);
            res.json(data);
        
    } catch (error) {
        console.log(error)
  return res.status(404).json(error)
    }
})
module.exports = router;