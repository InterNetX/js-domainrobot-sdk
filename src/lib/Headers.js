
export declare class CertificateService {
    create(): DomainRobotResult;
    createRealtime(): DomainRobotResult;
    prepareOrder(): DomainRobotResult;
    list(): DomainRobotResult;
    info(): DomainRobotResult;
    reissue(): DomainRobotResult;
    delete(): DomainRobotResult;
    renew(): DomainRobotResult;
    comment(): DomainRobotResult;
} 
export declare class AccountingService {
    calculate(): DomainRobotResult;
} 
export declare class ContactService {
    create(): DomainRobotResult;
    update(): DomainRobotResult;
    list(): DomainRobotResult;
    info(): DomainRobotResult;
    delete(): DomainRobotResult;
} 
export declare class DomainService {
    create(): DomainRobotResult;
    update(): DomainRobotResult;
    transfer(): DomainRobotResult;
    updateStatus(): DomainRobotResult;
    renew(): DomainRobotResult;
    restore(): DomainRobotResult;
    restoreList(): DomainRobotResult;
    info(): DomainRobotResult;
    list(): DomainRobotResult;
    authInfo1Create(): DomainRobotResult;
    authInfo1Delete(): DomainRobotResult;
    authInfo2Create(): DomainRobotResult;
    cancelationCreate(): DomainRobotResult;
    cancelationUpdate(): DomainRobotResult;
    cancelationDelete(): DomainRobotResult;
    cancelationInfo(): DomainRobotResult;
    cancelationList(): DomainRobotResult;
} 
export declare class SslContactService {
    create(): DomainRobotResult;
    update(): DomainRobotResult;
    delete(): DomainRobotResult;
    info(): DomainRobotResult;
    list(): DomainRobotResult;
} 
export declare class ZoneService {
    create(): DomainRobotResult;
    update(): DomainRobotResult;
    delete(): DomainRobotResult;
    info(): DomainRobotResult;
    list(): DomainRobotResult;
    stream(): DomainRobotResult;
    import(): DomainRobotResult;
} 
export declare class PollService {
    info(): DomainRobotResult;
    confirm(): DomainRobotResult;
} 
export declare class TransferOutService {
    list(): DomainRobotResult;
    answer(): DomainRobotResult;
} 
export declare class TrustedAppService {
    create(): DomainRobotResult;
    update(): DomainRobotResult;
    delete(): DomainRobotResult;
    info(): DomainRobotResult;
    list(): DomainRobotResult;
} 
export declare class DomainStudio {
    search(): DomainRobotResult;
} 

export declare class DomainRobotResult{
    constructor(result: object, status: object);
    isValid(): Boolean;
    isValidResponse(): Boolean;
}
export interface DomainRobotResult{
    result: object;
    status: object;
}

export type domainRobotConfig = {
    url?: String;
    auth: {
        user: String;
        password: String;
        context?: Number;
    }
}
// export declare type DomainRobotModels = any;
// export declare type Certificate = any;

export class DomainRobot {
    constructor(domainRobotConfig: domainRobotConfig);

    accounting(subjectProductModel: DomainRobotModels.Subscription): AccountingService;

    certificate(certificateModel?: DomainRobotModels.Certificate): CertificateService;

    contact(contactModel?: DomainRobotModels.Contact): ContactService;

    domain(domainModel?: DomainRobotModels.Domain): DomainService;

    domainStudio(domainStudioEnvelopeSearchRequest: DomainRobotModels.DomainEnvelopeSearchRequest): DomainStudio;

    poll(): PollService;

    sslcontact(sslcontactModel?: DomainRobotModels.SslContact): SslContactService;

    transferout(): TransferOutService;

    trustedapp(trustedAppModel?: DomainRobotModels.TrustedApplication): TrustedAppService;

    zone(zoneModel?: DomainRobotModels.Zone): ZoneService;

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

export const DomainRobotConstants: {
     ACLRestriction: {
        USER_LOCKED: String;
        CHILDREN_LOCKED: String;
        PARENT_LOCK: String;
        NOT_LOCKED: String;
    }
}

export namespace DomainRobotModels {
 
    export class Account{constructor(config?: object)}
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
        view?: CurrencyRate
    }
    // TODO: declare constants
    export class AccountingDocumentTypeConstants{constructor(config?: object)}

    export class AddressClaim{constructor(config?: AddressClaim)}
    export interface AddressClaim{
        formatted?: String;
        streetAddress?: String;
        locality?: String;
        region?: String;
        postalCode?: String;
        country?: String
    }

    export class Application{constructor(config?: Application)}
    export interface Application{
        created?: String;
        updated?: String;
        name?: String;
        functionCodes?: [String];
    }
    // TODO: declare constants
    export class AuEligibilityIdTypeConstants{constructor()}
    // TODO: declare constants
    export class AuEligibilityTypeConstants{constructor()}
    // TODO: declare constants
    export class AuRegistrantIdTypeConstants{constructor()}
    // TODO: declare constants
    export class AuthMethodConstants{constructor()}

    export class AuthType{constructor()}
    // TODO: declare constants
    export class AutoRenewStatusConstants{constructor()}

    export class BackupMx{constructor(config?: BackupMx)}
    export interface BackupMx{
        domain?: String;
        idn?: String;
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser
    }

    export class BasicCustomer{constructor(config?: BasicCustomer)}
    export interface BasicCustomer{
        number?: Number;
        client?: String;
        group?: Number;
        name?: String;
        organization?: String;
        vatNumber?: String;
        gender?: string;
        title?: String;
        addressLines?: [String];
        city?: String;
        state?: String;
        country?: String;
        phone?: Phone;
        fax?: Phone;
        emails?: [String];
        billingEmails?: [String];
        payment?: String;
        paymentMode?: String;
        paymentCurrency?: Currency;
        invoiceLanguage?: String;
        taxable?: Boolean;
        card?: Card;
        contracts?: [CustomerContract];
        billingUsers?: [BasicUser];
        account?: Account;
        clearAccount?: ClearAccountPeriod;
        fname?: String;
        lname?: String;
        pcode?: String;
        sepa?: SEPAMandate
    }

    export class BasicDocument{constructor(config?: BasicDocument)}
    export interface BasicDocument{
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
        updater?: BasicUser
    }

    export class BasicUser{constructor(config?: BasicUser)}
    export interface BasicUser{
        context: Number;
        user: String
    }

    export class BillingObjectLimit{constructor(config?: BillingObjectLimit)}
    export interface BillingObjectLimit{
        created?: String;
        updated?:String;
        articleLabel?: String;
        limitSelf?: Number;
        limitChildren?: Number;
        articleTypeLabel?: String;
        count?: Number
    }

    // TODO: declare constants
    export class BillingStatus{constructor()}

    export class BulkBackupMxDeleteRequest{constructor(config?: BulkBackupMxDeleteRequest)}
    export interface BulkBackupMxDeleteRequest{
        objects?: [BackupMx];
        query?: Query
    }

