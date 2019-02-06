class Utils {
  static hrtimeToMs(hr) {
    return Math.ceil(hr[0] * 1e3 + hr[1] / 1e6);
  }

  static randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
}


module.exports = Utils;
