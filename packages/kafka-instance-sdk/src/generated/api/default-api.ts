/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConsumerGroup } from '../model';
// @ts-ignore
import { ConsumerGroupList } from '../model';
// @ts-ignore
import { NewTopicInput } from '../model';
// @ts-ignore
import { Topic } from '../model';
// @ts-ignore
import { TopicsList } from '../model';
// @ts-ignore
import { UpdateTopicInput } from '../model';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTopic: async (newTopicInput: NewTopicInput, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newTopicInput' is not null or undefined
            assertParamExists('createTopic', 'newTopicInput', newTopicInput)
            const localVarPath = `/topics`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newTopicInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsumerGroupById: async (consumerGroupId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumerGroupId' is not null or undefined
            assertParamExists('deleteConsumerGroupById', 'consumerGroupId', consumerGroupId)
            const localVarPath = `/consumer-groups/{consumerGroupId}`
                .replace(`{${"consumerGroupId"}}`, encodeURIComponent(String(consumerGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTopic: async (topicName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('deleteTopic', 'topicName', topicName)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroupById: async (consumerGroupId: string, topic?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumerGroupId' is not null or undefined
            assertParamExists('getConsumerGroupById', 'consumerGroupId', consumerGroupId)
            const localVarPath = `/consumer-groups/{consumerGroupId}`
                .replace(`{${"consumerGroupId"}}`, encodeURIComponent(String(consumerGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [limit] Maximum number of consumer groups to returnd
         * @param {number} [offset] The page offset when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroups: async (limit?: number, offset?: number, topic?: string, groupIdFilter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/consumer-groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }

            if (groupIdFilter !== undefined) {
                localVarQueryParameter['group-id-filter'] = groupIdFilter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic: async (topicName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('getTopic', 'topicName', topicName)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [limit] Maximum number of topics to return
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [offset] The page offset when returning the limit of requested topics.
         * @param {string} [order] Order of the items sorting. If \&quot;asc\&quot; is set as a value, ascending order is used, descending otherwise.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics: async (limit?: number, filter?: string, offset?: number, order?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/topics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTopic: async (topicName: string, updateTopicInput: UpdateTopicInput, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('updateTopic', 'topicName', topicName)
            // verify required parameter 'updateTopicInput' is not null or undefined
            assertParamExists('updateTopic', 'updateTopicInput', updateTopicInput)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTopicInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTopic(newTopicInput: NewTopicInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTopic(newTopicInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConsumerGroupById(consumerGroupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConsumerGroupById(consumerGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTopic(topicName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTopic(topicName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsumerGroupById(consumerGroupId: string, topic?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsumerGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsumerGroupById(consumerGroupId, topic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [limit] Maximum number of consumer groups to returnd
         * @param {number} [offset] The page offset when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsumerGroups(limit?: number, offset?: number, topic?: string, groupIdFilter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsumerGroupList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsumerGroups(limit, offset, topic, groupIdFilter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopic(topicName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopic(topicName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [limit] Maximum number of topics to return
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [offset] The page offset when returning the limit of requested topics.
         * @param {string} [order] Order of the items sorting. If \&quot;asc\&quot; is set as a value, ascending order is used, descending otherwise.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopics(limit?: number, filter?: string, offset?: number, order?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TopicsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopics(limit, filter, offset, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTopic(topicName, updateTopicInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTopic(newTopicInput: NewTopicInput, options?: any): AxiosPromise<Topic> {
            return localVarFp.createTopic(newTopicInput, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsumerGroupById(consumerGroupId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteConsumerGroupById(consumerGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTopic(topicName: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTopic(topicName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroupById(consumerGroupId: string, topic?: string, options?: any): AxiosPromise<ConsumerGroup> {
            return localVarFp.getConsumerGroupById(consumerGroupId, topic, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [limit] Maximum number of consumer groups to returnd
         * @param {number} [offset] The page offset when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroups(limit?: number, offset?: number, topic?: string, groupIdFilter?: string, options?: any): AxiosPromise<ConsumerGroupList> {
            return localVarFp.getConsumerGroups(limit, offset, topic, groupIdFilter, options).then((request) => request(axios, basePath));
        },
        /**
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic(topicName: string, options?: any): AxiosPromise<Topic> {
            return localVarFp.getTopic(topicName, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [limit] Maximum number of topics to return
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [offset] The page offset when returning the limit of requested topics.
         * @param {string} [order] Order of the items sorting. If \&quot;asc\&quot; is set as a value, ascending order is used, descending otherwise.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics(limit?: number, filter?: string, offset?: number, order?: string, options?: any): AxiosPromise<TopicsList> {
            return localVarFp.getTopics(limit, filter, offset, order, options).then((request) => request(axios, basePath));
        },
        /**
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): AxiosPromise<Topic> {
            return localVarFp.updateTopic(topicName, updateTopicInput, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * Creates a new topic for Kafka.
     * @summary Creates a new topic
     * @param {NewTopicInput} newTopicInput Topic to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createTopic(newTopicInput: NewTopicInput, options?: any): AxiosPromise<Topic>;

    /**
     * Delete a consumer group, along with its consumers.
     * @summary Delete a consumer group.
     * @param {string} consumerGroupId The unique ID of the cobsumer group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deleteConsumerGroupById(consumerGroupId: string, options?: any): AxiosPromise<void>;

    /**
     * Deletes the topic with the specified name.
     * @summary Deletes a  topic
     * @param {string} topicName The topic name to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deleteTopic(topicName: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Get a single consumer group by its unique ID.
     * @param {string} consumerGroupId The unique ID of the consumer group
     * @param {string} [topic] Filter consumer groups for a specific topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getConsumerGroupById(consumerGroupId: string, topic?: string, options?: any): AxiosPromise<ConsumerGroup>;

    /**
     * Returns a list of all consumer groups for a particular Kafka instance.
     * @summary List of consumer groups in the Kafka instance.
     * @param {number} [limit] Maximum number of consumer groups to returnd
     * @param {number} [offset] The page offset when returning the list of consumer groups
     * @param {string} [topic] Return consumer groups for this topic
     * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getConsumerGroups(limit?: number, offset?: number, topic?: string, groupIdFilter?: string, options?: any): AxiosPromise<ConsumerGroupList>;

    /**
     * Topic
     * @summary Retrieves the topic with the specified name.
     * @param {string} topicName The topic name to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getTopic(topicName: string, options?: any): AxiosPromise<Topic>;

    /**
     * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
     * @summary List of topics
     * @param {number} [limit] Maximum number of topics to return
     * @param {string} [filter] Filter to apply when returning the list of topics
     * @param {number} [offset] The page offset when returning the limit of requested topics.
     * @param {string} [order] Order of the items sorting. If \&quot;asc\&quot; is set as a value, ascending order is used, descending otherwise.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getTopics(limit?: number, filter?: string, offset?: number, order?: string, options?: any): AxiosPromise<TopicsList>;

    /**
     * updates the topic with the new data.
     * @summary Updates the topic with the specified name.
     * @param {string} topicName The topic name which is its unique id.
     * @param {UpdateTopicInput} updateTopicInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): AxiosPromise<Topic>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Creates a new topic for Kafka.
     * @summary Creates a new topic
     * @param {NewTopicInput} newTopicInput Topic to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createTopic(newTopicInput: NewTopicInput, options?: any) {
        return DefaultApiFp(this.configuration).createTopic(newTopicInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a consumer group, along with its consumers.
     * @summary Delete a consumer group.
     * @param {string} consumerGroupId The unique ID of the cobsumer group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteConsumerGroupById(consumerGroupId: string, options?: any) {
        return DefaultApiFp(this.configuration).deleteConsumerGroupById(consumerGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the topic with the specified name.
     * @summary Deletes a  topic
     * @param {string} topicName The topic name to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteTopic(topicName: string, options?: any) {
        return DefaultApiFp(this.configuration).deleteTopic(topicName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a single consumer group by its unique ID.
     * @param {string} consumerGroupId The unique ID of the consumer group
     * @param {string} [topic] Filter consumer groups for a specific topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getConsumerGroupById(consumerGroupId: string, topic?: string, options?: any) {
        return DefaultApiFp(this.configuration).getConsumerGroupById(consumerGroupId, topic, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all consumer groups for a particular Kafka instance.
     * @summary List of consumer groups in the Kafka instance.
     * @param {number} [limit] Maximum number of consumer groups to returnd
     * @param {number} [offset] The page offset when returning the list of consumer groups
     * @param {string} [topic] Return consumer groups for this topic
     * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getConsumerGroups(limit?: number, offset?: number, topic?: string, groupIdFilter?: string, options?: any) {
        return DefaultApiFp(this.configuration).getConsumerGroups(limit, offset, topic, groupIdFilter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Topic
     * @summary Retrieves the topic with the specified name.
     * @param {string} topicName The topic name to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTopic(topicName: string, options?: any) {
        return DefaultApiFp(this.configuration).getTopic(topicName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
     * @summary List of topics
     * @param {number} [limit] Maximum number of topics to return
     * @param {string} [filter] Filter to apply when returning the list of topics
     * @param {number} [offset] The page offset when returning the limit of requested topics.
     * @param {string} [order] Order of the items sorting. If \&quot;asc\&quot; is set as a value, ascending order is used, descending otherwise.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTopics(limit?: number, filter?: string, offset?: number, order?: string, options?: any) {
        return DefaultApiFp(this.configuration).getTopics(limit, filter, offset, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * updates the topic with the new data.
     * @summary Updates the topic with the specified name.
     * @param {string} topicName The topic name which is its unique id.
     * @param {UpdateTopicInput} updateTopicInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any) {
        return DefaultApiFp(this.configuration).updateTopic(topicName, updateTopicInput, options).then((request) => request(this.axios, this.basePath));
    }
}
