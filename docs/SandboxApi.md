# lyft.SandboxApi

All URIs are relative to *https://api.lyft.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setPrimeTime**](SandboxApi.md#setPrimeTime) | **PUT** /sandbox/primetime | Preset Prime Time percentage
[**setRideStatus**](SandboxApi.md#setRideStatus) | **PUT** /sandbox/rides/{id} | Propagate ride through ride status
[**setRideTypeAvailability**](SandboxApi.md#setRideTypeAvailability) | **PUT** /sandbox/ridetypes/{ride_type} | Driver availability for processing ride request
[**setRideTypes**](SandboxApi.md#setRideTypes) | **PUT** /sandbox/ridetypes | Preset types of rides for sandbox


<a name="setPrimeTime"></a>
# **setPrimeTime**
> setPrimeTime(request)

Preset Prime Time percentage

Preset a Prime Time percentage in the region surrounding the specified location. This Prime Time percentage will be applied when requesting cost, or when requesting a ride in sandbox mode. 

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

let apiInstance = new lyft.SandboxApi();

let request = new lyft.SandboxPrimetime(); // SandboxPrimetime | Prime Time to be preset in the region surrounding the lat, lng

apiInstance.setPrimeTime(request).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SandboxPrimetime**](SandboxPrimetime.md)| Prime Time to be preset in the region surrounding the lat, lng | 

### Return type

null (empty response body)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRideStatus"></a>
# **setRideStatus**
> SandboxRideUpdate setRideStatus(id, request)

Propagate ride through ride status

Propagate a sandbox-ride through various ride status 

### Example
```javascript
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let User Authentication = defaultClient.authentications['User Authentication'];
User Authentication.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.SandboxApi();

let id = "id_example"; // String | The ID of the ride

let request = new lyft.SandboxRideStatus(); // SandboxRideStatus | status to propagate the ride into

apiInstance.setRideStatus(id, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the ride | 
 **request** | [**SandboxRideStatus**](SandboxRideStatus.md)| status to propagate the ride into | 

### Return type

[**SandboxRideUpdate**](SandboxRideUpdate.md)

### Authorization

[User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRideTypeAvailability"></a>
# **setRideTypeAvailability**
> setRideTypeAvailability(rideType, request)

Driver availability for processing ride request

Set driver availability for the provided ride_type in the city/region surrounding the specified location 

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

let apiInstance = new lyft.SandboxApi();

let rideType = "rideType_example"; // String | 

let request = new lyft.SandboxDriverAvailability(); // SandboxDriverAvailability | Driver availability to be preset in the region surrounding the lat, lng

apiInstance.setRideTypeAvailability(rideType, request).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rideType** | **String**|  | 
 **request** | [**SandboxDriverAvailability**](SandboxDriverAvailability.md)| Driver availability to be preset in the region surrounding the lat, lng | 

### Return type

null (empty response body)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRideTypes"></a>
# **setRideTypes**
> SandboxRideType setRideTypes(request)

Preset types of rides for sandbox

The sandbox-ridetypes endpoint allows you to preset the ridetypes in the region surrounding the specified latitude and longitude to allow testing different scenarios 

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

let apiInstance = new lyft.SandboxApi();

let request = new lyft.SandboxRideType(); // SandboxRideType | Ridetypes to be preset in the region surrounding the lat, lng

apiInstance.setRideTypes(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SandboxRideType**](SandboxRideType.md)| Ridetypes to be preset in the region surrounding the lat, lng | 

### Return type

[**SandboxRideType**](SandboxRideType.md)

### Authorization

[Client Authentication](../README.md#Client Authentication), [User Authentication](../README.md#User Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

