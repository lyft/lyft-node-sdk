/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import Cost from './Cost';





/**
* The CancellationCost model module.
* @module model/CancellationCost
* @version 1.0.0
*/
export default class CancellationCost {
    /**
    * Constructs a new <code>CancellationCost</code>.
    * @alias module:model/CancellationCost
    * @class
    * @implements module:model/Cost
    * @param amount {Number} Total price of the ride
    * @param currency {String} The ISO 4217 currency code for the amount (e.g. USD)
    * @param description {String} The description for the cost
    */

    constructor(amount, currency, description) {
        

        
        Cost.call(this, amount, currency, description);

        

        
    }

    /**
    * Constructs a <code>CancellationCost</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CancellationCost} obj Optional instance to populate.
    * @return {module:model/CancellationCost} The populated <code>CancellationCost</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CancellationCost();

            
            
            Cost.constructFromObject(data, obj);

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token_duration')) {
                obj['token_duration'] = ApiClient.convertToType(data['token_duration'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Token used to confirm the fee when cancelling a request
    * @member {String} token
    */
    token = undefined;
    /**
    * How long, in seconds, before the token expires
    * @member {Number} token_duration
    */
    token_duration = undefined;


    // Implement Cost interface:
    /**
    * Total price of the ride
    * @member {Number} amount
    */
    amount = undefined;
/**
    * The ISO 4217 currency code for the amount (e.g. USD)
    * @member {String} currency
    */
    currency = undefined;
/**
    * The description for the cost
    * @member {String} description
    */
    description = undefined;







}