    export class BulkBackupMxPostRequest{constructor(config?: BulkBackupMxPostRequest)}
    export interface BulkBackupMxPostRequest{
        objects?: [BackupMx];
        template?: BackupMx
    }

    export class BulkDomainCancelationDeleteRequest{constructor(config?: BulkDomainCancelationDeleteRequest)}
    export interface BulkDomainCancelationDeleteRequest{
        objects?: [DomainCancelation];
        query?: Query
    }

    export class BulkDomainCancelationPatchRequest{constructor(config?: BulkDomainCancelationPatchRequest)}
    export interface BulkDomainCancelationPatchRequest{
        objects?: [DomainCancelation];
        template?: DomainCancelation;
        query?:Query
    }

    export class BulkDomainCancelationPostRequest{constructor(config?: BulkDomainCancelationPostRequest)}
    export interface BulkDomainCancelationPostRequest{
        objects?: [DomainCancelation];
        template?: DomainCancelation;
    }

    export class BulkDomainCommentRequest{constructor(config?: BulkDomainCommentRequest)}
    export interface BulkDomainCommentRequest{
        objects?: [Domain];
        template?: Domain;
        query?: Query
    }

    export class BulkDomainDeleteRequest{constructor(config?: BulkDomainDeleteRequest)}
    export interface BulkDomainDeleteRequest{
        objects?: [Domain];
        query?: Query;
    }

    export class BulkDomainPatchRequest{constructor(config?: BulkDomainPatchRequest)}
    export interface BulkDomainPatchRequest{
        objects?: [Domain];
        template?: Domain;
        query?: Query;
        modifiers: [Modifier]
    }

    export class BulkDomainPostRequest{constructor(config?: BulkDomainPostRequest)}
    export interface BulkDomainPostRequest{
        objects?: [Domain];
        template?: Domain;
    }

    export class BulkMailProxyDeleteRequest{constructor(config?: BulkMailProxyDeleteRequest)}
    export interface BulkMailProxyDeleteRequest{
        objects?: [MailProxy];
        query?: Query;
    }

    export class BulkMailProxyPatchRequest{constructor(config?: BulkMailProxyPatchRequest)}
    export interface BulkMailProxyPatchRequest{
        objects?: [MailProxy];
        template?: MailProxy;
        query?: Query
    }

    export class BulkMailProxyPostRequest{constructor(config?: BulkMailProxyPostRequest)}
    export interface BulkMailProxyPostRequest{
        objects?: [MailProxy];
        template?: MailProxy;
    }

    export class BulkRedirectDeleteRequest{constructor(config?: BulkRedirectDeleteRequest)}
    export interface BulkRedirectDeleteRequest{
        objects?: [Redirect];
        query?: Query;
    }

    export class BulkRedirectPatchRequest{constructor(config?: BulkRedirectPatchRequest)}
    export interface BulkRedirectPatchRequest{
        objects?: [Redirect];
        template?: Redirect;
        query?: Query
    }

    export class BulkRedirectPostRequest{constructor(config?: BulkRedirectPostRequest)}
    export interface BulkRedirectPostRequest{
        objects?: [Redirect];
        template?: Redirect;
    }

    export class BulkZoneCommentRequest{constructor(config?: BulkZoneCommentRequest)}
    export interface BulkZoneCommentRequest{
        objects?: [Zone];
        template?: Zone;
        query?: Query
    }

    export class BulkZoneDeleteRequest{constructor(config?: BulkZoneDeleteRequest)}
    export interface BulkRedirectBulkZoneDeleteRequestDeleteRequest{
        objects?: [Zone];
        query?: Query;
    }

    export class BulkZonePatchRequest{constructor(config?: BulkZonePatchRequest)}
    export interface BulkZonePatchRequest{
        objects?: [ZoneBasePatchRequest];
        template?: ZoneBasePatchRequest;
        query?: Query;
        modifiers: [Modifier]
    }

    export class BulkZonePostRequest{constructor(config?: BulkZonePostRequest)}
    export interface BulkZonePostRequest{
        objects?: [Zone];
        template?: Zone;
    }
    // TODO: declare constants
    export class BusinessCategory{constructor()}

    export class CaCertificate{constructor(config?: CaCertificate)}
    export interface CaCertificate{
        created?: String;
        updated?: String;
        caType?: String;
        caCertificate?: String
    }
    // TODO: declare constants
    export class CancelationStatusConstants{constructor()}
    // TODO: declare constants
    export class CancelationTypeConstants{constructor()}

    export class Card{constructor(config?: Card)}
    export interface Card {
        created?: String;
        updated?: String;
        type?: CreditCardVendor;
        status?: CardStatus;
        validFrom?: String;
        validTo?: String
    }
    // TODO: declare constants
    export class CardStatus{constructor()}

    export class CertAuthentication{constructor(config?: CertAuthentication)}
    export interface CertAuthentication{
        name?: String;
        method?: String; //AuthMethodConstants
        dns?: String;
        fileName?: String;
        fileContent?: String;
        approverEmails?: [String];
        provisioning?: Boolean
    }

    export class Certificate{constructor(config?: Certificate) }
    export interface Certificate{
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
        subjectAlternativeNames?: [SubjectAlternativeName];
        histories?: [CertificateHistory];
        certificationAuthority?: [CaCertificate];
        password?: String;
        firstname?: String;
        lastname?: String;
        organizationUnitName?: String;
        authentication?: CertAuthentication;
        certificateTransparency?: boolean;
        certificateTransparencyPrivacy?: CertificateTransparencyPrivacyConstants;
        domain?: String;
        hasCsr?: boolean;
        idn?: String
    }

    export class CertificateData{constructor(config?: CertificateData)}
    export interface CertificateData{
        plain?: String;
        name?: String;
        san?: [String];
        histories?: [CertificateHistory];
        keySize?:Number;
        countryCode?: String;
        challengePassword?: String;
        state?: String;
        city?: String;
        organization?: String;
        organizationUnit?: String;
        email?: String;
        product?: String;
        authentication?: [CertAuthentication];
        algorithm?: String;//CsrHashAlgorithmConstants;
        signatureHashAlgorithm?: String;//SignatureHashAlgorithmConstants;
        idn?: String;
        checkCaa?: Boolean
    }

    export class CertificateHistory{constructor(config?: CertificateHistory)}
    export interface CertificateHistory{
        serialNumber?: String;
        revoked?: String
    }
    // TODO: declare constants
    export class CertificateTransparencyPrivacyConstants{constructor()}
    // TODO: declare constants
    export class CertificateType{constructor()}
    // TODO: declare constants
    export class CiraCprConstants{constructor()}
    // TODO: declare constants
    export class ClearAccountPeriod{constructor()}
    // TODO: declare constants
    export class CodeSigningType{constructor()}
    // TODO: declare constants
    export class ConditionType{constructor()}

    export class Configuration{constructor()}

    export class Contact{constructor(config?: Contact)}
    export interface Contact{
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
        remarks?: [String];
        domainsafe?: Boolean;
        confirmOwnerConsent?: Boolean;
        comment?: String;
        verification?: String; //GenericStatusConstants
        fname?: String;
        lname?: String;
        address?: [String];
        pcod?: String;
        phone?: String;
        fax?: String;
        nicRef?: [ContactReference];
        extensions?: ContactExtensions
    }

