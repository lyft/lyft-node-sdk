# lyft.CostEstimate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rideType** | [**RideTypeEnum**](RideTypeEnum.md) |  | [optional] 
**displayName** | **String** | A human readable description of the ride type | [optional] 
**currency** | **String** | The ISO 4217 currency code for the amount (e.g. &#39;USD&#39;) | [optional] 
**estimatedCostCentsMin** | **Number** | Estimated lower bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions.  | [optional] 
**estimatedCostCentsMax** | **Number** | Estimated upper bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions.  | [optional] 
**estimatedDistanceMiles** | **Number** | Estimated distance for this trip  | [optional] 
**estimatedDurationSeconds** | **Number** | Estimated time to get from the start location to the end.  | [optional] 
**isValidEstimate** | **Boolean** | The validity of the cost estimate returned | [optional] 
**primetimePercentage** | **String** | Current Prime Time Percentage. Prime Time adds a percentage to ride costs, prior to other applicable fees. When ride requests greatly outnumber available drivers, our system will automatically turn on Prime Time. If Prime Time is inactive, the value returned will be &#39;0%&#39;. Note: The returned estimate already has Prime Time factored in. The value is returned here for reference and to allow users to confirm/accept Prime Time prior to initiating a ride.  | [optional] 
**primetimeConfirmationToken** | **String** | This token is needed when requesting rides. (Deprecated) | [optional] 
**costToken** | **String** | A token that confirms the user has accepted current Prime Time and/or fixed price charges. See &#39;Request a Lyft&#39; for more details | [optional] 


