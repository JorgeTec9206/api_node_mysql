/* 
* server.js
* @version: 1.0
* @autor: KaanMkt - Jorge Tec
* @descripcion: Api para consultar la base de datos con mysql, cualquier duda o pueden contactarme
* @process: 1
* */

const express = require('express');
const db = require('./app/config/conexion');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors());

// API REST

app.get('/clientes', (req, res) => {
  db.query("SELECT * FROM clientes", (error, data) => {
    if(error) {
      throw error
    }
    res.json({
      clientes: data
    })
  })
})

app.get('/cliente/:id', (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT * FROM clientes WHERE Id = ?"
  db.query(sql, [ID], (error, data) => {
    if(error) {
      throw error
    }
    res.json({ 
      cliente: data
    })
  })
})

app.get('/productos', (req,res) => {
    db.query('SELECT * FROM products', (error, data) => {
        if(error){
            throw error
        }
        res.json({
            productos: data
        })
    })
})

app.get('/producto/:id', (req, res) => {
    const Id = req.params.id;

    const sql =  'SELECT * FROM products WHERE Id = ?'
    db.query(sql, [Id], (error, data) => {
        if(error){
            throw error
        }
        res.json({
            producto: data
        })
    })
})

app.post('/addproducto', (req, res) => {
  console.log(Object.values(req.body))
  const values = Object.values(req.body);
 
  const sql = "INSERT INTO products (nombre, precio, cantidad) VALUES(?,?,?)"
  db.query(sql, values, (error, result) => {
    if(error){
      throw error;
    }
    res.json({
      data:result
    })
  })
  
})

app.delete('/deleteproducto/:id', (req, res) => {
  //const codigo = req.body.codigo
  console.log(req.params.id)
  const ID = req.params.id;
 
  const sql = "DELETE FROM products WHERE Id=?"
  db.query(sql, [ID], (error, result) => {
    if(error){
      throw error;
    }
    res.json({
      data:result
    })
  })
})

app.put('/updateproducto', (req, res) => {
  const values = Object.values(req.body)
  console.log(values)
 
  const sql = "UPDATE products SET nombre=?, precio=?, cantidad=? WHERE Id=?"
  db.query(sql, values, (error, result) => {
    if(error){
      throw error;
    }
    res.json({
      data:result
    })
  })
  
})


app.listen(PORT, () => {
  console.log("Running server on port:", PORT)
})