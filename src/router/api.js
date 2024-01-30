const  express = require('express');
const router = express.Router()
const auth = require('../middlewares/auth')
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')




router.post('/registration',userController.registration);
router.post('/login/:email/:password',userController.userLogin);




router.post('/create-task',auth,taskController.createTask)
router.get('/read-task',taskController.readTask)
router.get('/task-detail/:ID',auth,taskController.Task)
router.post('/update-task/:ID',auth,taskController.updateTask)
router.get('/delete-task/:ID',auth,taskController.deleteTask)
router.get('/detail-task',auth,taskController.detailTask)


module.exports=router;