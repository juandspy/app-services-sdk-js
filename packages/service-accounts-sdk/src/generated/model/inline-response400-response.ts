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


import { InlineResponse400ResponseCookies } from './inline-response400-response-cookies';
import { InlineResponse400ResponseEntityTag } from './inline-response400-response-entity-tag';
import { InlineResponse400ResponseLanguage } from './inline-response400-response-language';
import { InlineResponse400ResponseLinks } from './inline-response400-response-links';
import { InlineResponse400ResponseMediaType } from './inline-response400-response-media-type';
import { InlineResponse400ResponseStatusInfo } from './inline-response400-response-status-info';

/**
 * 
 * @export
 * @interface InlineResponse400Response
 */
export interface InlineResponse400Response {
    /**
     * 
     * @type {{ [key: string]: Array<object>; }}
     * @memberof InlineResponse400Response
     */
    'metadata'?: { [key: string]: Array<object>; };
    /**
     * 
     * @type {object}
     * @memberof InlineResponse400Response
     */
    'entity'?: object;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse400Response
     */
    'status'?: number;
    /**
     * 
     * @type {InlineResponse400ResponseEntityTag}
     * @memberof InlineResponse400Response
     */
    'entityTag'?: InlineResponse400ResponseEntityTag;
    /**
     * 
     * @type {{ [key: string]: InlineResponse400ResponseCookies; }}
     * @memberof InlineResponse400Response
     */
    'cookies'?: { [key: string]: InlineResponse400ResponseCookies; };
    /**
     * 
     * @type {Set<string>}
     * @memberof InlineResponse400Response
     */
    'allowedMethods'?: Set<string>;
    /**
     * 
     * @type {InlineResponse400ResponseMediaType}
     * @memberof InlineResponse400Response
     */
    'mediaType'?: InlineResponse400ResponseMediaType;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof InlineResponse400Response
     */
    'stringHeaders'?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {InlineResponse400ResponseStatusInfo}
     * @memberof InlineResponse400Response
     */
    'statusInfo'?: InlineResponse400ResponseStatusInfo;
    /**
     * 
     * @type {Set<InlineResponse400ResponseLinks>}
     * @memberof InlineResponse400Response
     */
    'links'?: Set<InlineResponse400ResponseLinks>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse400Response
     */
    'length'?: number;
    /**
     * 
     * @type {InlineResponse400ResponseLanguage}
     * @memberof InlineResponse400Response
     */
    'language'?: InlineResponse400ResponseLanguage;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400Response
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400Response
     */
    'lastModified'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse400Response
     */
    'date'?: string;
    /**
     * 
     * @type {{ [key: string]: Array<object>; }}
     * @memberof InlineResponse400Response
     */
    'headers'?: { [key: string]: Array<object>; };
}
