import { Router } from 'express'
import { getBusiness, getBusinessById, createBusiness, addProduct } from '../controllers/business.controller.js'

const router = Router()

router.get('/', getBusiness)
router.get('/', getBusinessById)
router.post('/', createBusiness)
router.put('/', addProduct)