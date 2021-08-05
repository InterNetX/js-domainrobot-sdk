export declare class DomainRobotService<T> {
    constructor(domainRobotConfig: domainRobotConfig);
    logRequest(callback: Function): T;
    logResponse(callback: Function): T;
}

export declare class CertificateService extends DomainRobotService<CertificateService>{
    create(model: DomainRobotModels.Certificate): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    createRealtime(model: DomainRobotModels.Certificate): Promise<DomainRobotResult<JsonResponseDataCertificate, number>>;
    prepareOrder(model: DomainRobotModels.CertificateData): Promise<DomainRobotResult<JsonResponseDataCertificateData, number>>;
    list(odel: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataCertificate, number>>;
    info(id: number): Promise<DomainRobotResult<JsonResponseDataCertificate, number>>;
    reissue(model: DomainRobotModels.Certificate): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    delete(id: number): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    renew(model: DomainRobotModels.Certificate): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    comment(model: DomainRobotModels.Certificate): Promise<DomainRobotResult<JsonResponseDataVoid, number>>;
}
export declare class ContactService extends DomainRobotService<ContactService> {
    create(model: DomainRobotModels.Contact): Promise<DomainRobotResult<JsonResponseDataContact, number>>;
    update(model: DomainRobotModels.Contact): Promise<DomainRobotResult<JsonResponseDataContact, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataContact, number>>;
    info(id: number): Promise<DomainRobotResult<JsonResponseDataContact, number>>;
    delete(id: number): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
}
export declare class DomainService extends DomainRobotService<DomainService> {
    create(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    update(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    transfer(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    updateStatus(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    renew(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    restore(model: DomainRobotModels.Domain): Promise<DomainRobotResult<JsonResponseDataObjectJob, number>>;
    restoreList(model: DomainRobotModels.Domain, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataDomainRestore, number>>;
    info(name: string): Promise<DomainRobotResult<JsonResponseDataDomain, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataDomain, number>>;
    authInfo1Create(name: string): Promise<DomainRobotResult<JsonResponseDataDomain, number>>;
    authInfo1Delete(name: string): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    authInfo2Create(name: string): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    cancelationCreate(model: DomainRobotModels.DomainCancelation): Promise<DomainRobotResult<JsonResponseDataDomainCancelation, number>>;
    cancelationUpdate(model: DomainRobotModels.DomainCancelation): Promise<DomainRobotResult<JsonResponseDataDomainCancelation, number>>;
    cancelationDelete(name: string): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    cancelationInfo(name: string): Promise<DomainRobotResult<JsonResponseDataDomainCancelation, number>>;
    cancelationList(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataDomainCancelation, number>>;
}
export declare class SslContactService extends DomainRobotService<SslContactService>{
    create(model: DomainRobotModels.SslContact): Promise<DomainRobotResult<JsonResponseDataSslContact, number>>;
    update(model: DomainRobotModels.SslContact): Promise<DomainRobotResult<JsonResponseDataSslContact, number>>;
    delete(id: number): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    info(id: number): Promise<DomainRobotResult<JsonResponseDataSslContact, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataSslContact, number>>;
}
export declare class ZoneService extends DomainRobotService<ZoneService>{
    create(model: DomainRobotModels.Zone): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
    update(model: DomainRobotModels.Zone, systemNameServer: string): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
    delete(name: string, systemNameServer: string): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    info(name: string, systemNameServer: string): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
    stream(name: string, model: DomainRobotModels.ZoneStream, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
    import(name: string, model: DomainRobotModels.Zone, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataZone, number>>;
}
export declare class PollService extends DomainRobotService<PollService>{
    info(): Promise<DomainRobotResult<JsonResponseDataPollMessage, number>>;
    confirm(id: number): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
}
export declare class TransferOutService extends DomainRobotService<TransferOutService>{
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataTransferOut, number>>;
    answer(domain: string, type: string): Promise<DomainRobotResult<JsonResponseDataTransferOut, number>>;
}
export declare class TrustedAppService extends DomainRobotService<TrustedAppService>{
    create(model: DomainRobotModels.TrustedApplication): Promise<DomainRobotResult<JsonResponseDataTrustedApplication, number>>;
    update(model: DomainRobotModels.TrustedApplication): Promise<DomainRobotResult<JsonResponseDataTrustedApplication, number>>;
    delete(id: number): Promise<DomainRobotResult<JsonResponseDataJsonNoData, number>>;
    info(id: number): Promise<DomainRobotResult<JsonResponseDataTrustedApplication, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataTrustedApplication, number>>;
}
export declare class DomainStudio extends DomainRobotService<DomainStudio>{
    search(model: DomainRobotModels.DomainEnvelopeSearchRequest): Promise<DomainRobotResult<JsonResponseDataDomainEnvelope, number>>;
}
export declare class LoginService extends DomainRobotService<LoginService> {
    sessionID(model: DomainRobotModels.LoginData, queryParams?: {
        acl?: Boolean,
        profile?: Boolean,
        customer?: Boolean,
        timeout?: number
    }): Promise<DomainRobotResult<JsonResponseDataUser, number>>;
}
export declare class UserService extends DomainRobotService<LoginService> {
    create(model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    update(model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    delete(user: string, context: number): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    info(user: string, context: number, queries?: string[]): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    list(model: DomainRobotModels.Query, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    newPassword(model: DomainRobotModels.NewPassword): Promise<DomainRobotResult<JsonResponseDataVoid, number>>;
    newPasswordVerify(token: string): Promise<DomainRobotResult<JsonResponseDataVoid, number>>;
    ssoActionVerifiy(token: string): Promise<DomainRobotResult<JsonResponseDataUser, number>>;
    userActionVerifiy(token: string): Promise<DomainRobotResult<JsonResponseDataUser, number>>;
    billingObjectLimitInfo(keys?: string[], articleTypes?: string[]): Promise<DomainRobotResult<JsonResponseDataBillingLimit, number>>;
    billingObjectTermsInfo(): Promise<DomainRobotResult<JsonResponseDataBillingObjectTerms, number>>;
    updateLock(user: string, context: number, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    updateUnLock(user: string, context: number, keys?: string[]): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    aclInfo(user: string, context: number): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    aclUpdate(model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    copy(user: string, context: number, model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataBasicUser, number>>;
    profileInfo(user: string, context: number, prefix?: string): Promise<DomainRobotResult<JsonResponseDataUserProfileViews, number>>;
    profileUpdate(model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataUserProfileViews, number>>;
    serviceProfileInfo(user: string, context: number, prefix?: string): Promise<DomainRobotResult<JsonResponseDataServiceUsersProfile, number>>;
    serviceProfileUpdate(model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseDataServiceUsersProfile, number>>;
    verifcation(user: string, context: number, model: DomainRobotModels.User): Promise<DomainRobotResult<JsonResponseData, number>>;
}
export declare class DomainRobotResult<Result, Number> {
    constructor(result: Result, status: Number);
    isValid(): Boolean;
    isValidResponse(): Boolean;
    getHeaders(): ResultHeaders;
}

export interface DomainRobotResult<Result, Number> {
    result: Result;
    status: Number;
}

export interface ResultHeaders {
    connection?: string;
    date?: string;
    server?: string;
    'set-cookie'?: Array<string>;
    'content-length'?: string;
    'content-type'?: string;
    'content-language'?: string;
    'x-domainrobot-sessionid'?: string;
    'x-domainrobot-stid'?: string;
}

export interface DomainRobotException {
    error: {
        stid: string;
        // messages can vary depending on the task, so this is the closest
        // defintion we can provide here
        messages: Array<{
            code: string;
            text: string;
            type: string;
        }>;
        status: {
            code: string;
            text: string;
            type: string;
        };
        ctid: string;
    };
    status: number;
}

export interface ResponseStatus {
    code: string;
    text: string;
    type: string;
}

export interface ResponseObject {
    type: string;
    value: string;
    summary?: number;
    data?: string;
}

export interface Result {
    stid: string;
    status: ResponseStatus;
    object?: ResponseObject;
    ctid?: string;
    data: Array<object>;
}

// Service Response Definitions
export interface JsonResponseDataAccountingDocument extends Result {
    data: DomainRobotModels.AccountingDocument[];
}
export interface JsonResponseDataContact extends Result {
    data: DomainRobotModels.Contact[];
}
export interface JsonResponseDataCustomer extends Result {
    data: DomainRobotModels.Customer[];
}
export interface JsonResponseDataCustomerGroup extends Result {
    data: DomainRobotModels.CustomerGroup[];
}
export interface JsonResponseDataDomain extends Result {
    data: DomainRobotModels.Domain[];
}
export interface JsonResponseDataBasicUser extends Result {
    data: DomainRobotModels.BasicUser[];
}
export interface JsonResponseDataBillingEvent extends Result {
    data: DomainRobotModels.BillingEvent[];
}
export interface JsonResponseDataBillingLimit extends Result {
    data: DomainRobotModels.BillingLimit[];
}
export interface JsonResponseDataBillingObjectTerms extends Result {
    data: DomainRobotModels.BillingObjectTerms[];
}
export interface JsonResponseDataObjectJob extends Result {
    data: DomainRobotModels.ObjectJob[];
}
export interface JsonResponseDataDomainRestore extends Result {
    data: DomainRobotModels.DomainRestore[];
}
export interface JsonResponseData extends Result {
    data: DomainRobotModels.JsonResponseData[];
}
export interface JsonResponseDataJsonNoData extends Result {
    data: DomainRobotModels.JsonNoData[];
}
export interface JsonResponseDataInvoice extends Result {
    data: DomainRobotModels.Invoice[];
}
export interface JsonResponseDataDomainCancelation extends Result {
    data: DomainRobotModels.DomainCancelation[];
}
export interface JsonResponseDataCertificate extends Result {
    data: DomainRobotModels.Certificate[];
}
export interface JsonResponseDataCertificateData extends Result {
    data: DomainRobotModels.CertificateData[];
}
export interface JsonResponseDataVoid extends Result {
    data: DomainRobotModels.Void[];
}
export interface JsonResponseDataSslContact extends Result {
    data: DomainRobotModels.SslContact[];
}
export interface JsonResponseDataZone extends Result {
    data: DomainRobotModels.Zone[];
}
export interface JsonResponseDataPeriodicBilling extends Result {
    data: DomainRobotModels.PeriodicBilling[];
}
export interface JsonResponseDataPollMessage extends Result {
    data: DomainRobotModels.PollMessage[];
}
export interface JsonResponseDataTransferOut extends Result {
    data: DomainRobotModels.TransferOut[];
}
export interface JsonResponseDataTrustedApplication extends Result {
    data: DomainRobotModels.TrustedApplication[];
}
export interface JsonResponseDataDomainEnvelope extends Result {
    data: DomainRobotModels.DomainEnvelope[];
}
export interface JsonResponseDataUser extends Result {
    data: DomainRobotModels.User[];
}
export interface JsonResponseDataUserProfileViews extends Result {
    data: DomainRobotModels.UserProfileViews[];
}
export interface JsonResponseDataServiceUsersProfile extends Result {
    data: DomainRobotModels.ServiceUsersProfile[];
}
export interface JsonResponseDataSubjectProduct extends Result {
    data: DomainRobotModels.SubjectProduct[];
}
export type domainRobotConfig = {
    url?: string;
    logRequestCallback?: Function,
    logResponseCallback?: Function,
    session_id?: string,
    auth?: {
        user: string;
        password: string;
        context?: number;
    };
};

export class DomainRobot {
    constructor(domainRobotConfig: domainRobotConfig);

    //accounting(subjectProductModel: DomainRobotModels.Subscription): AccountingService;

    certificate(certificateModel?: DomainRobotModels.Certificate): CertificateService;

    contact(contactModel?: DomainRobotModels.Contact): ContactService;

    domain(): DomainService;

    domainStudio(domainStudioEnvelopeSearchRequest: DomainRobotModels.DomainEnvelopeSearchRequest): DomainStudio;

    poll(): PollService;

    sslcontact(sslcontactModel?: DomainRobotModels.SslContact): SslContactService;

    transferout(): TransferOutService;

    trustedapp(trustedAppModel?: DomainRobotModels.TrustedApplication): TrustedAppService;

    zone(zoneModel?: DomainRobotModels.Zone): ZoneService;

    login(loginDataModel?: DomainRobotModels.LoginData): LoginService;

    user(basicUserModel?: DomainRobotModels.BasicUser): UserService;
}

export const DomainRobotHeaders: {
    DOMAINROBOT_CONTENT_TYPE: string;
    DOMAINROBOT_HEADER_2FA_TOKEN: string;
    DOMAINROBOT_HEADER_BULK_LIMIT: string;
    DOMAINROBOT_HEADER_CONTEXT: string;
    DOMAINROBOT_HEADER_CTID: string;
    DOMAINROBOT_HEADER_CUSTOMER: string;
    DOMAINROBOT_HEADER_DEMO_MODE: string;
    DOMAINROBOT_HEADER_DOMAINROBOT_STID: string;
    DOMAINROBOT_HEADER_OWNER: string;
    DOMAINROBOT_HEADER_OWNER_CONTEXT: string;
    DOMAINROBOT_HEADER_OWNER_NAME: string;
    DOMAINROBOT_HEADER_PIN: string;
    DOMAINROBOT_HEADER_PRECEDENCE: string;
    DOMAINROBOT_HEADER_PROFILE: string;
    DOMAINROBOT_HEADER_SESSION_ID: string;
    DOMAINROBOT_HEADER_SESSION_USER: string;
    DOMAINROBOT_HEADER_WEBSOCKET: string;
    DOMAINROBOT_HEADER_WEBSOCKET_TARGET: string;
    DOMAINROBOT_USER_AGENT: string;
};

// ENUM definitions
export type AccountingDocumentTypeConstants = "INVOICE" | "CREDIT" | "REFUND" | "CANCELED" | "CHARGE";
export type AccountStatusConstants = "SUCCESS" | "CANCELED" | "RESERVED" | "RESERVATION";
export type AuEligibilityIdTypeConstants = "ACN" | "ABN" | "VIC" | "NSW" | "SA" | "BN" | "NT" | "WA" | "TAS" | "ACT" | "QLD" | "TM" | "OTHER";
export type AuEligibilityTypeConstants = "COMPANY" | "REGISTERED_BUSINESS" | "SOLE_TRADER" | "PARTNERSHIP" | "TRADEMARK_OWNER" | "PENDING_TM_OWNER" | "CITIZEN_RESIDENT" | "INCORPORATED_ASSOCIATION" | "UNINCORPORATED_ASSOCIATION" | "CLUB" | "NON_PROFIT_ORGANISATION" | "CHARITY" | "TRADE_UNION" | "INDUSTRY_BODY" | "COMMERCIAL_STATUTORY_BODY" | "POLITICAL_PARTY" | "RELIGIOUS_CHURCH_GROUPS" | "OTHER" | "REGISTRABLE_BODY" | "INDIGENOUS_CORPORATION" | "REGISTERED_ORGANISATION" | "COOPERATIVE" | "TRUST" | "EDUCATIONAL_INSTITUTION" | "COMMONWEALTH_ENTITY" | "STATUTORY_BODY" | "TRADING_COOPERATIVE" | "COMPANY_LIMITED_BY_GUARANTEE" | "NON_DISTRIBUTING_COOPERATIVE" | "NON_TRADING_COOPERATIVE" | "CHARITABLE_TRUST" | "PUBLIC_PRIVATE_ANCILLARY_FUND" | "PEAK_STATE_TERRITORY_BODY" | "NOT_FOR_PROFIT_COMMUNITY_GROUP";
export type AuRegistrantIdTypeConstants = "ACN" | "ABN" | "OTHER" | "TAS" | "VIC" | "NSW" | "ACT" | "QLD" | "NT" | "WA" | "SA";
export type AuthMethodConstants = "DNS" | "EMAIL" | "FILE" | "ORG";
export type AuthType = "PASSWORD" | "PASSWORD_TOKEN" | "ALIAS";
export type AuthenticateStatus = "COMPLETED" | "ADDITIONAL_INFORMATION_REQUIRED" | "IN_PROGRESS" | "COMMUNICATION_SENT_TO_CUSTOMER" | "ATTEMPTED_TO_REACH_CUSTOMER" | "PENDING_CUSTOMER_APPROVAL" | "NOT_COMPLETED" | "COMPLETED_PASSED" | "COMPLETED_FAILED" | "UNABLE_TO_COMPLETE" | "NOT_STARTED";
export type AuthenticationStep = "DOMAIN_VERIFICATION" | "VERIFICATION_CALL" | "ORGANIZATION_VERIFICATION" | "CONSUMER_AUTHENTICATION" | "CERTIFICATE" | "CONTACT_CONFIRMED" | "VERIFICATION" | "CSR_CHECK" | "DCV_CHECK" | "OV_CALLBACK" | "FREE_DVUP" | "EV_CLICKTROUGH";
export type AutoRenewStatusConstants = "TRUE" | "FALSE" | "ONCE";
export type BillingStatus = "ADD" | "REMOVE" | "UPDATE" | "IGNORE" | "CUSTOMER_CHANGED" | "USER_CHANGED" | "ACTIVE" | "CANCELED" | "CANCELED_EXPIRE" | "RESTORE" | "AUTODELETE" | "REMOVED" | "DROP";
export type BusinessCategory = "PRIVATE_ORGANIZATION" | "GOVERNMENT_ENTITY" | "BUSINESS_ENTITY";
export type CancelationStatusConstants = "DELETE" | "DELETE_EXPIRE" | "TRANSIT" | "TRANSIT_EXPIRE" | "PREACK" | "PREACK_EXPIRE";
export type CancelationTypeConstants = "DELETE" | "TRANSIT" | "PREACK";
export type CardStatus = "LOST" | "EXPIRED" | "ACTIVE";
export type CertificateTransparencyPrivacyConstants = "PUBLIC" | "REDACTED";
export type CertificateType = "FQDN" | "MAIL" | "CODE";
export type CiraCprConstants = "CCT" | "RES" | "CCO" | "ABO" | "TDM" | "MAJ" | "GOV" | "LGR" | "TRS" | "PRT" | "ASS" | "TRD" | "PLT" | "EDU" | "LAM" | "HOP" | "INB" | "OMK";
export type ClearAccountPeriod = "DAY" | "MONTH" | "BILL" | "WEEK" | "NONE";
export type CodeSigningType = "JAVASOFT" | "MS_AUTHENTICODE" | "VBA" | "ADOBE_AIR" | "APPLE";
export type ConditionType = "AND" | "OR";
export type ContactProtectionConstants = "SHOW_ALL" | "SHOW_NONE";
export type ContactReferenceType = "ALL" | "OWNERC" | "ADMINC" | "TECHC" | "ZONEC" | "BILLINGC";
export type ContactType = "BILLING" | "TECH" | "LEGAL" | "DOMAIN" | "SSL" | "SERVER";
export type ContactTypeConstants = "PERSON" | "ORG" | "ROLE";
export type CreditCardVendor = "MC" | "VISA" | "AMEX" | "DIC" | "DISC" | "CB";
export type CryptoFormatConstants = "SHA1" | "SHA256" | "SHA512";
export type CustomerType = "PERSON" | "OORGANIZATIONRG";
export type CsrHashAlgorithmConstants = "ECC" | "RSA" | "DSA";
export type DNSCheck = "SOA" | "NS" | "ALL" | "NONE";
export type DeliveryStatus = "PENDING" | "SUCCESS" | "FAILED" | "EXPIRED" | "ATTEMPTING" | "PARTIAL";
export type DocumentTypeConstants = "TM_LICENSEE_DECL" | "TM_ASSIGNEE_DECL" | "TM_OTHER" | "DECL_PROOF_OF_USE_ONE_SAMPLE" | "PROOF_OF_USE_OTHER" | "COPY_OF_COURT_ORDER" | "TMCH_AGENT_AUTHORISATION_FORM" | "TM_OTHER_COPY_OF_TM_CERTIFICATE" | "TM_OTHER_COPY_OF_RENEWAL_REQUEST" | "TM_OTHER_COPY_OF_TREATY_OR_STATUTE" | "TM_OTHER_COPY_OF_CERTIFICATE";
export type DomainActionConstants = "CREATE" | "UPDATE" | "UPDATE_OWNER_CHANGE" | "UPDATE_DNSSEC" | "UPDATE_NAMESERVER" | "DELETE" | "TRANSIT" | "TRANSFER" | "TRANSFER_INTERN" | "TRANSFER_INTERN_REGISTRAR_CHANGE" | "TRANSFER_INTERN_REGISTRAR_CHANGE_RUNTIME_TAKEOVER" | "IMPORT" | "MIGRATE" | "RESTORE" | "RESTORE_NE" | "RESTORE_RENEW" | "RESTORE_ARGP" | "RENEW" | "AUTHINFO" | "AUTHINFO_2" | "UPDATE_STATUS" | "REGISTRAR_UPDATE_STATUS" | "UPDATE_COMMENT" | "AUTOUPDATE_DNS" | "OWNERCHANGE" | "OWNERCHANGE_TRANSFER" | "OWNERCHANGE_TRANSFER_INTERN" | "OWNERCHANGE_TRANSFER_INTERN_REGISTRAR_CHANGE" | "PREACK" | "WHOIS_REGISTRY_STATUS" | "DOMAIN_AWAY" | "TRANSFER_OUT_AUTOACK" | "DROP" | "AUTHINFO_CREATE" | "AUTHINFO_DELETE" | "AUTOUPDATE_DEFERRED" | "DOMAIN_BUY";
export type DomainEnvelopeSearchService = "WHOIS" | "PRICE" | "ESTIMATION";
export type DomainPreregStatusConstants = "PENDING" | "PENDING_SENT" | "PENDING_DOCUMENT_SENT" | "PENDING_PROGRESS" | "PENDING_UPDATE" | "PENDING_SENT_UPDATE" | "TIMEOUT" | "ACCEPT" | "DECLINE" | "INVALID_NAME" | "FAILED" | "CANCEL" | "AUTO_CANCEL" | "ACTIVE" | "SENT" | "OPEN" | "TMCH_CLAIM" | "TMCH_CLAIM_CONFIRMED" | "TMCH_CLAIM_REJECTED" | "TMCH_CLAIM_EXPIRED" | "TMCH_CLAIM_PENDING" | "TMCH_CLAIM_FAILED" | "FAILED_REF";
export type DomainStudioDomainSource = "INITIAL" | "SUGGESTION" | "PREMIUM" | "GEO" | "SIMILAR" | "RECOMMENDED" | "CUSTOM" | "ONLINE_PRESENCE" | "SPIN_WORD" | "PERSONAL_NAMES" | "UPCOMING";
export type DomainStudioDomainStatus = "FREE" | "ASSIGNED" | "MARKET" | "PREMIUM" | "INVALID" | "ERROR" | "TIMEOUT" | "RESERVED" | "PREMIUM_CLAIM" | "CLAIM";
export type DomainStudioServiceStatus = "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT";
export type ExecutionTypeConstants = "DATE" | "EXPIRE" | "NOW";
export type GenderConstants = "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT";
export type GenericStatusConstants = "PENDING" | "SUCCESS" | "FAILED" | "NOT_SET";
export type HkDocumentTypeConstants = "HKID" | "OTHID" | "PASSNO" | "BIRTHCERT" | "OTHIDV" | "BR" | "CI" | "CRS" | "HKSARG" | "HKORDINANCE" | "OTHORG";
export type HkIndustryTypeConstants = "_0" | "_010100" | "_010200" | "_010300" | "_010400" | "_010500" | "_020100" | "_020200" | "_020300" | "_020400" | "_020500" | "_030100" | "_030200" | "_040100" | "_040200" | "_040300" | "_040400" | "_040500" | "_040600" | "_040700" | "_050100" | "_050200" | "_050300" | "_050400" | "_050500" | "_050600" | "_050700" | "_060100" | "_060200" | "_060300" | "_070100" | "_070200" | "_070300" | "_070400" | "_070500" | "_070600" | "_070700" | "_070800" | "_070900" | "_080100" | "_080200" | "_080300" | "_080400" | "_080500" | "_080600" | "_080700" | "_080800" | "_080900" | "_081000" | "_081100" | "_090100" | "_090200" | "_090300" | "_090400" | "_090500" | "_100100" | "_100200" | "_100300" | "_100400" | "_100500" | "_110100" | "_110200" | "_110300" | "_110400" | "_110500" | "_110600" | "_120100" | "_120200" | "_120300" | "_120400" | "_120500" | "_120600" | "_120700" | "_120800" | "_120900" | "_130100" | "_130200" | "_130300" | "_130400" | "_130500" | "_130600" | "_130700" | "_130800" | "_140101" | "_140102" | "_140103" | "_140200" | "_140300" | "_140400" | "_140500" | "_140600" | "_140700";
export type Id4MeAgentStatus = "PENDING" | "PENDING_SSL" | "PENDING_SSL_VERIFY" | "SUCCESS" | "FAILED";
export type IdentityStatus = "VERIFY" | "SUCCESS";
export type InvoiceStatusConstants = "CREATED" | "SIGNED" | "SENT" | "RESEND" | "FINISHED" | "LIVECONFIRMED" | "LIVEPENDING" | "POSTPENDING" | "POSTCONFIRMED";
export type IpRestrictionTypeConstants = "CLONE" | "USER" | "CONTEXT";
export type ItEntityTypeConstants = "ITALIAN_AND_FOREIGN_NATURAL_PERSONS" | "ITALIAN_COMPANIES_ONE_MAN_COMPANIES" | "ITALIAN_FREELANCE_WORKERS_PROFESSIONALS" | "ITALIAN_NON_PROFIT_ORGANIZATIONS" | "ITALIAN_PUBLIC_ORGANIZATIONS" | "ITALIAN_OTHER_SUBJECTS" | "FOREIGN_NON_NATURAL_PERSONS";
export type IeEntityTypeConstants = "COM" | "CHA" | "OTH";
export type JobStatusConstants = "RUNNING" | "SUCCESS" | "FAILED" | "CANCELED" | "SUPPORT" | "DEFERRED" | "NOT_SET" | "WAIT";
export type MessageTypeConstants = "INITIAL" | "FIRST_REMINDER" | "SECOND_REMINDER" | "LAST_REMINDER";
export type ModifierConstants = "TTL" | "MX" | "A" | "AAAA" | "SOA_EMAIL" | "NSERVER" | "CNAME" | "TXT" | "ALL" | "MAIN_IP" | "OWNERC" | "ADMINC" | "TECHC" | "ZONEC" | "BILLINGC" | "ALIAS";
export type NameserverActionConstants = "PRIMARY" | "SECONDARY" | "COMPLETE" | "HIDDEN" | "NONE" | "AUTO";
export type NiccomSourceConstants = "NIC_REQUEST" | "NIC_RESPONSE" | "NIC_NOTIFY" | "A3_REQUEST" | "A3_RESPONSE";
export type ObjectAssignmentMode = "ASSIGN" | "DELETE";
export type ObjectStatus = "SPOOL" | "REQUEST" | "PENDING_NOTIFY" | "PENDING" | "FAILED" | "SUCCESS" | "PENDING_DOMAIN" | "CONNECT";
export type Operator = "EQUAL" | "NOT_EQUAL" | "NOT_LIKE" | "LIKE" | "ILIKE" | "GREATER" | "GREATER_EQUAL" | "LESS" | "LESS_EQUAL" | "IS_NULL" | "IS_NOT_NULL" | "IN";
export type OrderType = "DESC" | "ASC";
export type ParkingProviderConstants = "SEDO" | "NAMEDRIVE" | "PARKINGCREW";
export type PaymentConstants = "PRE" | "POST" | "LIVE";
export type PolicyMode = "DISABLED" | "QUARANTINE" | "DISCARD" | "ACCEPT";
export type PriceTypeConstants = "GROSS" | "NET";
export type PriorityConstants = "DEFAULT" | "OFFER" | "PROTECTED" | "PROMO";
export type ProtectionConstants = "HIGH" | "MEDIUM" | "LOW" | "OFF" | "CUSTOM";
export type ProtocolTypeConstants = "TOTP" | "HOTP";
export type RddsOptInConstants = "NOT_SET" | "OWNERC" | "ADMINC" | "OWNERC_ADMINC" | "TECHC" | "OWNERC_TECHC" | "ADMINC_TECHC" | "ALL";
export type RecipientRole = "TO" | "CC" | "BCC";
export type RedirectModeConstants = "CATCHALL" | "FRAME" | "HTTP" | "SINGLE" | "HTTPS";
export type RedirectTypeConstants = "DOMAIN" | "EMAIL";
export type RegistrationTypeConstants = "FCFS" | "APPLICATION" | "OTHER";
export type RegistryStatusConstants = "ACTIVE" | "HOLD" | "LOCK" | "HOLD_LOCK" | "AUTO" | "LOCK_OWNER" | "LOCK_UPDATE" | "PENDING" | "NONE";
export type RenewStatusConstants = "AUTO" | "CANCELED" | "ONCE";
export type RoPersonTypeConstants = "P" | "AP" | "NC" | "C" | "GI" | "PI" | "O";
export type SanType = "FQDN" | "SUBDOMAIN" | "WILDCARD";
export type ServerSoftwareTypeConstants = "IIS4" | "IIS5" | "APACHE2" | "APACHESSL" | "PLESK" | "TOMCAT" | "NOT_SET";
export type SignatureHashAlgorithmConstants = "SHA1" | "SHA2" | "SHA2_FULL_CHAIN" | "UNKNOWN" | "SHA384" | "SHA512" | "SHA256" | "SHA384_SHA1" | "SHA256_SHA256" | "SHA256_ECDSA_SHA1" | "SHA384ECDSA_SHA1" | "SHA384_ECDSA_SHA1" | "SHA256_ECDSA_SHA384_ECDSA" | "SHA384_ECDSA_SHA384_ECDSA";
export type StatusType = "SUCCESS" | "ERROR" | "NOTIFY" | "NOTICE" | "NICCOM_NOTIFY";
export type SepaStatus = "ACTIVE" | "UPDATE" | "CANCELED" | "EXPIRED" | "LOCKED" | "REMOVE";
export type TanMethods = "METHOD_EMAIL" | "METHOD_MOBILE" | "METHOD_2FA";
export type TaskGroup = "DOMAIN_CREATE" | "DOMAIN_DELETE" | "DOMAIN_STATUS_UPDATE" | "DOMAIN_TRANSFER_IN" | "DOMAIN_TRANSFER_OUT" | "DOMAINSAFE" | "AUTHINFO_CREATE" | "AUTHINFO_SEND" | "ZONE_CREATE" | "WHOIS" | "DOMAIN_UPDATE" | "DOMAINSTUDIO" | "ZONE_UPDATE" | "ZONE_DELETE" | "ZONE_AXFR";
export type TimeUnitConstants = "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR";
export type TmchMarkHolderConstants = "OWNER" | "LICENSEE" | "ASSIGNEE";
export type TmchMarkStatusConstants = "OPEN" | "PAYMENT" | "PENDING" | "INCORRECT" | "VERIFIED" | "SENT" | "ACTIVE" | "DEACTIVATED" | "CANCELED" | "RENEW" | "FAILED" | "EXTERNAL" | "PENDING_TRANSFER" | "PENDING_RENEW" | "PENDING_DELETE" | "PENDING_PAYMENT" | "PENDING_TRANSFER_PAYMENT" | "PENDING_RENEW_PAYMENT";
export type TmchMarkTypeConstants = "TRADEMARK" | "TREATY_OR_STATUTE" | "COURT" | "DNL_ABUSED";
export type TransferAnswer = "TRANSFER_OUT_ACK" | "TRANSFER_OUT_NACK";
export type TransferStatusConstants = "NOT_SET" | "START" | "FAILED" | "NACK" | "ACK" | "FOA1_SENT" | "AUTOUPDATE_SUCCESS" | "AUTOUPDATE_FAILED";
export type UkTypeConstants = "LTD" | "PLC" | "PTNR" | "STRA" | "LLP" | "IP" | "IND" | "SCH" | "RCHAR" | "GOV" | "CRC" | "STAT" | "OTHER" | "FIND" | "FCORP" | "FOTHER";
export type UserLock = "NONE" | "CUSTOMER" | "EXPIRED" | "USER";
export type UserProfileFlag = "OPTIONAL" | "FIX" | "RECURSE" | "HIDDEN" | "PARENT_FIX";

export namespace DomainRobotModels {
    export class Account {
        constructor(config?: Account);
    }
    export interface Account {
        customer?: GenericCustomer;
        currentAccountBalance?: number;
        runningTotal?: number;
        creditLimit?: number;
        currency?: string;
        minRunningTotalNotification?: number;
        minRunningTotalNotificationEmail?: string;
        created?: string;
        updated?: string;
        view?: CurrencyRate;
    }

    export class AccountingDocument {
        constructor(config?: AccountingDocument);
    }
    export interface AccountingDocument {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
        entry?: AccountEntry;
        type?: AccountingDocumentTypeConstants;
        account?: Account;
        subjectProducts?: SubjectProduct;
        view?: CurrencyRate;
        synchronized?: Boolean;
        status?: AccountStatusConstants;
        invoice?: Invoice;
        payment?: PaymentConstants;
    }

    export class AccountEntry {
        constructor(config?: AccountEntry);
    }
    export interface AccountEntry {
        label?: string;
        amount?: number;
        vatAmount?: number;
        vats?: Vat;
        netAmount?: number;
        currency?: string;
    }

    export class AccountManager {
        constructor(config?: AccountManager)
    }
    export interface AccountManager {
        created?: string
        updated?: string
        owner?: BasicUser
        updater?: BasicUser
        id?: number
        name?: string
        phone?: Phone
        email?: string
    }

    export class AdoptExpiration {
        constructor(config?: AdoptExpiration)
    }
    export interface AdoptExpiration {
        tlds?: string[]
    }

    export class AddressClaim {
        constructor(config?: AddressClaim);
    }
    export interface AddressClaim {
        formatted?: string;
        streetAddress?: string;
        locality?: string;
        region?: string;
        postalCode?: string;
        country?: string;
    }

    export class Article {
        constructor(config?: Article);
    }
    export interface Article {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        type?: string;
        label?: string;
    }

    export class Application {
        constructor(config?: Application);
    }
    export interface Application {
        created?: string;
        updated?: string;
        name?: string;
        functionCodes?: string[];
    }
    export class BackupMx {
        constructor(config?: BackupMx);
    }
    export interface BackupMx {
        domain?: string;
        idn?: string;
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class BasicCertificate {
        constructor(config?: BasicCertificate)
    }
    export interface BasicCertificate {
        id?: number
        product?: string
    }

    export class BasicCustomer {
        constructor(config?: BasicCustomer);
    }
    export interface BasicCustomer {
        number?: number;
        client?: string;
        group?: number;
        name?: string;
        organization?: string;
        vatnumber?: string;
        gender?: string;
        title?: string;
        addressLines?: string[];
        city?: string;
        state?: string;
        country?: string;
        phone?: Phone;
        fax?: Phone;
        emails?: string[];
        billingEmails?: string[];
        payment?: string;
        paymentMode?: string;
        paymentCurrency?: Currency;
        invoiceLanguage?: string;
        taxable?: Boolean;
        card?: Card;
        contracts?: CustomerContract[];
        billingUsers?: BasicUser[];
        account?: Account;
        clearAccount?: ClearAccountPeriod;
        fname?: string;
        lname?: string;
        pcode?: string;
        sepa?: SEPAMandate;
    }

    export class BasicCustomerSpoolVerification {
        constructor(config?: BasicCustomerSpoolVerification)
    }
    export interface BasicCustomerSpoolVerification {
        created?: string
        updated?: string
        email?: string
        status?: GenericStatusConstants
        customer?: GenericCustomer
    }

    export class BasicDocument {
        constructor(config?: BasicDocument);
    }
    export interface BasicDocument {
        created?: string;
        updated?: string;
        id?: number;
        comment?: string;
        type?: string;
        mimeType?: string;
        data?: string;
        size?: number;
        name?: string;
        link?: string;
        uuid?: string;
        alias?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        expire?: string;
    }

    export class BasicUser {
        constructor(config?: BasicUser);
    }
    export interface BasicUser {
        context: number;
        user: string;
    }

    export class BillingCustomerXML {
        constructor(config?: BillingCustomerXML)
    }
    export interface BillingCustomerXML {
        "@_number"?: number,
        "@_client": string,
        "@_payment": string,
        country: string,
        fname: string,
        lname: string,
        city: string,
        pcode: string,
        taxable?: Boolean,
        discount?: Boolean,
        billing_term?: string,
        autodelete?: Boolean,
        autodelete_tlds?: string,
        email: string[],
        billing_email: string[],
        extension?: any,
        sepa_mandate: SEPAMandate,
        contact: BillingCustomerContact,
        contract?: BillingContractXML,
        comment?: Comment,
        billing?: string
    }

    export class BillingCustomerContact {
        constructor(config?: BillingCustomerContact)
    }

    export interface BillingCustomerContact {
        type?: string,
        city?: string,
        country?: string,
        state?: string,
        email?: string,
        fname?: string,
        lname?: string,
        address?: string[],
        pcode?: string,
        fax?: string,
        phone?: string,
    }

    export class BillingContractXML {
        constructor(config?: BillingContractXML)
    }

    export interface BillingContractXML {
        contract: {
            "@_label": string
        },
        account_manager?: {
            name: string
        },
        document_id?: number,
        classification?: string,
        notice?: string,
        addons?: any
    }

    export class BillingEvent {
        constructor(config?: BillingEvent)
    }
    export interface BillingEvent {
        created?: string,
        updated?: string,
        owner?: BasicUser,
        updater?: BasicUser,
        status?: BillingStatus,
        object?: string,
        description?: string,
        period?: TimePeriod,
        articleTypeLabel?: string,
        payable?: string,
        articleLabel?: string,
        businessCase?: string,
        extensions?: BillingEventExtensions
    }

    export class BillingEventExtensions {
        constructor(config?: BillingEventExtensions)
    }
    export interface BillingEventExtensions {
        externalReference?: string
    }

    export class BillingLimit {
        constructor(config?: BillingLimit);
    }
    export interface BillingLimit {
        user?: BasicUser;
        entries?: BillingObjectLimit[];
    }

    export class BillingObjectTerms {
        constructor(config?: BillingObjectTerms);
    }
    export interface BillingObjectTerms {
        billingObjectTerms?: BillingObjectTerm[];
    }

    export class BillingObjectTerm {
        constructor(config?: BillingObjectTerm);
    }
    export interface BillingObjectTerm {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        cancelation?: TimePeriod;
        cancelationExpireOnly?: Boolean;
        initial?: TimePeriod;
        renew?: TimePeriod;
        renewTerm?: TimePeriod;
        customer?: GenericCustomer;
        articleTypeLabel?: string;
        acrticleLabel?: string;
        autodeleteable: Boolean;
        restoreable?: Boolean;
    }

    export class BillingObjectLimit {
        constructor(config?: BillingObjectLimit);
    }
    export interface BillingObjectLimit {
        created?: string;
        updated?: string;
        articleLabel?: string;
        limitSelf?: number;
        limitChildren?: number;
        articleTypeLabel?: string;
        count?: number;
    }

    export class BulkBackupMxDeleteRequest {
        constructor(config?: BulkBackupMxDeleteRequest);
    }
    export interface BulkBackupMxDeleteRequest {
        objects?: BackupMx[];
        query?: Query;
    }

    export class BulkBackupMxPostRequest {
        constructor(config?: BulkBackupMxPostRequest);
    }
    export interface BulkBackupMxPostRequest {
        objects?: BackupMx[];
        template?: BackupMx;
    }

    export class BulkContactDeleteRequest {
        constructor(config?: BulkContactDeleteRequest);
    }
    export interface BulkContactDeleteRequest {
        objects?: Contact[];
        query?: Query;
    }

    export class BulkDomainCancelationDeleteRequest {
        constructor(config?: BulkDomainCancelationDeleteRequest);
    }
    export interface BulkDomainCancelationDeleteRequest {
        objects?: DomainCancelation[];
        query?: Query;
    }

    export class BulkDomainCancelationPatchRequest {
        constructor(config?: BulkDomainCancelationPatchRequest);
    }
    export interface BulkDomainCancelationPatchRequest {
        objects?: DomainCancelation[];
        template?: DomainCancelation;
        query?: Query;
    }

    export class BulkDomainCancelationPostRequest {
        constructor(config?: BulkDomainCancelationPostRequest);
    }
    export interface BulkDomainCancelationPostRequest {
        objects?: DomainCancelation[];
        template?: DomainCancelation;
    }

    export class BulkDomainCommentRequest {
        constructor(config?: BulkDomainCommentRequest);
    }
    export interface BulkDomainCommentRequest {
        objects?: Domain[];
        template?: Domain;
        query?: Query;
    }

    export class BulkDomainDeleteRequest {
        constructor(config?: BulkDomainDeleteRequest);
    }
    export interface BulkDomainDeleteRequest {
        objects?: Domain[];
        query?: Query;
    }

    export class BulkDomainPatchRequest {
        constructor(config?: BulkDomainPatchRequest);
    }
    export interface BulkDomainPatchRequest {
        objects?: Domain[];
        template?: Domain;
        query?: Query;
        modifiers: Modifier[];
    }

    export class BulkDomainPostRequest {
        constructor(config?: BulkDomainPostRequest);
    }
    export interface BulkDomainPostRequest {
        objects?: Domain[];
        template?: Domain;
    }

    export class BulkSslContactDeleteRequest {
        constructor(config?: BulkSslContactDeleteRequest);
    }
    export interface BulkSslContactDeleteRequest {
        objects?: SslContact[];
        query?: Query;
    }

    export class BulkMailProxyDeleteRequest {
        constructor(config?: BulkMailProxyDeleteRequest);
    }
    export interface BulkMailProxyDeleteRequest {
        objects?: MailProxy[];
        query?: Query;
    }

    export class BulkMailProxyPatchRequest {
        constructor(config?: BulkMailProxyPatchRequest);
    }
    export interface BulkMailProxyPatchRequest {
        objects?: MailProxy[];
        template?: MailProxy;
        query?: Query;
    }

    export class BulkMailProxyPostRequest {
        constructor(config?: BulkMailProxyPostRequest);
    }
    export interface BulkMailProxyPostRequest {
        objects?: MailProxy[];
        template?: MailProxy;
    }

    export class BulkRedirectDeleteRequest {
        constructor(config?: BulkRedirectDeleteRequest);
    }
    export interface BulkRedirectDeleteRequest {
        objects?: Redirect[];
        query?: Query;
    }

    export class BulkRedirectPatchRequest {
        constructor(config?: BulkRedirectPatchRequest);
    }
    export interface BulkRedirectPatchRequest {
        objects?: Redirect[];
        template?: Redirect;
        query?: Query;
    }

    export class BulkRedirectPostRequest {
        constructor(config?: BulkRedirectPostRequest);
    }
    export interface BulkRedirectPostRequest {
        objects?: Redirect[];
        template?: Redirect;
    }

    export class BulkZoneCommentRequest {
        constructor(config?: BulkZoneCommentRequest);
    }
    export interface BulkZoneCommentRequest {
        objects?: Zone[];
        template?: Zone;
        query?: Query;
    }

    export class BulkZoneDeleteRequest {
        constructor(config?: BulkZoneDeleteRequest);
    }
    export interface BulkRedirectBulkZoneDeleteRequestDeleteRequest {
        objects?: Zone[];
        query?: Query;
    }

    export class BulkZonePatchRequest {
        constructor(config?: BulkZonePatchRequest);
    }
    export interface BulkZonePatchRequest {
        objects?: [ZoneBasePatchRequest];
        template?: ZoneBasePatchRequest;
        query?: Query;
        modifiers: Modifier[];
    }

    export class BulkZonePostRequest {
        constructor(config?: BulkZonePostRequest);
    }
    export interface BulkZonePostRequest {
        objects?: Zone[];
        template?: Zone;
    }

    export class CaCertificate {
        constructor(config?: CaCertificate);
    }
    export interface CaCertificate {
        created?: string;
        updated?: string;
        caType?: string;
        caCertificate?: string;
    }
    export class Card {
        constructor(config?: Card);
    }
    export interface Card {
        created?: string;
        updated?: string;
        type?: CreditCardVendor;
        status?: CardStatus;
        validFrom?: string;
        validTo?: string;
    }

    export class CertAuthentication {
        constructor(config?: CertAuthentication);
    }
    export interface CertAuthentication {
        name?: string;
        method?: AuthMethodConstants;
        dns?: string;
        fileName?: string;
        fileContent?: string;
        approverEmails?: string[];
        provisioning?: Boolean;
        domains?: CertAuthentication[];
    }

    export class Certificate {
        constructor(config?: Certificate);
    }
    export interface Certificate {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
        partnerOrderId?: string;
        orderId?: string;
        adminContact?: SslContact;
        technicalContact?: SslContact;
        name?: string;
        lifetime?: TimePeriod;
        software?: ServerSoftwareTypeConstants;
        comment?: string;
        csr?: string;
        server?: string;
        serialnumber?: string;
        product?: string;
        codeSigningType?: CodeSigningType;
        certificateType?: CertificateType;
        signatureHashAlgorithm?: SignatureHashAlgorithmConstants;
        expire?: string;
        payable?: string;
        extension?: ExtendedValidationExtension;
        subjectAlternativeNames?: SubjectAlternativeName[];
        histories?: CertificateHistory[];
        certificationAuthority?: CaCertificate[];
        password?: string;
        firstname?: string;
        lastname?: string;
        organizationUnitName?: string;
        authentication?: CertAuthentication;
        certificateTransparency?: Boolean;
        certificateTransparencyPrivacy?: CertificateTransparencyPrivacyConstants;
        domain?: string;
        hasCsr?: Boolean;
        idn?: string;
    }

    export class CertificateData {
        constructor(config?: CertificateData);
    }
    export interface CertificateData {
        plain?: string;
        name?: string;
        san?: string[];
        histories?: CertificateHistory[];
        keySize?: number;
        countryCode?: string;
        challengePassword?: string;
        state?: string;
        city?: string;
        organization?: string;
        organizationUnit?: string;
        email?: string;
        product?: string;
        authentication?: CertAuthentication[];
        algorithm?: CsrHashAlgorithmConstants;
        signatureHashAlgorithm?: SignatureHashAlgorithmConstants;
        idn?: string;
        checkCaa?: Boolean;
    }

    export class CertificateInstallCheckData {
        constructor(config?: CertificateInstallCheckData);
    }
    export interface CertificateInstallCheckData {
        ip?: string;
        secured?: Boolean;
        redirect?: Boolean;
        redirectMatch?: Boolean;
        caa?: Boolean;
        multipleCaa?: Boolean;
        selfSigned?: Boolean;
        chainOk?: Boolean;
        inventory?: Boolean;
        certificate?: Certificate;
        tls?: TlsData[];
        certificateData?: X509CertificateData;
        redirectCertificateData?: X509CertificateData;
        chain?: X509CertificateData[];
        notices?: CertificateInstallCheckNotice[];
    }

    export class CertificateInstallCheckNotice {
        constructor(config?: CertificateInstallCheckNotice);
    }
    export interface CertificateInstallCheckNotice {
        type?: string;
        label?: string;
        value?: string;
    }

    export class CertificateInstallCheckRequest {
        constructor(config?: CertificateInstallCheckRequest);
    }
    export interface CertificateInstallCheckRequest {
        hostname?: string;
    }

    export class CertificateInstallCheckResult {
        constructor(config?: CertificateInstallCheckResult);
    }
    export interface CertificateInstallCheckResult {
        hostname?: string;
        data?: CertificateInstallCheckData[];
    }

    export class CertificateHistory {
        constructor(config?: CertificateHistory);
    }
    export interface CertificateHistory {
        serialnumber?: string;
        revoked?: string;
    }

    export class Configuration {
        constructor();
    }

    export class Contact {
        constructor(config?: Contact);
    }
    export interface Contact {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
        customer?: GenericCustomer;
        type?: ContactTypeConstants;
        firstName?: string;
        lastName?: string;
        title?: string;
        label?: string;
        locale?: Locale;
        gender?: GenderConstants;
        postalCode?: string;
        city?: string;
        country?: string;
        state?: string;
        phones?: Phone[];
        faxes?: Phone[];
        email?: string;
        address?: string[];
    }

    export class ContactAeroExtensions {
        constructor(config?: ContactAeroExtensions);
    }
    export interface ContactAeroExtensions {
        ensAuthId?: string;
        ensKey?: string;
    }

    export class ContactAuExtensions {
        constructor(config?: ContactAuExtensions);
    }
    export interface ContactAuExtensions {
        eligibilityId?: string;
        eligibilityIdType?: AuEligibilityIdTypeConstants;
        eligibilityName?: string;
        eligibilityType?: AuEligibilityTypeConstants;
        policyReason?: number;
        registrantId?: string;
        registrantIdType?: AuRegistrantIdTypeConstants;
        registrantName?: string;
    }

    export class ContactBankExtensions {
        constructor(config?: ContactBankExtensions);
    }
    export interface ContactBankExtensions {
        ftldToken?: string;
    }

    export class ContactBarcelonaExtensions {
        constructor(config?: ContactBarcelonaExtensions);
    }
    export interface ContactBarcelonaExtensions {
        intendedUse?: string;
    }

    export class ContactBirthExtensions {
        constructor(config?: ContactBirthExtensions);
    }
    export interface ContactBirthExtensions {
        country?: string;
        day?: string;
        postalCode?: string;
        place?: string;
    }

    export class ContactCaExtensions {
        constructor(config?: ContactCaExtensions);
    }
    export interface ContactCaExtensions {
        cpr?: CiraCprConstants;
        agreementVersion?: number;
        originatingIp?: string;
        officialRepresentativ?: string;
        trusteePercentage?: number;
    }

    export class ContactCatExtensions {
        constructor(config?: ContactCatExtensions);
    }
    export interface ContactCatExtensions {
        intendedUse?: string;
    }

    export class ContactExtensions {
        constructor(config?: ContactExtensions);
    }
    export interface ContactExtensions {
        aero?: ContactAeroExtensions;
        au?: ContactAuExtensions;
        cat?: ContactCatExtensions;
        jobs?: ContactJobsExtensions;
        it?: ContactItExtensions;
        jp?: ContactJpExtensions;
        xxx?: ContactXxxExtensions;
        hk?: ContactHkExtensions;
        bank?: ContactBankExtensions;
        swiss?: ContactSwissExtensions;
        ru?: ContactRuExtensions;
        uk?: ContactUkExtensions;
        ca?: ContactCaExtensions;
        ro?: ContactRoExtensions;
        barcelona?: ContactBarcelonaExtensions;
        general?: ContactGeneralExtensions;
        nz?: ContactNzExtensions;
        sport?: ContactSportExtensions;
        luxe?: ContactLuxeExtensions;
        madrid?: ContactMadridExtensions;
        scot?: ContactScotExtensions;
        ie?: ContactIeExtensions;
    }

    export class ContactGeneralExtensions {
        constructor(config?: ContactGeneralExtensions);
    }
    export interface ContactGeneralExtensions {
        birth?: ContactBirthExtensions;
        trademark?: ContactTrademarkExtensions;
        identification?: ContactIdentificationExtensions;
        languag?: string;
        companynumber?: string;
        gender?: GenderConstants
        vatnumber?: string;
        citizenship?: string;
        mobilePhone?: string;
    }

    export class ContactHkExtensions {
        constructor(config?: ContactHkExtensions);
    }
    export interface ContactHkExtensions {
        documentType?: HkDocumentTypeConstants;
        others?: string;
        documentnumber?: string;
        documentOrigin?: string;
        above18?: string;
        industryType?: HkIndustryTypeConstants
    }

    export class ContactIdentificationExtensions {
        constructor(config?: ContactIdentificationExtensions);
    }
    export interface ContactIdentificationExtensions {
        number?: string;
        authority?: string;
        dateOfIssue?: string;
        validTill?: string;
    }

    export class ContactItExtensions {
        constructor(config?: ContactItExtensions);
    }
    export interface ContactItExtensions {
        entityType?: ItEntityTypeConstants;
    }

    export class ContactIeExtensions {
        constructor(config?: ContactIeExtensions)
    }
    export interface ContactIeExtensions {
        contactType?: IeEntityTypeConstants
        cronumber?: string
        supportingnumber?: string
    }

    export class ContactJobsExtensions {
        constructor(config?: ContactJobsExtensions);
    }
    export interface ContactJobsExtensions {
        adminType?: Boolean;
        contactTitle?: string;
        hrMember?: Boolean;
        industryClass?: number;
        website?: string;
    }

    export class ContactJpExtensions {
        constructor(config?: ContactJpExtensions);
    }
    export interface ContactJpExtensions {
        first?: string;
        last?: string;
        organization?: string;
        adressLine1?: string;
        adressLine2?: string;
        adressLine3?: string;
    }

    export class ContactLuxeExtensions {
        constructor(config?: ContactLuxeExtensions);
    }
    export interface ContactLuxeExtensions {
        walletAddress?: string;
    }

    export class ContactMadridExtensions {
        constructor(config?: ContactMadridExtensions);
    }
    export interface ContactMadridExtensions {
        intendedUse?: string;
    }

    export class ContactNzExtensions {
        constructor(config?: ContactNzExtensions);
    }
    export interface ContactNzExtensions {
        irpo?: string;
    }

    export class ContactReference {
        constructor(config?: ContactReference);
    }
    export interface ContactReference {
        nic?: NicMember;
        status?: ObjectStatus;
        type?: ContactReferenceType;
        role?: ContactReferenceType;
        name?: string;
    }

    export class ContactRoExtensions {
        constructor(config?: ContactRoExtensions);
    }
    export interface ContactRoExtensions {
        persontype?: string;
    }

    export class ContactRuExtensions {
        constructor(config?: ContactRuExtensions);
    }
    export interface ContactRuExtensions {
        taxpayerIdentificationnumber?: string;
        territoryLinkedTaxpayernumber?: string;
    }

    export class ContactScotExtensions {
        constructor(config?: ContactScotExtensions)
    }
    export interface ContactScotExtensions {
        intendedUse?: string
    }

    export class ContactSportExtensions {
        constructor(config?: ContactSportExtensions);
    }
    export interface ContactSportExtensions {
        intendedUse?: string;
    }

    export class ContactSwissExtensions {
        constructor(config?: ContactSwissExtensions);
    }
    export interface ContactSwissExtensions {
        intendedUse?: string;
        enterpriseId?: string;
    }

    export class ContactTrademarkExtensions {
        constructor(config?: ContactTrademarkExtensions);
    }
    export interface ContactTrademarkExtensions {
        name?: string;
        number?: string;
        country?: string;
        regdate?: string;
        appdate?: string;
        office?: string;
    }

    export class ContactUkExtensions {
        constructor(config?: ContactUkExtensions);
    }
    export interface ContactUkExtensions {
        entityType?: string;
    }

    export class ContactVerificationDomain {
        constructor(config?: ContactVerificationDomain);
    }
    export interface ContactVerificationDomain {
        created?: string;
        updated?: string;
        name?: string;
        idn?: string;
        status?: GenericStatusConstants;
        deactivation?: string;
    }

    export class ContactVerificationMessage {
        constructor(config?: ContactVerificationMessage);
    }
    export interface ContactVerificationMessage {
        created?: string;
        updated?: string;
        mail?: Message;
        status?: GenericStatusConstants;
    }

    export class ContactXxxExtensions {
        constructor(config?: ContactXxxExtensions);
    }
    export interface ContactXxxExtensions {
        membershipID?: string;
        nonResolverDomain?: Boolean;
    }

    export class Comment {
        constructor(config?: Comment)
    }
    export interface Comment {
        created?: string
        updated?: number
        id?: number
        customer?: GenericCustomer
        text?: string
        user?: BasicUser
    }

    export class ContextHost {
        constructor(config?: ContextHost)
    }
    export interface ContextHost {
        created?: string
        updated?: number
        master?: Boolean
        csr?: string
        serverCert?: string
        caCert?: string
        status?: JobStatusConstants
        subStatus?: string
        zone?: ContextHostZone
        certificate?: BasicCertificate
        name?: string
    }

    export class ContextHostZone {
        constructor(config?: ContextHostZone)
    }
    export interface ContextHostZone {
        origin?: string
        sub?: string
        zones?: HostSubZone[]
    }

    export class Currency {
        constructor();
    }

    export class CurrencyRate {
        constructor(config?: CurrencyRate);
    }
    export interface CurrencyRate {
        currency?: string;
        rate?: number;
    }

    export class Custom {
        constructor(config?: Custom);
    }
    export interface Custom {
        key?: string;
    }

    export class Customer {
        constructor(config?: Customer);
    }
    export interface Customer {
        number?: number;
        client?: string;
        group?: number;
        name?: string;
        organization?: string;
        vatnumber?: string;
        gender?: GenderConstants;
        title?: string;
        addressLines?: string[];
        city?: string;
        state?: string;
        country?: string;
        phone?: Phone;
        fax?: Phone;
        emails?: string[];
        billingEmails?: string[];
        payment?: PaymentConstants;
        paymentMode?: string;
        paymentCurrency?: Currency;
        invoiceLanguage?: string;
        taxable?: Boolean;
        card?: Card;
        contracts?: CustomerContract[];
        billingUsers?: BasicUser[];
        comments?: Comment[];
        contacts?: Contact[];
        account?: Account;
        clearAccount?: ClearAccountPeriod;
        fname?: string;
        lname?: string;
        pcode?: string;
        technical?: GenericCustomer;
        sepa?: SEPAMandate;
        pricelists?: CustomerPriceLists
    }

    export class CustomerContract {
        constructor(config?: CustomerContract);
    }
    export interface CustomerContract {
        created?: string;
        updated?: string;
        contract?: GenericLabelEntity;
        notice?: string;
        ticketnumber?: string;
    }
    
    export class CustomerGroup {
        constructor(config?: CustomerGroup);
    }
    export interface CustomerGroup {
        created?: string;
        updated?: string;
        number?: number;
        client?: string;
        name?: PriceTypeConstants;
        parent?: object;
        addons?: CustomerGroupAddon;
        owner?: BasicUser;
    }
    export class CustomerGroupAddon {
        constructor(config?: CustomerGroupAddon);
    }
    export interface CustomerGroupAddon {
        maxNumber?: number;
        minNumber?: number;
        from?: string;
        emailSignature?: string;
        archiveTo?: string;
        footer?: string;
        replyTo?: string;
        renewReminderMailText?: LocalizedValue;
        renewReminderMailSubject?: LocalizedValue;
        certificateComment?: string;
        domainComment?: string;
        domainSeoComment?: string;
        housingComment?: string;
        serverAddonComment?: string;
        serverVirtualComment?: string;
        proceedComment?: string;
        serverLicenceComment?: string;
        proceedAddonComment?: string;
        nsVirtualGroupComment?: string;
        websitebuilderComment?: string;
        tmchComment?: string;
        zoneComment?: string;
        packageComment?: string;
        packageAddonComment?: string;
        invoiceCreditNumberGeneratorSequenceNamePattern?: string;
        invoiceJasper?: LocalizedValue;
        invoiceMailSubject?: LocalizedValue;
        invoiceMailText?: LocalizedValue;
        invoiceNumberGenerator?: string;
        invoiceNumberGeneratorInitialValue?: number;
        invoiceNumberGeneratorPattern?: string;
        invoiceNumberGeneratorSequenceNamePattern?: string;
        invoiceDefaultLanguage?: Locale;
        invoiceSshDefaultPath?: string;
        invoiceSshHostname?: string;
        invoiceSshPrivateKey?: string;
        invoiceSshUserName?: string;
        sepaMailSubject?: LocalizedValue;
        sepaMailText?: LocalizedValue;
        sepaJasper?: LocalizedValue;
        creditJasper?: LocalizedValue;
        creditMailSubject?: LocalizedValue;
        creditMailText?: LocalizedValue;
        creditNumberGenerator?:	string;
        creditNumberGeneratorPattern?: string;
        creditNumberGeneratorRotateUnit?: TimeUnitConstants;
        logo?: string;
        housingNumber?:	string;
        domainNumber?: string;
        payee?: string;
        url?: string;
        watermark?: LocalizedValue;
        priceTaskCommentRequired?: boolean;
    }
    export class CustomerPriceLists {
        constructor();
        // constructor(config?: CustomerPriceLists);
    }
    // export interface CustomerPriceLists {}

    export class CustomerTag {
        constructor(config?: CustomerTag);
    }
    export interface CustomerTag {
        created?: string;
        updated?: string;
        tag?: GenericLabelEntity;
    }

    export class DNSSec {
        constructor(config?: DNSSec);
    }
    export interface DNSSec {
        algorithm?: number;
        flags?: number;
        protocol?: number;
        publicKey?: string;
    }

    export class DNSSecJob {
        constructor();
    }

    export class Document {
        constructor(config?: Document);
    }
    export interface Document {
        created?: string;
        updated?: string;
        id?: number;
        comment?: string;
        type?: string;
        mimeType?: string;
        data?: string;
        size?: number;
        name?: string;
        link?: string;
    }

    export class Domain {
        constructor(config?: Domain);
    }

    export interface Domain {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: string;
        idn?: string;
        nicMemberLabel?: string;
        registryStatus?: RegistryStatusConstants;
        nameServers?: NameServer[];
        nameServerEntries?: string[];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: string;
        domainsafe?: Boolean;
        parking?: ParkingProviderConstants;
        extensions?: DomainExtensions;
        logId?: number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: string;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: RegistryStatusConstants;
        registrarStatusReason?: string;
        removeCancelation?: Boolean;
        autodnsSecJob?: DNSSecJob;
        priceClass?: string;
        priceClassRenew?: string;
        abuseEmail?: string;
        generalRequestEmail?: string;
        privacyPlusMail?: string;
        privacyPlus?: Boolean;
        nameServerGroup?: string;
        rddsOptIn?: RddsOptInConstants;
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
        ownerc?: Contact;
        adminc?: Contact;
        techc?: Contact;
        zonec?: Contact;
        expire?: string;
        payable?: string;
        action?: DomainActionConstants;
        autoDnssec?: Boolean;
        dnssec?: Boolean;
        validCertificate?: Boolean;
        cancelationStatus?: CancelationStatusConstants;
        autoRenewStatus?: AutoRenewStatusConstants;
        dnssecData?: DNSSec[];
        zone?: Zone;
    }
    export class DomainCancelation {
        constructor(config?: DomainCancelation);
    }
    export interface DomainCancelation {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: string;
        registryWhen?: string;
        gainingRegistrar?: string;
        disconnect?: Boolean;
        notice?: string;
        logId?: number;
        registryStatus?: RegistryStatusConstants;
        type?: CancelationTypeConstants;
        execution?: ExecutionTypeConstants;
    }

    export class DomainEnvelope {
        constructor(config?: DomainEnvelope);
    }
    export interface DomainEnvelope {
        domain?: string;
        id?: string;
        source?: DomainStudioDomainSource;
        services?: DomainStudioService;
        debugTime?: Boolean;
    }

    export class DomainEnvelopeSearchRequest {
        constructor(config?: DomainEnvelopeSearchRequest);
    }
    export interface DomainEnvelopeSearchRequest {
        searchToken?: string;
    }
    export class DomainExtensions {
        constructor(config?: DomainExtensions);
    }
    export interface DomainExtensions {
        parkingExtensions?: DomainParkingExtensions;
        tmchClaimsNoticeExtensions?: DomainTmchClaimNoticeExtensions;
    }

    export class DomainMonitoring {
        constructor(config?: DomainMonitoring);
    }
    export interface DomainMonitoring {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: string;
        idn?: string;
        notificationMobiles?: Phone[];
        ocval?: Boolean;
        cancelation?: Boolean;
        removed?: Boolean;
        monitoringSetups?: DomainMonitoringSetup[];
        notificationEmails?: string[];
    }

    export class DomainMonitoringSetup {
        constructor(config?: DomainMonitoringSetup);
    }
    export interface DomainMonitoringSetup {
        created?: string;
        updated?: string;
        data?: string;
    }

    export class DomainParkingExtensions {
        constructor(config?: DomainParkingExtensions);
    }
    export interface DomainParkingExtensions {
        parkingCategory?: string;
        currency?: string;
        domainLanguage?: string;
        forSale?: string;
        keyword?: string;
        price?: number;
        fixedPrice?: Boolean;
        minPrice?: number;
    }

    export class DomainRestore {
        constructor(config?: DomainRestore);
    }
    export interface DomainRestore {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: string;
        idn?: string;
        nicMemberLabel?: string;
        registryStatus?: RegistryStatusConstants;
        nameServers?: NameServer[];
        nameServerEntries?: string[];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: string;
        domainsafe?: Boolean;
        parking?: ParkingProviderConstants;
        extensions?: DomainExtensions;
        logId?: number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: string;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: RegistryStatusConstants;
        registrarStatusReason?: string;
        removeCancelation?: Boolean;
        autodnsSecJob?: DNSSecJob;
        priceClass?: string;
        priceClassRenew?: string;
        abuseEmail?: string;
        generalRequestEmail?: string;
        privacyPlusMail?: string;
        privacyPlus?: Boolean;
        nameServerGroup?: string;
        rddsOptIn?: RddsOptInConstants;
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
        deleted?: string;
        restorePhaseEnd?: string;
        ownerc?: Contact;
        adminc?: Contact;
        techc?: Contact;
        zonec?: Contact;
        expire?: string;
        payable?: string;
        action?: DomainActionConstants;
        autoDnssec?: Boolean;
        dnssec?: Boolean;
        validCertificate?: Boolean;
        cancelationStatus?: CancelationStatusConstants;
        autoRenewStatus?: AutoRenewStatusConstants;
        dnssecData?: DNSSec[];
        zone?: Zone;
    }

    export class DomainSafeUser {
        constructor(config?: DomainSafeUser)
    }
    export interface DomainSafeUser {
        context?: number
        mobile?: Phone
        user?: string
        pin?: number
    }

    export class DomainServices {
        constructor(config?: DomainServices);
    }
    export interface DomainServices {
        backupMx?: BackupMx[];
        mailProxy?: MailProxy[];
        redirect?: Redirect[];
        domainMonitoring?: DomainMonitoring[];
    }

    export class DomainServicesUpdate {
        constructor(config?: DomainServicesUpdate);
    }
    export interface DomainServicesUpdate {
        domains?: Domain[];
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
    }

    export class DomainStudioMarket {
        constructor(config?: DomainStudioMarket);
    }
    export interface DomainStudioMarket {
        services?: DomainEnvelopeSearchService[]
        onlyAvailable?: Boolean
        promoTlds?: string[]
        max?: number
        priceMin?: number
        priceMax?: number
    }

    export class DomainStudioService {
        constructor(config?: DomainStudioService);
    }
    export interface DomainStudioService {
        whois?: WhoisServiceData;
        price?: PriceServiceData;
        estimation?: EstimationServiceData;
    }

    export class DomainStudioSourceCustom {
        constructor(config?: DomainStudioSourceCustom);
    }
    export interface DomainStudioSourceCustom {
        services?: DomainEnvelopeSearchService[]
        onlyAvailable?: Boolean
        domains?: string[]
    }

    export class DomainStudioSourceGeo {
        constructor(config?: DomainStudioSourceGeo);
    }
    export interface DomainStudioSourceGeo {
        services?: DomainEnvelopeSearchService[];
        max?: number;
    }

    export class DomainStudioSourceInitial {
        constructor(config?: DomainStudioSourceInitial);
    }
    export interface DomainStudioSourceInitial {
        services?: DomainEnvelopeSearchService[];
        tlds?: string[];
    }

    export class DomainStudioSourceMarket {
        constructor(config?: DomainStudioSourceMarket)
    }
    export interface DomainStudioSourceMarket {
        services?: DomainEnvelopeSearchService[]
        onlyAvailable?: Boolean
        promoTlds?: string[]
        topTlds?: string[]
        max?: number
        priceMin?: number
        priceMax?: number
    }

    export class DomainStudioSourceOnlinePresence {
        constructor(config?: DomainStudioSourceOnlinePresence)
    }
    export interface DomainStudioSourceOnlinePresence {
        services?: DomainEnvelopeSearchService[]
        onlyAvailable?: Boolean
        max?: number
        maxSldLength?: number
        useDash?: Boolean
        tlds?: string[]
        onlinePresenceUrl?: string
        onlinePresenceTitle?: string
        relatedUrls?: string[]
        category?: string
        onlinePresenceDescription?: string
        preferredName?: string
        location?: string
        business?: Boolean
        shortName?: string
        fullName?: string
        firstName?: string
        middleNames?: string[]
        lastName?: string
        email?: string
        hometown?: string
        skills?: string[]
    }
    
    export class DomainStudioSourcePersonalNames {
        constructor(config?: DomainStudioSourcePersonalNames);
    }
    export interface DomainStudioSourcePersonalNames {
        services?: DomainEnvelopeSearchService[];
        onlyAvailable?: Boolean
        max?: number
        maxSldLength?: number
        useDash?: Boolean
        spinFirstName?: Boolean
        tlds?: string[]
        firstName?: string
        middleNames?: string[]
        lastName?: string
        useIdn?: Boolean
    }
    
    export class DomainStudioSourcePremium {
        constructor(config?: DomainStudioSourcePremium);
    }

    export interface DomainStudioSourcePremium {
        services?: DomainEnvelopeSearchService[];
        onlyAvailable?: Boolean
        promoTlds?: string[];
        topTlds?: string[];
        max?: number;
        priceMin?: number;
        priceMax?: number;
    }

    export class DomainStudioSourceSimilar {
        constructor(config?: DomainStudioSourceSimilar);
    }
    export interface DomainStudioSourceSimilar {
        services?: string[]; //DomainEnvelopeSearchService[];
        max?: number;
    }

    export class DomainStudioSourceSpinWord {
        constructor(config?: DomainStudioSourceSpinWord);
    }
    export interface DomainStudioSourceSpinWord {
        services?: DomainEnvelopeSearchService[];
        onlyAvailable?: Boolean
        max?: number
        maxSldLength?: number
        tlds?: string[]
        useIdn?: Boolean
        similarity?: number
        position?: number
    }

    export class DomainStudioSourceSuggestion {
        constructor(config?: DomainStudioSourceSuggestion);
    }
    export interface DomainStudioSourceSuggestion {
        services?: string[]; //DomainEnvelopeSearchService[];
        language?: string[];
        max?: number;
        maxSldLength?: number;
        useDash?: Boolean;
        usenumber?: Boolean;
        useIdn?: Boolean;
        tlds?: string[];
    }

    export class DomainStudioSourcePrefixSuffix {
        constructor(config?: DomainStudioSourcePrefixSuffix);
    }
    export interface DomainStudioSourcePrefixSuffix {
        services?: DomainEnvelopeSearchService[]
        onlyAvailable?: Boolean
        language?: string
        max?: number
        maxSldLength?: number
        tlds?: string[]
        prefixVocabulary?: string[]
        suffixVocabulary?: string[]
        useIdn?: Boolean
        useDash?: Boolean
    }

    export class DomainStudioSourceUpcoming {
        constructor(config?: DomainStudioSourceUpcoming);
    }
    export interface DomainStudioSourceUpcoming {
        services?: DomainEnvelopeSearchService[];
        onlyAvailable?: Boolean
        max?: number
    }

    export class DomainStudioSources {
        constructor(config?: DomainStudioSources);
    }
    export interface DomainStudioSources {
        initial?: DomainStudioSourceInitial;
        suggestion?: DomainStudioSourceSuggestion;
        premium?: DomainStudioSourcePremium;
        market?: DomainStudioSourceMarket;
        geo?: DomainStudioSourceGeo;
        similar?: DomainStudioSourceSimilar;
        recommended?: DomainStudioSourceSimilar;
        custom?: DomainStudioSourceCustom;
        onlinePresence?: DomainStudioSourceOnlinePresence;
        personalNames?: DomainStudioSourcePersonalNames;
        spinWord?: DomainStudioSourceSpinWord;
        upcoming?: DomainStudioSourceUpcoming;
        prefixSuffix?: DomainStudioSourcePrefixSuffix;
    }

    export class DomainTmchClaimNoticeExtensions {
        constructor(config?: DomainTmchClaimNoticeExtensions);
    }
    export interface DomainTmchClaimNoticeExtensions {
        externalReference?: string;
        notAfter?: string;
        confirmed?: string;
        confirmIp?: string;
    }

    export class EstimationData {
        constructor(config?: EstimationData);
    }
    export interface EstimationData {
        currency?: string; //Currency;
        amount?: number;
    }

    export class EstimationServiceData {
        constructor(config?: EstimationServiceData);
    }
    export interface EstimationServiceData {
        debugTime?: number;
        status?: string; //DomainStudioServiceStatus
        message?: string;
        data?: EstimationData;
    }

    export class ExchangedPrice {
        constructor(config?: ExchangedPrice);
    }
    export interface ExchangedPrice {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        amount?: number;
        type?: PriceTypeConstants;
        currency?: Currency;
        priority?: PriorityConstants;
        customer?: Customer;
        period?: TimePeriod;
        discountable?: Boolean;
        logId?: number;
        refund?: number;
        priceCondition?: PriceServiceEntity[];
        comment?: string;
        normalPrice?: ExchangedPrice;
        valid?: string;
        vatRate?: number;
        vatAmount?: number;
        rate?: number;
    }

    export class ExtendedValidationExtension {
        constructor(config?: ExtendedValidationExtension);
    }
    export interface ExtendedValidationExtension {
        joiCountryName?: string;
        joiLocality?: string;
        joiStateOrProvince?: string;
        companynumber?: string;
        businessCategor?: BusinessCategory
    }

    export class GenericCustomer {
        constructor(config?: GenericCustomer);
    }
    export interface GenericCustomer {
        number?: number;
        client?: string;
        group?: number;
    }

    export class GenericLabelEntity {
        constructor(config?: GenericLabelEntity);
    }
    export interface GenericLabelEntity {
        created?: string;
        updated?: string;
        label?: string;
        name?: string;
        category?: string;
        configuration?: Map<string, object>
        packageLabel?: string;
    }

    export class GenericObject {
        constructor(config?: GenericObject);
    }
    export interface GenericObject {
        type?: string;
        value?: string;
    }

    export class HandleVerification {
        constructor(config?: HandleVerification);
    }
    export interface HandleVerification {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        update?: BasicUser;
        reference?: string;
        messageSend?: string;
        confirmed?: string;
        confirmIp?: InetAddress;
        failed?: string;
        domain?: ContactVerificationDomain[];
        verificationMail?: ContactVerificationMessage[];
        comment?: string;
        action?: string;
        handle?: Contact;
    }

    export class HostSubZone {
        constructor(config?: HostSubZone);
    }
    export interface HostSubZone {
        origin?: string
        virtualNameServer?: string
    }

    export class Id4MeAgent {
        constructor(config?: Id4MeAgent);
    }
    export interface Id4MeAgent {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        externalReference?: string;
        certificate?: VhostCertificate;
        layoutAddon?: Id4MeLayoutConfiguration;
        name?: string;
        status?: Id4MeAgentStatus;
        records?: string[];
    }

    export class Id4meIdentity {
        constructor(config?: Id4meIdentity);
    }
    export interface Id4meIdentity {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        agent?: Id4MeAgent;
        verifyExpire?: string;
        addons?: Id4MeIdentityAddons;
        magicLink?: string;
        claims?: Claims;
        showClaims?: Boolean;
        resetUrl?: string;
        resetUrlExpire?: string;
        name?: string;
        status?: IdentityStatus
        language?: string;
        record?: string[];
    }

    export class Id4MeLayoutConfiguration {
        constructor(config?: Id4MeLayoutConfiguration);
    }
    export interface Id4MeLayoutConfiguration {
        title?: string
        loginLogoHeight?: string
        loginLogoWidth?: string
        menuLogoHeight?: string
        menuLogoWidth?: string
        primaryColor?: string
        primaryText?: string
        secondaryColor?: string
        loginLogoSrc?: string
        menuLogoSrc?: string
        about?: string
        privacy?: string
    }

    export class Id4MeIdentityAddons {
        constructor(config?: Id4MeIdentityAddons);
    }

    export interface Id4MeIdentityAddons {
    }

    export class InetAddress {
        constructor();
    }

    export class Invoice {
        constructor(config?: Invoice);
    }
    export interface Invoice {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
        number?: string;
        customer?: Customer;
        payment?: PaymentConstants;
        paymentMode?: string;
        paymentTransaction?: string;
        subType?: string;
        sepaMandateReference?: string;
        sepaMandateCollection?: string;
        amount?: number;
        vatAmount?: number;
        status?: InvoiceStatusConstants;
        type?: AccountingDocumentTypeConstants;
        failed?: Boolean;
        currency?: string;
        paid?: string;
        document?: Document;
        comment?: string;
    }
    export class IpRestriction {
        constructor(config?: IpRestriction);
    }
    export interface IpRestriction {
        created?: string;
        updated?: string;
        type?: IpRestrictionTypeConstants;
        address?: string;
    }

    export class IpRestrictions {
        constructor(config?: IpRestrictions);
    }
    export interface IpRestrictions {
        acls?: string;
    }

    export class Job {
        constructor(config?: Job);
    }
    export interface Job {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: JobStatusConstants;
        subStatus?: string;
        execution?: string;
        events?: WorkflowEvent[];
        subType?: string;
        action?: string;
        id?: number;
    }

    export class JsonNoData {
        constructor();
    }

    export class JsonResponseData {
        constructor(config?: JsonResponseData);
    }
    export interface JsonResponseData {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: any[];
        ctid?: string;
    }

    export class JsonResponseDataCertificateInstallCheckResult {
        constructor(config?: JsonResponseDataCertificateInstallCheckResult);
    }
    export interface JsonResponseDataCertificateInstallCheckResult {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: CertificateInstallCheckResult[];
        ctid?: string;
    }

    export class JsonResponseDataAccountingDocument {
        constructor(config?: JsonResponseDataAccountingDocument);
    }
    export interface JsonResponseDataAccountingDocument {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: AccountingDocument[];
        ctid?: string;
    }

    export class JsonResponseDataBackupMx {
        constructor(config?: JsonResponseDataBackupMx);
    }
    export interface JsonResponseDataBackupMx {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: BackupMx[];
        ctid?: string;
    }

    export class JsonResponseDataBasicDocument {
        constructor(config?: JsonResponseDataBasicDocument);
    }
    export interface JsonResponseDataBasicDocument {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: BasicDocument[];
        ctid?: string;
    }
    export class JsonResponseDataBillingEvent {
        constructor(config?: JsonResponseDataBillingEvent);
    }
    export interface JsonResponseDataBillingEvent {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: BillingEvent[];
        ctid?: string;
    }

    export class JsonResponseDataCertificate {
        constructor(config?: JsonResponseDataCertificate);
    }
    export interface JsonResponseDataCertificate {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Certificate[];
        ctid?: string;
    }

    export class JsonResponseDataCertificateData {
        constructor(config?: JsonResponseDataCertificateData);
    }
    export interface JsonResponseDataCertificateData {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: CertificateData[];
        ctid?: string;
    }

    export class JsonResponseDataContact {
        constructor(config?: JsonResponseDataContact);
    }
    export interface JsonResponseDataContact {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Contact[];
        ctid?: string;
    }

    export class JsonResponseDataDomain {
        constructor(config?: JsonResponseDataDomain);
    }
    export interface JsonResponseDataDomain {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Domain[];
        ctid?: string;
    }

    export class JsonResponseDataDomainCancelation {
        constructor(config?: JsonResponseDataDomainCancelation);
    }
    export interface JsonResponseDataDomainCancelation {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainCancelation[];
        ctid?: string;
    }

    export class JsonResponseDataDomainEnvelope {
        constructor(config?: JsonResponseDataDomainEnvelope);
    }
    export interface JsonResponseDataDomainEnvelope {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainEnvelope[];
        ctid?: string;
    }

    export class JsonResponseDataDomainRestore {
        constructor(config?: JsonResponseDataDomainRestore);
    }
    export interface JsonResponseDataDomainRestore {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainRestore[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataContact {
        constructor(config?: JsonResponseDataListJsonResponseDataContact);
    }
    export interface JsonResponseDataListJsonResponseDataContact {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataContact[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataSslContact {
        constructor(config?: JsonResponseDataListJsonResponseDataSslContact);
    }
    export interface JsonResponseDataListJsonResponseDataSslContact {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataSslContact[];
        ctid?: string;
    }

    export class JsonResponseDataHandleVerification {
        constructor(config?: JsonResponseDataHandleVerification);
    }
    export interface JsonResponseDataHandleVerification {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: HandleVerification[];
        ctid?: string;
    }

    export class JsonResponseDataId4MeAgent {
        constructor(config?: JsonResponseDataId4MeAgent);
    }
    export interface JsonResponseDataId4MeAgent {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Id4MeAgent[];
        ctid?: string;
    }

    export class JsonResponseDataId4meIdentity {
        constructor(config?: JsonResponseDataId4meIdentity);
    }
    export interface JsonResponseDataId4meIdentity {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Id4meIdentity[];
        ctid?: string;
    }

    export class JsonResponseDataInvoice {
        constructor(config?: JsonResponseDataInvoice);
    }
    export interface JsonResponseDataInvoice {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Invoice[];
        ctid?: string;
    }

    export class JsonResponseDataJsonNoData {
        constructor(config?: JsonResponseDataJsonNoData);
    }
    export interface JsonResponseDataJsonNoData {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonNoData[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataBackupMx {
        constructor(config?: JsonResponseDataListJsonResponseDataBackupMx);
    }
    export interface JsonResponseDataListJsonResponseDataBackupMx {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataBackupMx[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataDomain {
        constructor(config?: JsonResponseDataListJsonResponseDataDomain);
    }
    export interface JsonResponseDataListJsonResponseDataDomain {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataDomain[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataDomainCancelation {
        constructor(config?: JsonResponseDataListJsonResponseDataDomainCancelation);
    }
    export interface JsonResponseDataListJsonResponseDataDomainCancelation {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataDomainCancelation[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataMailProxy {
        constructor(config?: JsonResponseDataListJsonResponseDataMailProxy);
    }
    export interface JsonResponseDataListJsonResponseDataMailProxy {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataMailProxy[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataRedirect {
        constructor(config?: JsonResponseDataListJsonResponseDataRedirect);
    }
    export interface JsonResponseDataListJsonResponseDataRedirect {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataRedirect[];
        ctid?: string;
    }

    export class JsonResponseDataListJsonResponseDataZone {
        constructor(config?: JsonResponseDataListJsonResponseDataZone);
    }
    export interface JsonResponseDataListJsonResponseDataZone {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataZone[];
        ctid?: string;
    }

    export class JsonResponseDataMailProxy {
        constructor(config?: JsonResponseDataMailProxy);
    }
    export interface JsonResponseDataMailProxy {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: MailProxy[];
        ctid?: string;
    }

    export class JsonResponseDataOTPAuth {
        constructor(config?: JsonResponseDataOTPAuth);
    }
    export interface JsonResponseDataOTPAuth {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: OTPAuth[];
        ctid?: string;
    }

    export class JsonResponseDataObjectJob {
        constructor(config?: JsonResponseDataObjectJob);
    }
    export interface JsonResponseDataObjectJob {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: ObjectJob[];
        ctid?: string;
    }

    export class JsonResponseDataPeriodicBilling {
        constructor(config?: JsonResponseDataPeriodicBilling);
    }
    export interface JsonResponseDataPeriodicBilling {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: PeriodicBilling[];
        ctid?: string;
    }

    export class JsonResponseDataPollMessage {
        constructor(config?: JsonResponseDataPollMessage);
    }
    export interface JsonResponseDataPollMessage {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: PollMessage[];
        ctid?: string;
    }

    export class JsonResponseDataRedirect {
        constructor(config?: JsonResponseDataRedirect);
    }
    export interface JsonResponseDataRedirect {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Redirect[];
        ctid?: string;
    }
    
    export class JsonResponseDataSiteSealInformation {
        constructor(config?: JsonResponseDataSiteSealInformation);
    }
    export interface JsonResponseDataSiteSealInformation {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: SiteSealInformation[];
        ctid?: string;
    }

    export class JsonResponseDataSslContact {
        constructor(config?: JsonResponseDataSslContact);
    }
    export interface JsonResponseDataSslContact {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: SslContact[];
        ctid?: string;
    }

    export class JsonResponseDataSubjectProduct {
        constructor(config?: JsonResponseDataSubjectProduct);
    }
    export interface JsonResponseDataSubjectProduct {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: SubjectProduct[];
        ctid?: string;
    }

    export class JsonResponseDatastring {
        constructor(config?: JsonResponseDatastring);
    }
    export interface JsonResponseDatastring {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: string[];
        ctid?: string;
    }

    
    export class JsonResponseDataTaskUserLimit {
        constructor(config?: JsonResponseDataTaskUserLimit);
    }
    export interface JsonResponseDataTaskUserLimit {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: TaskUserLimit[];
        ctid?: string;
    }

    export class JsonResponseDataTransfer {
        constructor(config?: JsonResponseDataTransfer);
    }
    export interface JsonResponseDataTransfer {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Transfer[];
        ctid?: string;
    }

    export class JsonResponseDataTransferOut {
        constructor(config?: JsonResponseDataTransferOut);
    }
    export interface JsonResponseDataTransferOut {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: TransferOut[];
        ctid?: string;
    }

    export class JsonResponseDataTrustedApplication {
        constructor(config?: JsonResponseDataTrustedApplication);
    }
    export interface JsonResponseDataTrustedApplication {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: TrustedApplication[];
        ctid?: string;
    }

    export class JsonResponseDataUser {
        constructor(config?: JsonResponseDataUser);
    }
    export interface JsonResponseDataUser {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: User[];
        ctid?: string;
    }

    export class JsonResponseDataUserSalesReport {
        constructor(config?: JsonResponseDataUserSalesReport);
    }
    export interface JsonResponseDataUserSalesReport {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: UserSalesReport[];
        ctid?: string;
    }

    export class JsonResponseDataVoid {
        constructor(config?: JsonResponseDataVoid);
    }
    export interface JsonResponseDataVoid {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Void[];
        ctid?: string;
    }

    export class JsonResponseDataZone {
        constructor(config?: JsonResponseDataZone);
    }
    export interface JsonResponseDataZone {
        stid?: string;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Zone[];
        ctid?: string;
    }

    export class Locale {
        constructor(config?: Locale);
    }
    export interface Locale {
    }

    export class LocalizedValue {
        constructor(config?: LocalizedValue);
    }
    export interface LocalizedValue {
        language?: string;
        value?: string;
    }

    export class LoginData {
        constructor(config?: LoginData);
    }
    export interface LoginData {
        context?: number;
        password?: string;
        token?: string;
        user?: string;
    }

    export class MailList {
        constructor(config?: MailList);
    }
    export interface MailList {
        emails?: string[];
    }

    export class MailProxy {
        constructor(config?: MailProxy);
    }
    export interface MailProxy {
        domain?: string;
        idn?: string;
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        target?: string;
        admin?: string;
        protection?: ProtectionConstants;
        greylisting?: Boolean;
        virus?: string;
        bannedFiles?: string;
        header?: string;
        spam?: SpamPolicy;
        whitelis?: MailList;
        blacklist?: MailList;
        excludelis?: MailList;
    }

    export class MainIp {
        constructor(config?: MainIp);
    }
    export interface MainIp {
        address?: string;
        ttl?: number;
    }

    export class Message {
        constructor(config?: Message);
    }
    export interface Message {
        text?: string;
        messages?: Message[];
        objects?: GenericObject[];
        code?: string;
        status?: StatusType;
    }

    export class Modifier {
        constructor(config?: Modifier);
    }
    export interface Modifier {
        search?: string;
        replace?: string;
        type?: ModifierConstants;
    }

    export class Name {
        constructor();
    }

    export class NameServer {
        constructor(config?: NameServer);
    }
    export interface NameServer {
        name?: string;
        ttl?: number;
        ipAddresses?: string[];
    }

    export class NicMember {
        constructor(config?: NicMember);
    }
    export interface NicMember {
        name?: string;
        label?: string;
    }

    export class NewPassword {
        constructor(config?: NewPassword);
    }
    export interface NewPassword {
        user?: string;
        context?: number;
        tan?: number;
        password?: string;
        email?: string;
        mobile?: string;
        tanMethods?: TanMethods;
        token?: string;
        method?: string;
    }

    export class NotifyMessage {
        constructor(config?: NotifyMessage);
    }
    export interface NotifyMessage {
        type?: string;
    }

    export class OTPAuth {
        constructor(config?: OTPAuth);
    }
    export interface OTPAuth {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        protocolType?: ProtocolTypeConstants;
        algorithm?: CryptoFormatConstants;
        timeout?: number;
        digits?: number;
        secret?: string;
        tokens?: string[];
        qrCode?: BasicDocument;
    }

    export class ObjectJob {
        constructor(config?: ObjectJob);
    }
    export interface ObjectJob {
        job?: Job;
        object?: ResponseObject;
    }

    export class PeriodicBilling {
        constructor(config?: PeriodicBilling);
    }
    export interface PeriodicBilling {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: BillingStatus;
        object?: string;
        description?: string;
        period?: TimePeriod;
        articleTypeLabel?: string;
        articleLabe?: string;
        item?: PeriodicBilling[];
        expire?: string;
        cancelation?: string;
        businessCase?: string;
        extensions?: BillingEventExtensions;
    }

    export class Phone {
        constructor();
    }

    export class PhysicalNameServerGroup {
        constructor(config?: PhysicalNameServerGroup);
    }
    export interface PhysicalNameServerGroup {
        created?: string;
        updated?: string;
        name?: string;
        articleLabel?: string;
        dnssec?: Boolean;
        statistic?: string;
    }

    export class PollMessage {
        constructor(config?: PollMessage);
    }
    export interface PollMessage {
        id?: number;
        owner?: BasicUser;
        job?: WorkflowSpool;
        notify?: NotifyMessage;
        stid?: string;
        ctid?: string;
        messages?: Message[];
        flags?: string;
        notice?: string;
        created?: string;
        object?: ResponseObject;
    }

    export class Price {
        constructor(config?: Price);
    }
    export interface Price {
        created?: string;
        updated?: string;
        id?: number;
        owner?: BasicUser;
        updater?: BasicUser;
        amount?: number;
        type?: PriceTypeConstants;
        currency?: Currency;
        priority?: PriorityConstants;
        customer?: GenericCustomer;
        period?: TimePeriod;
        discountable?: boolean;
        logId?: number;
        refund?: number;
        priceConditions?: PriceServiceEntity[];
        comment?: string;
        normalPrice?: ExchangedPrice;
        valid?: string;
    }

    export class PriceClass {
        constructor(config?: PriceClass);
    }
    export interface PriceClass {
        created?: string;
        updated?: string;
        id?: number;
        owner?: BasicUser;
        updater?: BasicUser;
        amount?: number;
        type?: PriceTypeConstants;
        currency?: Currency;
        priority?: PriorityConstants;
        customer?: GenericCustomer;
        period?: TimePeriod;
        discountable?: boolean;
        logId?: number;
        refund?: number;
        priceConditions?: PriceServiceEntity[];
        comment?: string;
        normalPrice?: ExchangedPrice;
        valid?: string;
        name?: string;
        articleType?: GenericLabelEntity;
        businessCase?: GenericLabelEntity;
    }

    export class PriceData {
        constructor(config?: PriceData);
    }
    export interface PriceData {
        prices?: SimplePrice;
    }

    export class PriceServiceData {
        constructor(config?: PriceServiceData);
    }
    export interface PriceServiceData {
        debugTime?: number;
        status?: string; //DomainStudioServiceStatus
        message?: string;
        data?: PriceData;
    }

    export class PriceServiceEntity {
        constructor(config?: PriceServiceEntity);
    }
    export interface PriceServiceEntity {
        configuration?: any;
        condition?: ServiceEntity;
    }

    export class Product {
        constructor(config?: Product);
    }
    export interface Product {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        article?: Article;
        vatType?: string;
        priceRequired?: Boolean;
        businessCase?: string;
    }

    export class Query {
        constructor(config?: Query);
    }
    export interface Query {
        filters?: QueryFilter[];
        view?: QueryView;
        orders?: QueryOrder[];
    }

    export class QueryFilter {
        constructor(config?: QueryFilter);
    }
    export interface QueryFilter {
        key?: string;
        value?: string;
        operator?: string; //Operator
        link?: string; //ConditionType
        filters?: QueryFilter[];
    }

    export class QueryOrder {
        constructor(config?: QueryOrder);
    }
    export interface QueryOrder {
        key?: string;
        ins?: string[];
        type?: string; //OrderType
    }

    export class QueryView {
        constructor(config?: QueryView);
    }
    export interface QueryView {
        limit?: number;
        offset?: number;
        children?: Boolean;
        from?: string;
        to?: string;
    }
    export class Redirect {
        constructor(config?: Redirect);
    }
    export interface Redirect {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        source?: string;
        target?: string;
        type?: RedirectTypeConstants;
        mode?: RedirectModeConstants;
        domain?: string;
        title?: string;
        backups?: string[];
        sourceIdn?: string;
        targetIdn?: string;
        lastSeen?: string;
    }

    export class ResourceRecord {
        constructor(config?: ResourceRecord);
    }
    export interface ResourceRecord {
        name?: string;
        ttl?: number;
        type?: string;
        value?: string;
        pref?: number;
    }

    export class ResponseObject {
        constructor(config?: ResponseObject);
    }
    export interface ResponseObject {
        type?: string;
        value?: string;
        summary?: number;
        data?: any;
    }

    export class ResponseStatus {
        constructor(config?: ResponseStatus);
    }
    export interface ResponseStatus {
        code?: string;
        text?: string;
        typ?: string; //StatusType
    }

    export class SEPAMandate {
        constructor(config?: SEPAMandate);
    }
    export interface SEPAMandate {
        created?: string;
        updated?: string;
        document?: Document;
        reference?: string;
        confirmSignature?: string;
        confirmIp?: InetAddress;
        confirmUseragent?: string;
        confirmChecked?: Boolean;
        expire?: string;
        histories?: SEPAMandate[];
        status?: SepaStatus;
        accountHolder?: string;
        iban?: string;
        bic?: string;
    }

    export class ServiceProfiles {
        constructor(config?: ServiceProfiles);
    }
    export interface ServiceProfiles {
        serviceProfiles?: ServiceUsersProfile[]
    }

    export class ServiceUsersProfile {
        constructor(config?: ServiceUsersProfile);
    }
    export interface ServiceUsersProfile {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        key?: string;
        value?: string;
    }

    export class ServiceEntity {
        constructor(config?: ServiceEntity);
    }
    export interface ServiceEntity {
        created?: string;
        updated?: string;
        label?: string;
    }

    export class SimplePrice {
        constructor(config?: SimplePrice);
    }
    export interface SimplePrice {
        price?: ExchangedPrice;
        businessCase?: string;
        period?: TimePeriod;
    }

    export class SiteSealInformation {
        constructor(config?: SiteSealInformation);
    }
    export interface SiteSealInformation {
        hash?: string
        size?: string
        html?: string
        icon?: string
        preview?: string
    }
    
    export class Soa {
        constructor(config?: Soa);
    }
    export interface Soa {
        refresh?: number;
        retry?: number;
        expire?: number;
        ttl?: number;
        email?: string;
    }

    export class SpamPolicy {
        constructor(config?: SpamPolicy);
    }
    export interface SpamPolicy {
        mode?: PolicyMode;
        modifySubject?: Boolean;
        tagHeader?: number;
        spam?: number;
        kill?: number;
        quarantineDigestInterval?: number;
    }

    export class SslContact {
        constructor(config?: SslContact);
    }
    export interface SslContact {
        created?: string;
        updated?: string;
        extensions?: SslContactExtensions;
        references?: SslContactReference[];
        fname?: string;
        lname?: string;
        phone?: string;
        fax?: string;
        email?: string;
        title?: string;
        organization?: string;
        address?: string[];
        pcode?: string;
        city?: string;
        country?: string;
        state?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
    }

    export class SslContactExtensions {
        constructor(config?: SslContactExtensions)
    }
    export interface SslContactExtensions {
        general?: string
    }

    export class SslContactGeneralExtensions {
        constructor(config?: SslContactGeneralExtensions)
    }
    export interface SslContactGeneralExtensions {
        joiCountryName?: string
        joiLocality?: string
        joiStateOrProvince?: string
        companynumber?: string
        businessCategory?: BusinessCategory
    }

    export class SslContactReference {
        constructor(config?: SslContactReference)
    }
    export interface SslContactReference {
        created?: string;
        updated?: string;
    }

    export class Subject {
        constructor(config?: Subject);
    }
    export interface Subject {
        name?: string;
        object?: string;
        customs?: Custom;
    }

    export class SubjectAlternativeName {
        constructor(config?: SubjectAlternativeName);
    }
    export interface SubjectAlternativeName {
        created?: string;
        updated?: string;
        type: SanType;
        sslCertificateId: number;
        name?: string;
        approverEmail?: string;
        orderId?: string;
        free?: Boolean
    }

    export class SubjectProduct {
        constructor(config?: SubjectProduct);
    }
    export interface SubjectProduct {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: number;
        period?: TimePeriod;
        customer?: Customer;
        billing?: BasicUser;
        product?: Product;
        subject?: Subject;
        count?: number;
        effectiveCount: number;
        amount?: number;
        vatAmount?: number;
        currency?: string;
        type?: AccountingDocumentTypeConstants;
        price?: ExchangedPrice;
        label?: string;
        number?: string;
        comment?: string;
        payable?: string;
        provisioning?:GenericStatusConstants,
        netAmount?: number,
        externalAccountingStatus?: string,
        view?: CurrencyRate,
    }

    export class Subscription {
        constructor(config?: Subscription);
    }
    export interface Subscription {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: string; //BillingStatus',
        object?: string;
        description?: string;
        period?: TimePeriod;
        articleTypeLabel?: string;
        articleLabel?: string;
        item?: PeriodicBilling[];
        expire?: string;
        cancelation?: string;
        limits?: BillingObjectLimit[];
        acls?: UserAcl[];
        variant?: string;
        cancelationEffective: string;
        businessCase?: string;
        extensions?: BillingEventExtensions;
    }

    export class TaskCount {
        constructor(config?: TaskCount)
    }
    export interface TaskCount {
        taskGroup?: string
        counts?: Map<string, number>
    }

    export class TaskLimit {
        constructor(config?: TaskLimit)
    }
    export interface TaskLimit {
        created?: string
        updated?: string
        taskGroup?: TaskGroup
        limitSelf?: number
        inclusiveSelf?: number
        inclusiveChildren?: number
        timeUnitChildren?: TimeUnitConstants
        count?: number
        user?: BasicUser
    }

    export class TaskUserLimit {
        constructor(config?: TaskUserLimit)
    }
    export interface TaskUserLimit {
        user?: BasicUser
        entries?: TaskLimit[]
        count?: TaskCount[]
    }

    export class TimePeriod {
        constructor(config?: TimePeriod);
    }
    export interface TimePeriod {
        unit?: TimeUnitConstants;
        period?: number;
    }


    export class TlsData {
        constructor(config?: TlsData)
    }

    export interface TlsData {
        version?: string
        supported?: Boolean
    }

    export class Transfer {
        constructor(config?: Transfer);
    }
    export interface Transfer {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: string;
        gainingRegistrar?: string;
        loosingRegistrar?: string;
        start?: string;
        reminder?: string;
        autoAck?: string;
        autoNack?: string;
        end?: string;
        autoAnswer?: Boolean;
        recipient?: string;
        mailserver?: string;
        deliveredMailserver?: string;
        delivered?: string;
        status?: TransferStatusConstants;
    }

    export class TransferOut {
        constructor(config?: TransferOut);
    }
    export interface TransferOut {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: string;
        gainingRegistrar?: string;
        loosingRegistrar?: string;
        start?: string;
        reminder?: string;
        autoAck?: string;
        autoNack?: string;
        end?: string;
        autoAnswer?: Boolean;
        recipient?: string;
        mailserver?: string;
        deliveredMailserver?: string;
        delivered?: string;
        transactio?: string;
        type?: TransferAnswer;
        nackReason?: number;
    }

    export class TrustedApplication {
        constructor(config?: TrustedApplication);
    }
    export interface TrustedApplication {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        user?: BasicUser;
        uuid?: string;
        password?: string;
        application?: Application;
        functions?: TrustedApplicationFunctions;
        restrictions?: IpRestrictions;
        device?: string;
        comment?: string;
    }

    export class TrustedApplicationFunctions {
        constructor(config?: TrustedApplicationFunctions);
    }
    export interface TrustedApplicationFunctions {
        functionCodes?: string;
    }

    export class UrlEntity {
        constructor();
    }

    export class User {
        constructor(config?: User);
    }
    export interface User {
        created?: string;
        updated?: string;
        context?: number;
        password?: string;
        defaultEmail?: string;
        status?: number;
        substatus?: number;
        authType?: AuthType;
        details?: UserDetails;
        lock?: UserLock;
        oldPassword?: string;
        acls?: UserAcls;
        profiles?: UserProfileViews;
        serviceProfiles?: ServiceProfiles;
        ancestors?: BasicUser[];
        customer?: BasicCustomer;
        nameServerGroup?: VirtualNameServerGroup[];
        subscriptions?: Subscription[];
        applications?: TrustedApplication[];
        restrictions?: IpRestrictions;
        customerLevel?: number;
        user?: string;
        language?: string;
        parent?: User;
        directCustomer?: Boolean;
    }

    export class UserAcl {
        constructor(config?: UserAcl);
    }
    export interface UserAcl {
        functionCode?: string;
        children?: BasicUser[];
        childrenLocked?: Boolean;
        userLocked?: Boolean;
        effective?: Boolean;
        childrenRem?: BasicUser[];
        childrenAdd?: BasicUser[];
        restriction?: string;
    }

    export class UserAcls {
        constructor(config?: UserAcls);
    }
    export interface UserAcls {
        user?: BasicUser;
        acls?: UserAcl[];
    }

    export class UserDetails {
        constructor(config?: UserDetails);
    }
    export interface UserDetails {
        organization?: string;
        passwordResetMobile?: string;
        passwordResetVerifyEmail?: string;
        passwordResetEmail?: string;
        fnam?: string;
        lname?: string;
    }

    export class UserProfile {
        constructor(config?: UserProfile);
    }
    export interface UserProfile {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        key?: string;
        value?: string;
        flag?: UserProfileFlag;
        inherited?: Boolean;
        readonly?: Boolean;
    }

    export class UserProfileViews {
        constructor(config?: UserProfileViews);
    }
    export interface UserProfileViews {
        profiles?: UserProfile[];
    }

    export class UserSalesReport {
        constructor(config?: UserSalesReport)
    }
    export interface UserSalesReport {
        created?: string
        updated?: string
        owner?: BasicUser
        updater?: BasicUser
        date?: string
        domainSales?: number
        certificateSales?: number
        serverSales?: number
        packageSales?: number
    }
    
    export class Vat {
        constructor(config?: Vat);
    }
    export interface Vat {
        rate?: VatRate;
        amount?: number;
    }

    export class VatRate {
        constructor(config?: VatRate);
    }
    export interface VatRate {
        created?: string;
        updated?: string;
    }

    export class VhostCertificate {
        constructor(config?: VhostCertificate);
    }
    export interface VhostCertificate {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class VirtualNameServer {
        constructor(config?: VirtualNameServer);
    }
    export interface VirtualNameServer {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        active?: Boolean;
        name?: string; //Name
        mainAddres?: string; //InetAddress
        ipAddresse?: string[];
    }

    export class VirtualNameServerGroup {
        constructor(config?: VirtualNameServerGroup);
    }
    export interface VirtualNameServerGroup {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: string;
        useDefaultIps?: number;
        nameServers?: VirtualNameServer[];
        systemNameServerGroup?: PhysicalNameServerGroup;
    }

    export class Void {
        constructor();
    }

    export class WhoisServiceData {
        constructor(config?: WhoisServiceData);
    }
    export interface WhoisServiceData {
        debugTime?: number;
        status?: DomainStudioServiceStatus;
        message?: string;
        data?: WhoisStatus;
    }

    export class WhoisStatus {
        constructor(config?: WhoisStatus);
    }
    export interface WhoisStatus {
        status?: DomainStudioDomainStatus;
        priceClass?: string;
    }

    export class WorkflowEvent {
        constructor(config?: WorkflowEvent);
    }
    export interface WorkflowEvent {
        vertex?: number;
        type?: string;
    }

    export class WorkflowSpool {
        constructor(config?: WorkflowSpool);
    }
    export interface WorkflowSpool {
        created?: string;
        updated?: string;
        owner?: BasicUser;
        updater?: BasicUser;
        statu?: JobStatusConstants;
        subStatus?: string;
        execution?: string;
        id?: number;
    }

    export class X509CertificateData {
        constructor(config?: X509CertificateData)
    }
    export interface X509CertificateData {
        cn?: string
        serialNumber?: string
        issuer?: X509CertificateIssuer
        subject?: X509CertificateSubject
        validity?: X509CertificateValidity
        subjectAlternativNames?: string[]
        plain?: string
        signatureAlgorithm?: string
        sha256Thumbprint?: string
        md5Thumbprint?: string
        publicKeyData?: X509CertificatePublicKeyData
    }

    export class X509CertificateIssuer {
        constructor(config?: X509CertificateIssuer)
    }
    export interface X509CertificateIssuer {
        commonName?: string
        organization?: string
        country?: string
        organizationUnit?: string
        locality?: string
        state?: string
    }

    export class X509CertificatePublicKeyData {
        constructor(config?: X509CertificatePublicKeyData)
    }
    export interface X509CertificatePublicKeyData {
        algorithm?: string
        length?: Number
        sha1Thumbprint?: string
        sha256Thumbprint?: string
        bytes?: string
    }

    export class X509CertificateSubject {
        constructor(config?: X509CertificateSubject)
    }
    export interface X509CertificateSubject {
        commonName?: string
        organization?: string
        country?: string
        organizationUnit?: string
        locality?: string
        state?: string
    }

    export class X509CertificateValidity {
        constructor(config?: X509CertificateValidity)
    }
    export interface X509CertificateValidity {
        notAfter?: string
        notBefore?: string
    }

    export class Zone {
        constructor(config?: Zone);
    }
    export interface Zone {
        created?: string;
        updated?: string;
        origin?: string;
        idn?: string;
        soa?: Soa;
        dnssec?: Boolean;
        nameServerGroup?: string;
        allowTransfer?: Boolean;
        owner?: BasicUser;
        updater?: BasicUser;
        logId?: number;
        comment?: string;
        domainsafe?: Boolean;
        source?: string;
        sourceVirtualHostname?: string;
        nameServers?: NameServer[];
        main?: MainIp;
        wwwInclude?: Boolean;
        virtualNameServer?: string;
        freeTex?: string[];
        action?: NameserverActionConstants;
        grants?: string[];
        resourceRecords?: ResourceRecord[];
        roid?: number;
    }

    export class ZoneBasePatchRequest {
        constructor(config?: ZoneBasePatchRequest);
    }
    export interface ZoneBasePatchRequest {
        created?: string;
        updated?: string;
        origin?: string;
        idn?: string;
        soa?: Soa;
        dnssec?: Boolean;
        nameServerGroup?: string;
        allowTransfer?: Boolean;
        owner?: BasicUser;
        updater?: BasicUser;
        logId: number;
        comment?: string;
        domainsafe?: Boolean;
        source?: string;
        sourceVirtualHostname?: string;
        zoneGrantsAdd?: string[];
        zoneGrantsRem?: string[];
        modifiers?: Modifier[];
        nameServers?: NameServer[];
        main?: string; //MainIp;
        wwwInclude?: Boolean;
        virtualNameServer?: string;
        freeText?: string[];
        action?: NameserverActionConstants;
        grants?: string[];
        resourceRecords?: ResourceRecord[];
        roid: number;
        resourceRecordsAdd?: ResourceRecord[];
        resourceRecordsRem?: ResourceRecord[];
    }

    export class ZoneStream {
        constructor(config?: ZoneStream);
    }
    export interface ZoneStream {
        adds?: ResourceRecord[];
        rems?: ResourceRecord[];
    }

    export class address_claim {
        constructor();
    }

    export class Claims {
        constructor(config?: Claims);
    }
    export interface Claims {
        name?: string;
        givenName?: string;
        familyName?: string;
        middleName?: string;
        nickname?: string;
        preferredUsernam?: string;
        profile?: string; //UrlEntity
        picture?: string; //UrlEntity
        website?: string; //UrlEntity
        email?: string;
        emailVerified?: Boolean;
        gende?: GenderConstants;
        birthdate?: string;
        zoneinfo?: string;
        locale?: string;
        phonenumber?: Phone;
        phonenumberVerified?: Boolean;
        address?: AddressClaim;
        organization?: string;
    }
}
