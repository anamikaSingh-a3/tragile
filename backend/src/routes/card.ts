import express from 'express'
import { createCard, getListCard } from '../controller/cardController'

const router = express.Router()

router.use('/create',createCard)
router.use('/getByList/:list_id',getListCard )

export default router