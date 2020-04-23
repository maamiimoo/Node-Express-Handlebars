//router to handle all api request

const express = require("express");
const router = express.Router();
const connection = require ("../models");

router.get("/burgers", async (_, res) => {
   const data = await connection.Burger.findAll();

   res.json(data);
});

router.put("/burger/:id/devour", async (req, res) => {
    const { id } = req.params;
    res.send(id);
    // await connection.Burger.update({
    //     isDevoured: true
    // }, 
    // {
    //     id

    // });
    // res.status(200).end();
});

module.exports = router;