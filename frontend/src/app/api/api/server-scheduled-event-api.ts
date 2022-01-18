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
import { ModelsServerScheduledEvent } from '../models';
/**
 * ServerScheduledEventApi - axios parameter creator
 * @export
 */
export const ServerScheduledEventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates ServerScheduledEvent
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServerScheduledEvent: async (serverScheduledEvent: ModelsServerScheduledEvent, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverScheduledEvent' is not null or undefined
            if (serverScheduledEvent === null || serverScheduledEvent === undefined) {
                throw new RequiredError('serverScheduledEvent','Required parameter serverScheduledEvent was null or undefined when calling createServerScheduledEvent.');
            }
            const localVarPath = `/server_scheduled_event`;
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
            const nonString = typeof serverScheduledEvent !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(serverScheduledEvent !== undefined ? serverScheduledEvent : {})
                : (serverScheduledEvent || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes ServerScheduledEvent
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteServerScheduledEvent: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteServerScheduledEvent.');
            }
            const localVarPath = `/server_scheduled_event/{id}`
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
         * @summary Gets ServerScheduledEvent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerScheduledEvent: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getServerScheduledEvent.');
            }
            const localVarPath = `/server_scheduled_event/{id}`
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
         * @summary Gets ServerScheduledEvents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerScheduledEventsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getServerScheduledEventsBulk.');
            }
            const localVarPath = `/server_scheduled_events/bulk`;
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
         * @summary Lists ServerScheduledEvents
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listServerScheduledEvents: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/server_scheduled_events`;
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
         * @summary Updates ServerScheduledEvent
         * @param {number} id Id
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateServerScheduledEvent: async (id: number, serverScheduledEvent: ModelsServerScheduledEvent, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateServerScheduledEvent.');
            }
            // verify required parameter 'serverScheduledEvent' is not null or undefined
            if (serverScheduledEvent === null || serverScheduledEvent === undefined) {
                throw new RequiredError('serverScheduledEvent','Required parameter serverScheduledEvent was null or undefined when calling updateServerScheduledEvent.');
            }
            const localVarPath = `/server_scheduled_event/{id}`
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
            const nonString = typeof serverScheduledEvent !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(serverScheduledEvent !== undefined ? serverScheduledEvent : {})
                : (serverScheduledEvent || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServerScheduledEventApi - functional programming interface
 * @export
 */
export const ServerScheduledEventApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates ServerScheduledEvent
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createServerScheduledEvent(serverScheduledEvent: ModelsServerScheduledEvent, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsServerScheduledEvent>>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).createServerScheduledEvent(serverScheduledEvent, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes ServerScheduledEvent
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteServerScheduledEvent(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).deleteServerScheduledEvent(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets ServerScheduledEvent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServerScheduledEvent(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsServerScheduledEvent>>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).getServerScheduledEvent(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets ServerScheduledEvents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServerScheduledEventsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsServerScheduledEvent>>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).getServerScheduledEventsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists ServerScheduledEvents
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        async listServerScheduledEvents(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsServerScheduledEvent>>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).listServerScheduledEvents(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates ServerScheduledEvent
         * @param {number} id Id
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateServerScheduledEvent(id: number, serverScheduledEvent: ModelsServerScheduledEvent, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsServerScheduledEvent>>> {
            const localVarAxiosArgs = await ServerScheduledEventApiAxiosParamCreator(configuration).updateServerScheduledEvent(id, serverScheduledEvent, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ServerScheduledEventApi - factory interface
 * @export
 */
export const ServerScheduledEventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates ServerScheduledEvent
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServerScheduledEvent(serverScheduledEvent: ModelsServerScheduledEvent, options?: any): AxiosPromise<Array<ModelsServerScheduledEvent>> {
            return ServerScheduledEventApiFp(configuration).createServerScheduledEvent(serverScheduledEvent, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes ServerScheduledEvent
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteServerScheduledEvent(id: number, options?: any): AxiosPromise<string> {
            return ServerScheduledEventApiFp(configuration).deleteServerScheduledEvent(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets ServerScheduledEvent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerScheduledEvent(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsServerScheduledEvent>> {
            return ServerScheduledEventApiFp(configuration).getServerScheduledEvent(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets ServerScheduledEvents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerScheduledEventsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsServerScheduledEvent>> {
            return ServerScheduledEventApiFp(configuration).getServerScheduledEventsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists ServerScheduledEvents
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listServerScheduledEvents(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsServerScheduledEvent>> {
            return ServerScheduledEventApiFp(configuration).listServerScheduledEvents(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates ServerScheduledEvent
         * @param {number} id Id
         * @param {ModelsServerScheduledEvent} serverScheduledEvent ServerScheduledEvent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateServerScheduledEvent(id: number, serverScheduledEvent: ModelsServerScheduledEvent, options?: any): AxiosPromise<Array<ModelsServerScheduledEvent>> {
            return ServerScheduledEventApiFp(configuration).updateServerScheduledEvent(id, serverScheduledEvent, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createServerScheduledEvent operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiCreateServerScheduledEventRequest
 */
export interface ServerScheduledEventApiCreateServerScheduledEventRequest {
    /**
     * ServerScheduledEvent
     * @type {ModelsServerScheduledEvent}
     * @memberof ServerScheduledEventApiCreateServerScheduledEvent
     */
    readonly serverScheduledEvent: ModelsServerScheduledEvent
}

/**
 * Request parameters for deleteServerScheduledEvent operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiDeleteServerScheduledEventRequest
 */
export interface ServerScheduledEventApiDeleteServerScheduledEventRequest {
    /**
     * Id
     * @type {number}
     * @memberof ServerScheduledEventApiDeleteServerScheduledEvent
     */
    readonly id: number
}

/**
 * Request parameters for getServerScheduledEvent operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiGetServerScheduledEventRequest
 */
export interface ServerScheduledEventApiGetServerScheduledEventRequest {
    /**
     * Id
     * @type {number}
     * @memberof ServerScheduledEventApiGetServerScheduledEvent
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ServerScheduledEventApiGetServerScheduledEvent
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ServerScheduledEventApiGetServerScheduledEvent
     */
    readonly select?: string
}

/**
 * Request parameters for getServerScheduledEventsBulk operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiGetServerScheduledEventsBulkRequest
 */
export interface ServerScheduledEventApiGetServerScheduledEventsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof ServerScheduledEventApiGetServerScheduledEventsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listServerScheduledEvents operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiListServerScheduledEventsRequest
 */
export interface ServerScheduledEventApiListServerScheduledEventsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ServerScheduledEventApiListServerScheduledEvents
     */
    readonly select?: string
}

/**
 * Request parameters for updateServerScheduledEvent operation in ServerScheduledEventApi.
 * @export
 * @interface ServerScheduledEventApiUpdateServerScheduledEventRequest
 */
export interface ServerScheduledEventApiUpdateServerScheduledEventRequest {
    /**
     * Id
     * @type {number}
     * @memberof ServerScheduledEventApiUpdateServerScheduledEvent
     */
    readonly id: number

    /**
     * ServerScheduledEvent
     * @type {ModelsServerScheduledEvent}
     * @memberof ServerScheduledEventApiUpdateServerScheduledEvent
     */
    readonly serverScheduledEvent: ModelsServerScheduledEvent
}

/**
 * ServerScheduledEventApi - object-oriented interface
 * @export
 * @class ServerScheduledEventApi
 * @extends {BaseAPI}
 */
export class ServerScheduledEventApi extends BaseAPI {
    /**
     * 
     * @summary Creates ServerScheduledEvent
     * @param {ServerScheduledEventApiCreateServerScheduledEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public createServerScheduledEvent(requestParameters: ServerScheduledEventApiCreateServerScheduledEventRequest, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).createServerScheduledEvent(requestParameters.serverScheduledEvent, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes ServerScheduledEvent
     * @param {ServerScheduledEventApiDeleteServerScheduledEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public deleteServerScheduledEvent(requestParameters: ServerScheduledEventApiDeleteServerScheduledEventRequest, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).deleteServerScheduledEvent(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets ServerScheduledEvent
     * @param {ServerScheduledEventApiGetServerScheduledEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public getServerScheduledEvent(requestParameters: ServerScheduledEventApiGetServerScheduledEventRequest, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).getServerScheduledEvent(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets ServerScheduledEvents in bulk
     * @param {ServerScheduledEventApiGetServerScheduledEventsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public getServerScheduledEventsBulk(requestParameters: ServerScheduledEventApiGetServerScheduledEventsBulkRequest, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).getServerScheduledEventsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists ServerScheduledEvents
     * @param {ServerScheduledEventApiListServerScheduledEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public listServerScheduledEvents(requestParameters: ServerScheduledEventApiListServerScheduledEventsRequest = {}, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).listServerScheduledEvents(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates ServerScheduledEvent
     * @param {ServerScheduledEventApiUpdateServerScheduledEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerScheduledEventApi
     */
    public updateServerScheduledEvent(requestParameters: ServerScheduledEventApiUpdateServerScheduledEventRequest, options?: any) {
        return ServerScheduledEventApiFp(this.configuration).updateServerScheduledEvent(requestParameters.id, requestParameters.serverScheduledEvent, options).then((request) => request(this.axios, this.basePath));
    }
}
