/* tslint:disable */
/* eslint-disable */
/**
 * Account Management Service API
 * Manage user subscriptions and clusters
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface QuotaRulesAllOf
 */
export interface QuotaRulesAllOf {
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'availability_zone'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'billing_model'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'byoc'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'cloud'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuotaRulesAllOf
     */
    'cost': number;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'product'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'quota_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuotaRulesAllOf
     */
    'type'?: string;
}
