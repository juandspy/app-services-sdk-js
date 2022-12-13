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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { EnterpriseCluster } from '../model';
// @ts-ignore
import { EnterpriseOsdClusterPayload } from '../model';
/**
 * EnterpriseDataplaneClustersApi - axios parameter creator
 * @export
 */
export const EnterpriseDataplaneClustersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEnterpriseOsdCluster: async (enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'enterpriseOsdClusterPayload' is not null or undefined
            assertParamExists('registerEnterpriseOsdCluster', 'enterpriseOsdClusterPayload', enterpriseOsdClusterPayload)
            const localVarPath = `/api/kafkas_mgmt/v1/clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(enterpriseOsdClusterPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnterpriseDataplaneClustersApi - functional programming interface
 * @export
 */
export const EnterpriseDataplaneClustersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnterpriseDataplaneClustersApiAxiosParamCreator(configuration)
    return {
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnterpriseCluster>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnterpriseDataplaneClustersApi - factory interface
 * @export
 */
export const EnterpriseDataplaneClustersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnterpriseDataplaneClustersApiFp(configuration)
    return {
        /**
         * Register enterprise data plane cluster
         * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: any): AxiosPromise<EnterpriseCluster> {
            return localVarFp.registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnterpriseDataplaneClustersApi - interface
 * @export
 * @interface EnterpriseDataplaneClustersApi
 */
export interface EnterpriseDataplaneClustersApiInterface {
    /**
     * Register enterprise data plane cluster
     * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApiInterface
     */
    registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig): AxiosPromise<EnterpriseCluster>;

}

/**
 * EnterpriseDataplaneClustersApi - object-oriented interface
 * @export
 * @class EnterpriseDataplaneClustersApi
 * @extends {BaseAPI}
 */
export class EnterpriseDataplaneClustersApi extends BaseAPI implements EnterpriseDataplaneClustersApiInterface {
    /**
     * Register enterprise data plane cluster
     * @param {EnterpriseOsdClusterPayload} enterpriseOsdClusterPayload Enterprise data plane cluster details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnterpriseDataplaneClustersApi
     */
    public registerEnterpriseOsdCluster(enterpriseOsdClusterPayload: EnterpriseOsdClusterPayload, options?: AxiosRequestConfig) {
        return EnterpriseDataplaneClustersApiFp(this.configuration).registerEnterpriseOsdCluster(enterpriseOsdClusterPayload, options).then((request) => request(this.axios, this.basePath));
    }
}