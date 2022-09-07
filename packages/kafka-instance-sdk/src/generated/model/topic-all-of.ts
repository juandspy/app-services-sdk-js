/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Instance API
 * API for interacting with Kafka Instance. Includes Produce, Consume and Admin APIs
 *
 * The version of the OpenAPI document: 0.12.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConfigEntry } from './config-entry';
import { Partition } from './partition';

/**
 * Kafka Topic (A feed where records are stored and published)
 * @export
 * @interface TopicAllOf
 */
export interface TopicAllOf {
    /**
     * The name of the topic.
     * @type {string}
     * @memberof TopicAllOf
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TopicAllOf
     */
    'isInternal'?: boolean;
    /**
     * Partitions for this topic.
     * @type {Array<Partition>}
     * @memberof TopicAllOf
     */
    'partitions'?: Array<Partition>;
    /**
     * Topic configuration entry.
     * @type {Array<ConfigEntry>}
     * @memberof TopicAllOf
     */
    'config'?: Array<ConfigEntry>;
}
