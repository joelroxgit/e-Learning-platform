import { Router } from "express";

const router = Router()

router.route('/').get().post()
router.route('/:id').put().delete().get()