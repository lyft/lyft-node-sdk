# Lyft Node SDK

node-lyft is a Node client library for accessing the [Lyft API](https://developer.lyft.com/docs).

## Registration
You must first create a Lyft Developer account [here](https://www.lyft.com/developers).
Once registered, create a [new application here](https://https://www.lyft.com/developers/manage).
Your new application will be assigned a Client ID and Client Secret (for use with two- or three-legged OAuth to generate bearer tokens and User Authentication) and a Client Token (for use with public endpoints that don't require user context/Client Authentication).

## Installation

#### npm

Install the latest version via [npm](https://docs.npmjs.com/cli/install):

```shell
npm install node-lyft
```

#### yarn

Install the latest version via [yarn](https://yarnpkg.com/lang/en/docs/install/):

```shell
yarn add node-lyft
```

#### For Development/Pull Requests

First clone the `lyft-node-sdk` repo locally:

```shell
git clone github.com/lyft/lyft-node-sdk
```

Within the cloned directory, run `npm install` or `yarn install`. Now you can install this package locally for development.

## Usage

Prior to calling API endpoints, you need to authenticate. For public endpoints, you can use the Client Token from your application; for user-specific endpoints, you need to use a token generated from the [three legged OAuth2 process, detailed in the documentation.](https://developer.lyft.com/docs/authentication#section-3-legged-flow-for-accessing-user-specific-endpoints)

 ```javascript
var lyft = require('node-lyft');
var defaultClient = lyft.ApiClient.instance;
//next you need to authorize API access.
//if you're only using your Client Token for non-user specific endpoints, you can add that token directly
defaultClient.authentications['Client Authentication'].accessToken = 'YOUR-CLIENT-TOKEN';
//if you're using endpoints that require a user context, you need to get your token via three-legged OAuth, then add it here:
defaultClient.authentications['User Authentication'].accessToken = '3-LEGGED-OAUTH-TOKEN';
```

With proper authorization, you can now call Lyft's API. Below we are calling the ETA endpoint with a `lyftPublicApi` instance.

```javascript
//create a new lyft-node PublicApi() instance
var lyftPublicApi = new lyft.PublicApi()
//the getETA endpoint works with both user and non-user context:
//leaving the options field empty {}
//and using promises/then to print out result
lyftPublicApi.getETA(37.7884, -122.4076, {}).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.lyft.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*lyft.PublicApi* | [**getCost**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PublicApi.md#getCost) | **GET** /cost | Cost estimates
*lyft.PublicApi* | [**getDrivers**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PublicApi.md#getDrivers) | **GET** /drivers | Available drivers nearby
*lyft.PublicApi* | [**getETA**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PublicApi.md#getETA) | **GET** /eta | Pickup ETAs
*lyft.PublicApi* | [**getRideTypes**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PublicApi.md#getRideTypes) | **GET** /ridetypes | Types of rides
*lyft.SandboxApi* | [**setPrimeTime**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxApi.md#setPrimeTime) | **PUT** /sandbox/primetime | Preset Prime Time percentage
*lyft.SandboxApi* | [**setRideStatus**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxApi.md#setRideStatus) | **PUT** /sandbox/rides/{id} | Propagate ride through ride status
*lyft.SandboxApi* | [**setRideTypeAvailability**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxApi.md#setRideTypeAvailability) | **PUT** /sandbox/ridetypes/{ride_type} | Driver availability for processing ride request
*lyft.SandboxApi* | [**setRideTypes**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxApi.md#setRideTypes) | **PUT** /sandbox/ridetypes | Preset types of rides for sandbox
*lyft.UserApi* | [**cancelRide**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#cancelRide) | **POST** /rides/{id}/cancel | Cancel a ongoing requested ride
*lyft.UserApi* | [**getProfile**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#getProfile) | **GET** /profile | The user&#39;s general info
*lyft.UserApi* | [**getRide**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#getRide) | **GET** /rides/{id} | Get the ride detail of a given ride ID
*lyft.UserApi* | [**getRideReceipt**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#getRideReceipt) | **GET** /rides/{id}/receipt | Get the receipt of the rides.
*lyft.UserApi* | [**getRides**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#getRides) | **GET** /rides | List rides
*lyft.UserApi* | [**newRide**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#newRide) | **POST** /rides | Request a Lyft
*lyft.UserApi* | [**setRideDestination**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#setRideDestination) | **PUT** /rides/{id}/destination | Update the destination of the ride
*lyft.UserApi* | [**setRideRating**](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserApi.md#setRideRating) | **PUT** /rides/{id}/rating | Add the passenger&#39;s rating, feedback, and tip



## Documentation for Models

 - [lyft.ApiError](https://github.com/lyft/lyft-node-sdk/tree/master/docs/ApiError.md)
 - [lyft.CancellationCost](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CancellationCost.md)
 - [lyft.CancellationCostError](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CancellationCostError.md)
 - [lyft.CancellationRequest](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CancellationRequest.md)
 - [lyft.Charge](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Charge.md)
 - [lyft.Cost](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Cost.md)
 - [lyft.CostEstimate](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CostEstimate.md)
 - [lyft.CostEstimateResponse](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CostEstimateResponse.md)
 - [lyft.CurrentRideLocation](https://github.com/lyft/lyft-node-sdk/tree/master/docs/CurrentRideLocation.md)
 - [lyft.DriverDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/DriverDetail.md)
 - [lyft.ErrorDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/ErrorDetail.md)
 - [lyft.Eta](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Eta.md)
 - [lyft.EtaEstimateResponse](https://github.com/lyft/lyft-node-sdk/tree/master/docs/EtaEstimateResponse.md)
 - [lyft.LatLng](https://github.com/lyft/lyft-node-sdk/tree/master/docs/LatLng.md)
 - [lyft.LineItem](https://github.com/lyft/lyft-node-sdk/tree/master/docs/LineItem.md)
 - [lyft.Location](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Location.md)
 - [lyft.NearbyDriver](https://github.com/lyft/lyft-node-sdk/tree/master/docs/NearbyDriver.md)
 - [lyft.NearbyDriversByRideType](https://github.com/lyft/lyft-node-sdk/tree/master/docs/NearbyDriversByRideType.md)
 - [lyft.NearbyDriversResponse](https://github.com/lyft/lyft-node-sdk/tree/master/docs/NearbyDriversResponse.md)
 - [lyft.PassengerDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PassengerDetail.md)
 - [lyft.PickupDropoffLocation](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PickupDropoffLocation.md)
 - [lyft.PricingDetails](https://github.com/lyft/lyft-node-sdk/tree/master/docs/PricingDetails.md)
 - [lyft.Profile](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Profile.md)
 - [lyft.RatingRequest](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RatingRequest.md)
 - [lyft.Ride](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Ride.md)
 - [lyft.RideDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideDetail.md)
 - [lyft.RideLocation](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideLocation.md)
 - [lyft.RideProfileEnum](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideProfileEnum.md)
 - [lyft.RideReceipt](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideReceipt.md)
 - [lyft.RideRequest](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideRequest.md)
 - [lyft.RideRequestError](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideRequestError.md)
 - [lyft.RideStatusEnum](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideStatusEnum.md)
 - [lyft.RideType](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideType.md)
 - [lyft.RideTypeEnum](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideTypeEnum.md)
 - [lyft.RideTypeEnumWithOther](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideTypeEnumWithOther.md)
 - [lyft.RideTypesResponse](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RideTypesResponse.md)
 - [lyft.RidesResponse](https://github.com/lyft/lyft-node-sdk/tree/master/docs/RidesResponse.md)
 - [lyft.SandboxDriverAvailability](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxDriverAvailability.md)
 - [lyft.SandboxPrimetime](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxPrimetime.md)
 - [lyft.SandboxRideStatus](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxRideStatus.md)
 - [lyft.SandboxRideType](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxRideType.md)
 - [lyft.SandboxRideUpdate](https://github.com/lyft/lyft-node-sdk/tree/master/docs/SandboxRideUpdate.md)
 - [lyft.Tip](https://github.com/lyft/lyft-node-sdk/tree/master/docs/Tip.md)
 - [lyft.TipParams](https://github.com/lyft/lyft-node-sdk/tree/master/docs/TipParams.md)
 - [lyft.UserDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/UserDetail.md)
 - [lyft.VehicleDetail](https://github.com/lyft/lyft-node-sdk/tree/master/docs/VehicleDetail.md)


## Support

If you're looking for help configuring or using the SDK, or if you have general questions related to our APIs, the Lyft Developer Platform team provides support through our [forum](https://devcommunity.lyft.co/) as well as on Stack Overflow (using the `lyft-api` tag).

## Reporting security vulnerabilities

If you've found a vulnerability or a potential vulnerability in node-lyft, please let us know at security@lyft.com. We'll send a confirmation email to acknowledge your report, and we'll send an additional email when we've identified the issue positively or negatively.
