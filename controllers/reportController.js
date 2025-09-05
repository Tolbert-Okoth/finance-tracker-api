const Transaction = require("../models/Transaction");

// @desc Get summary (income, expenses, balance)
exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user });

    const income = transactions
      .filter(t => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);

    const expenses = transactions
      .filter(t => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);

    const balance = income - expenses;

    res.json({ income, expenses, balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get monthly breakdown
exports.getMonthlyReport = async (req, res) => {
  try {
    const transactions = await Transaction.aggregate([
      { $match: { userId: req.user } },
      {
        $group: {
          _id: { month: { $month: "$date" }, year: { $year: "$date" }, type: "$type" },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } }
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get top categories (expenses)
exports.getTopCategories = async (req, res) => {
  try {
    const categories = await Transaction.aggregate([
      { $match: { userId: req.user, type: "expense" } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      },
      { $sort: { total: -1 } },
      { $limit: 5 }
    ]);

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
