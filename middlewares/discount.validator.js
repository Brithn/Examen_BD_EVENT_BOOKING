// function validateDiscount(req, res, next) {
//   const { percentage, start_date, end_date } = req.body;

//   if (percentage < 1 || percentage > 100) {
//     return res.status(400).json({ message: "El porcentaje debe estar entre 1 y 100" });
//   }

//   if (new Date(start_date) >= new Date(end_date)) {
//     return res.status(400).json({ message: "La fecha de inicio debe ser anterior a la fecha de fin" });
//   }

//   next();
// }

// module.exports = validateDiscount;
