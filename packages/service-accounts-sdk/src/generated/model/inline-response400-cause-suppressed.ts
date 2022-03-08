/* tslint:disable */
/* eslint-disable */
/**
 * Service Accounts API Documentation
 * This is the API documentation for Service Accounts
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InlineResponse400CauseStackTrace } from './inline-response400-cause-stack-trace';

/**
 * 
 * @export
 * @interface InlineResponse400CauseSuppressed
 */
export interface InlineResponse400CauseSuppressed {
    /**
     * 
     * @type {Array<InlineResponse400CauseStackTrace>}
     * @memberof InlineResponse400CauseSuppressed
     */
    'stackTrace'?: Array<InlineResponse400CauseStackTrace>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400CauseSuppressed
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400CauseSuppressed
     */
    'localizedMessage'?: string;
}
