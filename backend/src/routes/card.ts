import express from 'express'
import { createCard, getAllCard, getListCard, updateCardDescription, updateCardList } from '../controller/cardController'

const router = express.Router()

router.use('/create',createCard)
router.use('/getAll',getAllCard)
router.use('/getByList/:list_id',getListCard )
router.use('/update', updateCardDescription)
router.use('/updateList', updateCardList)

export default router