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
import { ModelsObjectContent } from '../models';
/**
 * ObjectContentApi - axios parameter creator
 * @export
 */
export const ObjectContentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates ObjectContent
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createObjectContent: async (objectContent: ModelsObjectContent, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'objectContent' is not null or undefined
            if (objectContent === null || objectContent === undefined) {
                throw new RequiredError('objectContent','Required parameter objectContent was null or undefined when calling createObjectContent.');
            }
            const localVarPath = `/object_content`;
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
            const nonString = typeof objectContent !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(objectContent !== undefined ? objectContent : {})
                : (objectContent || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes ObjectContent
         * @param {number} id parentid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteObjectContent: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteObjectContent.');
            }
            const localVarPath = `/object_content/{id}`
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
         * @summary Gets ObjectContent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectContent: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getObjectContent.');
            }
            const localVarPath = `/object_content/{id}`
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
         * @summary Gets ObjectContents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectContentsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getObjectContentsBulk.');
            }
            const localVarPath = `/object_contents/bulk`;
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
         * @summary Lists ObjectContents
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
        listObjectContents: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/object_contents`;
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
         * @summary Updates ObjectContent
         * @param {number} id Id
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateObjectContent: async (id: number, objectContent: ModelsObjectContent, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateObjectContent.');
            }
            // verify required parameter 'objectContent' is not null or undefined
            if (objectContent === null || objectContent === undefined) {
                throw new RequiredError('objectContent','Required parameter objectContent was null or undefined when calling updateObjectContent.');
            }
            const localVarPath = `/object_content/{id}`
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
            const nonString = typeof objectContent !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(objectContent !== undefined ? objectContent : {})
                : (objectContent || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ObjectContentApi - functional programming interface
 * @export
 */
export const ObjectContentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates ObjectContent
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createObjectContent(objectContent: ModelsObjectContent, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsObjectContent>>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).createObjectContent(objectContent, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes ObjectContent
         * @param {number} id parentid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteObjectContent(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).deleteObjectContent(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets ObjectContent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjectContent(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsObjectContent>>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).getObjectContent(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets ObjectContents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjectContentsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsObjectContent>>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).getObjectContentsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists ObjectContents
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
        async listObjectContents(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsObjectContent>>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).listObjectContents(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates ObjectContent
         * @param {number} id Id
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateObjectContent(id: number, objectContent: ModelsObjectContent, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsObjectContent>>> {
            const localVarAxiosArgs = await ObjectContentApiAxiosParamCreator(configuration).updateObjectContent(id, objectContent, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ObjectContentApi - factory interface
 * @export
 */
export const ObjectContentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates ObjectContent
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createObjectContent(objectContent: ModelsObjectContent, options?: any): AxiosPromise<Array<ModelsObjectContent>> {
            return ObjectContentApiFp(configuration).createObjectContent(objectContent, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes ObjectContent
         * @param {number} id parentid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteObjectContent(id: number, options?: any): AxiosPromise<string> {
            return ObjectContentApiFp(configuration).deleteObjectContent(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets ObjectContent
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectContent(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsObjectContent>> {
            return ObjectContentApiFp(configuration).getObjectContent(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets ObjectContents in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectContentsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsObjectContent>> {
            return ObjectContentApiFp(configuration).getObjectContentsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists ObjectContents
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
        listObjectContents(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsObjectContent>> {
            return ObjectContentApiFp(configuration).listObjectContents(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates ObjectContent
         * @param {number} id Id
         * @param {ModelsObjectContent} objectContent ObjectContent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateObjectContent(id: number, objectContent: ModelsObjectContent, options?: any): AxiosPromise<Array<ModelsObjectContent>> {
            return ObjectContentApiFp(configuration).updateObjectContent(id, objectContent, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createObjectContent operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiCreateObjectContentRequest
 */
export interface ObjectContentApiCreateObjectContentRequest {
    /**
     * ObjectContent
     * @type {ModelsObjectContent}
     * @memberof ObjectContentApiCreateObjectContent
     */
    readonly objectContent: ModelsObjectContent
}

/**
 * Request parameters for deleteObjectContent operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiDeleteObjectContentRequest
 */
export interface ObjectContentApiDeleteObjectContentRequest {
    /**
     * parentid
     * @type {number}
     * @memberof ObjectContentApiDeleteObjectContent
     */
    readonly id: number
}

/**
 * Request parameters for getObjectContent operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiGetObjectContentRequest
 */
export interface ObjectContentApiGetObjectContentRequest {
    /**
     * Id
     * @type {number}
     * @memberof ObjectContentApiGetObjectContent
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ObjectContentApiGetObjectContent
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ObjectContentApiGetObjectContent
     */
    readonly select?: string
}

/**
 * Request parameters for getObjectContentsBulk operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiGetObjectContentsBulkRequest
 */
export interface ObjectContentApiGetObjectContentsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof ObjectContentApiGetObjectContentsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listObjectContents operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiListObjectContentsRequest
 */
export interface ObjectContentApiListObjectContentsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ObjectContentApiListObjectContents
     */
    readonly select?: string
}

/**
 * Request parameters for updateObjectContent operation in ObjectContentApi.
 * @export
 * @interface ObjectContentApiUpdateObjectContentRequest
 */
export interface ObjectContentApiUpdateObjectContentRequest {
    /**
     * Id
     * @type {number}
     * @memberof ObjectContentApiUpdateObjectContent
     */
    readonly id: number

    /**
     * ObjectContent
     * @type {ModelsObjectContent}
     * @memberof ObjectContentApiUpdateObjectContent
     */
    readonly objectContent: ModelsObjectContent
}

/**
 * ObjectContentApi - object-oriented interface
 * @export
 * @class ObjectContentApi
 * @extends {BaseAPI}
 */
export class ObjectContentApi extends BaseAPI {
    /**
     * 
     * @summary Creates ObjectContent
     * @param {ObjectContentApiCreateObjectContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public createObjectContent(requestParameters: ObjectContentApiCreateObjectContentRequest, options?: any) {
        return ObjectContentApiFp(this.configuration).createObjectContent(requestParameters.objectContent, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes ObjectContent
     * @param {ObjectContentApiDeleteObjectContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public deleteObjectContent(requestParameters: ObjectContentApiDeleteObjectContentRequest, options?: any) {
        return ObjectContentApiFp(this.configuration).deleteObjectContent(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets ObjectContent
     * @param {ObjectContentApiGetObjectContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public getObjectContent(requestParameters: ObjectContentApiGetObjectContentRequest, options?: any) {
        return ObjectContentApiFp(this.configuration).getObjectContent(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets ObjectContents in bulk
     * @param {ObjectContentApiGetObjectContentsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public getObjectContentsBulk(requestParameters: ObjectContentApiGetObjectContentsBulkRequest, options?: any) {
        return ObjectContentApiFp(this.configuration).getObjectContentsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists ObjectContents
     * @param {ObjectContentApiListObjectContentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public listObjectContents(requestParameters: ObjectContentApiListObjectContentsRequest = {}, options?: any) {
        return ObjectContentApiFp(this.configuration).listObjectContents(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates ObjectContent
     * @param {ObjectContentApiUpdateObjectContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectContentApi
     */
    public updateObjectContent(requestParameters: ObjectContentApiUpdateObjectContentRequest, options?: any) {
        return ObjectContentApiFp(this.configuration).updateObjectContent(requestParameters.id, requestParameters.objectContent, options).then((request) => request(this.axios, this.basePath));
    }
}
