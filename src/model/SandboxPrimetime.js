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





/**
* The SandboxPrimetime model module.
* @module model/SandboxPrimetime
* @version 1.0.0
*/
export default class SandboxPrimetime {
    /**
    * Constructs a new <code>SandboxPrimetime</code>.
    * @alias module:model/SandboxPrimetime
    * @class
    * @param lat {Number} The latitude component of a location
    * @param lng {Number} The longitude component of a location
    * @param primetimePercentage {String} The Prime Time to be applied as a string, e.g., '25%'
    */

    constructor(lat, lng, primetimePercentage) {
        

        
        

        this['lat'] = lat;this['lng'] = lng;this['primetime_percentage'] = primetimePercentage;

        
    }

    /**
    * Constructs a <code>SandboxPrimetime</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SandboxPrimetime} obj Optional instance to populate.
    * @return {module:model/SandboxPrimetime} The populated <code>SandboxPrimetime</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SandboxPrimetime();

            
            
            

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('primetime_percentage')) {
                obj['primetime_percentage'] = ApiClient.convertToType(data['primetime_percentage'], 'String');
            }
        }
        return obj;
    }

    /**
    * The latitude component of a location
    * @member {Number} lat
    */
    lat = undefined;
    /**
    * The longitude component of a location
    * @member {Number} lng
    */
    lng = undefined;
    /**
    * The Prime Time to be applied as a string, e.g., '25%'
    * @member {String} primetime_percentage
    */
    primetime_percentage = undefined;








}


