[Home Value Component 


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
            "saleToList": [string],
            "url": [string],
            "__v": 0
        }
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
            "thirtyDayPriceChange": [string],
            "oneYearForcast": [string],
            "comparableHomePrice": [string],
            "marketAppreciationPrice": [string]
        }
      ]
  }

Error Response:
----------------

  Code: 404 | `Not found`
  Content: 

=================

(Multiple) Property Request
========================
Fetches associated data for one property and returns an array of 20 properties with data associated with the current property page

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
    "localHomesData": [
        {
            "id": 2,
            "sellDate": "6/30/2016",
            "sellPrice": "3,779,015",
            "beds": 4,
            "baths": 2,
            "sqft": "3,216",
            "streetAddress": "3648 Cody Terrace",
            "priceSqft": "2,369",
            "saleToList": "92",
            "url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg",
        },
        {
            "id": 3,
            "sellDate": "6/30/2016",
            "sellPrice": "3,779,015",
            "beds": 4,
            "baths": 2,
            "sqft": "3,216",
            "streetAddress": "3648 Cody Terrace",
            "priceSqft": "2,369",
            "saleToList": 92,
            "url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg",
        }, ...
    ],
    "comparableHomesData": [
        {
            "id": 2,
            "sellDate": "2/11/2017",
            "sellPrice": "1,759,186",
            "beds": 2,
            "baths": 3,
            "sqft": "2,986",
            "streetAddress": "4504 Velma Walks",
            "priceSqft": "2,498",
            "url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg",
        },
        {
            "id": 3,
            "sellDate": "2/11/2017",
            "sellPrice": "1,759,186",
            "beds": 2,
            "baths": 3,
            "sqft": "2,986",
            "streetAddress": "4504 Velma Walks",
            "priceSqft": "2,498",
            "url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg",
        },
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
        {
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
        }
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


--------------------------------]