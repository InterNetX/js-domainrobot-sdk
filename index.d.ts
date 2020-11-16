export declare class DomainRobotService<T> {
    constructor(domainRobotConfig: domainRobotConfig);
    logRequest(callback: Function): T;
    logResponse(callback: Function): T;
}

export declare class CertificateService extends DomainRobotService<CertificateService>{
    create(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    createRealtime(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataCertificate, Number>;
    prepareOrder(model: DomainRobotModels.CertificateData): DomainRobotResult<JsonResponseDataCertificateData, Number>;
    list(odel: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataCertificate, Number>;
    info(id: Number): DomainRobotResult<JsonResponseDataCertificate, Number>;
    reissue(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    delete(id: Number): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    renew(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    comment(model: DomainRobotModels.Certificate): DomainRobotResult<JsonResponseDataVoid, Number>;
}
export declare class ContactService extends DomainRobotService<ContactService> {
    create(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
    update(model: DomainRobotModels.Contact): DomainRobotResult<JsonResponseDataContact, Number>;
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataContact, Number>;
    info(id: Number): DomainRobotResult<JsonResponseDataContact, Number>;
    delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
}
export declare class DomainService extends DomainRobotService<DomainService> {
    create(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    update(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    transfer(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    updateStatus(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    renew(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    restore(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataObjectJob, Number>;
    restoreList(model: DomainRobotModels.Domain, keys?: String[]): DomainRobotResult<JsonResponseDataDomainRestore, Number>;
    info(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomain, Number>;
    authInfo1Create(name: String): DomainRobotResult<JsonResponseDataDomain, Number>;
    authInfo1Delete(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    authInfo2Create(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    cancelationCreate(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
    cancelationUpdate(model: DomainRobotModels.Domain): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
    cancelationDelete(name: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    cancelationInfo(name: String): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
    cancelationList(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataDomainCancelation, Number>;
}
export declare class SslContactService extends DomainRobotService<SslContactService>{
    create(model: DomainRobotModels.SslContact): DomainRobotResult<JsonResponseDataSslContact, Number>;
    update(model: DomainRobotModels.SslContact): DomainRobotResult<JsonResponseDataSslContact, Number>;
    delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    info(id: Number): DomainRobotResult<JsonResponseDataSslContact, Number>;
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataSslContact, Number>;
}
export declare class ZoneService extends DomainRobotService<ZoneService>{
    create(model: DomainRobotModels.Zone): DomainRobotResult<JsonResponseDataZone, Number>;
    update(model: DomainRobotModels.Zone, systemNameServer: String): DomainRobotResult<JsonResponseDataZone, Number>;
    delete(name: String, systemNameServer: String): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    info(name: String, systemNameServer: String): DomainRobotResult<JsonResponseDataZone, Number>;
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
    stream(name: String, model: DomainRobotModels.ZoneStream, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
    import(name: String, model: DomainRobotModels.Zone, keys?: String[]): DomainRobotResult<JsonResponseDataZone, Number>;
}
export declare class PollService extends DomainRobotService<PollService>{
    info(): DomainRobotResult<JsonResponseDataPollMessage, Number>;
    confirm(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
}
export declare class TransferOutService extends DomainRobotService<TransferOutService>{
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataTransferOut, Number>;
    answer(domain: String, type: String): DomainRobotResult<JsonResponseDataTransferOut, Number>;
}
export declare class TrustedAppService extends DomainRobotService<TrustedAppService>{
    create(model: DomainRobotModels.TrustedApplication): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
    update(model: DomainRobotModels.TrustedApplication): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
    delete(id: Number): DomainRobotResult<JsonResponseDataJsonNoData, Number>;
    info(id: Number): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
    list(model: DomainRobotModels.Query, keys?: String[]): DomainRobotResult<JsonResponseDataTrustedApplication, Number>;
}
export declare class DomainStudio extends DomainRobotService<DomainStudio>{
    search(model: DomainRobotModels.DomainEnvelopeSearchRequest): DomainRobotResult<JsonResponseDataDomainEnvelope, Number>;
}
export declare class LoginService extends DomainRobotService<LoginService> {
    sessionID(model: DomainRobotModels.LoginData, queryParams?: {
        acl?: Boolean,
        profile?: Boolean,
        customer?: Boolean,
        timeout?: Number
    }): DomainRobotResult<JsonResponseDataUser, Number>;
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
    connection?: String;
    date?: String;
    server?: String;
    'set-cookie'?: Array<String>;
    'content-length'?: String;
    'content-type'?: String;
    'content-language'?: String;
    'x-domainrobot-sessionid'?: String;
    'x-domainrobot-stid'?: String;
}

export interface DomainRobotException {
    error: {
        stid: String;
        // messages can vary depending on the task, so this is the closest
        // defintion we can provide here
        messages: Array<{
            code: String;
            text: String;
            type: String;
        }>;
        status: {
            code: String;
            text: String;
            type: String;
        };
        ctid: String;
    };
    status: Number;
}

export interface ResponseStatus {
    code: String;
    text: String;
    type: String;
}

export interface ResponseObject {
    type: String;
    value: String;
    summary?: Number;
    data?: String;
}

export interface Result {
    stid: String;
    status: ResponseStatus;
    object?: ResponseObject;
    ctid?: String;
    data: Array<object>;
}

// Service Response Definitions
export interface JsonResponseDataContact extends Result {
    data: DomainRobotModels.Contact[];
}
export interface JsonResponseDataDomain extends Result {
    data: DomainRobotModels.Domain[];
}
export interface JsonResponseDataObjectJob extends Result {
    data: DomainRobotModels.ObjectJob[];
}
export interface JsonResponseDataDomainRestore extends Result {
    data: DomainRobotModels.DomainRestore[];
}
export interface JsonResponseDataJsonNoData extends Result {
    data: DomainRobotModels.JsonNoData[];
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

export type domainRobotConfig = {
    url?: String;
    logRequestCallback?: Function,
    logResponseCallback?: Function,
    session_id?: String,
    auth?: {
        user: String;
        password: String;
        context?: Number;
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
}

export const DomainRobotHeaders: {
    DOMAINROBOT_CONTENT_TYPE: String;
    DOMAINROBOT_HEADER_2FA_TOKEN: String;
    DOMAINROBOT_HEADER_BULK_LIMIT: String;
    DOMAINROBOT_HEADER_CONTEXT: String;
    DOMAINROBOT_HEADER_CTID: String;
    DOMAINROBOT_HEADER_CUSTOMER: String;
    DOMAINROBOT_HEADER_DEMO_MODE: String;
    DOMAINROBOT_HEADER_DOMAINROBOT_STID: String;
    DOMAINROBOT_HEADER_OWNER: String;
    DOMAINROBOT_HEADER_OWNER_CONTEXT: String;
    DOMAINROBOT_HEADER_OWNER_NAME: String;
    DOMAINROBOT_HEADER_PIN: String;
    DOMAINROBOT_HEADER_PRECEDENCE: String;
    DOMAINROBOT_HEADER_PROFILE: String;
    DOMAINROBOT_HEADER_SESSION_ID: String;
    DOMAINROBOT_HEADER_SESSION_USER: String;
    DOMAINROBOT_HEADER_WEBSOCKET: String;
    DOMAINROBOT_HEADER_WEBSOCKET_TARGET: String;
    DOMAINROBOT_USER_AGENT: String;
};

// ENUM definitions
export type AccountingDocumentTypeConstants = "INVOICE" | "CREDIT" | "REFUND" | "CANCELED" | "CHARGE";
export type AuEligibilityIdTypeConstants = "ACN" | "ABN" | "VIC_BN" | "NSW_BN" | "SA" | "BN" | "NT_BN" | "WA_BN" | "TAS_BN" | "ACT_BN" | "QLD_BN" | "TM" | "OTHER";
export type AuEligibilityTypeConstants = "COMPANY" | "REGISTERED_BUSINESS" | "SOLE_TRADER" | "PARTNERSHIP" | "TRADEMARK_OWNER" | "PENDING_TM_OWNER" | "CITIZEN_RESIDENT" | "INCORPORATED_ASSOCIATION" | "UNINCORPORATED_ASSOCIATION" | "CLUB" | "NON_PROFIT_ORGANISATION" | "CHARITY" | "TRADE_UNION" | "INDUSTRY_BODY" | "COMMERCIAL_STATUTORY_BODY" | "POLITICAL_PARTY" | "RELIGIOUS_CHURCH_GROUPS" | "OTHER";
export type AuRegistrantIdTypeConstants = "ACN" | "ABN" | "OTHER";
export type AuthMethodConstants = "DNS" | "EMAIL" | "FILE" | "ORG";
export type AuthType = "PASSWORD" | "PASSWORD_TOKEN" | "ALIAS";
export type AuthenticateStatus = "COMPLETED" | "ADDITIONAL_INFORMATION_REQUIRED" | "IN_PROGRESS" | "COMMUNICATION_SENT_TO_CUSTOMER" | "ATTEMPTED_TO_REACH_CUSTOMER" | "PENDING_CUSTOMER_APPROVAL" | "NOT_COMPLETED" | "COMPLETED_PASSED" | "COMPLETED_FAILED" | "UNABLE_TO_COMPLETE" | "NOT_STARTED";
export type AuthenticationStep = "DOMAIN_VERIFICATION" | "VERIFICATION_CALL" | "ORGANIZATION_VERIFICATION" | "CONSUMER_AUTHENTICATION" | "CERTIFICATE" | "CONTACT_CONFIRMED" | "VERIFICATION" | "CSR_CHECK" | "DCV_CHECK" | "OV_CALLBACK" | "FREE_DVUP" | "EV_CLICKTROUGH";
export type AutoRenewStatusConstants = "TRUE" | "FALSE" | "ONCE";
export type BillingStatus = "ADD" | "REMOVE" | "UPDATE" | "IGNORE" | "CUSTOMER_CHANGED" | "USER_CHANGED" | "ACTIVE" | "CANCELED" | "CANCELED_EXPIRE" | "RESTORE" | "AUTODELETE" | "REMOVED";
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
export type ContactTypeConstants = "PERSON" | "ORG" | "ROLE";
export type CreditCardVendor = "MC" | "VISA" | "AMEX" | "DIC" | "DISC" | "CB";
export type CryptoFormatConstants = "SHA1" | "SHA256" | "SHA512";
export type CsrHashAlgorithmConstants = "ECC" | "RSA" | "DSA";
export type DNSCheck = "SOA" | "NS" | "ALL" | "NONE";
export type DeliveryStatus = "PENDING" | "SUCCESS" | "FAILED" | "EXPIRED" | "ATTEMPTING" | "PARTIAL";
export type DocumentTypeConstants = "TM_LICENSEE_DECL" | "TM_ASSIGNEE_DECL" | "TM_OTHER" | "DECL_PROOF_OF_USE_ONE_SAMPLE" | "PROOF_OF_USE_OTHER" | "COPY_OF_COURT_ORDER" | "TMCH_AGENT_AUTHORISATION_FORM" | "TM_OTHER_COPY_OF_TM_CERTIFICATE" | "TM_OTHER_COPY_OF_RENEWAL_REQUEST" | "TM_OTHER_COPY_OF_TREATY_OR_STATUTE" | "TM_OTHER_COPY_OF_CERTIFICATE";
export type DomainActionConstants = "CREATE" | "UPDATE" | "UPDATE_OWNER_CHANGE" | "UPDATE_DNSSEC" | "UPDATE_NAMESERVER" | "DELETE" | "TRANSIT" | "TRANSFER" | "TRANSFER_INTERN" | "TRANSFER_INTERN_REGISTRAR_CHANGE" | "TRANSFER_INTERN_REGISTRAR_CHANGE_RUNTIME_TAKEOVER" | "IMPORT" | "MIGRATE" | "RESTORE" | "RESTORE_NE" | "RESTORE_RENEW" | "RESTORE_ARGP" | "RENEW" | "AUTHINFO" | "AUTHINFO_2" | "UPDATE_STATUS" | "REGISTRAR_UPDATE_STATUS" | "UPDATE_COMMENT" | "AUTOUPDATE_DNS" | "OWNERCHANGE" | "OWNERCHANGE_TRANSFER" | "OWNERCHANGE_TRANSFER_INTERN" | "OWNERCHANGE_TRANSFER_INTERN_REGISTRAR_CHANGE" | "PREACK" | "WHOIS_REGISTRY_STATUS" | "DOMAIN_AWAY" | "TRANSFER_OUT_AUTOACK" | "DROP" | "AUTHINFO_CREATE" | "AUTHINFO_DELETE" | "AUTOUPDATE_DEFERRED" | "DOMAIN_BUY";
export type DomainEnvelopeSearchService = "WHOIS" | "PRICE" | "ESTIMATION";
export type DomainPreregStatusConstants = "PENDING" | "PENDING_SENT" | "PENDING_DOCUMENT_SENT" | "PENDING_PROGRESS" | "PENDING_UPDATE" | "PENDING_SENT_UPDATE" | "TIMEOUT" | "ACCEPT" | "DECLINE" | "INVALID_NAME" | "FAILED" | "CANCEL" | "AUTO_CANCEL" | "ACTIVE" | "SENT" | "OPEN" | "TMCH_CLAIM" | "TMCH_CLAIM_CONFIRMED" | "TMCH_CLAIM_REJECTED" | "TMCH_CLAIM_EXPIRED" | "TMCH_CLAIM_PENDING" | "TMCH_CLAIM_FAILED" | "FAILED_REF";
export type DomainStudioDomainSource = "INITIAL" | "SUGGESTION" | "PREMIUM" | "GEO" | "SIMILAR" | "RECOMMENDED" | "CUSTOM" | "ONLINE_PRESENCE";
export type DomainStudioDomainStatus = "FREE" | "ASSIGNED" | "MARKET" | "PREMIUM" | "INVALID" | "ERROR" | "TIMEOUT" | "RESERVED" | "PREMIUM_CLAIM" | "CLAIM";
export type DomainStudioServiceStatus = "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT";
export type ExecutionTypeConstants = "DATE" | "EXPIRE" | "NOW";
export type GenderConstants = "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT";
export type GenericStatusConstants = "PENDING" | "SUCCESS" | "FAILED" | "NOT_SET";
export type HkDocumentTypeConstants = "HKID" | "OTHID" | "PASSNO" | "BIRTHCERT" | "OTHIDV" | "BR" | "CI" | "CRS" | "HKSARG" | "HKORDINANCE" | "OTHORG";
export type HkIndustryTypeConstants = "_0" | "_4160" | "_4224" | "_4288" | "_4352" | "_4416" | "_8256" | "_8320" | "_8384" | "_8448" | "_8512" | "_12352" | "_12416" | "_16448" | "_16512" | "_16576" | "_16640" | "_16704" | "_16768" | "_16832" | "_20544" | "_20608" | "_20672" | "_20736" | "_20800" | "_20864" | "_20928" | "_24640" | "_24704" | "_24768" | "_28736" | "_28800" | "_28864" | "_28928" | "_28992" | "_29056" | "_29120" | "_070800" | "_070900" | "_080100" | "_080200" | "_080300" | "_080400" | "_080500" | "_080600" | "_080700" | "_080800" | "_080900" | "_081000" | "_081100" | "_090100" | "_090200" | "_090300" | "_090400" | "_090500" | "_100100" | "_100200" | "_100300" | "_100400" | "_100500" | "_110100" | "_110200" | "_110300" | "_110400" | "_110500" | "_110600" | "_120100" | "_120200" | "_120300" | "_120400" | "_120500" | "_120600" | "_120700" | "_120800" | "_120900" | "_130100" | "_130200" | "_130300" | "_130400" | "_130500" | "_130600" | "_130700" | "_130800" | "_140101" | "_140102" | "_140103" | "_140200" | "_140300" | "_140400" | "_140500" | "_140600" | "_140700";
export type Id4MeAgentStatus = "PENDING" | "PENDING_SSL" | "PENDING_SSL_VERIFY" | "SUCCESS" | "FAILED";
export type IdentityStatus = "VERIFY" | "SUCCESS";
export type InvoiceStatusConstants = "CREATED" | "SIGNED" | "SENT" | "RESEND" | "FINISHED" | "LIVECONFIRMED" | "LIVEPENDING" | "POSTPENDING" | "POSTCONFIRMED";
export type IpRestrictionTypeConstants = "CLONE" | "USER" | "CONTEXT";
export type ItEntityTypeConstants = "ITALIAN_AND_FOREIGN_NATURAL_PERSONS" | "ITALIAN_COMPANIES_ONE_MAN_COMPANIES" | "ITALIAN_FREELANCE_WORKERS_PROFESSIONALS" | "ITALIAN_NON_PROFIT_ORGANIZATIONS" | "ITALIAN_PUBLIC_ORGANIZATIONS" | "ITALIAN_OTHER_SUBJECTS" | "FOREIGN_NON_NATURAL_PERSONS";
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
export type ServerSoftwareTypeConstants = "IIS4" | "IIS5" | "APACHE2" | "APACHESSL" | "PLESK" | "TOMCAT" | "NOT_SET";
export type SignatureHashAlgorithmConstants = "SHA1" | "SHA2" | "SHA2_FULL_CHAIN" | "UNKNOWN" | "SHA384" | "SHA512" | "SHA256";
export type StatusType = "SUCCESS" | "ERROR" | "NOTIFY" | "NOTICE" | "NICCOM_NOTIFY";
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
        constructor(config?: object);
    }
    export interface Account {
        customer?: GenericCustomer;
        currentAccountBalance?: Number;
        runningTotal?: Number;
        creditLimit?: Number;
        currency?: String;
        minRunningTotalNotification?: Number;
        minRunningTotalNotificationEmail?: String;
        created?: String;
        updated?: String;
        view?: CurrencyRate;
    }

    export class AddressClaim {
        constructor(config?: AddressClaim);
    }
    export interface AddressClaim {
        formatted?: String;
        streetAddress?: String;
        locality?: String;
        region?: String;
        postalCode?: String;
        country?: String;
    }

    export class Application {
        constructor(config?: Application);
    }
    export interface Application {
        created?: String;
        updated?: String;
        name?: String;
        functionCodes?: String[];
    }
    export class BackupMx {
        constructor(config?: BackupMx);
    }
    export interface BackupMx {
        domain?: String;
        idn?: String;
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class BasicCustomer {
        constructor(config?: BasicCustomer);
    }
    export interface BasicCustomer {
        number?: Number;
        client?: String;
        group?: Number;
        name?: String;
        organization?: String;
        vatNumber?: String;
        gender?: string;
        title?: String;
        addressLines?: String[];
        city?: String;
        state?: String;
        country?: String;
        phone?: Phone;
        fax?: Phone;
        emails?: String[];
        billingEmails?: String[];
        payment?: String;
        paymentMode?: String;
        paymentCurrency?: Currency;
        invoiceLanguage?: String;
        taxable?: Boolean;
        card?: Card;
        contracts?: CustomerContract[];
        billingUsers?: BasicUser[];
        account?: Account;
        clearAccount?: ClearAccountPeriod;
        fname?: String;
        lname?: String;
        pcode?: String;
        sepa?: SEPAMandate;
    }

    export class BasicDocument {
        constructor(config?: BasicDocument);
    }
    export interface BasicDocument {
        created?: String;
        updated?: String;
        id?: Number;
        comment?: String;
        type?: String;
        mimeType?: String;
        data?: String;
        size?: Number;
        name?: String;
        link?: String;
        uuid?: String;
        alias?: String;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class BasicUser {
        constructor(config?: BasicUser);
    }
    export interface BasicUser {
        context: Number;
        user: String;
    }

    export class BillingObjectLimit {
        constructor(config?: BillingObjectLimit);
    }
    export interface BillingObjectLimit {
        created?: String;
        updated?: String;
        articleLabel?: String;
        limitSelf?: Number;
        limitChildren?: Number;
        articleTypeLabel?: String;
        count?: Number;
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
        created?: String;
        updated?: String;
        caType?: String;
        caCertificate?: String;
    }
    export class Card {
        constructor(config?: Card);
    }
    export interface Card {
        created?: String;
        updated?: String;
        type?: CreditCardVendor;
        status?: CardStatus;
        validFrom?: String;
        validTo?: String;
    }

    export class CertAuthentication {
        constructor(config?: CertAuthentication);
    }
    export interface CertAuthentication {
        name?: String;
        method?: AuthMethodConstants;
        dns?: String;
        fileName?: String;
        fileContent?: String;
        approverEmails?: String[];
        provisioning?: Boolean;
    }

    export class Certificate {
        constructor(config?: Certificate);
    }
    export interface Certificate {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        extension?: ExtendedValidationExtension;
        id?: Number;
        partnerOrderId?: String;
        orderId?: String;
        adminContact?: SslContact;
        technicalContact?: SslContact;
        name?: String;
        lifetime?: TimePeriod;
        software?: ServerSoftwareTypeConstants;
        comment?: String;
        csr?: String;
        server?: String;
        serialNumber?: String;
        product?: String;
        codeSigningType?: CodeSigningType;
        certificateType?: CertificateType;
        signatureHashAlgorithm?: SignatureHashAlgorithmConstants;
        expire?: String;
        subjectAlternativeNames?: SubjectAlternativeName[];
        histories?: CertificateHistory[];
        certificationAuthority?: CaCertificate[];
        password?: String;
        firstname?: String;
        lastname?: String;
        organizationUnitName?: String;
        authentication?: CertAuthentication;
        certificateTransparency?: boolean;
        certificateTransparencyPrivacy?: CertificateTransparencyPrivacyConstants;
        domain?: String;
        hasCsr?: boolean;
        idn?: String;
    }

    export class CertificateData {
        constructor(config?: CertificateData);
    }
    export interface CertificateData {
        plain?: String;
        name?: String;
        san?: String[];
        histories?: CertificateHistory[];
        keySize?: Number;
        countryCode?: String;
        challengePassword?: String;
        state?: String;
        city?: String;
        organization?: String;
        organizationUnit?: String;
        email?: String;
        product?: String;
        authentication?: CertAuthentication[];
        algorithm?: CsrHashAlgorithmConstants;
        signatureHashAlgorithm?: SignatureHashAlgorithmConstants;
        idn?: String;
        checkCaa?: Boolean;
    }

    export class CertificateHistory {
        constructor(config?: CertificateHistory);
    }
    export interface CertificateHistory {
        serialNumber?: String;
        revoked?: String;
    }

    export class Configuration {
        constructor();
    }

    export class Contact {
        constructor(config?: Contact);
    }
    export interface Contact {
        create?: String;
        updated?: String;
        id?: Number;
        owner?: BasicUser;
        updater?: BasicUser;
        alias?: String;
        type?: ContactTypeConstants;
        organization?: String;
        title?: String;
        city?: String;
        country?: String;
        state?: String;
        email?: String;
        protection?: ContactProtectionConstants;
        sip?: String;
        remarks?: String[];
        domainsafe?: Boolean;
        confirmOwnerConsent?: Boolean;
        comment?: String;
        verification?: String; //GenericStatusConstants
        fname?: String;
        lname?: String;
        address?: String[];
        pcode?: String;
        phone?: String;
        fax?: String;
        nicRef?: ContactReference[];
        extensions?: ContactExtensions;
    }

    export class ContactAeroExtensions {
        constructor(config?: ContactAeroExtensions);
    }
    export interface ContactAeroExtensions {
        ensAuthId?: String;
        ensKey?: String;
    }

    export class ContactAuExtensions {
        constructor(config?: ContactAuExtensions);
    }
    export interface ContactAuExtensions {
        eligibilityId?: String;
        eligibilityIdType?: AuEligibilityIdTypeConstants;
        eligibilityName?: String;
        eligibilityType?: AuEligibilityTypeConstants;
        policyReason?: Number;
        registrantId?: String;
        registrantIdType?: AuRegistrantIdTypeConstants;
        registrantName?: String;
    }

    export class ContactBankExtensions {
        constructor(config?: ContactBankExtensions);
    }
    export interface ContactBankExtensions {
        ftldToken?: String;
    }

    export class ContactBarcelonaExtensions {
        constructor(config?: ContactBarcelonaExtensions);
    }
    export interface ContactBarcelonaExtensions {
        intendedUse?: String;
    }

    export class ContactBirthExtensions {
        constructor(config?: ContactBirthExtensions);
    }
    export interface ContactBirthExtensions {
        country?: String;
        day?: String;
        postalCode?: String;
        place?: String;
    }

    export class ContactCaExtensions {
        constructor(config?: ContactCaExtensions);
    }
    export interface ContactCaExtensions {
        cpr?: CiraCprConstants;
        agreementVersion?: Number;
        originatingIp?: String;
        officialRepresentativ?: String;
        trusteePercentage?: Number;
    }

    export class ContactCatExtensions {
        constructor(config?: ContactCatExtensions);
    }
    export interface ContactCatExtensions {
        intendedUse?: String;
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
    }

    export class ContactGeneralExtensions {
        constructor(config?: ContactGeneralExtensions);
    }
    export interface ContactGeneralExtensions {
        birth?: ContactBirthExtensions;
        trademark?: ContactTrademarkExtensions;
        identification?: ContactIdentificationExtensions;
        languag?: String;
        companyNumber?: String;
        gender?: GenderConstants
        vatNumber?: String;
        citizenship?: String;
        mobilePhone?: String;
    }

    export class ContactHkExtensions {
        constructor(config?: ContactHkExtensions);
    }
    export interface ContactHkExtensions {
        documentType?: HkDocumentTypeConstants;
        others?: String;
        documentNumber?: String;
        documentOrigin?: String;
        above18?: String;
        industryType?: HkIndustryTypeConstants
    }

    export class ContactIdentificationExtensions {
        constructor(config?: ContactIdentificationExtensions);
    }
    export interface ContactIdentificationExtensions {
        number?: String;
        authority?: String;
        dateOfIssue?: String;
        validTill?: String;
    }

    export class ContactItExtensions {
        constructor(config?: object);
    }
    export interface ContactItExtensions {
        entityType?: String;
    }

    export class ContactJobsExtensions {
        constructor(config?: object);
    }
    export interface ContactJobsExtensions {
        adminType?: Boolean;
        contactTitle?: String;
        hrMember?: Boolean;
        industryClass?: Number;
        website?: String;
    }

    export class ContactJpExtensions {
        constructor(config?: object);
    }
    export interface ContactJpExtensions {
        first?: String;
        last?: String;
        organization?: String;
        adressLine1?: String;
        adressLine2?: String;
        adressLine3?: String;
    }

    export class ContactLuxeExtensions {
        constructor(config?: ContactLuxeExtensions);
    }
    export interface ContactLuxeExtensions {
        walletAddress?: String;
    }

    export class ContactMadridExtensions {
        constructor(config?: ContactMadridExtensions);
    }
    export interface ContactMadridExtensions {
        intendedUse?: String;
    }

    export class ContactNzExtensions {
        constructor(config?: ContactNzExtensions);
    }
    export interface ContactNzExtensions {
        irpo?: String;
    }

    export class ContactReference {
        constructor(config?: ContactReference);
    }
    export interface ContactReference {
        nic?: NicMember;
        status?: ObjectStatus;
        type?: ContactReferenceType;
        role?: ContactReferenceType;
        name?: String;
    }

    export class ContactRoExtensions {
        constructor(config?: ContactRoExtensions);
    }
    export interface ContactRoExtensions {
        persontype?: String;
    }

    export class ContactRuExtensions {
        constructor(config?: ContactRuExtensions);
    }
    export interface ContactRuExtensions {
        taxpayerIdentificationNumber?: String;
        territoryLinkedTaxpayerNumber?: String;
    }

    export class ContactSportExtensions {
        constructor(config?: ContactSportExtensions);
    }
    export interface ContactSportExtensions {
        intendedUse?: String;
    }

    export class ContactSwissExtensions {
        constructor(config?: ContactSwissExtensions);
    }
    export interface ContactSwissExtensions {
        intendedUse?: String;
        enterpriseId?: String;
    }

    export class ContactTrademarkExtensions {
        constructor(config?: ContactTrademarkExtensions);
    }
    export interface ContactTrademarkExtensions {
        name?: String;
        number?: String;
        country?: String;
        regdate?: String;
        appdate?: String;
        office?: String;
    }

    export class ContactUkExtensions {
        constructor(config?: ContactUkExtensions);
    }
    export interface ContactUkExtensions {
        entityType?: String;
    }

    export class ContactVerificationDomain {
        constructor(config?: ContactVerificationDomain);
    }
    export interface ContactVerificationDomain {
        created?: String;
        updated?: String;
        name?: String;
        idn?: String;
        status?: GenericStatusConstants;
        deactivation?: String;
    }

    export class ContactVerificationMessage {
        constructor(config?: ContactVerificationMessage);
    }
    export interface ContactVerificationMessage {
        created?: String;
        updated?: String;
        mail?: Message;
        status?: GenericStatusConstants;
    }

    export class ContactXxxExtensions {
        constructor(config?: ContactXxxExtensions);
    }
    export interface ContactXxxExtensions {
        membershipID?: String;
        nonResolverDomain?: Boolean;
    }

    export class Currency {
        constructor();
    }

    export class CurrencyRate {
        constructor(config?: CurrencyRate);
    }
    export interface CurrencyRate {
        currency?: String;
        rate?: Number;
    }

    export class Customer {
        constructor(config?: Customer);
    }
    export interface Customer {
        number?: Number;
        client?: String;
        group?: Number;
        name?: String;
        organization?: String;
        vatNumber?: String;
        gender?: GenderConstants;
        title?: String;
        addressLines?: String[];
        city?: String;
        state?: String;
        country?: String;
        phone?: Phone;
        fax?: Phone;
        emails?: String;
        billingEmails?: String[];
        payment?: PaymentConstants;
        paymentMode?: String;
        paymentCurrency?: Currency;
        invoiceLanguage?: String;
        taxable?: Boolean;
        card?: Card;
        contracts?: CustomerContract[];
        billingUsers?: BasicUser[];
        accoun?: Account;
        clearAccount?: String; //PClearAccountPeriod;
        fname?: String;
        lname?: String;
        pcode?: String;
        sepa?: SEPAMandate;
    }

    export class CustomerContract {
        constructor(config?: CustomerContract);
    }
    export interface CustomerContract {
        created?: String;
        updated?: String;
        contract?: GenericLabelEntity;
        notice?: String;
        ticketNumber?: String;
    }

    export class DNSSec {
        constructor(config?: DNSSec);
    }
    export interface DNSSec {
        algorithm?: Number;
        flags?: Number;
        protocol?: Number;
        publicKey?: String;
    }

    export class DNSSecJob {
        constructor();
    }

    export class Document {
        constructor(config?: Document);
    }
    export interface Document {
        created?: String;
        updated?: String;
        id?: Number;
        comment?: String;
        type?: String;
        mimeType?: String;
        data?: String;
        size?: Number;
        name?: String;
        link?: String;
    }

    export class Domain {
        constructor(config?: object);
    }
    export interface Domain {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        nicMemberLabel?: String;
        registryStatus?: RegistryStatusConstants;
        nameServers?: NameServer[];
        nameServerEntries?: String[];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: String;
        domainsafe?: Boolean;
        parking?: ParkingProviderConstants;
        extensions?: DomainExtensions;
        logId?: Number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: String;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: RegistryStatusConstants;
        registrarStatusReason?: String;
        removeCancelation?: Boolean;
        autodnsSecJob?: DNSSecJob;
        priceClass?: String;
        priceClassRenew?: String;
        abuseEmail?: String;
        generalRequestEmail?: String;
        privacyPlusMail?: String;
        privacyPlus?: Boolean;
        nameServerGroup?: String;
        rddsOptIn?: RddsOptInConstants;
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
        ownerc?: Contact;
        adminc?: Contact;
        techc?: Contact;
        zonec?: Contact;
        expire?: String;
        payable?: String;
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
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: String;
        registryWhen?: String;
        gainingRegistrar?: String;
        disconnect?: Boolean;
        notice?: String;
        logId?: Number;
        registryStatus?: RegistryStatusConstants;
        type?: CancelationTypeConstants;
        execution?: ExecutionTypeConstants;
    }

    export class DomainEnvelope {
        constructor(config?: DomainEnvelope);
    }
    export interface DomainEnvelope {
        domain?: String;
        id?: String;
        source?: DomainStudioDomainSource;
        services?: DomainStudioService;
        debugTime?: Boolean;
    }

    export class DomainEnvelopeSearchRequest {
        constructor(config?: DomainEnvelopeSearchRequest);
    }
    export interface DomainEnvelopeSearchRequest {
        searchToken?: String;
        currency?: String;
        debug?: Boolean;
        checkPortfolio?: Boolean;
        sources?: DomainStudioSources;
        clientIp?: String;
    }
    export class DomainExtensions {
        constructor(config?: DomainExtensions);
    }
    export interface DomainExtensions {
        parkingExtensions?: DomainParkingExtensions;
        tmchClaimsNoticeExtensions?: DomainTmchClaimNoticeExtensions;
    }

    export class DomainMonitoring {
        constructor(config?: object);
    }
    export interface DomainMonitoring {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        notificationMobiles?: Phone[];
        ocval?: Boolean;
        cancelation?: Boolean;
        removed?: Boolean;
        monitoringSetups?: DomainMonitoringSetup[];
        notificationEmails?: String[];
    }

    export class DomainMonitoringSetup {
        constructor(config?: DomainMonitoringSetup);
    }
    export interface DomainMonitoringSetup {
        created?: String;
        updated?: String;
        data?: String;
    }

    export class DomainParkingExtensions {
        constructor(config?: DomainParkingExtensions);
    }
    export interface DomainParkingExtensions {
        parkingCategory?: String;
        currency?: String;
        domainLanguage?: String;
        forSale?: String;
        keyword?: String;
        price?: Number;
        fixedPrice?: Boolean;
        minPrice?: Number;
    }

    export class DomainRestore {
        constructor(config?: object);
    }
    export interface DomainRestore {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        nicMemberLabel?: String;
        registryStatus?: RegistryStatusConstants;
        nameServers?: NameServer[];
        nameServerEntries?: String[];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: String;
        domainsafe?: Boolean;
        parking?: ParkingProviderConstants;
        extensions?: DomainExtensions;
        logId?: Number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: String;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: RegistryStatusConstants;
        registrarStatusReason?: String;
        removeCancelation?: Boolean;
        autodnsSecJob?: DNSSecJob;
        priceClass?: String;
        priceClassRenew?: String;
        abuseEmail?: String;
        generalRequestEmail?: String;
        privacyPlusMail?: String;
        privacyPlus?: Boolean;
        nameServerGroup?: String;
        rddsOptIn?: RddsOptInConstants;
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
        deleted?: String;
        restorePhaseEnd?: String;
        ownerc?: Contact;
        adminc?: Contact;
        techc?: Contact;
        zonec?: Contact;
        expire?: String;
        payable?: String;
        action?: DomainActionConstants;
        autoDnssec?: Boolean;
        dnssec?: Boolean;
        validCertificate?: Boolean;
        cancelationStatus?: CancelationStatusConstants;
        autoRenewStatus?: AutoRenewStatusConstants;
        dnssecData?: DNSSec[];
        zone?: Zone;
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
        services?: DomainEnvelopeSearchService[];
        onlyAvailable?: Boolean;
        domains?: String[];
    }
    export class DomainStudioSourceGeo {
        constructor(config?: DomainStudioSourceGeo);
    }
    export interface DomainStudioSourceGeo {
        services?: DomainEnvelopeSearchService[];
        max?: Number;
    }

    export class DomainStudioSourceInitial {
        constructor(config?: DomainStudioSourceInitial);
    }
    export interface DomainStudioSourceInitial {
        services?: String[]; //DomainEnvelopeSearchService[];
        tlds?: String[];
    }

    export class DomainStudioSourcePremium {
        constructor(config?: DomainStudioSourcePremium);
    }
    export interface DomainStudioSourcePremium {
        services?: String[]; //DomainEnvelopeSearchService[];
        promoTld?: String[];
        topTlds?: String[];
        max?: Number;
    }

    export class DomainStudioSourceSimilar {
        constructor(config?: DomainStudioSourceSimilar);
    }
    export interface DomainStudioSourceSimilar {
        services?: String[]; //DomainEnvelopeSearchService[];
        max?: Number;
    }

    export class DomainStudioSourceSuggestion {
        constructor(config?: DomainStudioSourceSuggestion);
    }
    export interface DomainStudioSourceSuggestion {
        services?: String[]; //DomainEnvelopeSearchService[];
        language?: String[];
        max?: Number;
        maxSldLength?: Number;
        useDash?: Boolean;
        useNumber?: Boolean;
        useIdn?: Boolean;
        tlds?: String[];
    }

    export class DomainStudioSources {
        constructor(config?: DomainStudioSources);
    }
    export interface DomainStudioSources {
        custom?: DomainStudioSourceCustom;
        initial?: DomainStudioSourceInitial;
        suggestion?: DomainStudioSourceSuggestion;
        premium?: DomainStudioSourcePremium;
        geo?: DomainStudioSourceGeo;
        similar?: DomainStudioSourceSimilar;
        recommended?: DomainStudioSourceSimilar;
    }

    export class DomainTmchClaimNoticeExtensions {
        constructor(config?: DomainTmchClaimNoticeExtensions);
    }
    export interface DomainTmchClaimNoticeExtensions {
        externalReference?: String;
        notAfter?: String;
        confirmed?: String;
        confirmIp?: String;
    }

    export class EstimationData {
        constructor(config?: EstimationData);
    }
    export interface EstimationData {
        currency?: String; //Currency;
        amount?: Number;
    }

    export class EstimationServiceData {
        constructor(config?: EstimationServiceData);
    }
    export interface EstimationServiceData {
        debugTime?: Number;
        status?: String; //DomainStudioServiceStatus
        message?: String;
        data?: EstimationData;
    }

    export class ExchangedPrice {
        constructor(config?: ExchangedPrice);
    }
    export interface ExchangedPrice {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        amoun?: Number;
        type?: PriceTypeConstants;
        currency?: Currency;
        priorit?: PriorityConstants;
        customer?: Customer;
        period?: TimePeriod;
        discountable?: Boolean;
        logId?: Number;
        refund?: Number;
        priceCondition?: PriceServiceEntity[];
        comment?: String;
        normalPrice?: ExchangedPrice;
        valid?: String;
        vatRate?: Number;
        vatAmount?: Number;
        rate?: Number;
    }

    export class ExtendedValidationExtension {
        constructor(config?: ExtendedValidationExtension);
    }
    export interface ExtendedValidationExtension {
        joiCountryName?: String;
        companyNumber?: String;
        businessCategor?: BusinessCategory
    }

    export class GenericCustomer {
        constructor(config?: GenericCustomer);
    }
    export interface GenericCustomer {
        number?: Number;
        client?: String;
        group?: Number;
    }

    export class GenericLabelEntity {
        constructor(config?: GenericLabelEntity);
    }
    export interface GenericLabelEntity {
        created?: String;
        updated?: String;
        label?: String;
        name?: String;
        packageLabel?: String;
    }

    export class GenericObject {
        constructor(config?: GenericObject);
    }
    export interface GenericObject {
        type?: String;
        value?: String;
    }

    export class HandleVerification {
        constructor(config?: HandleVerification);
    }
    export interface HandleVerification {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        update?: BasicUser;
        reference?: String;
        messageSend?: String;
        confirmed?: String;
        confirmIp?: InetAddress;
        failed?: String;
        domain?: ContactVerificationDomain[];
        verificationMail?: ContactVerificationMessage[];
        comment?: String;
        action?: String;
        handle?: Contact;
    }

    export class Id4MeAgent {
        constructor(config?: Id4MeAgent);
    }
    export interface Id4MeAgent {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        externalReference?: String;
        certificate?: VhostCertificate;
        layoutAddon?: Configuration;
        name?: String;
        status?: Id4MeAgentStatus;
        records?: String[];
    }

    export class Id4meIdentity {
        constructor(config?: Id4meIdentity);
    }
    export interface Id4meIdentity {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        agent?: Id4MeAgent;
        verifyExpire?: String;
        addons?: Configuration;
        magicLink?: String;
        claims?: Claims;
        showClaims?: Boolean;
        resetUrl?: String;
        resetUrlExpire?: String;
        name?: String;
        status?: String; //IdentityStatus',
        language?: String;
        record?: String[];
    }

    export class InetAddress {
        constructor();
    }

    export class Invoice {
        constructor(config?: Invoice);
    }
    export interface Invoice {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: Number;
        number?: String;
        customer?: Customer;
        payment?: PaymentConstants;
        paymentMode?: String;
        paymentTransaction?: String;
        subType?: String;
        sepaMandateReference?: String;
        sepaMandateCollection?: String;
        amount?: Number;
        vatAmoun?: Number;
        status?: InvoiceStatusConstants;
        type?: AccountingDocumentTypeConstants;
        failed?: Boolean;
        currency?: String;
        paid?: String;
        document?: Document;
        comment?: String;
    }
    export class IpRestriction {
        constructor(config?: IpRestriction);
    }
    export interface IpRestriction {
        created?: String;
        updated?: String;
        type?: IpRestrictionTypeConstants;
        address?: String;
    }

    export class IpRestrictions {
        constructor(config?: IpRestrictions);
    }
    export interface IpRestrictions {
        acls?: String;
    }

    export class Job {
        constructor(config?: object);
    }
    export interface Job {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: JobStatusConstants;
        subStatus?: String;
        execution?: String;
        events?: WorkflowEvent[];
        subType?: String;
        action?: String;
        id?: Number;
    }

    export class JsonNoData {
        constructor();
    }

    export class JsonResponseData {
        constructor(config?: JsonResponseData);
    }
    export interface JsonResponseData {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: object[];
        ctid?: String;
    }

    export class JsonResponseDataBackupMx {
        constructor(config?: JsonResponseDataBackupMx);
    }
    export interface JsonResponseDataBackupMx {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: BackupMx[];
        ctid?: String;
    }

    export class JsonResponseDataBasicDocument {
        constructor(config?: JsonResponseDataBasicDocument);
    }
    export interface JsonResponseDataBasicDocument {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: BasicDocument[];
        ctid?: String;
    }

    export class JsonResponseDataCertificate {
        constructor(config?: JsonResponseDataCertificate);
    }
    export interface JsonResponseDataCertificate {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Certificate[];
        ctid?: String;
    }

    export class JsonResponseDataCertificateData {
        constructor(config?: JsonResponseDataCertificateData);
    }
    export interface JsonResponseDataCertificateData {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: CertificateData[];
        ctid?: String;
    }

    export class JsonResponseDataContact {
        constructor(config?: JsonResponseDataContact);
    }
    export interface JsonResponseDataContact {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Contact[];
        ctid?: String;
    }

    export class JsonResponseDataDomain {
        constructor(config?: JsonResponseDataDomain);
    }
    export interface JsonResponseDataDomain {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Domain[];
        ctid?: String;
    }

    export class JsonResponseDataDomainCancelation {
        constructor(config?: JsonResponseDataDomainCancelation);
    }
    export interface JsonResponseDataDomainCancelation {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainCancelation[];
        ctid?: String;
    }

    export class JsonResponseDataDomainEnvelope {
        constructor(config?: JsonResponseDataDomainEnvelope);
    }
    export interface JsonResponseDataDomainEnvelope {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainEnvelope[];
        ctid?: String;
    }

    export class JsonResponseDataDomainRestore {
        constructor(config?: JsonResponseDataDomainRestore);
    }
    export interface JsonResponseDataDomainRestore {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: DomainRestore[];
        ctid?: String;
    }

    export class JsonResponseDataHandleVerification {
        constructor(config?: JsonResponseDataHandleVerification);
    }
    export interface JsonResponseDataHandleVerification {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: HandleVerification[];
        ctid?: String;
    }

    export class JsonResponseDataId4MeAgent {
        constructor(config?: JsonResponseDataId4MeAgent);
    }
    export interface JsonResponseDataId4MeAgent {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Id4MeAgent[];
        ctid?: String;
    }

    export class JsonResponseDataId4meIdentity {
        constructor(config?: JsonResponseDataId4meIdentity);
    }
    export interface JsonResponseDataId4meIdentity {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Id4meIdentity[];
        ctid?: String;
    }

    export class JsonResponseDataInvoice {
        constructor(config?: JsonResponseDataInvoice);
    }
    export interface JsonResponseDataInvoice {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Invoice[];
        ctid?: String;
    }

    export class JsonResponseDataJsonNoData {
        constructor(config?: JsonResponseDataJsonNoData);
    }
    export interface JsonResponseDataJsonNoData {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonNoData[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataBackupMx {
        constructor(config?: JsonResponseDataListJsonResponseDataBackupMx);
    }
    export interface JsonResponseDataListJsonResponseDataBackupMx {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataBackupMx[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataDomain {
        constructor(config?: JsonResponseDataListJsonResponseDataDomain);
    }
    export interface JsonResponseDataListJsonResponseDataDomain {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataDomain[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataDomainCancelation {
        constructor(config?: JsonResponseDataListJsonResponseDataDomainCancelation);
    }
    export interface JsonResponseDataListJsonResponseDataDomainCancelation {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataDomainCancelation[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataMailProxy {
        constructor(config?: JsonResponseDataListJsonResponseDataMailProxy);
    }
    export interface JsonResponseDataListJsonResponseDataMailProxy {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataMailProxy[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataRedirect {
        constructor(config?: JsonResponseDataListJsonResponseDataRedirect);
    }
    export interface JsonResponseDataListJsonResponseDataRedirect {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataRedirect[];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataZone {
        constructor(config?: JsonResponseDataListJsonResponseDataZone);
    }
    export interface JsonResponseDataListJsonResponseDataZone {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: JsonResponseDataZone[];
        ctid?: String;
    }

    export class JsonResponseDataMailProxy {
        constructor(config?: JsonResponseDataMailProxy);
    }
    export interface JsonResponseDataMailProxy {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: MailProxy[];
        ctid?: String;
    }

    export class JsonResponseDataOTPAuth {
        constructor(config?: JsonResponseDataOTPAuth);
    }
    export interface JsonResponseDataOTPAuth {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: OTPAuth[];
        ctid?: String;
    }

    export class JsonResponseDataObjectJob {
        constructor(config?: JsonResponseDataObjectJob);
    }
    export interface JsonResponseDataObjectJob {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: ObjectJob[];
        ctid?: String;
    }

    export class JsonResponseDataPeriodicBilling {
        constructor(config?: JsonResponseDataPeriodicBilling);
    }
    export interface JsonResponseDataPeriodicBilling {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: PeriodicBilling[];
        ctid?: String;
    }

    export class JsonResponseDataPollMessage {
        constructor(config?: JsonResponseDataPollMessage);
    }
    export interface JsonResponseDataPollMessage {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: PollMessage[];
        ctid?: String;
    }

    export class JsonResponseDataRedirect {
        constructor(config?: JsonResponseDataRedirect);
    }
    export interface JsonResponseDataRedirect {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Redirect[];
        ctid?: String;
    }

    export class JsonResponseDataSslContact {
        constructor(config?: JsonResponseDataSslContact);
    }
    export interface JsonResponseDataSslContact {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: SslContact[];
        ctid?: String;
    }

    export class JsonResponseDataString {
        constructor(config?: JsonResponseDataString);
    }
    export interface JsonResponseDataString {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: String[];
        ctid?: String;
    }

    export class JsonResponseDataTransfer {
        constructor(config?: JsonResponseDataTransfer);
    }
    export interface JsonResponseDataTransfer {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Transfer[];
        ctid?: String;
    }

    export class JsonResponseDataTransferOut {
        constructor(config?: JsonResponseDataTransferOut);
    }
    export interface JsonResponseDataTransferOut {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: TransferOut[];
        ctid?: String;
    }

    export class JsonResponseDataTrustedApplication {
        constructor(config?: JsonResponseDataTrustedApplication);
    }
    export interface JsonResponseDataTrustedApplication {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: TrustedApplication[];
        ctid?: String;
    }

    export class JsonResponseDataUser {
        constructor(config?: JsonResponseDataUser);
    }
    export interface JsonResponseDataUser {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: User[];
        ctid?: String;
    }

    export class JsonResponseDataVoid {
        constructor(config?: JsonResponseDataVoid);
    }
    export interface JsonResponseDataVoid {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Void[];
        ctid?: String;
    }

    export class JsonResponseDataZone {
        constructor(config?: JsonResponseDataZone);
    }
    export interface JsonResponseDataZone {
        stid?: String;
        messages?: Message[];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: Zone[];
        ctid?: String;
    }

    export class LoginData {
        constructor(config?: LoginData);
    }
    export interface LoginData {
        context?: Number;
        password?: String;
        token?: String;
        user?: String;
    }

    export class MailList {
        constructor(config?: MailList);
    }
    export interface MailList {
        emails?: String[];
    }

    export class MailProxy {
        constructor(config?: object);
    }
    export interface MailProxy {
        domain?: String;
        idn?: String;
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        target?: String;
        admin?: String;
        protection?: ProtectionConstants;
        greylisting?: Boolean;
        virus?: String;
        bannedFiles?: String;
        header?: String;
        spam?: SpamPolicy;
        whitelis?: MailList;
        blacklist?: MailList;
        excludelis?: MailList;
    }

    export class MainIp {
        constructor(config?: MainIp);
    }
    export interface MainIp {
        address?: String;
        ttl?: Number;
    }

    export class Message {
        constructor(config?: Message);
    }
    export interface Message {
        text?: String;
        messages?: Message[];
        objects?: GenericObject[];
        code?: String;
        status?: StatusType;
    }

    export class Modifier {
        constructor(config?: object);
    }
    export interface Modifier {
        search?: String;
        replace?: String;
        type?: ModifierConstants;
    }

    export class Name {
        constructor();
    }

    export class NameServer {
        constructor(config?: NameServer);
    }
    export interface NameServer {
        name?: String;
        ttl?: Number;
        ipAddresses?: String[];
    }

    export class NewPassword {
        constructor(config?: NewPassword);
    }

    export interface NewPassword {
        user?: String;
        context?: Number;
        tan?: String;
        password?: String;
        email?: String;
        mobile?: String;
        tanMethods?: String[];
        token?: String;
        method?: String;
    }

    export class NicMember {
        constructor(config?: NicMember);
    }
    export interface NicMember {
        name?: String;
        label?: String;
    }

    export class NotifyMessage {
        constructor(config?: NotifyMessage);
    }
    export interface NotifyMessage {
        type?: String;
    }

    export class OTPAuth {
        constructor(config?: OTPAuth);
    }
    export interface OTPAuth {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        protocolType?: ProtocolTypeConstants;
        algorithm?: CryptoFormatConstants;
        timeout?: Number;
        digits?: Number;
        secret?: String;
        tokens?: String[];
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
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: BillingStatus;
        object?: String;
        description?: String;
        period?: TimePeriod;
        articleTypeLabel?: String;
        articleLabe?: String;
        item?: PeriodicBilling[];
        businessCase?: String;
    }

    export class Phone {
        constructor();
    }

    export class PhysicalNameServerGroup {
        constructor(config?: PhysicalNameServerGroup);
    }
    export interface PhysicalNameServerGroup {
        created?: String;
        updated?: String;
        name?: String;
        articleLabel?: String;
        dnssec?: Boolean;
        statistic?: String;
    }

    export class PollMessage {
        constructor(config?: PollMessage);
    }
    export interface PollMessage {
        id?: Number;
        owner?: BasicUser;
        job?: WorkflowSpool;
        notify?: NotifyMessage;
        stid?: String;
        ctid?: String;
        messages?: Message[];
        flags?: String;
        created?: String;
        object?: ResponseObject;
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
        debugTime?: Number;
        status?: String; //DomainStudioServiceStatus
        message?: String;
        data?: PriceData;
    }

    export class PriceServiceEntity {
        constructor(config?: PriceServiceEntity);
    }
    export interface PriceServiceEntity {
        configuration?: object;
        condition?: ServiceEntity;
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
        key?: String;
        value?: String;
        operator?: String; //Operator
        link?: String; //ConditionType
        filters?: QueryFilter[];
    }

    export class QueryOrder {
        constructor(config?: QueryOrder);
    }
    export interface QueryOrder {
        key?: String;
        ins?: String[];
        type?: String; //OrderType
    }

    export class QueryView {
        constructor(config?: QueryView);
    }
    export interface QueryView {
        limit?: Number;
        offset?: Number;
        children?: Boolean;
        from?: String;
        to?: String;
    }
    export class Redirect {
        constructor(config?: Redirect);
    }
    export interface Redirect {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        source?: String;
        target?: String;
        type?: RedirectTypeConstants;
        mode?: RedirectModeConstants;
        domain?: String;
        title?: String;
        backups?: String[];
        sourceIdn?: String;
        targetIdn?: String;
        lastSeen?: String;
    }

    export class ResourceRecord {
        constructor(config?: ResourceRecord);
    }
    export interface ResourceRecord {
        name?: String;
        ttl?: Number;
        type?: String;
        value?: String;
        pref?: Number;
    }

    export class ResponseObject {
        constructor(config?: ResponseObject);
    }
    export interface ResponseObject {
        type?: String;
        value?: String;
        summary?: Number;
        data?: Object;
    }

    export class ResponseStatus {
        constructor(config?: ResponseStatus);
    }
    export interface ResponseStatus {
        code?: String;
        text?: String;
        typ?: String; //StatusType
    }

    export class SEPAMandate {
        constructor(config?: SEPAMandate);
    }
    export interface SEPAMandate {
        created?: String;
        updated?: String;
        reference?: String;
        confirmSignature?: String;
        confirmIp?: InetAddress;
        confirmUseragent?: String;
        confirmChecked?: Boolean;
        expire?: String;
        histories?: SEPAMandate[];
        accountHolder?: String;
        iban?: String;
        bic?: String;
    }

    export class ServiceEntity {
        constructor(config?: ServiceEntity);
    }
    export interface ServiceEntity {
        created?: String;
        updated?: String;
        label?: String;
    }

    export class SimplePrice {
        constructor(config?: SimplePrice);
    }
    export interface SimplePrice {
        price?: ExchangedPrice;
        businessCase?: String;
        period?: TimePeriod;
    }

    export class Soa {
        constructor(config?: Soa);
    }
    export interface Soa {
        refresh?: Number;
        retry?: Number;
        expire?: Number;
        ttl?: Number;
        email?: String;
    }

    export class SpamPolicy {
        constructor(config?: SpamPolicy);
    }
    export interface SpamPolicy {
        modifySubject?: Boolean;
        tagHeader?: Number;
        spam?: Number;
        kill?: Number;
        quarantineDigestInterval?: Number;
    }

    export class SslContact {
        constructor(config?: SslContact);
    }
    export interface SslContact {
        created?: String;
        updated?: String;
        fname?: String;
        lname?: String;
        phone?: String;
        fax?: String;
        email?: String;
        title?: String;
        organization?: String;
        address?: String[];
        pcode?: String;
        city?: String;
        country?: String;
        state?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: Number;
    }

    export class SubjectAlternativeName {
        constructor(config?: SubjectAlternativeName);
    }
    export interface SubjectAlternativeName {
        name?: String;
        approverEmail?: String;
        orderId?: String;
    }

    export class Subscription {
        constructor(config?: Subscription);
    }
    export interface Subscription {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: String; //BillingStatus',
        object?: String;
        description?: String;
        period?: TimePeriod;
        articleTypeLabel?: String;
        articleLabel?: String;
        item?: PeriodicBilling[];
        limits?: BillingObjectLimit[];
        acls?: UserAcl[];
        variant?: String;
        businessCase?: String;
    }

    export class TimePeriod {
        constructor(config?: TimePeriod);
    }
    export interface TimePeriod {
        unit?: TimeUnitConstants;
        period?: Number;
    }

    export class Transfer {
        constructor(config?: Transfer);
    }
    export interface Transfer {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: String;
        gainingRegistrar?: String;
        loosingRegistrar?: String;
        start?: String;
        reminder?: String;
        autoAck?: String;
        autoNack?: String;
        end?: String;
        autoAnswer?: Boolean;
        recipient?: String;
        mailserver?: String;
        deliveredMailserver?: String;
        delivered?: String;
        status?: TransferStatusConstants;
    }

    export class TransferOut {
        constructor(config?: TransferOut);
    }
    export interface TransferOut {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        domain?: String;
        gainingRegistrar?: String;
        loosingRegistrar?: String;
        start?: String;
        reminder?: String;
        autoAck?: String;
        autoNack?: String;
        end?: String;
        autoAnswer?: Boolean;
        recipient?: String;
        mailserver?: String;
        deliveredMailserver?: String;
        delivered?: String;
        transactio?: String;
        type?: TransferAnswer;
        nackReason?: Number;
    }

    export class TrustedApplication {
        constructor(config?: TrustedApplication);
    }
    export interface TrustedApplication {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        user?: BasicUser;
        uuid?: String;
        password?: String;
        application?: Application;
        functions?: TrustedApplicationFunctions;
        restrictions?: IpRestrictions;
        device?: String;
        comment?: String;
    }

    export class TrustedApplicationFunctions {
        constructor(config?: TrustedApplicationFunctions);
    }
    export interface TrustedApplicationFunctions {
        functionCodes?: String;
    }

    export class UrlEntity {
        constructor();
    }

    export class User {
        constructor(config?: object);
    }
    export interface User {
        created?: String;
        updated?: String;
        context?: Number;
        password?: String;
        defaultEmail?: String;
        status?: Number;
        substatus?: Number;
        authType?: AuthType;
        details?: UserDetails;
        lock?: UserLock;
        acls?: UserAcls;
        profiles?: UserProfileViews;
        ancestors?: BasicUser[];
        customer?: BasicCustomer;
        nameServerGroup?: VirtualNameServerGroup[];
        subscriptions?: Subscription[];
        applications?: TrustedApplication[];
        user?: String;
        languag?: String;
        parent?: User;
    }

    export class UserAcl {
        constructor(config?: UserAcl);
    }
    export interface UserAcl {
        functionCode?: String;
        children?: BasicUser[];
        childrenLocked?: Boolean;
        userLocked?: Boolean;
        effective?: Boolean;
        childrenRem?: BasicUser[];
        childrenAdd?: BasicUser[];
        restriction?: String;
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
        organization?: String;
        passwordResetMobile?: String;
        passwordResetVerifyEmail?: String;
        passwordResetEmail?: String;
        fnam?: String;
        lname?: String;
    }

    export class UserProfile {
        constructor(config?: UserProfile);
    }
    export interface UserProfile {
        flag?: UserProfileFlag;
        key?: String;
        value?: String;
        readonly?: Boolean;
    }

    export class UserProfileViews {
        constructor(config?: UserProfileViews);
    }
    export interface UserProfileViews {
        profiles?: UserProfile[];
    }

    export class VhostCertificate {
        constructor(config?: VhostCertificate);
    }
    export interface VhostCertificate {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class VirtualNameServer {
        constructor(config?: VirtualNameServer);
    }
    export interface VirtualNameServer {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        active?: Boolean;
        name?: String; //Name
        mainAddres?: String; //InetAddress
        ipAddresse?: String[];
    }

    export class VirtualNameServerGroup {
        constructor(config?: VirtualNameServerGroup);
    }
    export interface VirtualNameServerGroup {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        useDefaultIps?: Number;
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
        debugTime?: Number;
        status?: DomainStudioServiceStatus;
        message?: String;
        data?: WhoisStatus;
    }

    export class WhoisStatus {
        constructor(config?: WhoisStatus);
    }
    export interface WhoisStatus {
        status?: DomainStudioDomainStatus;
    }

    export class WorkflowEvent {
        constructor(config?: WorkflowEvent);
    }
    export interface WorkflowEvent {
        vertex?: Number;
        type?: String;
    }

    export class WorkflowSpool {
        constructor(config?: WorkflowSpool);
    }
    export interface WorkflowSpool {
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        statu?: JobStatusConstants;
        subStatus?: String;
        execution?: String;
        id?: Number;
    }

    export class Zone {
        constructor(config?: object);
    }
    export interface Zone {
        created?: String;
        updated?: String;
        origin?: String;
        idn?: String;
        soa?: Soa;
        dnssec?: Boolean;
        nameServerGroup?: String;
        allowTransfer?: Boolean;
        owner?: BasicUser;
        updater?: BasicUser;
        logId?: Number;
        comment?: String;
        domainsafe?: Boolean;
        source?: String;
        sourceVirtualHostname?: String;
        nameServers?: NameServer[];
        main?: MainIp;
        wwwInclude?: Boolean;
        virtualNameServer?: String;
        freeTex?: String[];
        action?: NameserverActionConstants;
        grants?: String[];
        resourceRecords?: ResourceRecord[];
        roid?: Number;
    }

    export class ZoneBasePatchRequest {
        constructor(config?: ZoneBasePatchRequest);
    }
    export interface ZoneBasePatchRequest {
        created?: String;
        updated?: String;
        origin?: String;
        idn?: String;
        soa?: Soa;
        dnssec?: Boolean;
        nameServerGroup?: String;
        allowTransfer?: Boolean;
        owner?: BasicUser;
        updater?: BasicUser;
        logId: Number;
        comment?: String;
        domainsafe?: Boolean;
        source?: String;
        sourceVirtualHostname?: String;
        zoneGrantsAdd?: String[];
        zoneGrantsRem?: String[];
        nameServers?: NameServer[];
        main?: String; //MainIp;
        wwwInclude?: Boolean;
        virtualNameServer?: String;
        freeText?: String[];
        action?: NameserverActionConstants;
        grants?: String[];
        resourceRecords?: ResourceRecord[];
        roid: Number;
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
        name?: String;
        givenName?: String;
        familyName?: String;
        middleName?: String;
        nickname?: String;
        preferredUsernam?: String;
        profile?: String; //UrlEntity
        picture?: String; //UrlEntity
        website?: String; //UrlEntity
        email?: String;
        emailVerified?: Boolean;
        gende?: GenderConstants;
        birthdate?: String;
        zoneinfo?: String;
        locale?: String;
        phoneNumber?: Phone;
        phoneNumberVerified?: Boolean;
        address?: AddressClaim;
        organization?: String;
    }
}