    export class ContactAeroExtensions{constructor(config?: ContactAeroExtensions)}
    export interface ContactAeroExtensions{
        ensAuthId?: String;
        ensKey?: String;
    }

    export class ContactAuExtensions{constructor(config?: ContactAuExtensions)}
    export interface ContactAuExtensions{
        eligibilityId?: String;
        eligibilityIdType?: String; //AuEligibilityIdTypeConstants;
        eligibilityName?: String;
        eligibilityType?: String; //AuEligibilityTypeConstants;
        policyReason?: Number;
        registrantId?: String;
        registrantIdType?: String; //AuRegistrantIdTypeConstants;
        registrantName?: String
    }

    export class ContactBankExtensions{constructor(config?: ContactBankExtensions)}
    export interface ContactBankExtensions{
        ftldToken?: String
    }

    export class ContactBarcelonaExtensions{constructor(config?: ContactBarcelonaExtensions)}
    export interface ContactBarcelonaExtensions{
        intendedUse?: String
    }

    export class ContactBirthExtensions{constructor(config?: ContactBirthExtensions)}
    export interface ContactBirthExtensions{
        country?: String;
        day?: String;
        postalCode?: String;
        place?: String
    }

    export class ContactCaExtensions{constructor(config?: ContactCaExtensions)}
    export interface ContactCaExtensions{
        cpr?: String; //CiraCprConstants';
        agreementVersion?: Number;
        originatingIp?: String;
        officialRepresentativ?: String;
        trusteePercentage?: Number
    }

    export class ContactCatExtensions{constructor(config?: ContactCatExtensions)}
    export interface ContactCatExtensions{
        intendedUse?: String
    }

    export class ContactExtensions{constructor(config?: ContactExtensions)}
    export interface ContactExtensions{
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
        madrid?: ContactMadridExtensions
    }

    export class ContactGeneralExtensions{constructor(config?: ContactGeneralExtensions)}
    export interface ContactGeneralExtensions{
        birth?: ContactBirthExtensions;
        trademark?: ContactTrademarkExtensions;
        identification?: ContactIdentificationExtensions;
        languag?: String;
        companyNumber?: String;
        gender?: String; //GenderConstants
        vatNumber?: String;
        citizenship?: String;
        mobilePhone?: String;
    }

    export class ContactHkExtensions{constructor(config?: ContactHkExtensions)}
    export interface ContactHkExtensions{
        documentType?: String;//HkDocumentTypeConstants';
        others?: String;
        documentNumber?: String;
        documentOrigin?: String;
        above18?: String;
        industryType?: String; //HkIndustryTypeConstants
    }

    export class ContactIdentificationExtensions{constructor(config?: ContactIdentificationExtensions)}
    export interface ContactIdentificationExtensions{
        number?: String;
        authority?: String;
        dateOfIssue?: String;
        validTill?: String;
    }

    export class ContactItExtensions{constructor(config?: object)}
    export interface ContactItExtensions{
        entityType?: String;
    }

    export class ContactJobsExtensions{constructor(config?: object)}
    export interface ContactJobsExtensions{
        adminType?: Boolean;
        contactTitle?: String;
        hrMember?: Boolean;
        industryClass?: Number;
        website?: String;
    }

    export class ContactJpExtensions{constructor(config?: object)}
    export interface ContactJpExtensions{
        first?: String;
        last?: String;
        organization?: String;
        adressLine1?: String;
        adressLine2?: String;
        adressLine3?: String;
    }

    export class ContactLuxeExtensions{constructor(config?: ContactLuxeExtensions)}
    export interface ContactLuxeExtensions{
        walletAddress?: String;
    }

    export class ContactMadridExtensions{constructor(config?: ContactMadridExtensions)}
    export interface ContactMadridExtensions{
        intendedUse?: String;
    }

    export class ContactNzExtensions{constructor(config?: ContactNzExtensions)}
    export interface ContactNzExtensions{
        irpo?: String;
    }

    //TODO: define constants
    export class ContactProtectionConstants{constructor()}

    export class ContactReference{constructor(config?: ContactReference)}
    export interface ContactReference{
        nic?: NicMember;
        status?: ObjectStatus;
        type?: ContactReferenceType;
        role?: ContactReferenceType;
        name?: String;
    }
    //TODO: define constants
    export class ContactReferenceType{constructor()}

    export class ContactRoExtensions{constructor(config?: ContactRoExtensions)}
    export interface ContactRoExtensions{
        persontype?: String;
    }

    export class ContactRuExtensions{constructor(config?: ContactRuExtensions)}
    export interface ContactRuExtensions{
        taxpayerIdentificationNumber?: String;
        territoryLinkedTaxpayerNumber?: String;
    }

    export class ContactSportExtensions{constructor(config?: ContactSportExtensions)}
    export interface ContactSportExtensions{
        intendedUse?: String;
    }

    export class ContactSwissExtensions{constructor(config?: ContactSwissExtensions)}
    export interface ContactSwissExtensions{
        intendedUse?: String;
        enterpriseId?: String;
    }

    export class ContactTrademarkExtensions{constructor(config?: ContactTrademarkExtensions)}
    export interface ContactTrademarkExtensions{
        name?: String;
        number?: String;
        country?: String;
        regdate?: String;
        appdate?: String;
        office?: String;
    }
    //TODO: define constants
    export class ContactTypeConstants{constructor(config?: object)}

    export class ContactUkExtensions{constructor(config?: ContactUkExtensions)}
    export interface ContactUkExtensions{
        entityType?: String;
    }

    export class ContactVerificationDomain{constructor(config?: ContactVerificationDomain)}
    export interface ContactVerificationDomain{
        created?: String;
        updated?: String;
        name?: String;
        idn?: String;
        status?: String; //GenericStatusConstants
        deactivation?: String;
    }

    export class ContactVerificationMessage{constructor(config?: ContactVerificationMessage)}
    export interface ContactVerificationMessage{
        created?: String;
        updated?: String;
        mail?: Message;
        status?: String; //GenericStatusConstants
    }

    export class ContactXxxExtensions{constructor(config?: ContactXxxExtensions)}
    export interface ContactXxxExtensions{
        membershipID?: String;
        nonResolverDomain?: Boolean;
    }
    //TODO: define constants
    export class CreditCardVendor{constructor()}
    //TODO: define constants
    export class CryptoFormatConstants{constructor()}
    //TODO: define constants
    export class CsrHashAlgorithmConstants{constructor()}

    export class Currency{constructor()}

    export class CurrencyRate{constructor(config?: CurrencyRate)}
    export interface CurrencyRate{
        currency?: String;
        rate?: Number;
    }

