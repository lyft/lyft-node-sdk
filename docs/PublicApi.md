# lyft.PublicApi

All URIs are relative to *https://api.lyft.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCost**](PublicApi.md#getCost) | **GET** /cost | Cost estimates
[**getDrivers**](PublicApi.md#getDrivers) | **GET** /drivers | Available drivers nearby
[**getETA**](PublicApi.md#getETA) | **GET** /eta | Pickup ETAs
[**getRideTypes**](PublicApi.md#getRideTypes) | **GET** /ridetypes | Types of rides


<a name="getCost"></a>
# **getCost**
> CostEstimateResponse getCost(startLat, startLng, opts)

Cost estimates

Estimate the cost of taking a Lyft between two points. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
let Client Authentication = defaultClient.authentications['Client Authentication'];
Client Authentication.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.PublicApi();

let startLat = 1.2; // Number | Latitude of the starting location

let startLng = 1.2; // Number | Longitude of the starting location

let opts = { 
  'rideType': "rideType_example", // String | ID of a ride type
  'endLat': 1.2, // Number | Latitude of the ending location
  'endLng': 1.2 // Number | Longitude of the ending location
};
apiInstance.getCost(startLat, startLng, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startLat** | **Number**| Latitude of the starting location | 
 **startLng** | **Number**| Longitude of the starting location | 
 **rideType** | **String**| ID of a ride type | [optional] 
 **destinationLat** | **Number**| Latitude of the destination location | [optional] 
 **destinationLng** | **Number**| Longitude of the destination location | [optional] 

### Return type

[**CostEstimateResponse**](CostEstimateResponse.md)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDrivers"></a>
# **getDrivers**
> NearbyDriversResponse getDrivers(lat, lng)

Available drivers nearby

The drivers endpoint returns a list of nearby drivers&#39; lat and lng at a given location. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
let Client Authentication = defaultClient.authentications['Client Authentication'];
Client Authentication.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.PublicApi();

let lat = 1.2; // Number | Latitude of a location

let lng = 1.2; // Number | Longitude of a location

apiInstance.getDrivers(lat, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude of a location | 
 **lng** | **Number**| Longitude of a location | 

### Return type

[**NearbyDriversResponse**](NearbyDriversResponse.md)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getETA"></a>
# **getETA**
> EtaEstimateResponse getETA(lat, lng, opts)

Pickup ETAs

The ETA endpoint lets you know how quickly a Lyft driver can come get you 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
let Client Authentication = defaultClient.authentications['Client Authentication'];
Client Authentication.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.PublicApi();

let lat = 1.2; // Number | Latitude of a location

let lng = 1.2; // Number | Longitude of a location

let opts = { 
  'destinationLat': 1.2, // Number | Latitude of destination location
  'destinationLng': 1.2, // Number | Longitude of destination location
  'rideType': "rideType_example", // String | ID of a ride type
};
apiInstance.getETA(lat, lng, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude of a location | 
 **lng** | **Number**| Longitude of a location | 
 **destinationLat** | **Number**| Latitude of destination location | [optional] 
 **destinationLng** | **Number**| Longitude of destination location | [optional] 
 **rideType** | **String**| ID of a ride type | [optional] 

### Return type

[**EtaEstimateResponse**](EtaEstimateResponse.md)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRideTypes"></a>
# **getRideTypes**
> RideTypesResponse getRideTypes(lat, lng, opts)

Types of rides

The ride types endpoint returns information about what kinds of Lyft rides you can request at a given location. 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
let Client Authentication = defaultClient.authentications['Client Authentication'];
Client Authentication.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.PublicApi();

let lat = 1.2; // Number | Latitude of a location

let lng = 1.2; // Number | Longitude of a location

let opts = { 
  'rideType': "rideType_example", // String | ID of a ride type
};
apiInstance.getRideTypes(lat, lng, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude of a location | 
 **lng** | **Number**| Longitude of a location | 
 **rideType** | **String**| ID of a ride type | [optional] 

### Return type

[**RideTypesResponse**](RideTypesResponse.md)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

