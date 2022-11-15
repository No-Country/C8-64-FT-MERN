const express = require('express');
const {exportaModeloTipoShablon} = require('../models/model');
const {exportaModeloTipoPrenda} = require('../models/model');
const {exportaModeloTipoPinturaClaro} = require('../models/model');
const {exportaModeloTipoPinturaOscuro} = require('../models/model');



module.exports = {

    //-------------------POSTS----------------------------------
    //POST SHABLON
    postShablon: async (req, res) => {
        let data = new exportaModeloTipoShablon({
            condicion: req.body.condicion,
            valor: req.body.valor
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    //POST PRENDA
    postPrenda: async (req, res) => {
        let data = new exportaModeloTipoPrenda({
            tipo: req.body.tipo,
            valor: req.body.valor
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    //POST PINTURA
    postPinturaClaro: async (req, res) => {
        let data = new exportaModeloTipoPinturaClaro({
            nombre: req.body.nombre,
            valor: req.body.valor
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    postPinturaOscuro: async (req, res) => {
        let data = new exportaModeloTipoPinturaOscuro({
            nombre: req.body.nombre,
            valor: req.body.valor
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    //-------------------FINAL POSTS----------------------------------
    //----------------------------GETS----------------------------------- (todos los gets devuelven el valor para poder hacer los calculos)
    //GET PRENDA
    getPrenda: async (req, res) => {
        try{
            const data = await exportaModeloTipoPrenda.findById(req.params.id);
            res.json(data.valor)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    //GET SHABLON
    getShablon: async (req, res) => {
        try{
            const data = await exportaModeloTipoShablon.findById(req.params.id);
            res.json(data.valor)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    getPinturaClara: async (req, res) => {
        try{
            const data = await exportaModeloTipoPinturaClaro.findById(req.params.id);
            res.json(data.valor)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    getPinturaOscura: async (req, res) => {
        try{
            const data = await exportaModeloTipoPinturaOscuro.findById(req.params.id);
            res.json(data.valor)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    //----------------------------FINAL GETS----------------------------------- 
    //----------------------------PATCHS----------------------------------- 
    updateShablon:  async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
            
            const result = await exportaModeloTipoShablon.findByIdAndUpdate(
                id, updatedData, options
            )
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    updatePrenda:  async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
            
            const result = await exportaModeloTipoPrenda.findByIdAndUpdate(
                id, updatedData, options
            )
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    
};