    export class Customer{constructor(config?: Customer)}
    export interface Customer{
        number?: Number;
        client?: String;
        group?: Number;
        name?: String;
        organization?: String;
        vatNumber?: String;
        gender?: String; //GenderConstants
        title?: String;
        addressLines?: [String];
        city?: String;
        state?: String;
        country?: String;
        phone?: Phone;
        fax?: Phone;
        emails?: String;
        billingEmails?: [String];
        payment?: String; //PaymentConstants
        paymentMode?: String;
        paymentCurrency?: Currency;
        invoiceLanguage?: String;
        taxable?: Boolean;
        card?: Card;
        contracts?: [CustomerContract];
        billingUsers?: [BasicUser],
        accoun?: Account,
        clearAccount?: String; //PClearAccountPeriod;
        fname?: String;
        lname?: String;
        pcode?: String;
        sepa?: SEPAMandate;
    }

    export class CustomerContract{constructor(config?: CustomerContract)}
    export interface CustomerContract{
        created?: String;
        updated?: String;
        contract?: GenericLabelEntity;
        notice?: String;
        ticketNumber?: String;
    }
    //TODO: define constants
    export class DNSCheck{constructor(config?: object)}

    export class DNSSec{constructor(config?: DNSSec)}
    export interface DNSSec{
        algorithm?: Number;
        flags?: Number;
        protocol?: Number;
        publicKey?: String;
    }

    export class DNSSecJob{constructor()}

    export class Document{constructor(config?: Document)}
    export interface Document{
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

    export class Domain{constructor(config?: object)}
    export interface Domain{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        nicMemberLabel?: String;
        registryStatus?: String; //RegistryStatusConstants
        nameServers?: [NameServer];
        nameServerEntries?: [String];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: String;
        domainsafe?: Boolean;
        parking?: String; //ParkingProviderConstants
        extensions?: DomainExtensions;
        logId?: Number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: String;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: String; //RegistryStatusConstants
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
        rddsOptIn?: String; //\RddsOptInConstants
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
        ownerc?: Contact;
        adminc?: Contact;
        techc?: Contact;
        zonec?: Contact;
        expire?: String;
        payable?: String;
        action?: String; //DomainActionConstants
        autoDnssec?: Boolean;
        dnssec?: Boolean;
        validCertificate?: Boolean;
        cancelationStatus?: String; //CancelationStatusConstants
        autoRenewStatus?: String; //AutoRenewStatusConstants
        dnssecData?: [DNSSec];
        zone?: Zone;
    }

    //TODO: define constants
    export class DomainActionConstants{constructor()}

    export class DomainCancelation{constructor(config?: DomainCancelation)}
    export interface DomainCancelation{
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
        registryStatus?: String; //RegistryStatusConstants
        type?: String; //CancelationTypeConstants
        execution?: String; //ExecutionTypeConstants
    }

    export class DomainEnvelope{constructor(config?: DomainEnvelope)}
    export interface DomainEnvelope{
        domain?: String;
        id?: String;
        source?: DomainStudioDomainSource;
        services?: DomainStudioService;
        debugTime?: Boolean;
    }

    export class DomainEnvelopeSearchRequest{constructor(config?: DomainEnvelopeSearchRequest)}
    export interface DomainEnvelopeSearchRequest{
        searchToken?: String;
        currency?: String;
        debug?: Boolean;
        checkPortfolio?: Boolean;
        sources?: DomainStudioSources;
        clientIp?: String;
    }
    //TODO: define constants
    export class DomainEnvelopeSearchService{constructor()}

    export class DomainExtensions{constructor(config?: DomainExtensions)}
    export interface DomainExtensions{
        parkingExtensions?: DomainParkingExtensions,
        tmchClaimsNoticeExtensions?: DomainTmchClaimNoticeExtensions
    }

    export class DomainMonitoring{constructor(config?: object)}
    export interface DomainMonitoring{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        notificationMobiles?: [Phone],
        ocval?: Boolean;
        cancelation?: Boolean;
        removed?: Boolean;
        monitoringSetups?: [DomainMonitoringSetup],
        notificationEmails?: [String];
    }

    export class DomainMonitoringSetup{constructor(config?: DomainMonitoringSetup)}
    export interface DomainMonitoringSetup{
        created?: String;
        updated?: String;
        data?: String;
     }

    export class DomainParkingExtensions{constructor(config?: DomainParkingExtensions)}
    export interface DomainParkingExtensions{
        parkingCategory?: String;
        currency?: String;
        domainLanguage?: String;
        forSale?: String;
        keyword?: String;
        price?: Number;
        fixedPrice?: Boolean;
        minPrice?: Number;
    }

    export class DomainRestore{constructor(config?: object)}
    export interface DomainRestore{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        idn?: String;
        nicMemberLabel?: String;
        registryStatus?: String; //RegistryStatusConstants
        nameServers?: [NameServer];
        nameServerEntries?: [String];
        period?: TimePeriod;
        trustee?: Boolean;
        privacy?: Boolean;
        authinfo?: String;
        domainsafe?: Boolean;
        parking?: String; //ParkingProviderConstants
        extensions?: DomainExtensions;
        logId?: Number;
        nsCheck?: DNSCheck;
        confirmOrder?: Boolean;
        confirmOwnerConsent?: Boolean;
        ignoreWhois?: Boolean;
        comment?: String;
        includeWWW?: Boolean;
        includeWildcard?: Boolean;
        registrarStatus?: String; //RegistryStatusConstants
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
        rddsOptIn?: String; //ddsOptInConstants
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
        action?: String; //DomainActionConstants
        autoDnssec?: Boolean;
        dnssec?: Boolean;
        validCertificate?: Boolean;
        cancelationStatus?: String; //CancelationStatusConstants
        autoRenewStatus?: String; //AutoRenewStatusConstants
        dnssecData?: [DNSSec];
        zone?: Zone;
    }

    export class DomainServices{constructor(config?: DomainServices)}
    export interface DomainServices{
        backupMx?: [BackupMx];
        mailProxy?: [MailProxy];
        redirect?: [Redirect];
        domainMonitoring?: [DomainMonitoring];
    }

    export class DomainServicesUpdate{constructor(config?: DomainServicesUpdate)}
    export interface DomainServicesUpdate{
        domains?: [Domain];
        servicesAdd?: DomainServices;
        servicesRem?: DomainServices;
    }
    //TODO: define constants
    export class DomainStudioDomainSource{constructor()}
    //TODO: define constants
    export class DomainStudioDomainStatus{constructor()}

    export class DomainStudioService{constructor(config?: DomainStudioService)}
    export interface DomainStudioService{
        whois?: WhoisServiceData;
        price?: PriceServiceData;
        estimation?: EstimationServiceData;
    }
    //TODO: define constants
    export class DomainStudioServiceStatus{constructor(config?: object)}

    export class DomainStudioSourceGeo{constructor(config?: DomainStudioSourceGeo)}
    export interface DomainStudioSourceGeo{
        services?: [DomainEnvelopeSearchService];
        max?: Number;
    }

    export class DomainStudioSourceInitial{constructor(config?: DomainStudioSourceInitial)}
    export interface DomainStudioSourceInitial{
        services?: [String]; //[DomainEnvelopeSearchService];
        tlds?: [String];
    }

