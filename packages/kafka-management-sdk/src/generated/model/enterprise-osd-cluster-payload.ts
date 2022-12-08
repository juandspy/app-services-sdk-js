/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.14.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Schema for the request body sent to /clusters POST
 * @export
 * @interface EnterpriseOsdClusterPayload
 */
export interface EnterpriseOsdClusterPayload {
    /**
     * OSD cluster ID
     * @type {string}
     * @memberof EnterpriseOsdClusterPayload
     */
    'cluster_id': string;
    /**
     * external cluster ID. Can be obtained from the response JSON of ocm get /api/clusters_mgmt/v1/clusters/<cluster_id>
     * @type {string}
     * @memberof EnterpriseOsdClusterPayload
     */
    'cluster_external_id': string;
    /**
     * dns name of the cluster. Can be obtained from the response JSON of the /api/clusters_mgmt/v1/clusters/<cluster_id>/ingresses (dns_name)
     * @type {string}
     * @memberof EnterpriseOsdClusterPayload
     */
    'cluster_ingress_dns_name': string;
}

