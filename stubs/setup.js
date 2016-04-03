// test statuses stored here
var test_statuses = [ ];
var current_test;

// assertion failure
function fail (actual, expected, message, operator) {
  test_statuses.push({
    actual:       actual,
    expected:     expected,
    message:      message,
    operator:     operator,
    status:       "fail",
    current_test: current_test
  });
}

// assertion ok
function ok (actual, expected, message) {
  test_statuses.push({
    actual:       actual,
    expected:     expected,
    status:       "pass",
    message:      message,
    current_test: current_test
  });
}

// assert methods
var assert = {
  equal: function (actual, expected, message) {
    if (actual !== expected) {
      fail(actual, expected, message, "==");
    } else {
      ok(actual, expected, message);
    }
  }
};

// check for setup method
if (typeof test_setup === 'function') {
  test_setup();
}
