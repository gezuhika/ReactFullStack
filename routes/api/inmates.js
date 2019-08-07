const router = require("express").Router();
const inmateController = require("../../controllers/inmateController");

// Matches with "/api/inmates"
router.route("/")
  .get(inmateController.findAll)
  .post(inmateController.create);

// Matches with "/api/inmates/:id"
router
  .route("/:id")
  .get(inmateController.findById)
  .put(inmateController.update)
  .delete(inmateController.remove);

module.exports = router;
