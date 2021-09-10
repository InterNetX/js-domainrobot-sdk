let DomainRobotService = require("./DomainRobotService");

class Zone extends DomainRobotService {
    constructor(domainRobotConfig) {
        super(domainRobotConfig);
    }

    /**
     * Create a zone.
     * 
     * @param model DomainRobotModels.Zone
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async create(model) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone",
            model
        );
    }

    /**
     * Update a zone.
     * 
     * @param model DomainRobotModels.Zone
     * @param systemNameServer string
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async update(model, systemNameServer) {
        return await this.sendPutRequest(
            this.domainRobotConfig.url + "/zone/" + model.origin + '/' + systemNameServer,
            model
        );
    }

    /**
     * Delete a zone.
     *
     * @param name string
     * @param systemNameServer string
     * @returns Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>
     */
    async delete(name, systemNameServer) {
        return await this.sendDeleteRequest(
            this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
        );
    }

    /**
     * Inquire zone data.
     * 
     * @param name string
     * @param systemNameServer string
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async info(name, systemNameServer) {
        return await this.sendGetRequest(
            this.domainRobotConfig.url + "/zone/" + name + '/' + systemNameServer
        );
    }

    /**
     * Inquire a list of zones history entries with certain details. 

     * @param model DomainRobotModels.Query
     * @param keys string {Available values : dnssec, created, mainip, secondary1, secondary2, secondary3, secondary4, secondary5, secondary6, secondary7, virtualNameServer, domainsafe, name, comment, updated, action, primary, changed}
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async list(model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/_search" + keysString,
            model
        );
    }

    /**
     * Adding or removing records for any zone with the given name.
     * 
     * @param name string
     * @param model DomainRobotModels.ZoneStream
     * @param keys string {Available values: autofix}
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async stream(name, model, keys = []) {
        let keysString = '';
        if (keys.length > 0) {
            keysString = "?keys[]=" + keys.join('&keys[]=');
        }

        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/" + name + "/_stream" + keysString,
            model
        )
    }

    /**
     * Import the specified zone.
     * @param name string
     * @param model DomainRobotModels.Zone
     * @param systemNameServer string
     * @returns Promise<DomainRobotResult<JsonResponseDataZone, number>>
     */
    async import(name, model, systemNameServer) {
        return await this.sendPostRequest(
            this.domainRobotConfig.url + "/zone/" + name + "/" + systemNameServer + "/_import",
            model
        );
    }
}

module.exports = Zone;
