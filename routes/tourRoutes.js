const express = require('express');

const {
  getMonthlyPlan,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  topFiveTours,
  getTourStats,
} = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/tour-plan/:year').get(getMonthlyPlan);

router.route('/top-5-tours').get(topFiveTours, getAllTours);

router.route('/tourStats').get(getTourStats);

router.route('/').get(protect, getAllTours).post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide '), deleteTour);

module.exports = router;
