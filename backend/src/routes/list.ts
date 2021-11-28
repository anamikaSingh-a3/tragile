import express from 'express'
import { createList, getBoardList } from '../controller/listController';

const router = express.Router()

router.post('/create',createList)
router.get('/getByBoard/:board_id',getBoardList)

export default router