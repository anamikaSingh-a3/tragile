import express from 'express';

import { createBoard, getAllBoard, getBoard, getWorkspaceBoard } from '../controller/boardController';

const router = express.Router()

router.post('/create', createBoard)
router.get('/getAll', getAllBoard)
router.get('/:board_id', getBoard)
router.get('/getByWorkspace/:workspace_id', getWorkspaceBoard)

export default router
