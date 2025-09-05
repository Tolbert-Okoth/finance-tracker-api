const express = require("express");
const { getSummary, getMonthlyReport, getTopCategories } = require("../controllers/reportController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/summary", authMiddleware, getSummary);
router.get("/monthly", authMiddleware, getMonthlyReport);
router.get("/top-categories", authMiddleware, getTopCategories);

module.exports = router;
