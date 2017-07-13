# lyft.RideRequestError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **String** | A \&quot;slug\&quot; that serves as the error code (eg. \&quot;bad_parameter\&quot;) | 
**errorDetail** | [**[ErrorDetail]**](ErrorDetail.md) |  | [optional] 
**errorDescription** | **String** | A user-friendly description of the error (appropriate to show to an end-user) | [optional] 
**primetimePercentage** | **String** | Current Prime Time percentage | [optional] 
**primetimeMultiplier** | **Number** | Current Prime Time multiplier (eg. if primetime_percentage is 100%, primetime_multiplier will be 2.0) | [optional] 
**primetimeConfirmationToken** | **String** | A token that confirms the user has accepted current Prime Time charges (Deprecated) | [optional] 
**costToken** | **String** | A token that confirms the user has accepted current Prime Time and/or fixed price charges | [optional] 
**tokenDuration** | **String** | Validity of the token in seconds | [optional] 


