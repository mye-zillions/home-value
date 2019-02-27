Home Value Component 


CRUD API 
========
Property Creation
=================
Writes an entry for a single property to database

> Price strings should be formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings should be formatted as `m/d/yyyy`

URL
-------------

`/api/properties/:propertyId`

Method: `POST`
----------

URL Params: 
----------

  Required: 
    `propertyId = [integer]`

Data Params: 
-----------
  Required: 
  {
    "singlePropertyData": [
        {
            "_id": [string],
            "id": [int],
            "zestimationPrice": [string],
            "startPriceRange": [string],
            "endPriceRange": [string],
            "thirtyDayPriceChange": [string],
            "oneYearForcast": [string],
            "propertyLastSalePrice": [string],
            "propertLastSaleDate": [string],
            "comparableHomePrice": [string],
            "marketAppreciationPrice": [string],
            "localSalesAvg": [string],
            "sellDate": [string],
            "sellPrice": [string],
            "beds": [int],
            "baths":[int],
            "sqft": "3,427",
            "streetAddress": [string],
            "priceSqft": [string],
            "saleToList": [int],
            "url": [string],
            "__v": 0
        }
      ]
  }
Success Response: 
-----------------
  Code: 201 | `Created`

-----------------

Static File Request
====================

Fetches static files for correct property page


URL
--------

`/:propertyId`

Method: `GET`
-------------
URL Params: 
----------------

  Required: 
    `propertyId = [integer]`

Data Params: 
----------------
  none

Success Response: 
----------------
  Code: 200 
  Content: <html>

Error Response: 
----------------
  Code: 404 | `not found`

===================

Single Property Request
======================

Fetches associated data for one property and returns the data associated with the single property

> Price strings are formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings are formatted as `m/d/yyyy`

URL
----------------

`/api/properties/:propertyId`

Method: `GET`
----------------

URL Params:
---------------- 

  Required: 
    `propertyId = [integer]`

Data Params: 
----------------
  none

Success Response:
------------------------ 
  Code: 200 
  Content: `{
    "singlePropertyData": [
        {
            "_id": [string],
            "id": [int],
            "zestimationPrice": [string],
            "startPriceRange": [string],
            "endPriceRange": [string],
            "thirtyDayPriceChange": [string],
            "oneYearForcast": [string],
            "propertyLastSalePrice": [string],
            "propertLastSaleDate": [string],
            "comparableHomePrice": [string],
            "marketAppreciationPrice": [string],
            "localSalesAvg": [string],
            "sellDate": [string],
            "sellPrice": [string],
            "beds": [int],
            "baths":[int],
            "sqft": "3,427",
            "streetAddress": [string],
            "priceSqft": [string],
            "saleToList": [int],
            "url": [string],
            "__v": 0
        }
      ]`
  }

Error Response:
----------------

  Code: 404 | `Not found`
  Content: 

=================

(Multiple) Property Request
========================
Fetches associated data for one property and returns the data associated with the single property

> Price strings are formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings are formatted as `m/d/yyyy`

URL
----------------

`/api/properties`

Method: `GET`
----------------

Success Response:
----------------------- 
  Code: 200 | `OK`
  Content:
{
    "propertyData": [
        {
            "_id": "5c72f65247c1986e9fb0da93",
            "id": 1,
            "zestimationPrice": "1,511,183",
            "startPriceRange": "3,005,726",
            "endPriceRange": "1,193,252",
            "thirtyDayPriceChange": "18,336",
            "oneYearForcast": "520,256",
            "propertyLastSalePrice": "466,562",
            "propertLastSaleDate": "5/7/2014",
            "comparableHomePrice": "512,994",
            "marketAppreciationPrice": "407,497",
            "localSalesAvg": "449,064",
            "sellDate": "10/10/2019",
            "sellPrice": "4,815,988",
            "beds": 5,
            "baths": 3,
            "sqft": "3,427",
            "streetAddress": "3122 Welch Estates",
            "priceSqft": "1,609",
            "saleToList": 97,
            "url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg",
            "__v": 0
        }, ...
    ]

Error Response:
----------------------- 

  Code: 404 | `Not found`


----------------------------------

Update single property
======================

Updates a listing for a single property in the database

> Price strings should be formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings should be formatted as `m/d/yyyy`

URL: 
----------------------- 


`/api/properties/:propertyId`

Method: `PUT`
----------------------- 

URL Params: 
----------------------- 

  Required: 
    `propertyId = [integer]`

Data Params: 
----------------------- 

  Required: 
  {
    "singlePropertyData": [
        {
            "_id": [string],
            "id": [int],
            "zestimationPrice": [string],
            "startPriceRange": [string],
            "endPriceRange": [string],
            "thirtyDayPriceChange": [string],
            "oneYearForcast": [string],
            "propertyLastSalePrice": [string],
            "propertLastSaleDate": [string],
            "comparableHomePrice": [string],
            "marketAppreciationPrice": [string],
            "localSalesAvg": [string],
            "sellDate": [string],
            "sellPrice": [string],
            "beds": [int],
            "baths":[int],
            "sqft": "3,427",
            "streetAddress": [string],
            "priceSqft": [string],
            "saleToList": [int],
            "url": [string],
            "__v": 0
        }
      ]
  }

Success Response: 
----------------------- 

  Code: 200 | `OK`

Error Response: 
----------------------- 

  Code: 404 | `Not found`

======================

Single Property Deletion
----------------------- 

Deletes an entry for a single property from the database

URL
----------------------- 


`/api/properties/:propertyId`

Method: `DELETE`
----------------------- 


URL Params: 
----------------------- 


  Required: 
    `propertyId = [integer]`


Success Response: 
----------------------- 

  Code: 200 | `OK`

Error Response: 
----------------------- 

  Code:  405 | `not allowed`
  Code: 404 | `item not found`


--------------------------------