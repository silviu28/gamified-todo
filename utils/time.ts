import { Frequency } from "@/types";

export default class Time {
  static DAY = 24 * 3600 * 1000;
  static WEEK = 7 * 24 * 3600 * 1000;
  static MONTH = 30 * 24 * 3600 * 1000;
  static YEAR = 365 * 24 * 3600 * 1000;

  static frequencyToMilis(frequency: Frequency) {
    switch (frequency) {
      case "one-time": return 0;
      case "daily": return this.DAY;
      case "weekly": return this.WEEK;
      case "monthly": return this.MONTH;
      case "yearly": return this.YEAR;
    }
  }
};