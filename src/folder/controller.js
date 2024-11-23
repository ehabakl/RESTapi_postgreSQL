const pool = require("../../db")
const queries = require("./queries")

const getEntities =(req,res) =>{
    pool.query(queries.getEntities , (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const getMembers =(req,res) =>{
    pool.query(queries.getMembers , (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const getEntityMembers =(req,res) =>{
    pool.query(queries.getEntityMembers , (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports={
    getEntities ,
    getMembers,
    getEntityMembers
}