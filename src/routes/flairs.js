const express = require("express");
const router = express.Router();

const flairController = require("../controllers/flairController");

router.get("/topics/:topicId/flairs/new", flairController.new);
router.get("/topics/:topicId/flairs/:flairId/edit", flairController.edit);
router.post("/topics/:topicId/flairs/create", flairController.create);
router.post("/topics/:topicId/flairs/:flairId/update", flairController.update);
router.post("/topics/:topicId/flairs/:flairId/delete", flairController.destroy);



module.exports = router;