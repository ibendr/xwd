// bind takes a function and 'binds' the 'this'
//   variable in it to a particular target object,
// i.e. returns a version of the function which uses
//    the target as 'this'
Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;	// the function being bound
  return function (args) {
    if (!(args instanceof Array)) {
      args = [args];
    }
    self.apply(target, args);
  };
};
