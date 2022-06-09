/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ListDeprecatedAllOf
 */
export interface ListDeprecatedAllOf {
    /**
     * Offset of the first record returned, zero-based
     * @type {number}
     * @memberof ListDeprecatedAllOf
     * @deprecated
     */
    'offset'?: number;
    /**
     * Maximum number of records to return, from request
     * @type {number}
     * @memberof ListDeprecatedAllOf
     * @deprecated
     */
    'limit'?: number;
    /**
     * Total number of entries in the full result set
     * @type {number}
     * @memberof ListDeprecatedAllOf
     * @deprecated
     */
    'count'?: number;
}
