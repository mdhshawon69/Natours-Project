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

const router = express.Router();

router.route('/tour-plan/:year').get(getMonthlyPlan);

router.route('/top-5-tours').get(topFiveTours, getAllTours);

router.route('/tourStats').get(getTourStats);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
