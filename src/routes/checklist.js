const express = require('express')
const router = express.Router()

// importar o model checklist
const Checklist = require('../models/checklist')

/**
 * GET METHOD
 */
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('pages/checklists/index', { checklists })
    } catch(error) {
        res.status(200).render('pages/error', { error: 'Erro ao exibir as listas' })
    }
})

router.get('/:id', async (req, res) => {
    let { id } = req.params
    
    try {
        let checklist = await Checklist.findById(id)
        res.status(200).render('pages/checklists/show', { checklist })
    } catch(error) {
        res.status(200).render('pages/error', {error: 'Erro ao exibir as as Listas de tarefas'})
    }
})

/**
 * POST METHOD
 */
 router.post('/', async (req, res) => {
    let { name } = req.body

    try {
        let checklist = await Checklist.create({ name })
        return res.status(201).json(checklist)
    } catch(error) {
        return res.status(422).json(error)
    }
})

/**
 * PUT METHOD
 */
router.put('/:id', async (req, res) => {
    let { name } = req.body
    let { id } = req.params

    try {
        let checklist = await Checklist.findByIdAndUpdate(id, {name}, {new: true})
        return res.status(200).json(checklist)
    } catch (error) {
        return res.status(422).json(error)
    }
})

/**
 * DELETE METHOD
 */
router.delete('/:id', async (req, res) => {
    let { id } = req.params
    
    try {
        let checklist = await Checklist.findByIdAndRemove(id)
        return res.status(200).json(checklist)
    } catch (error) {
        return res.status(422).json(error)
    }
})

module.exports = router