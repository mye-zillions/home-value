#Home Value Component 


##CRUD API 
========

##Static File Request
Fetches static files for correct property page


###URL

`/:propertyId`

###Method: `GET`

###URL Params: 

  Required: 
    `propertyId = [integer]`

###Success Response: 
  Code: 200 
  Content: <html>

----------------------

##Single Property Request
Fetches associated data for one property and returns the data associated with the single property

> Price strings are formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings are formatted as `m/d/yyyy`

###URL

`/api/properties/:propertyId`

###Method: `GET`

###URL Params: 

  Required: 
    `propertyId = [integer]`

###Success Response: 
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

###Error Response:
  Code:
  Content: 

----------------------------

##(Multiple) Property Request
Fetches associated data for one property and returns the data associated with the single property

> Price strings are formatted with commas at appropriate places without the $ -- i.e. `53,235`

> Date strings are formatted as `m/d/yyyy`

###URL

`/api/properties`

###Method: `GET`

###Success Response: 
  Code: 200 
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

----------------------------------


Create / POST - create a new item

---------------------------------



Update / PUT - update an item
-----------------------------
-----------------------------

Delete / DELETE - delete an item
-------------------------------
--------------------------------