# lyft.UserApi

All URIs are relative to *https://api.lyft.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRide**](UserApi.md#cancelRide) | **POST** /rides/{id}/cancel | Cancel a ongoing requested ride
[**getProfile**](UserApi.md#getProfile) | **GET** /profile | The user&#39;s general info
[**getRide**](UserApi.md#getRide) | **GET** /rides/{id} | Get the ride detail of a given ride ID
[**getRideReceipt**](UserApi.md#getRideReceipt) | **GET** /rides/{id}/receipt | Get the receipt of the rides.
[**getRides**](UserApi.md#getRides) | **GET** /rides | List rides
[**newRide**](UserApi.md#newRide) | **POST** /rides | Request a Lyft
[**setRideDestination**](UserApi.md#setRideDestination) | **PUT** /rides/{id}/destination | Update the destination of the ride
[**setRideRating**](UserApi.md#setRideRating) | **PUT** /rides/{id}/rating | Add the passenger&#39;s rating, feedback, and tip


<a name="cancelRide"></a>
# **cancelRide**
> cancelRide(id, opts)

Cancel a ongoing requested ride

Cancel a ongoing ride which was requested earlier by providing the ride id. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let id = "id_example"; // String | The ID of the ride

let opts = { 
  'request': new lyft.CancellationRequest() // CancellationRequest | 
};
apiInstance.cancelRide(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 
 **request** | [**CancellationRequest**](CancellationRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfile"></a>
# **getProfile**
> Profile getProfile()

The user&#39;s general info

The v1 of this endpoint returns the user&#39;s ID, v2 will return more general info about the user. We require authentication for this endpoint, so we extract the user ID from the access token. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();
apiInstance.getProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Profile**](Profile.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRide"></a>
# **getRide**
> RideDetail getRide(id)

Get the ride detail of a given ride ID

Get the status of a ride along with information about the driver, vehicle and price of a given ride ID 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let id = "id_example"; // String | The ID of the ride

apiInstance.getRide(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 

### Return type

[**RideDetail**](RideDetail.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRideReceipt"></a>
# **getRideReceipt**
> RideReceipt getRideReceipt(id)

Get the receipt of the rides.

Get the receipt information of a processed ride by providing the ride id. Receipts will only be available to view once the payment has been processed. In the case of canceled ride, cancellation penalty is included if applicable. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let id = "id_example"; // String | The ID of the ride

apiInstance.getRideReceipt(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 

### Return type

[**RideReceipt**](RideReceipt.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRides"></a>
# **getRides**
> RidesResponse getRides(startTime, opts)

List rides

Get a list of past &amp; current rides for this passenger. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Restrict to rides starting after this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00 

let opts = { 
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to rides starting before this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00 
  'limit': 10 // Number | The maximum number of rides to return. The default limit is 10 if not specified. The maximum allowed value is 50, an integer greater that 50 will return at most 50 results. 
};
apiInstance.getRides(startTime, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Restrict to rides starting after this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00  | 
 **endTime** | **Date**| Restrict to rides starting before this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00  | [optional] 
 **limit** | **Number**| The maximum number of rides to return. The default limit is 10 if not specified. The maximum allowed value is 50, an integer greater that 50 will return at most 50 results.  | [optional] [default to 10]

### Return type

[**RidesResponse**](RidesResponse.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="newRide"></a>
# **newRide**
> RideRequest newRide(request)

Request a Lyft

Request a Lyft come pick you up at the given location. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let request = new lyft.Ride(); // Ride | Ride request information

apiInstance.newRide(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Ride**](Ride.md)| Ride request information | 

### Return type

[**RideRequest**](RideRequest.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRideDestination"></a>
# **setRideDestination**
> Location setRideDestination(id, request)

Update the destination of the ride

Add or update the ride&#39;s destination. Note that the ride must still be active (not droppedOff or canceled), and that destinations on Lyft Line rides can not be changed. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let id = "id_example"; // String | The ID of the ride

let request = new lyft.Location(); // Location | The coordinates and optional address of the destination

apiInstance.setRideDestination(id, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 
 **request** | [**Location**](Location.md)| The coordinates and optional address of the destination | 

### Return type

[**Location**](Location.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRideRating"></a>
# **setRideRating**
> setRideRating(id, request)

Add the passenger&#39;s rating, feedback, and tip

Add the passenger&#39;s 1 to 5 star rating of the ride, optional written feedback, and optional tip amount in minor units and currency. The ride must already be dropped off, and ratings must be given within 24 hours of drop off. For purposes of display, 5 is considered the default rating. When this endpoint is successfully called, payment processing will begin. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let id = "id_example"; // String | The ID of the ride

let request = new lyft.RatingRequest(); // RatingRequest | The rating and optional feedback

apiInstance.setRideRating(id, request).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 
 **request** | [**RatingRequest**](RatingRequest.md)| The rating and optional feedback | 

### Return type

null (empty response body)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

