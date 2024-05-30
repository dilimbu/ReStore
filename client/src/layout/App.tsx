

import { useEffect, useState } from 'react'
import '../App.css'
import { Product } from '../models/product';
import Catalog from '../features/Catalog';
import Header from './Header';
import { Container, CssBaseline, FormControl, FormControlLabel, FormGroup, Switch, ThemeProvider, createTheme } from '@mui/material';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: '#eaeaea'
      }
    }
  })

  // const [products, setProducts] = useState([
  //   { name: 'Ibanez MIJ', price: 100.00 },
  //   { name: 'Jackson MIJ', price: 200.00 }
  // ]);

  useEffect(() => {
    setProducts([{ id: 100, name: 'Ibanez', price: 120.00, description: 'Ibanez Prestige' }])
  }, [])

  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {


    // setProducts(prevState => [...prevState, 
    //   { name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])

    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      description: 'some product desc'
    }])
  }

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      {/* <FormControl component='fieldset'>
        <FormGroup aria-label='position' row>
          <FormControlLabel value='end' labelPlacement="end" control={<Switch onChange={(e) => setDarkMode(e.target.checked)} />} label={paletteType} />
        </FormGroup>
      </FormControl> */}

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog products={products} addProduct={addProduct}></Catalog>
      </Container>



      {/* <Typography variant='h3'>Re-Store</Typography> */}
      {/* <h3 style={{ color: 'red' }}>Re-Store</h3> */}
      {/* <ul>
        { { products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>)
        )} }
        {
          products.map(product => (
            <li key={product.id}>{product.name}-{product.price}</li>
          ))
        }
      </ul>
      <button onClick={addProduct}>Add Product</button> */}
    </ThemeProvider>
  )
}

export default App
