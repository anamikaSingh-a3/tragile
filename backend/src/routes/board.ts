import express from 'express'
import {
  createBoard,
  getAllBoard,
  getBoard,
} from '../controller/boardController'

const router = express.Router()

router.post('/create', createBoard)
router.get('/getAll', getAllBoard)
router.get('/:board_id', getBoard)

export default router
