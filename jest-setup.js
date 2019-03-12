const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  };
window.URL.createObjectURL =
window.URL.createObjectURL || function () {};
module.exports = {
  enzyme,
  snapshotSerializers: ['jest-emotion'],
};
