const Transactions = require("../model/Transcation");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res) => {
	try {
		const transactions = await Transcations.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err
		});
	}
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res) => {
	try {
		const transc = req.body;

		const transaction = await Transactions.save(transc);

		return res.status(201).json({
			success: true,
			transaction: transc
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map(val => val.message);

			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error"
			});
		}
	}
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res) => {
	try {
		const transaction = await Transactions.findById(req.params.id);

		if (!transaction) {
			return res.status(404).json({
				success: false,
				error: "No transaction found"
			});
		}

		await transaction.remove();

		return res.status(200).json({
			success: true
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error"
		});
	}
};
