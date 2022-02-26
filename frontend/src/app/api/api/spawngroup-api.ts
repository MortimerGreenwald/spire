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
import { ModelsSpawngroup } from '../models';
/**
 * SpawngroupApi - axios parameter creator
 * @export
 */
export const SpawngroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Spawngroup
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpawngroup: async (spawngroup: ModelsSpawngroup, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'spawngroup' is not null or undefined
            if (spawngroup === null || spawngroup === undefined) {
                throw new RequiredError('spawngroup','Required parameter spawngroup was null or undefined when calling createSpawngroup.');
            }
            const localVarPath = `/spawngroup`;
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
            const nonString = typeof spawngroup !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spawngroup !== undefined ? spawngroup : {})
                : (spawngroup || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes Spawngroup
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpawngroup: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSpawngroup.');
            }
            const localVarPath = `/spawngroup/{id}`
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
         * @summary Gets Spawngroup
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawngroup: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSpawngroup.');
            }
            const localVarPath = `/spawngroup/{id}`
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
         * @summary Gets Spawngroups in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawngroupsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getSpawngroupsBulk.');
            }
            const localVarPath = `/spawngroups/bulk`;
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
         * @summary Lists Spawngroups
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
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
        listSpawngroups: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/spawngroups`;
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
         * @summary Updates Spawngroup
         * @param {number} id Id
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpawngroup: async (id: number, spawngroup: ModelsSpawngroup, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateSpawngroup.');
            }
            // verify required parameter 'spawngroup' is not null or undefined
            if (spawngroup === null || spawngroup === undefined) {
                throw new RequiredError('spawngroup','Required parameter spawngroup was null or undefined when calling updateSpawngroup.');
            }
            const localVarPath = `/spawngroup/{id}`
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
            const nonString = typeof spawngroup !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spawngroup !== undefined ? spawngroup : {})
                : (spawngroup || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SpawngroupApi - functional programming interface
 * @export
 */
export const SpawngroupApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Spawngroup
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSpawngroup(spawngroup: ModelsSpawngroup, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawngroup>>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).createSpawngroup(spawngroup, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes Spawngroup
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpawngroup(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).deleteSpawngroup(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Spawngroup
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpawngroup(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawngroup>>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).getSpawngroup(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Spawngroups in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpawngroupsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawngroup>>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).getSpawngroupsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists Spawngroups
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
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
        async listSpawngroups(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawngroup>>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).listSpawngroups(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates Spawngroup
         * @param {number} id Id
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSpawngroup(id: number, spawngroup: ModelsSpawngroup, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawngroup>>> {
            const localVarAxiosArgs = await SpawngroupApiAxiosParamCreator(configuration).updateSpawngroup(id, spawngroup, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpawngroupApi - factory interface
 * @export
 */
export const SpawngroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates Spawngroup
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpawngroup(spawngroup: ModelsSpawngroup, options?: any): AxiosPromise<Array<ModelsSpawngroup>> {
            return SpawngroupApiFp(configuration).createSpawngroup(spawngroup, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes Spawngroup
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpawngroup(id: number, options?: any): AxiosPromise<string> {
            return SpawngroupApiFp(configuration).deleteSpawngroup(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Spawngroup
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawngroup(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpawngroup>> {
            return SpawngroupApiFp(configuration).getSpawngroup(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Spawngroups in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawngroupsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsSpawngroup>> {
            return SpawngroupApiFp(configuration).getSpawngroupsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists Spawngroups
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
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
        listSpawngroups(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpawngroup>> {
            return SpawngroupApiFp(configuration).listSpawngroups(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates Spawngroup
         * @param {number} id Id
         * @param {ModelsSpawngroup} spawngroup Spawngroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpawngroup(id: number, spawngroup: ModelsSpawngroup, options?: any): AxiosPromise<Array<ModelsSpawngroup>> {
            return SpawngroupApiFp(configuration).updateSpawngroup(id, spawngroup, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSpawngroup operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiCreateSpawngroupRequest
 */
export interface SpawngroupApiCreateSpawngroupRequest {
    /**
     * Spawngroup
     * @type {ModelsSpawngroup}
     * @memberof SpawngroupApiCreateSpawngroup
     */
    readonly spawngroup: ModelsSpawngroup
}

/**
 * Request parameters for deleteSpawngroup operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiDeleteSpawngroupRequest
 */
export interface SpawngroupApiDeleteSpawngroupRequest {
    /**
     * id
     * @type {number}
     * @memberof SpawngroupApiDeleteSpawngroup
     */
    readonly id: number
}

/**
 * Request parameters for getSpawngroup operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiGetSpawngroupRequest
 */
export interface SpawngroupApiGetSpawngroupRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpawngroupApiGetSpawngroup
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
     * @type {string}
     * @memberof SpawngroupApiGetSpawngroup
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpawngroupApiGetSpawngroup
     */
    readonly select?: string
}

/**
 * Request parameters for getSpawngroupsBulk operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiGetSpawngroupsBulkRequest
 */
export interface SpawngroupApiGetSpawngroupsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof SpawngroupApiGetSpawngroupsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listSpawngroups operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiListSpawngroupsRequest
 */
export interface SpawngroupApiListSpawngroupsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Spawn2
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpawngroupApiListSpawngroups
     */
    readonly select?: string
}

/**
 * Request parameters for updateSpawngroup operation in SpawngroupApi.
 * @export
 * @interface SpawngroupApiUpdateSpawngroupRequest
 */
export interface SpawngroupApiUpdateSpawngroupRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpawngroupApiUpdateSpawngroup
     */
    readonly id: number

    /**
     * Spawngroup
     * @type {ModelsSpawngroup}
     * @memberof SpawngroupApiUpdateSpawngroup
     */
    readonly spawngroup: ModelsSpawngroup
}

/**
 * SpawngroupApi - object-oriented interface
 * @export
 * @class SpawngroupApi
 * @extends {BaseAPI}
 */
export class SpawngroupApi extends BaseAPI {
    /**
     * 
     * @summary Creates Spawngroup
     * @param {SpawngroupApiCreateSpawngroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public createSpawngroup(requestParameters: SpawngroupApiCreateSpawngroupRequest, options?: any) {
        return SpawngroupApiFp(this.configuration).createSpawngroup(requestParameters.spawngroup, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes Spawngroup
     * @param {SpawngroupApiDeleteSpawngroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public deleteSpawngroup(requestParameters: SpawngroupApiDeleteSpawngroupRequest, options?: any) {
        return SpawngroupApiFp(this.configuration).deleteSpawngroup(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Spawngroup
     * @param {SpawngroupApiGetSpawngroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public getSpawngroup(requestParameters: SpawngroupApiGetSpawngroupRequest, options?: any) {
        return SpawngroupApiFp(this.configuration).getSpawngroup(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Spawngroups in bulk
     * @param {SpawngroupApiGetSpawngroupsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public getSpawngroupsBulk(requestParameters: SpawngroupApiGetSpawngroupsBulkRequest, options?: any) {
        return SpawngroupApiFp(this.configuration).getSpawngroupsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists Spawngroups
     * @param {SpawngroupApiListSpawngroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public listSpawngroups(requestParameters: SpawngroupApiListSpawngroupsRequest = {}, options?: any) {
        return SpawngroupApiFp(this.configuration).listSpawngroups(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates Spawngroup
     * @param {SpawngroupApiUpdateSpawngroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawngroupApi
     */
    public updateSpawngroup(requestParameters: SpawngroupApiUpdateSpawngroupRequest, options?: any) {
        return SpawngroupApiFp(this.configuration).updateSpawngroup(requestParameters.id, requestParameters.spawngroup, options).then((request) => request(this.axios, this.basePath));
    }
}
