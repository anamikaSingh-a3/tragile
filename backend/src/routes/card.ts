import express from 'express'
import { createCard, getAllCard, getListCard } from '../controller/cardController'

const router = express.Router()

router.use('/create',createCard)
router.use('/getAll',getAllCard)
router.use('/getByList/:list_id',getListCard )

export default router