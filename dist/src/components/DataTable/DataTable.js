"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RowContext = _react.default.createContext();

var DataTable = function DataTable(_ref) {
  var theData = _ref.theData,
      theColumns = _ref.theColumns,
      rest = _objectWithoutProperties(_ref, ["theData", "theColumns"]);

  var nFields = 0;
  var theHeader = Object.values(theColumns).map(function (item) {
    nFields++;
    return _react.default.createElement("th", {
      width: item.width,
      style: {
        borderBottom: '1px solid darkgrey'
      }
    }, item.name);
  });
  var theRows = theData.map(function (item) {
    return _react.default.createElement(RowContext.Provider, {
      key: item.id,
      value: {
        item: item
      }
    }, _react.default.createElement(Row, {
      item: item,
      theColumns: theColumns
    }));
  });
  var theFooter = rest.footer === '' ? _react.default.createElement(_react.default.Fragment, null) : _react.default.createElement("tr", null, _react.default.createElement("td", {
    style: {
      borderTop: '1px solid darkgrey'
    },
    colSpan: nFields
  }, rest.footer));

  var style = _defineProperty({
    width: '95%',
    backgroundColor: rest.bodyColor || 'white',
    padding: '5px',
    margin: '0px',
    border: '0px'
  }, "border", '2px solid darkgrey');

  return _react.default.createElement("center", null, _react.default.createElement("table", {
    style: style
  }, _react.default.createElement("thead", null, theHeader), _react.default.createElement("tbody", null, theRows, theFooter)));
};

exports.DataTable = DataTable;

var Row = function Row(_ref2) {
  var theColumns = _ref2.theColumns;

  var _React$useContext = _react.default.useContext(RowContext),
      item = _React$useContext.item,
      color = _React$useContext.color;

  var getSty = function getSty(field, color, bgColor) {
    return {
      padding: '2px',
      margin: '0px',
      border: '0px',
      borderRight: '1px solid darkgrey',
      textAlign: theColumns[field] && theColumns[field].align || 'left',
      color: color || 'black',
      backgroundColor: bgColor || 'white'
    };
  };

  var getCols = function getCols(row) {
    console.log(row);
    var val = Object.keys(theColumns).map(function (field) {
      if (theColumns[field].displayFunc) return _react.default.createElement("td", {
        style: getSty(field, row.color || theColumns[field].color, row.bgColor || theColumns[field].bgColor)
      }, theColumns[field].displayFunc(field, row));
      return _react.default.createElement("td", {
        style: getSty(field, row.color || theColumns[field].color, row.bgColor || theColumns[field].bgColor)
      }, row[field]);
    });
    return val;
  };

  return _react.default.createElement("tr", {
    style: {
      padding: '0px',
      margin: '0px',
      border: '0px',
      backgroundColor: color
    }
  }, getCols(item));
};

//# sourceMappingURL=DataTable.jsx.map