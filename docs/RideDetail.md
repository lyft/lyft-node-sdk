# lyft.RideDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rideId** | **String** | The unique ID of this ride | [optional] 
**status** | [**RideStatusEnum**](RideStatusEnum.md) |  | [optional] 
**rideType** | [**RideTypeEnumWithOther**](RideTypeEnumWithOther.md) |  | [optional] 
**passenger** | [**PassengerDetail**](PassengerDetail.md) |  | [optional] 
**driver** | [**DriverDetail**](DriverDetail.md) |  | [optional] 
**vehicle** | [**VehicleDetail**](VehicleDetail.md) |  | [optional] 
**origin** | **Object** | The *requested* location for passenger pickup | [optional] 
**destination** | **Object** | The *requested* location for passenger drop off | [optional] 
**pickup** | **Object** | The *actual* location of passenger pickup | [optional] 
**dropoff** | **Object** | The *actual* location of passenger drop off | [optional] 
**location** | **Object** | The *current* location info of the ride | [optional] 
**primetimePercentage** | **String** | The Prime Time percentage applied to the base price | [optional] 
**distanceMiles** | **Number** | The distance, in miles, that this ride traveled. This field is only present after drop-off | [optional] 
**durationSeconds** | **Number** | Duration of the ride in seconds from pickup to drop-off. This field is only present after drop-off. | [optional] 
**price** | **Object** | The total price for the current ride | [optional] 
**lineItems** | [**[LineItem]**](LineItem.md) | The break down of cost | [optional] 
**canCancel** | **[String]** |  | [optional] 
**canceledBy** | **String** | The role of user who canceled the ride (if applicable) | [optional] 
**cancellationPrice** | **Object** | The cost of cancellation if there would be a penalty | [optional] 
**rating** | **Number** | The rating the user left for this ride, from 1 to 5 | [optional] 
**feedback** | **String** | The written feedback the user left for this ride | [optional] 
**pricingDetailsUrl** | **String** | The web view showing the pricing structure for the geographic area where the ride was taken  | [optional] 
**routeUrl** | **String** | The web view showing the passenger, driver, and route for this ride. This field will only be present for rides created through this API, or that have been shared through the \&quot;Share my Route\&quot; feature  | [optional] 
**requestedAt** | **Date** | The ride requested timestamp in date and time | [optional] 
**generatedAt** | **Date** | The request timestamp in date and time | [optional] 
**rideProfile** | **Object** | Indicates whether the ride was requested from the business profile or personal profile of the user.  | [optional] 
**beaconColor** | **String** | Hex color code of the driver AMP device. | [optional] 


<a name="[CanCancelEnum]"></a>
## Enum: [CanCancelEnum]


* `driver` (value: `"driver"`)

* `passenger` (value: `"passenger"`)

* `dispatcher` (value: `"dispatcher"`)




