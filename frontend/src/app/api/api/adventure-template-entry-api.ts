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
import { ModelsAdventureTemplateEntry } from '../models';
/**
 * AdventureTemplateEntryApi - axios parameter creator
 * @export
 */
export const AdventureTemplateEntryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AdventureTemplateEntry
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdventureTemplateEntry: async (adventureTemplateEntry: ModelsAdventureTemplateEntry, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'adventureTemplateEntry' is not null or undefined
            if (adventureTemplateEntry === null || adventureTemplateEntry === undefined) {
                throw new RequiredError('adventureTemplateEntry','Required parameter adventureTemplateEntry was null or undefined when calling createAdventureTemplateEntry.');
            }
            const localVarPath = `/adventure_template_entry`;
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
            const nonString = typeof adventureTemplateEntry !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(adventureTemplateEntry !== undefined ? adventureTemplateEntry : {})
                : (adventureTemplateEntry || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes AdventureTemplateEntry
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdventureTemplateEntry: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAdventureTemplateEntry.');
            }
            const localVarPath = `/adventure_template_entry/{id}`
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
         * @summary Gets AdventureTemplateEntries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureTemplateEntriesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getAdventureTemplateEntriesBulk.');
            }
            const localVarPath = `/adventure_template_entries/bulk`;
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
         * @summary Gets AdventureTemplateEntry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureTemplateEntry: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAdventureTemplateEntry.');
            }
            const localVarPath = `/adventure_template_entry/{id}`
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
         * @summary Lists AdventureTemplateEntries
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
        listAdventureTemplateEntries: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/adventure_template_entries`;
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
         * @summary Updates AdventureTemplateEntry
         * @param {number} id Id
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdventureTemplateEntry: async (id: number, adventureTemplateEntry: ModelsAdventureTemplateEntry, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAdventureTemplateEntry.');
            }
            // verify required parameter 'adventureTemplateEntry' is not null or undefined
            if (adventureTemplateEntry === null || adventureTemplateEntry === undefined) {
                throw new RequiredError('adventureTemplateEntry','Required parameter adventureTemplateEntry was null or undefined when calling updateAdventureTemplateEntry.');
            }
            const localVarPath = `/adventure_template_entry/{id}`
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
            const nonString = typeof adventureTemplateEntry !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(adventureTemplateEntry !== undefined ? adventureTemplateEntry : {})
                : (adventureTemplateEntry || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdventureTemplateEntryApi - functional programming interface
 * @export
 */
export const AdventureTemplateEntryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AdventureTemplateEntry
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAdventureTemplateEntry(adventureTemplateEntry: ModelsAdventureTemplateEntry, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureTemplateEntry>>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).createAdventureTemplateEntry(adventureTemplateEntry, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes AdventureTemplateEntry
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAdventureTemplateEntry(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).deleteAdventureTemplateEntry(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AdventureTemplateEntries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdventureTemplateEntriesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureTemplateEntry>>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).getAdventureTemplateEntriesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AdventureTemplateEntry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdventureTemplateEntry(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureTemplateEntry>>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).getAdventureTemplateEntry(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists AdventureTemplateEntries
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
        async listAdventureTemplateEntries(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureTemplateEntry>>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).listAdventureTemplateEntries(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates AdventureTemplateEntry
         * @param {number} id Id
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAdventureTemplateEntry(id: number, adventureTemplateEntry: ModelsAdventureTemplateEntry, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureTemplateEntry>>> {
            const localVarAxiosArgs = await AdventureTemplateEntryApiAxiosParamCreator(configuration).updateAdventureTemplateEntry(id, adventureTemplateEntry, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AdventureTemplateEntryApi - factory interface
 * @export
 */
export const AdventureTemplateEntryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates AdventureTemplateEntry
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdventureTemplateEntry(adventureTemplateEntry: ModelsAdventureTemplateEntry, options?: any): AxiosPromise<Array<ModelsAdventureTemplateEntry>> {
            return AdventureTemplateEntryApiFp(configuration).createAdventureTemplateEntry(adventureTemplateEntry, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes AdventureTemplateEntry
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdventureTemplateEntry(id: number, options?: any): AxiosPromise<string> {
            return AdventureTemplateEntryApiFp(configuration).deleteAdventureTemplateEntry(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AdventureTemplateEntries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureTemplateEntriesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsAdventureTemplateEntry>> {
            return AdventureTemplateEntryApiFp(configuration).getAdventureTemplateEntriesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AdventureTemplateEntry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureTemplateEntry(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAdventureTemplateEntry>> {
            return AdventureTemplateEntryApiFp(configuration).getAdventureTemplateEntry(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists AdventureTemplateEntries
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
        listAdventureTemplateEntries(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAdventureTemplateEntry>> {
            return AdventureTemplateEntryApiFp(configuration).listAdventureTemplateEntries(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates AdventureTemplateEntry
         * @param {number} id Id
         * @param {ModelsAdventureTemplateEntry} adventureTemplateEntry AdventureTemplateEntry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdventureTemplateEntry(id: number, adventureTemplateEntry: ModelsAdventureTemplateEntry, options?: any): AxiosPromise<Array<ModelsAdventureTemplateEntry>> {
            return AdventureTemplateEntryApiFp(configuration).updateAdventureTemplateEntry(id, adventureTemplateEntry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAdventureTemplateEntry operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiCreateAdventureTemplateEntryRequest
 */
export interface AdventureTemplateEntryApiCreateAdventureTemplateEntryRequest {
    /**
     * AdventureTemplateEntry
     * @type {ModelsAdventureTemplateEntry}
     * @memberof AdventureTemplateEntryApiCreateAdventureTemplateEntry
     */
    readonly adventureTemplateEntry: ModelsAdventureTemplateEntry
}

/**
 * Request parameters for deleteAdventureTemplateEntry operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiDeleteAdventureTemplateEntryRequest
 */
export interface AdventureTemplateEntryApiDeleteAdventureTemplateEntryRequest {
    /**
     * Id
     * @type {number}
     * @memberof AdventureTemplateEntryApiDeleteAdventureTemplateEntry
     */
    readonly id: number
}

/**
 * Request parameters for getAdventureTemplateEntriesBulk operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiGetAdventureTemplateEntriesBulkRequest
 */
export interface AdventureTemplateEntryApiGetAdventureTemplateEntriesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof AdventureTemplateEntryApiGetAdventureTemplateEntriesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for getAdventureTemplateEntry operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiGetAdventureTemplateEntryRequest
 */
export interface AdventureTemplateEntryApiGetAdventureTemplateEntryRequest {
    /**
     * Id
     * @type {number}
     * @memberof AdventureTemplateEntryApiGetAdventureTemplateEntry
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AdventureTemplateEntryApiGetAdventureTemplateEntry
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AdventureTemplateEntryApiGetAdventureTemplateEntry
     */
    readonly select?: string
}

/**
 * Request parameters for listAdventureTemplateEntries operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiListAdventureTemplateEntriesRequest
 */
export interface AdventureTemplateEntryApiListAdventureTemplateEntriesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AdventureTemplateEntryApiListAdventureTemplateEntries
     */
    readonly select?: string
}

/**
 * Request parameters for updateAdventureTemplateEntry operation in AdventureTemplateEntryApi.
 * @export
 * @interface AdventureTemplateEntryApiUpdateAdventureTemplateEntryRequest
 */
export interface AdventureTemplateEntryApiUpdateAdventureTemplateEntryRequest {
    /**
     * Id
     * @type {number}
     * @memberof AdventureTemplateEntryApiUpdateAdventureTemplateEntry
     */
    readonly id: number

    /**
     * AdventureTemplateEntry
     * @type {ModelsAdventureTemplateEntry}
     * @memberof AdventureTemplateEntryApiUpdateAdventureTemplateEntry
     */
    readonly adventureTemplateEntry: ModelsAdventureTemplateEntry
}

/**
 * AdventureTemplateEntryApi - object-oriented interface
 * @export
 * @class AdventureTemplateEntryApi
 * @extends {BaseAPI}
 */
export class AdventureTemplateEntryApi extends BaseAPI {
    /**
     * 
     * @summary Creates AdventureTemplateEntry
     * @param {AdventureTemplateEntryApiCreateAdventureTemplateEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public createAdventureTemplateEntry(requestParameters: AdventureTemplateEntryApiCreateAdventureTemplateEntryRequest, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).createAdventureTemplateEntry(requestParameters.adventureTemplateEntry, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes AdventureTemplateEntry
     * @param {AdventureTemplateEntryApiDeleteAdventureTemplateEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public deleteAdventureTemplateEntry(requestParameters: AdventureTemplateEntryApiDeleteAdventureTemplateEntryRequest, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).deleteAdventureTemplateEntry(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AdventureTemplateEntries in bulk
     * @param {AdventureTemplateEntryApiGetAdventureTemplateEntriesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public getAdventureTemplateEntriesBulk(requestParameters: AdventureTemplateEntryApiGetAdventureTemplateEntriesBulkRequest, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).getAdventureTemplateEntriesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AdventureTemplateEntry
     * @param {AdventureTemplateEntryApiGetAdventureTemplateEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public getAdventureTemplateEntry(requestParameters: AdventureTemplateEntryApiGetAdventureTemplateEntryRequest, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).getAdventureTemplateEntry(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists AdventureTemplateEntries
     * @param {AdventureTemplateEntryApiListAdventureTemplateEntriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public listAdventureTemplateEntries(requestParameters: AdventureTemplateEntryApiListAdventureTemplateEntriesRequest = {}, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).listAdventureTemplateEntries(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates AdventureTemplateEntry
     * @param {AdventureTemplateEntryApiUpdateAdventureTemplateEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureTemplateEntryApi
     */
    public updateAdventureTemplateEntry(requestParameters: AdventureTemplateEntryApiUpdateAdventureTemplateEntryRequest, options?: any) {
        return AdventureTemplateEntryApiFp(this.configuration).updateAdventureTemplateEntry(requestParameters.id, requestParameters.adventureTemplateEntry, options).then((request) => request(this.axios, this.basePath));
    }
}
