import express from 'express'
import { PrismaClient } from '@prisma/client'
//const express = require('express')


const app = express()
app.use(express.json())


const prisma = new PrismaClient()
//Criando um usuario 


app.post('/usuarios', async (req, res) => {
     
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
            
        }
    })

    res.status(201).json(req.body)
})




// Listando usuario 

app.get('/usuarios', async function(req, res) {
    
    let users = []
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name:req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })

    } else {
        users = await prisma.user.findMany();
    }
  
 
        res.status(201).json(users);
    });





// Editar  um usuario 


app.put('/usuarios/:id', async (req, res) => {
   
   // console.log(req)  -- Para saber  a origem do paramet

    await prisma.user.update({
        where: {
            id: req.params.id

        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
            
        }
    })

    res.status(201).json(req.body)

})




// DeLetar 

app.delete('/usuarios/:id', async function (req, res) {
    await prisma.user.delete ({
        where: {
            id: req.params.id
        },
    })
    res.status(201).json({message: "Usuario deletado com Sucesso"})



})

    
app.listen(3000)



/*  CRIAR  API 


--  CRIAR UM USURARIO
--  LISTAR  TODOS OS USUARIOS 
-- EDITAR UM USIUARIO
-- DELETAR UM USUARIO

*/







//Variaveis
//app._router

  //console.log(req.body)


/*

  Mongo Db 

TesteDB

  Luc123456789

  mongodb+srv://TesteDB:<db_password>@testedb.9hgnz.mongodb.net/?retryWrites=true&w=majority&appName=TesteDB

  */