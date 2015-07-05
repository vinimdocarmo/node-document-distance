# node-document-distance [![Build Status](https://travis-ci.org/vinimdocarmo/node-document-distance.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-document-distance)


## Install

```
$ npm install --save document-distance
```


## Usage

```js
var documentDistance = require('document-distance');

var document1 = 'unicorns are awesome',
	document2 = 'unicorns are amazing';

documentDistance(document1, document2);
//=> 0.8410686705679303
```


## API

### documentDistance(document1, document2)

#### document1

*Required*  
Type: `string`

#### document2

*Required*  
Type: `string`

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
