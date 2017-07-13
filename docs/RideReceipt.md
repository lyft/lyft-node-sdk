# lyft.RideReceipt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rideId** | **String** | The unique ID of this ride | [optional] 
**price** | **Object** | The total price for the current ride | [optional] 
**lineItems** | [**[LineItem]**](LineItem.md) | The break down of line items | [optional] 
**charges** | [**[Charge]**](Charge.md) | The break down of charge method | [optional] 
**requestedAt** | **Date** | The ride requested timestamp in date and time | [optional] 
**rideProfile** | **Object** | Indicates whether the ride was requested from the business profile or personal profile of the user.  | [optional] 


