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
import { ModelsLdonTrapTemplate } from '../models';
/**
 * LdonTrapTemplateApi - axios parameter creator
 * @export
 */
export const LdonTrapTemplateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates LdonTrapTemplate
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLdonTrapTemplate: async (ldonTrapTemplate: ModelsLdonTrapTemplate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ldonTrapTemplate' is not null or undefined
            if (ldonTrapTemplate === null || ldonTrapTemplate === undefined) {
                throw new RequiredError('ldonTrapTemplate','Required parameter ldonTrapTemplate was null or undefined when calling createLdonTrapTemplate.');
            }
            const localVarPath = `/ldon_trap_template`;
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
            const nonString = typeof ldonTrapTemplate !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(ldonTrapTemplate !== undefined ? ldonTrapTemplate : {})
                : (ldonTrapTemplate || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes LdonTrapTemplate
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLdonTrapTemplate: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteLdonTrapTemplate.');
            }
            const localVarPath = `/ldon_trap_template/{id}`
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
         * @summary Gets LdonTrapTemplate
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLdonTrapTemplate: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getLdonTrapTemplate.');
            }
            const localVarPath = `/ldon_trap_template/{id}`
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
         * @summary Gets LdonTrapTemplates in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLdonTrapTemplatesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getLdonTrapTemplatesBulk.');
            }
            const localVarPath = `/ldon_trap_templates/bulk`;
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
         * @summary Lists LdonTrapTemplates
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
        listLdonTrapTemplates: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/ldon_trap_templates`;
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
         * @summary Updates LdonTrapTemplate
         * @param {number} id Id
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLdonTrapTemplate: async (id: number, ldonTrapTemplate: ModelsLdonTrapTemplate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateLdonTrapTemplate.');
            }
            // verify required parameter 'ldonTrapTemplate' is not null or undefined
            if (ldonTrapTemplate === null || ldonTrapTemplate === undefined) {
                throw new RequiredError('ldonTrapTemplate','Required parameter ldonTrapTemplate was null or undefined when calling updateLdonTrapTemplate.');
            }
            const localVarPath = `/ldon_trap_template/{id}`
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
            const nonString = typeof ldonTrapTemplate !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(ldonTrapTemplate !== undefined ? ldonTrapTemplate : {})
                : (ldonTrapTemplate || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LdonTrapTemplateApi - functional programming interface
 * @export
 */
export const LdonTrapTemplateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates LdonTrapTemplate
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLdonTrapTemplate(ldonTrapTemplate: ModelsLdonTrapTemplate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLdonTrapTemplate>>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).createLdonTrapTemplate(ldonTrapTemplate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes LdonTrapTemplate
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLdonTrapTemplate(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).deleteLdonTrapTemplate(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets LdonTrapTemplate
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLdonTrapTemplate(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLdonTrapTemplate>>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).getLdonTrapTemplate(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets LdonTrapTemplates in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLdonTrapTemplatesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLdonTrapTemplate>>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).getLdonTrapTemplatesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists LdonTrapTemplates
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
        async listLdonTrapTemplates(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLdonTrapTemplate>>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).listLdonTrapTemplates(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates LdonTrapTemplate
         * @param {number} id Id
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLdonTrapTemplate(id: number, ldonTrapTemplate: ModelsLdonTrapTemplate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLdonTrapTemplate>>> {
            const localVarAxiosArgs = await LdonTrapTemplateApiAxiosParamCreator(configuration).updateLdonTrapTemplate(id, ldonTrapTemplate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LdonTrapTemplateApi - factory interface
 * @export
 */
export const LdonTrapTemplateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates LdonTrapTemplate
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLdonTrapTemplate(ldonTrapTemplate: ModelsLdonTrapTemplate, options?: any): AxiosPromise<Array<ModelsLdonTrapTemplate>> {
            return LdonTrapTemplateApiFp(configuration).createLdonTrapTemplate(ldonTrapTemplate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes LdonTrapTemplate
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLdonTrapTemplate(id: number, options?: any): AxiosPromise<string> {
            return LdonTrapTemplateApiFp(configuration).deleteLdonTrapTemplate(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets LdonTrapTemplate
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLdonTrapTemplate(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLdonTrapTemplate>> {
            return LdonTrapTemplateApiFp(configuration).getLdonTrapTemplate(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets LdonTrapTemplates in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLdonTrapTemplatesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsLdonTrapTemplate>> {
            return LdonTrapTemplateApiFp(configuration).getLdonTrapTemplatesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists LdonTrapTemplates
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
        listLdonTrapTemplates(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLdonTrapTemplate>> {
            return LdonTrapTemplateApiFp(configuration).listLdonTrapTemplates(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates LdonTrapTemplate
         * @param {number} id Id
         * @param {ModelsLdonTrapTemplate} ldonTrapTemplate LdonTrapTemplate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLdonTrapTemplate(id: number, ldonTrapTemplate: ModelsLdonTrapTemplate, options?: any): AxiosPromise<Array<ModelsLdonTrapTemplate>> {
            return LdonTrapTemplateApiFp(configuration).updateLdonTrapTemplate(id, ldonTrapTemplate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createLdonTrapTemplate operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiCreateLdonTrapTemplateRequest
 */
export interface LdonTrapTemplateApiCreateLdonTrapTemplateRequest {
    /**
     * LdonTrapTemplate
     * @type {ModelsLdonTrapTemplate}
     * @memberof LdonTrapTemplateApiCreateLdonTrapTemplate
     */
    readonly ldonTrapTemplate: ModelsLdonTrapTemplate
}

/**
 * Request parameters for deleteLdonTrapTemplate operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiDeleteLdonTrapTemplateRequest
 */
export interface LdonTrapTemplateApiDeleteLdonTrapTemplateRequest {
    /**
     * Id
     * @type {number}
     * @memberof LdonTrapTemplateApiDeleteLdonTrapTemplate
     */
    readonly id: number
}

/**
 * Request parameters for getLdonTrapTemplate operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiGetLdonTrapTemplateRequest
 */
export interface LdonTrapTemplateApiGetLdonTrapTemplateRequest {
    /**
     * Id
     * @type {number}
     * @memberof LdonTrapTemplateApiGetLdonTrapTemplate
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof LdonTrapTemplateApiGetLdonTrapTemplate
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LdonTrapTemplateApiGetLdonTrapTemplate
     */
    readonly select?: string
}

/**
 * Request parameters for getLdonTrapTemplatesBulk operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiGetLdonTrapTemplatesBulkRequest
 */
export interface LdonTrapTemplateApiGetLdonTrapTemplatesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof LdonTrapTemplateApiGetLdonTrapTemplatesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listLdonTrapTemplates operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiListLdonTrapTemplatesRequest
 */
export interface LdonTrapTemplateApiListLdonTrapTemplatesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LdonTrapTemplateApiListLdonTrapTemplates
     */
    readonly select?: string
}

/**
 * Request parameters for updateLdonTrapTemplate operation in LdonTrapTemplateApi.
 * @export
 * @interface LdonTrapTemplateApiUpdateLdonTrapTemplateRequest
 */
export interface LdonTrapTemplateApiUpdateLdonTrapTemplateRequest {
    /**
     * Id
     * @type {number}
     * @memberof LdonTrapTemplateApiUpdateLdonTrapTemplate
     */
    readonly id: number

    /**
     * LdonTrapTemplate
     * @type {ModelsLdonTrapTemplate}
     * @memberof LdonTrapTemplateApiUpdateLdonTrapTemplate
     */
    readonly ldonTrapTemplate: ModelsLdonTrapTemplate
}

/**
 * LdonTrapTemplateApi - object-oriented interface
 * @export
 * @class LdonTrapTemplateApi
 * @extends {BaseAPI}
 */
export class LdonTrapTemplateApi extends BaseAPI {
    /**
     * 
     * @summary Creates LdonTrapTemplate
     * @param {LdonTrapTemplateApiCreateLdonTrapTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public createLdonTrapTemplate(requestParameters: LdonTrapTemplateApiCreateLdonTrapTemplateRequest, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).createLdonTrapTemplate(requestParameters.ldonTrapTemplate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes LdonTrapTemplate
     * @param {LdonTrapTemplateApiDeleteLdonTrapTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public deleteLdonTrapTemplate(requestParameters: LdonTrapTemplateApiDeleteLdonTrapTemplateRequest, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).deleteLdonTrapTemplate(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets LdonTrapTemplate
     * @param {LdonTrapTemplateApiGetLdonTrapTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public getLdonTrapTemplate(requestParameters: LdonTrapTemplateApiGetLdonTrapTemplateRequest, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).getLdonTrapTemplate(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets LdonTrapTemplates in bulk
     * @param {LdonTrapTemplateApiGetLdonTrapTemplatesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public getLdonTrapTemplatesBulk(requestParameters: LdonTrapTemplateApiGetLdonTrapTemplatesBulkRequest, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).getLdonTrapTemplatesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists LdonTrapTemplates
     * @param {LdonTrapTemplateApiListLdonTrapTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public listLdonTrapTemplates(requestParameters: LdonTrapTemplateApiListLdonTrapTemplatesRequest = {}, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).listLdonTrapTemplates(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates LdonTrapTemplate
     * @param {LdonTrapTemplateApiUpdateLdonTrapTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LdonTrapTemplateApi
     */
    public updateLdonTrapTemplate(requestParameters: LdonTrapTemplateApiUpdateLdonTrapTemplateRequest, options?: any) {
        return LdonTrapTemplateApiFp(this.configuration).updateLdonTrapTemplate(requestParameters.id, requestParameters.ldonTrapTemplate, options).then((request) => request(this.axios, this.basePath));
    }
}