    export class DomainStudioSourcePremium{constructor(config?: DomainStudioSourcePremium)}
    export interface DomainStudioSourcePremium{
        services?: [String]; //[DomainEnvelopeSearchService];
        promoTld?: [String];
        topTlds?: [String];
        max?: Number;
    }

    export class DomainStudioSourceSimilar{constructor(config?: DomainStudioSourceSimilar)}
    export interface DomainStudioSourceSimilar{
        services?: [String]; //[DomainEnvelopeSearchService];
        max?: Number;
    }

    export class DomainStudioSourceSuggestion{constructor(config?: DomainStudioSourceSuggestion)}
    export interface DomainStudioSourceSuggestion{
        services?: [String]; //[DomainEnvelopeSearchService];
        language?: [String];
        max?: Number;
        maxSldLength?: Number;
        useDash?: Boolean;
        useNumber?: Boolean;
        useIdn?: Boolean;
        tlds?: [String];
    }

    export class DomainStudioSources{constructor(config?: DomainStudioSources)}
    export interface DomainStudioSources{
        initial?: DomainStudioSourceInitial;
        suggestion?: DomainStudioSourceSuggestion;
        premium?: DomainStudioSourcePremium;
        geo?: DomainStudioSourceGeo;
        similar?: DomainStudioSourceSimilar;
        recommended?: DomainStudioSourceSimilar;
    }

    export class DomainTmchClaimNoticeExtensions{constructor(config?: DomainTmchClaimNoticeExtensions)}
    export interface DomainTmchClaimNoticeExtensions{
        externalReference?: String;
        notAfter?: String;
        confirmed?: String;
        confirmIp?: String;
    }

    export class EstimationData{constructor(config?: EstimationData)}
    export interface EstimationData{
        currency?: String; //Currency;
        amount?: Number;
    }

    export class EstimationServiceData{constructor(config?: EstimationServiceData)}
    export interface EstimationServiceData{
        debugTime?: Number;
        status?: String; //DomainStudioServiceStatus
        message?: String;
        data?: EstimationData;
    }

    export class ExchangedPrice{constructor(config?: ExchangedPrice)}
    export interface ExchangedPrice{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        amoun?: Number;
        type?: String; //PriceTypeConstants',
        currency?: String; //Currency
        priorit?: String; //PriorityConstants',
        customer?: Customer;
        period?: TimePeriod;
        discountable?: Boolean;
        logId?: Number;
        refund?: Number;
        priceCondition?: [PriceServiceEntity];
        comment?: String;
        normalPrice?: ExchangedPrice;
        valid?: String;
        vatRate?: Number;
        vatAmount?: Number;
        rate?: Number;
    }

    //TODO: define constants
    export class ExecutionTypeConstants{constructor()}

    export class ExtendedValidationExtension{constructor(config?: ExtendedValidationExtension)}
    export interface ExtendedValidationExtension{
        joiCountryName?: String;
        companyNumber?: String;
        businessCategor?: String; //BusinessCategory
    }

    export enum GenderConstants {
        MALE,
        FEMALE
    }

    export class GenericCustomer{constructor(config?: GenericCustomer)}
    export interface GenericCustomer{
        number?: Number;
        client?: String;
        group?: Number;
    }

    export class GenericLabelEntity{constructor(config?: GenericLabelEntity)}
    export interface GenericLabelEntity{
        created?: String;
        updated?: String;
        label?: String;
        name?: String;
        packageLabel?: String;
    }

    export class GenericObject{constructor(config?: GenericObject)}
    export interface GenericObject{
        type?: String;
        value?: String;
    }

    //TODO: define constants
    export class GenericStatusConstants{constructor()}

    export class HandleVerification{constructor(config?: HandleVerification)}
    export interface HandleVerification{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        update?: BasicUser;
        reference?: String;
        messageSend?: String;
        confirmed?: String;
        confirmIp?: InetAddress;
        failed?: String;
        domain?: [ContactVerificationDomain];
        verificationMail?: [ContactVerificationMessage];
        comment?: String;
        action?: String;
        handle?: Contact;
    }
    //TODO: define constants
    export class HkDocumentTypeConstants{constructor()}
    //TODO: define constants
    export class HkIndustryTypeConstants{constructor()}

    export class Id4MeAgent{constructor(config?: Id4MeAgent)}
    export interface Id4MeAgent{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        externalReference?: String;
        certificate?: VhostCertificate;
        layoutAddon?: Configuration;
        name?: String;
        status?: String; //Id4MeAgentStatus
        records?: [String];
    }
    //TODO: define constants
    export class Id4MeAgentStatus{constructor()}

    export class Id4meIdentity{constructor(config?: Id4meIdentity)}
    export interface Id4meIdentity{
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
        record?: [String];
    }

    //TODO: define constants
    export class IdentityStatus{constructor()}

    export class InetAddress{constructor()}

    export class Invoice{constructor(config?: Invoice)}
    export interface Invoice{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: Number
        number?: String;
        customer?: Customer;
        payment?: String; //PaymentConstants
        paymentMode?: String;
        paymentTransaction?: String;
        subType?: String;
        sepaMandateReference?: String;
        sepaMandateCollection?: String;
        amount?: Number;
        vatAmoun?: Number;
        status?: String; //InvoiceStatusConstants;
        type?: String; //AccountingDocumentTypeConstants
        failed?: Boolean;
        currency?: String;
        paid?: String;
        document?: Document;
        comment?: String;
    }
    //TODO: define constants
    export class InvoiceStatusConstants{constructor()}

    export class IpRestriction{constructor(config?: IpRestriction)}
    export interface IpRestriction{
        created?: String;
        updated?: String;
        type?: String; //IpRestrictionTypeConstants;
        address?: String;
    }
    //TODO: define constants
    export class IpRestrictionTypeConstants{constructor()}

    export class IpRestrictions{constructor(config?: IpRestrictions)}
    export interface IpRestrictions{
        acls?: String;
    }

    export class Job{constructor(config?: object)}
    export interface Job{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: String;//JobStatusConstants;
        subStatus?: String;
        execution?: String;
        events?: [WorkflowEvent];
        subType?: String;
        action?: String;
        id?: Number;
    }
    //TODO: define constants
    export class JobStatusConstants{constructor()}

    export class JsonNoData{constructor()}

    export class JsonResponseData{constructor(config?: JsonResponseData)}
    export interface JsonResponseData{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [object],
        ctid?: String;
    }

    export class JsonResponseDataBackupMx{constructor(config?: JsonResponseDataBackupMx)}
    export interface JsonResponseDataBackupMx{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [BackupMx];
        ctid?: String;
    }

    export class JsonResponseDataBasicDocument{constructor(config?: JsonResponseDataBasicDocument)}
    export interface JsonResponseDataBasicDocument{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [BasicDocument];
        ctid?: String;
    }

    export class JsonResponseDataCertificate{constructor(config?: JsonResponseDataCertificate)}
    export interface JsonResponseDataCertificate{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Certificate];
        ctid?: String;
    }

