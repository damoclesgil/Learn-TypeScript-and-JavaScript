(function () {
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };


  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function methodDomGet(params) {
    return this.element;
  }

  // test object
  function createTestObj() {
    this.createObj = function createObjectProto(objectTarget) {
      return Object.prototype.toString.call(objectTarget)
    };

    this.valueObj = function valueObject(stringNameObject) {
      var listType = ['Array', 'Object', 'Function', 'Number', 'String',
        'Boolean', 'Null', 'Undefined'
      ];
      var letterIntial = stringNameObject.split('').slice(0, 1).join().toUpperCase();
      var remainingValue = stringNameObject.slice(1).split('').join('');
      var valueParam = letterIntial + remainingValue;
      var resultList;

      listType.forEach(function (item, index) {
        if (valueParam === item) {
          resultList = item
        }
      })
      return '[' + 'object' + ' ' + resultList + ']';
    };

  }

  DOM.prototype.isArray = function isArray(param) {
    return testObject.createObj(param) === testObject.valueObj('Array');
  }

  DOM.prototype.isObject = function isObject(param) {
    return testObject.createObj(param) === testObject.valueObj('object');
  }

  DOM.prototype.isFunction = function isFunction(param) {
    return testObject.createObj(param) === testObject.valueObj('function');
  }

  DOM.prototype.isNumber = function isNumber(param) {
    return testObject.createObj(param) === testObject.valueObj('number');
  }

  DOM.prototype.isString = function isString(param) {
    return testObject.createObj(param) === testObject.valueObj('string');
  }

  DOM.prototype.isBoolean = function isBoolean(param) {
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.prototype.isNull = function isNull(param) {
    return testObject.createObj(param) === testObject.valueObj('null') ||
      testObject.createObj(param) === testObject.valueObj('undefined');
  }

  window.DOM = DOM;
})()
