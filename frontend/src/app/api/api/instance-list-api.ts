/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CrudcontrollersBulkFetchByIdsGetRequest } from '../models';
// @ts-ignore
import { ModelsInstanceList } from '../models';
/**
 * InstanceListApi - axios parameter creator
 * @export
 */
export const InstanceListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates InstanceList
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInstanceList: async (instanceList: ModelsInstanceList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'instanceList' is not null or undefined
            if (instanceList === null || instanceList === undefined) {
                throw new RequiredError('instanceList','Required parameter instanceList was null or undefined when calling createInstanceList.');
            }
            const localVarPath = `/instance_list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof instanceList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(instanceList !== undefined ? instanceList : {})
                : (instanceList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes InstanceList
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInstanceList: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteInstanceList.');
            }
            const localVarPath = `/instance_list/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets InstanceList
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceList: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getInstanceList.');
            }
            const localVarPath = `/instance_list/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets InstanceLists in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceListsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getInstanceListsBulk.');
            }
            const localVarPath = `/instance_lists/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof body !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists InstanceLists
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInstanceLists: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/instance_lists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (whereOr !== undefined) {
                localVarQueryParameter['whereOr'] = whereOr;
            }

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates InstanceList
         * @param {number} id Id
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceList: async (id: number, instanceList: ModelsInstanceList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateInstanceList.');
            }
            // verify required parameter 'instanceList' is not null or undefined
            if (instanceList === null || instanceList === undefined) {
                throw new RequiredError('instanceList','Required parameter instanceList was null or undefined when calling updateInstanceList.');
            }
            const localVarPath = `/instance_list/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof instanceList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(instanceList !== undefined ? instanceList : {})
                : (instanceList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InstanceListApi - functional programming interface
 * @export
 */
export const InstanceListApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates InstanceList
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInstanceList(instanceList: ModelsInstanceList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsInstanceList>>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).createInstanceList(instanceList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes InstanceList
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteInstanceList(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).deleteInstanceList(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets InstanceList
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstanceList(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsInstanceList>>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).getInstanceList(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets InstanceLists in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstanceListsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsInstanceList>>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).getInstanceListsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists InstanceLists
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInstanceLists(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsInstanceList>>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).listInstanceLists(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates InstanceList
         * @param {number} id Id
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInstanceList(id: number, instanceList: ModelsInstanceList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsInstanceList>>> {
            const localVarAxiosArgs = await InstanceListApiAxiosParamCreator(configuration).updateInstanceList(id, instanceList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * InstanceListApi - factory interface
 * @export
 */
export const InstanceListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates InstanceList
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInstanceList(instanceList: ModelsInstanceList, options?: any): AxiosPromise<Array<ModelsInstanceList>> {
            return InstanceListApiFp(configuration).createInstanceList(instanceList, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes InstanceList
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInstanceList(id: number, options?: any): AxiosPromise<string> {
            return InstanceListApiFp(configuration).deleteInstanceList(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets InstanceList
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceList(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsInstanceList>> {
            return InstanceListApiFp(configuration).getInstanceList(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets InstanceLists in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceListsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsInstanceList>> {
            return InstanceListApiFp(configuration).getInstanceListsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists InstanceLists
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInstanceLists(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsInstanceList>> {
            return InstanceListApiFp(configuration).listInstanceLists(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates InstanceList
         * @param {number} id Id
         * @param {ModelsInstanceList} instanceList InstanceList
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceList(id: number, instanceList: ModelsInstanceList, options?: any): AxiosPromise<Array<ModelsInstanceList>> {
            return InstanceListApiFp(configuration).updateInstanceList(id, instanceList, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInstanceList operation in InstanceListApi.
 * @export
 * @interface InstanceListApiCreateInstanceListRequest
 */
export interface InstanceListApiCreateInstanceListRequest {
    /**
     * InstanceList
     * @type {ModelsInstanceList}
     * @memberof InstanceListApiCreateInstanceList
     */
    readonly instanceList: ModelsInstanceList
}

/**
 * Request parameters for deleteInstanceList operation in InstanceListApi.
 * @export
 * @interface InstanceListApiDeleteInstanceListRequest
 */
export interface InstanceListApiDeleteInstanceListRequest {
    /**
     * Id
     * @type {number}
     * @memberof InstanceListApiDeleteInstanceList
     */
    readonly id: number
}

/**
 * Request parameters for getInstanceList operation in InstanceListApi.
 * @export
 * @interface InstanceListApiGetInstanceListRequest
 */
export interface InstanceListApiGetInstanceListRequest {
    /**
     * Id
     * @type {number}
     * @memberof InstanceListApiGetInstanceList
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
     * @type {string}
     * @memberof InstanceListApiGetInstanceList
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof InstanceListApiGetInstanceList
     */
    readonly select?: string
}

/**
 * Request parameters for getInstanceListsBulk operation in InstanceListApi.
 * @export
 * @interface InstanceListApiGetInstanceListsBulkRequest
 */
export interface InstanceListApiGetInstanceListsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof InstanceListApiGetInstanceListsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listInstanceLists operation in InstanceListApi.
 * @export
 * @interface InstanceListApiListInstanceListsRequest
 */
export interface InstanceListApiListInstanceListsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;InstanceListPlayers&lt;br&gt;Zones
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof InstanceListApiListInstanceLists
     */
    readonly select?: string
}

/**
 * Request parameters for updateInstanceList operation in InstanceListApi.
 * @export
 * @interface InstanceListApiUpdateInstanceListRequest
 */
export interface InstanceListApiUpdateInstanceListRequest {
    /**
     * Id
     * @type {number}
     * @memberof InstanceListApiUpdateInstanceList
     */
    readonly id: number

    /**
     * InstanceList
     * @type {ModelsInstanceList}
     * @memberof InstanceListApiUpdateInstanceList
     */
    readonly instanceList: ModelsInstanceList
}

/**
 * InstanceListApi - object-oriented interface
 * @export
 * @class InstanceListApi
 * @extends {BaseAPI}
 */
export class InstanceListApi extends BaseAPI {
    /**
     * 
     * @summary Creates InstanceList
     * @param {InstanceListApiCreateInstanceListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public createInstanceList(requestParameters: InstanceListApiCreateInstanceListRequest, options?: any) {
        return InstanceListApiFp(this.configuration).createInstanceList(requestParameters.instanceList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes InstanceList
     * @param {InstanceListApiDeleteInstanceListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public deleteInstanceList(requestParameters: InstanceListApiDeleteInstanceListRequest, options?: any) {
        return InstanceListApiFp(this.configuration).deleteInstanceList(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets InstanceList
     * @param {InstanceListApiGetInstanceListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public getInstanceList(requestParameters: InstanceListApiGetInstanceListRequest, options?: any) {
        return InstanceListApiFp(this.configuration).getInstanceList(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets InstanceLists in bulk
     * @param {InstanceListApiGetInstanceListsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public getInstanceListsBulk(requestParameters: InstanceListApiGetInstanceListsBulkRequest, options?: any) {
        return InstanceListApiFp(this.configuration).getInstanceListsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists InstanceLists
     * @param {InstanceListApiListInstanceListsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public listInstanceLists(requestParameters: InstanceListApiListInstanceListsRequest = {}, options?: any) {
        return InstanceListApiFp(this.configuration).listInstanceLists(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates InstanceList
     * @param {InstanceListApiUpdateInstanceListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstanceListApi
     */
    public updateInstanceList(requestParameters: InstanceListApiUpdateInstanceListRequest, options?: any) {
        return InstanceListApiFp(this.configuration).updateInstanceList(requestParameters.id, requestParameters.instanceList, options).then((request) => request(this.axios, this.basePath));
    }
}