    export class JsonResponseDataCertificateData{constructor(config?: JsonResponseDataCertificateData)}
    export interface JsonResponseDataCertificateData{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [CertificateData];
        ctid?: String;
    }

    export class JsonResponseDataContact{constructor(config?: JsonResponseDataContact)}
    export interface JsonResponseDataContact{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Contact];
        ctid?: String;
    }

    export class JsonResponseDataDomain{constructor(config?: JsonResponseDataDomain)}
    export interface JsonResponseDataDomain{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Domain];
        ctid?: String;
    }

    export class JsonResponseDataDomainCancelation{constructor(config?: JsonResponseDataDomainCancelation)}
    export interface JsonResponseDataDomainCancelation{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [DomainCancelation];
        ctid?: String;
    }

    export class JsonResponseDataDomainEnvelope{constructor(config?: JsonResponseDataDomainEnvelope)}
    export interface JsonResponseDataDomainEnvelope{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [DomainEnvelope];
        ctid?: String;
    }

    export class JsonResponseDataDomainRestore{constructor(config?: JsonResponseDataDomainRestore)}
    export interface JsonResponseDataDomainRestore{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [DomainRestore];
        ctid?: String;
    }

    export class JsonResponseDataHandleVerification{constructor(config?: JsonResponseDataHandleVerification)}
    export interface JsonResponseDataHandleVerification{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [HandleVerification];
        ctid?: String;
    }

    export class JsonResponseDataId4MeAgent{constructor(config?: JsonResponseDataId4MeAgent)}
    export interface JsonResponseDataId4MeAgent{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Id4MeAgent];
        ctid?: String;
    }

    export class JsonResponseDataId4meIdentity{constructor(config?: JsonResponseDataId4meIdentity)}
    export interface JsonResponseDataId4meIdentity{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Id4meIdentity];
        ctid?: String;
    }

    export class JsonResponseDataInvoice{constructor(config?: JsonResponseDataInvoice)}
    export interface JsonResponseDataInvoice{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Invoice];
        ctid?: String;
    }

    export class JsonResponseDataJsonNoData{constructor(config?: JsonResponseDataJsonNoData)}
    export interface JsonResponseDataJsonNoData{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonNoData];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataBackupMx{constructor(config?: JsonResponseDataListJsonResponseDataBackupMx)}
    export interface JsonResponseDataListJsonResponseDataBackupMx{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataBackupMx];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataDomain{constructor(config?: JsonResponseDataListJsonResponseDataDomain)}
    export interface JsonResponseDataListJsonResponseDataDomain{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataDomain];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataDomainCancelation{constructor(config?: JsonResponseDataListJsonResponseDataDomainCancelation)}
    export interface JsonResponseDataListJsonResponseDataDomainCancelation{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataDomainCancelation];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataMailProxy{constructor(config?: JsonResponseDataListJsonResponseDataMailProxy)}
    export interface JsonResponseDataListJsonResponseDataMailProxy{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataMailProxy];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataRedirect{constructor(config?: JsonResponseDataListJsonResponseDataRedirect)}
    export interface JsonResponseDataListJsonResponseDataRedirect{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataRedirect];
        ctid?: String;
    }

    export class JsonResponseDataListJsonResponseDataZone{constructor(config?: JsonResponseDataListJsonResponseDataZone)}
    export interface JsonResponseDataListJsonResponseDataZone{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [JsonResponseDataZone];
        ctid?: String;
    }

    export class JsonResponseDataMailProxy{constructor(config?: JsonResponseDataMailProxy)}
    export interface JsonResponseDataMailProxy{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [MailProxy];
        ctid?: String;
    }

    export class JsonResponseDataOTPAuth{constructor(config?: JsonResponseDataOTPAuth)}
    export interface JsonResponseDataOTPAuth{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [OTPAuth];
        ctid?: String;
    }

    export class JsonResponseDataObjectJob{constructor(config?: JsonResponseDataObjectJob)}
    export interface JsonResponseDataObjectJob{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [ObjectJob];
        ctid?: String;
    }

    export class JsonResponseDataPeriodicBilling{constructor(config?: JsonResponseDataPeriodicBilling)}
    export interface JsonResponseDataPeriodicBilling{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [PeriodicBilling];
        ctid?: String;
    }

    export class JsonResponseDataPollMessage{constructor(config?: JsonResponseDataPollMessage)}
    export interface JsonResponseDataPollMessage{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [PollMessage];
        ctid?: String;
    }

    export class JsonResponseDataRedirect{constructor(config?: JsonResponseDataRedirect)}
    export interface JsonResponseDataRedirect{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Redirect];
        ctid?: String;
    }

    export class JsonResponseDataSslContact{constructor(config?: JsonResponseDataSslContact)}
    export interface JsonResponseDataSslContact{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [SslContact];
        ctid?: String;
    }

    export class JsonResponseDataString{constructor(config?: JsonResponseDataString)}
    export interface JsonResponseDataString{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [string];
        ctid?: String;
    }

    export class JsonResponseDataTransfer{constructor(config?: JsonResponseDataTransfer)}
    export interface JsonResponseDataTransfer{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Transfer];
        ctid?: String;
    }

    export class JsonResponseDataTransferOut{constructor(config?: JsonResponseDataTransferOut)}
    export interface JsonResponseDataTransferOut{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [TransferOut];
        ctid?: String;
    }

    export class JsonResponseDataTrustedApplication{constructor(config?: JsonResponseDataTrustedApplication)}
    export interface JsonResponseDataTrustedApplication{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [TrustedApplication];
        ctid?: String;
    }

    export class JsonResponseDataUser{constructor(config?: JsonResponseDataUser)}
    export interface JsonResponseDataUser{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [User];
        ctid?: String;
    }

    export class JsonResponseDataVoid{constructor(config?: JsonResponseDataVoid)}
    export interface JsonResponseDataVoid{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Void];
        ctid?: String;
    }

    export class JsonResponseDataZone{constructor(config?: JsonResponseDataZone)}
    export interface JsonResponseDataZone{
        stid?: String;
        messages?: [Message];
        status?: ResponseStatus;
        object?: ResponseObject;
        data?: [Zone];
        ctid?: String;
    }

    export class LoginData{constructor(config?: LoginData)}
    export interface LoginData{
        context?: Number;
        password?: String;
        token?: String;
        user?: String;
    }

    export class MailList{constructor(config?: MailList)}
    export interface MailList{
        emails?: [String];
    }

    export class MailProxy{constructor(config?: object)}
    export interface MailProxy{
        domain?: String;
        idn?: String;
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        target?: String;
        admin?: String;
        protection?: String; //ProtectionConstants
        greylisting?: Boolean;
        virus?: String;
        bannedFiles?: String;
        header?: String;
        spam?: SpamPolicy;
        whitelis?: MailList;
        blacklist?: MailList;
        excludelis?: MailList;
    }

    export class MainIp{constructor(config?: MainIp)}
    export interface MainIp{
        address?: String;
        ttl?: Number;
    }

    export class Message{constructor(config?: Message)}
    export interface Message{
        text?: String;
        messages?: [Message];
        objects?: [GenericObject];
        code?: String;
        status?: String; //StatusType
    }

    export class Modifier{constructor(config?: object)}
    export interface Modifier{
        search?: String;
        replace?: String;
        type?: String; //ModifierConstants;
    }

    //TODO: define constants
    export class ModifierConstants{constructor()}

    export class Name{constructor()}

    export class NameServer{constructor(config?: NameServer)}
    export interface NameServer{
        name?: String;
        ttl?: Number;
        ipAddresses?: [String];
    }
    //TODO: define constants
    export class NameserverActionConstants{constructor()}

    export class NicMember{constructor(config?: NicMember)}
    export interface NicMember{
        name?: String;
        label?: String;
    }

    export class NotifyMessage{constructor(config?: NotifyMessage)}
    export interface NotifyMessage{
        type?: String;
    }

    export class OTPAuth{constructor(config?: OTPAuth)}
    export interface OTPAuth{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        protocolType?: String; //ProtocolTypeConstants
        algorithm?: String; //CryptoFormatConstants
        timeout?: Number;
        digits?: Number;
        secret?: String;
        tokens?: [String];
        qrCode?: BasicDocument;
    }

    export class ObjectJob{constructor(config?: ObjectJob)}
    export interface ObjectJob{
        job?: Job;
        object?: ResponseObject;
    }
    //TODO: define constants
    export class ObjectStatus{constructor()}
    //TODO: define constants
    export class Operator{constructor()}
    //TODO: define constants
    export class OrderType{constructor()}
    //TODO: define constants
    export class ParkingProviderConstants{constructor()}
    //TODO: define constants
    export class PaymentConstants{constructor()}

    export class PeriodicBilling{constructor(config?: PeriodicBilling)}
    export interface PeriodicBilling{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        status?: String; //BillingStatus
        object?: String;
        description?: String;
        period?: TimePeriod;
        articleTypeLabel?: String;
        articleLabe?: String;
        item?: [PeriodicBilling];
        businessCase?: String;
    }

    export class Phone{constructor()}

    export class PhysicalNameServerGroup{constructor(config?: PhysicalNameServerGroup)}
    export interface PhysicalNameServerGroup{
        created?: String;
        updated?: String;
        name?: String;
        articleLabel?: String;
        dnssec?: Boolean;
        statistic?: String;
    }

    export class PollMessage{constructor(config?: PollMessage)}
    export interface PollMessage{
        id?: Number;
        owner?: BasicUser;
        job?: WorkflowSpool;
        notify?: NotifyMessage;
        stid?: String;
        ctid?: String;
        messages?: [Message];
        flags?: String;
        created?: String;
        object?: ResponseObject;
    }

    export class PriceData{constructor(config?: PriceData)}
    export interface PriceData{
        prices?: SimplePrice;
    }

    export class PriceServiceData{constructor(config?: PriceServiceData)}
    export interface PriceServiceData {
        debugTime?: Number;
        status?: String; //DomainStudioServiceStatus
        message?: String;
        data?: PriceData;
    }

    export class PriceServiceEntity{constructor(config?: PriceServiceEntity)}
    export interface PriceServiceEntity{
        configuration?: object,
        condition?: ServiceEntity;
    }
    //TODO: define constants
    export class PriceTypeConstants{constructor()}
    //TODO: define constants
    export class PriorityConstants{constructor()}
    //TODO: define constants
    export class ProtectionConstants{constructor()}
    //TODO: define constants
    export class ProtocolTypeConstants{constructor()}

    export class Query{constructor(config?: Query)}
    export interface Query{
        filters?: [QueryFilter];
        view?: QueryView;
        orders?: [QueryOrder];
    }

    export class QueryFilter{constructor(config?: QueryFilter)}
    export interface QueryFilter{
        key?: String;
        value?: String;
        operator?: String; //Operator
        link?: String; //ConditionType
        filters?: [QueryFilter];
    }

    export class QueryOrder{constructor(config?: QueryOrder)}
    export interface QueryOrder{
        key?: String;
        ins?: [String];
        type?: String; //OrderType
    }

    export class QueryView{constructor(config?: QueryView)}
    export interface QueryView{
        limit?: Number;
        offset?: Number;
        children?: Boolean;
        from?: String;
        to?: String;
    }
     //TODO: define constants
    export class RddsOptInConstants{constructor()}

    export class Redirect{constructor(config?: Redirect)}
    export interface Redirect{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        source?: String;
        target?: String;
        type?: String; //RedirectTypeConstants
        mode?: String; //RedirectModeConstants
        domain?: String;
        title?: String;
        backups?: [String];
        sourceIdn?: String;
        targetIdn?: String;
        lastSeen?: String;
    }
     //TODO: define constants
    export class RedirectModeConstants{constructor()}
     //TODO: define constants
    export class RedirectTypeConstants{constructor()}
     //TODO: define constants
    export class RegistryStatusConstants{constructor()}

    export class ResourceRecord{constructor(config?: ResourceRecord)}
    export interface ResourceRecord{
        name?: String;
        ttl?: Number;
        type?: String;
        value?: String;
        pref?: Number;
    }

    export class ResponseObject{constructor(config?: ResponseObject)}
    export interface ResponseObject{
        type?: String;
        value?: String;
        summary?: Number;
        data?: Object;
    }

    export class ResponseStatus{constructor(config?: ResponseStatus)}
    export interface ResponseStatus{
        code?: String;
        text?: String;
        typ?: String; //StatusType
    }
    //TODO: define constants
    export class RoPersonTypeConstants{constructor()}

    export class SEPAMandate{constructor(config?: SEPAMandate)}
    export interface SEPAMandate{
        created?: String;
        updated?: String;
        reference?: String;
        confirmSignature?: String;
        confirmIp?: String; //InetAddress
        confirmUseragent?: String;
        confirmChecked?: Boolean;
        expire?: String;
        histories?: [SEPAMandate];
        accountHolder?: String;
        iban?: String;
        bic?: String;
    }
    //TODO: define constants
    export class ServerSoftwareTypeConstants{constructor()}

    export class ServiceEntity{constructor(config?: ServiceEntity)}
    export interface ServiceEntity{
        created?: String;
        updated?: String;
        label?: String;
    }
    //TODO: define constants
    export class SignatureHashAlgorithmConstants{constructor()}

    export class SimplePrice{constructor(config?: SimplePrice)}
    export interface SimplePrice{
        price?: ExchangedPrice;
        businessCase?: String;
        period?: TimePeriod;
    }

    export class Soa{constructor(config?: Soa)}
    export interface Soa{
        refresh?: Number;
        retry?: Number;
        expire?: Number;
        ttl?: Number;
        email?: String;
    }

    export class SpamPolicy{constructor(config?: SpamPolicy)}
    export interface SpamPolicy{
        modifySubject?: Boolean;
        tagHeader?: Number;
        spam?: Number;
        kill?: Number;
        quarantineDigestInterval?: Number;
    }

    export class SslContact{constructor(config?: SslContact)}
    export interface SslContact{
        created?: String;
        updated?: String;
        fname?: String;
        lname?: String;
        phone?: String;
        fax?: String;
        email?: String;
        title?: String;
        organization?: String;
        address?: [String];
        pcode?: String;
        city?: String;
        country?: String;
        state?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        id?: Number;
    }
    //TODO: define constants
    export class StatusType{constructor()}

    export class SubjectAlternativeName{constructor(config?: SubjectAlternativeName)}
    export interface SubjectAlternativeName{
        name?: String;
        approverEmail?: String;
        orderId?: String;
    }

    export class Subscription{constructor(config?: Subscription)}
    export interface Subscription{
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
        item?: [PeriodicBilling];
        limits?: [BillingObjectLimit];
        acls?: [UserAcl];
        variant?: String;
        businessCase?: String;
    }

    export class TimePeriod{constructor(config?: TimePeriod)}
    export interface TimePeriod{
        unit?: String; //TimeUnitConstants
        period?: Number;
    }
    //TODO: define constants
    export class TimeUnitConstants{constructor()}

    export class Transfer{constructor(config?: Transfer)}
    export interface Transfer{
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
        status?: String; //TransferStatusConstants
    }
     //TODO: define constants
    export class TransferAnswer{constructor()}

    export class TransferOut{constructor(config?: TransferOut)}
    export interface TransferOut{
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
    //TODO: define constants
    export class TransferStatusConstants{constructor()}

    export class TrustedApplication{constructor(config?: TrustedApplication)}
    export interface TrustedApplication{
         created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        user?: BasicUser;
        uuid?: String;
        password?: String;
        application?: Application;
        functions?: String; //TrustedApplicationFunctions
        restrictions?: IpRestrictions;
        device?: String;
        comment?: String;
    }

    export class TrustedApplicationFunctions{constructor(config?: TrustedApplicationFunctions)}
    export interface TrustedApplicationFunctions{
        functionCodes?: String;
    }
    //TODO: define constants
    export class UkTypeConstants{constructor()}

    export class UrlEntity{constructor()}

    export class User{constructor(config?: object)}
    export interface User{
        created?: String;
        updated?: String;
        context?: Number;
        password?: String;
        defaultEmail?: String;
        status?: Number;
        substatus?: Number;
        authType?: String; //AuthType
        details?: UserDetails;
        lock?: String; //UserLock
        acls?: UserAcls;
        profiles?: UserProfileViews
        ancestors?: [BasicUser];
        customer?: BasicCustomer;
        nameServerGroup?: [VirtualNameServerGroup];
        subscriptions?: [Subscription];
        applications?: [TrustedApplication];
        user?: String;
        languag?: String;
        parent?: User;
    }

    export class UserAcl{constructor(config?: UserAcl)}
    export interface UserAcl{
        functionCode?: String;
        children?: [BasicUser];
        childrenLocked?: Boolean;
        userLocked?: Boolean;
        effective?: Boolean;
        childrenRem?: [BasicUser];
        childrenAdd?: [BasicUser];
        restriction?: String;
    }

    export class UserAcls{constructor(config?: UserAcls)}
    export interface UserAcls{
        user?: BasicUser;
        acls?:[UserAcl]; 
    }

    export class UserDetails{constructor(config?: UserDetails)}
    export interface UserDetails{
        organization?: String;
        passwordResetMobile?: String;
        passwordResetVerifyEmail?: String;
        passwordResetEmail?: String;
        fnam?: String;
        lname?: String;
    }
    //TODO: define constants
    export class UserLock{constructor()}

    export class UserProfile{constructor(config?: UserProfile)}
    export interface UserProfile{
        flag?: String; //UserProfileFlag
        key?: String;
        value?: String;
        readonly?: Boolean;
    }
    //TODO: define constants
    export class UserProfileFlag{constructor()}

    export class UserProfileViews{constructor(config?: UserProfileViews)}
    export interface UserProfileViews{
        profiles?:[UserProfile]; 
    }

    export class VhostCertificate{constructor(config?: VhostCertificate)}
    export interface VhostCertificate{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
    }

    export class VirtualNameServer{constructor(config?: VirtualNameServer)}
    export interface VirtualNameServer{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        active?: Boolean;
        name?: String; //Name
        mainAddres?: String; //InetAddress
        ipAddresse?: [String];
    }

    export class VirtualNameServerGroup{constructor(config?: VirtualNameServerGroup)}
    export interface VirtualNameServerGroup{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        name?: String;
        useDefaultIps?: Number;
        nameServers?: [VirtualNameServer];
        systemNameServerGroup?: PhysicalNameServerGroup;
    }

    export class Void{constructor()}

    export class WhoisServiceData{constructor(config?: WhoisServiceData)}
    export interface WhoisServiceData{
        debugTime?: Number;
        status?: String; //DomainStudioServiceStatus
        message?: String;
        data?: WhoisStatus;
    }

    export class WhoisStatus{constructor(config?: WhoisStatus)}
    export interface WhoisStatus{
        status?: String; //DomainStudioDomainStatus
    }

    export class WorkflowEvent{constructor(config?: WorkflowEvent)}
    export interface WorkflowEvent{
        vertex?: Number;
        type?: String;
    }

    export class WorkflowSpool{constructor(config?: WorkflowSpool)}
    export interface WorkflowSpool{
        created?: String;
        updated?: String;
        owner?: BasicUser;
        updater?: BasicUser;
        statu?: String; //JobStatusConstants
        subStatus?: String;
        execution?: String;
        id?: Number;
    }

    export class Zone{constructor(config?: object)}
    export interface Zone{
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
        nameServers?: [NameServer];
        main?: String; //MainIp
        wwwInclude?: Boolean;
        virtualNameServer?: String;
        freeTex?: [String];
        action?: String; //NameserverActionConstants
        grants?: [String];
        resourceRecords?: [ResourceRecord];
        roid?: Number;
    }

    export class ZoneBasePatchRequest{constructor(config?: ZoneBasePatchRequest)}
    export interface ZoneBasePatchRequest{
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
        zoneGrantsAdd?: [String]; 
        zoneGrantsRem?: [String]; 
        nameServers?: [NameServer];
        main?: String; //MainIp'
        wwwInclude?: Boolean;
        virtualNameServer?: String; 
        freeText?: [String]; 
        action?: String; //NameserverActionConstants
        grants?: [String]; 
        resourceRecords?: [ResourceRecord];
        roid: Number;
        resourceRecordsAdd?: [ResourceRecord];
        resourceRecordsRem?: [ResourceRecord];
    }

    export class ZoneStream{constructor(config?: ZoneStream)}
    export interface ZoneStream{
        adds?: [ResourceRecord];
        rems?: [ResourceRecord];
    }

    export class address_claim{constructor()}

    export class Claims{constructor(config?: Claims)}
    export interface Claims{
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
        gende?: String; //GenderConstants
        birthdate?: String;
        zoneinfo?: String;
        locale?: String;
        phoneNumber?: Phone;
        phoneNumberVerified?: Boolean;
        address?: AddressClaim;
        organization?: String;
    }

}
