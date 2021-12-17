import express from 'express';

import { createWorkspace, getAllWorkspace, getWorkspace } from '../controller/workspaceController';

const router = express.Router()

router.post('/create', createWorkspace)
router.get('/getAll', getAllWorkspace)
router.get('/:workspace_id', getWorkspace)

export default router
