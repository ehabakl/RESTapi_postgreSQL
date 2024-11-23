const {Router} = require("express")

const controller = require("./controller")
const router = Router()

router.get("/entities" , controller.getEntities)
router.get("/members" , controller.getMembers)
router.get("/entityMembers" , controller.getEntityMembers)

module.exports = router