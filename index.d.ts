export declare class CertificateService {
	createRealtime(): DomainRobotModels.Certificate;
}
export declare class AccountingService {}
export declare class ContactService {}
export declare class DomainService {}
export declare class SslContactService {}
export declare class ZoneService {}
export declare class PollService {}
export declare class TransferOutService {}
export declare class TrustedAppService {}
export declare class DomainStudio {}

// export declare type DomainRobotModels = any;
// export declare type Certificate = any;

export class DomainRobot {
	constructor(domainRobotConfig: object);

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

export namespace DomainRobotModels {
	export class ACLRestriction {
		constructor(config?: object);
	}

	export class Account {
		constructor(config?: object);
	}

	export class AccountingDocumentTypeConstants {
		constructor(config?: object);
	}

	export class Application {
		constructor(config?: object);
	}

	export class AuEligibilityIdTypeConstants {
		constructor(config?: object);
	}

	export class AuEligibilityTypeConstants {
		constructor(config?: object);
	}

	export class AuRegistrantIdTypeConstants {
		constructor(config?: object);
	}

	export class AuthMethodConstants {
		constructor(config?: object);
	}

	export class AuthType {
		constructor(config?: object);
	}

	export class AutoRenewStatusConstants {
		constructor(config?: object);
	}

	export class BackupMx {
		constructor(config?: object);
	}

	export class BasicCustomer {
		constructor(config?: object);
	}

	export class BasicDocument {
		constructor(config?: object);
	}

	export class BasicUser {
		constructor(config?: object);
	}

	export class BillingObjectLimit {
		constructor(config?: object);
	}

	export class BillingStatus {
		constructor(config?: object);
	}

	export class BulkBackupMxDeleteRequest {
		constructor(config?: object);
	}

	export class BulkBackupMxPostRequest {
		constructor(config?: object);
	}

	export class BulkDomainCancelationDeleteRequest {
		constructor(config?: object);
	}

	export class BulkDomainCancelationPatchRequest {
		constructor(config?: object);
	}

	export class BulkDomainCancelationPostRequest {
		constructor(config?: object);
	}

	export class BulkDomainCommentRequest {
		constructor(config?: object);
	}

	export class BulkDomainDeleteRequest {
		constructor(config?: object);
	}

	export class BulkDomainPatchRequest {
		constructor(config?: object);
	}

	export class BulkDomainPostRequest {
		constructor(config?: object);
	}

	export class BulkMailProxyDeleteRequest {
		constructor(config?: object);
	}

	export class BulkMailProxyPatchRequest {
		constructor(config?: object);
	}

	export class BulkMailProxyPostRequest {
		constructor(config?: object);
	}

	export class BulkRedirectDeleteRequest {
		constructor(config?: object);
	}

	export class BulkRedirectPatchRequest {
		constructor(config?: object);
	}

	export class BulkRedirectPostRequest {
		constructor(config?: object);
	}

	export class BulkZoneCommentRequest {
		constructor(config?: object);
	}

	export class BulkZoneDeleteRequest {
		constructor(config?: object);
	}

	export class BulkZonePatchRequest {
		constructor(config?: object);
	}

	export class BulkZonePostRequest {
		constructor(config?: object);
	}

	export class BusinessCategory {
		constructor(config?: object);
	}

	export class CaCertificate {
		constructor(config?: object);
	}

	export class CancelationStatusConstants {
		constructor(config?: object);
	}

	export class CancelationTypeConstants {
		constructor(config?: object);
	}

	export class Card {
		constructor(config?: object);
	}

	export class CardStatus {
		constructor(config?: object);
	}

	export class CertAuthentication {
		constructor(config?: object);
	}

	export class Certificate {
		constructor(config?: object);
	}

	export class CertificateData {
		constructor(config?: object);
	}

	export class CertificateHistory {
		constructor(config?: object);
	}

	export class CertificateTransparencyPrivacyConstants {
		constructor(config?: object);
	}

	export class CertificateType {
		constructor(config?: object);
	}

	export class CiraCprConstants {
		constructor(config?: object);
	}

	export class ClearAccountPeriod {
		constructor(config?: object);
	}

	export class CodeSigningType {
		constructor(config?: object);
	}

	export class ConditionType {
		constructor(config?: object);
	}

	export class Configuration {
		constructor(config?: object);
	}

	export class Contact {
		constructor(config?: object);
	}

	export class ContactAeroExtensions {
		constructor(config?: object);
	}

	export class ContactAuExtensions {
		constructor(config?: object);
	}

	export class ContactBankExtensions {
		constructor(config?: object);
	}

	export class ContactBarcelonaExtensions {
		constructor(config?: object);
	}

	export class ContactBirthExtensions {
		constructor(config?: object);
	}

	export class ContactCaExtensions {
		constructor(config?: object);
	}

	export class ContactCatExtensions {
		constructor(config?: object);
	}

	export class ContactExtensions {
		constructor(config?: object);
	}

	export class ContactGeneralExtensions {
		constructor(config?: object);
	}

	export class ContactHkExtensions {
		constructor(config?: object);
	}

	export class ContactIdentificationExtensions {
		constructor(config?: object);
	}

	export class ContactItExtensions {
		constructor(config?: object);
	}

	export class ContactJobsExtensions {
		constructor(config?: object);
	}

	export class ContactJpExtensions {
		constructor(config?: object);
	}

	export class ContactLuxeExtensions {
		constructor(config?: object);
	}

	export class ContactMadridExtensions {
		constructor(config?: object);
	}

	export class ContactNzExtensions {
		constructor(config?: object);
	}

	export class ContactProtectionConstants {
		constructor(config?: object);
	}

	export class ContactReference {
		constructor(config?: object);
	}

	export class ContactReferenceType {
		constructor(config?: object);
	}

	export class ContactRoExtensions {
		constructor(config?: object);
	}

	export class ContactRuExtensions {
		constructor(config?: object);
	}

	export class ContactSportExtensions {
		constructor(config?: object);
	}

	export class ContactSwissExtensions {
		constructor(config?: object);
	}

	export class ContactTrademarkExtensions {
		constructor(config?: object);
	}

	export class ContactTypeConstants {
		constructor(config?: object);
	}

	export class ContactUkExtensions {
		constructor(config?: object);
	}

	export class ContactVerificationDomain {
		constructor(config?: object);
	}

	export class ContactVerificationMessage {
		constructor(config?: object);
	}

	export class ContactXxxExtensions {
		constructor(config?: object);
	}

	export class CreditCardVendor {
		constructor(config?: object);
	}

	export class CryptoFormatConstants {
		constructor(config?: object);
	}

	export class CsrHashAlgorithmConstants {
		constructor(config?: object);
	}

	export class Currency {
		constructor(config?: object);
	}

	export class CurrencyRate {
		constructor(config?: object);
	}

	export class Customer {
		constructor(config?: object);
	}

	export class CustomerContract {
		constructor(config?: object);
	}

	export class DNSCheck {
		constructor(config?: object);
	}

	export class DNSSec {
		constructor(config?: object);
	}

	export class DNSSecJob {
		constructor(config?: object);
	}

	export class Document {
		constructor(config?: object);
	}

	export class Domain {
		constructor(config?: object);
	}

	export class DomainActionConstants {
		constructor(config?: object);
	}

	export class DomainCancelation {
		constructor(config?: object);
	}

	export class DomainEnvelope {
		constructor(config?: object);
	}

	export class DomainEnvelopeSearchRequest {
		constructor(config?: object);
	}

	export class DomainEnvelopeSearchService {
		constructor(config?: object);
	}

	export class DomainExtensions {
		constructor(config?: object);
	}

	export class DomainMonitoring {
		constructor(config?: object);
	}

	export class DomainMonitoringSetup {
		constructor(config?: object);
	}

	export class DomainParkingExtensions {
		constructor(config?: object);
	}

	export class DomainRestore {
		constructor(config?: object);
	}

	export class DomainServices {
		constructor(config?: object);
	}

	export class DomainServicesUpdate {
		constructor(config?: object);
	}

	export class DomainStudioDomainSource {
		constructor(config?: object);
	}

	export class DomainStudioDomainStatus {
		constructor(config?: object);
	}

	export class DomainStudioService {
		constructor(config?: object);
	}

	export class DomainStudioServiceStatus {
		constructor(config?: object);
	}

	export class DomainStudioSourceGeo {
		constructor(config?: object);
	}

	export class DomainStudioSourceInitial {
		constructor(config?: object);
	}

	export class DomainStudioSourcePremium {
		constructor(config?: object);
	}

	export class DomainStudioSourceSimilar {
		constructor(config?: object);
	}

	export class DomainStudioSourceSuggestion {
		constructor(config?: object);
	}

	export class DomainStudioSources {
		constructor(config?: object);
	}

	export class DomainTmchClaimNoticeExtensions {
		constructor(config?: object);
	}

	export class EstimationData {
		constructor(config?: object);
	}

	export class EstimationServiceData {
		constructor(config?: object);
	}

	export class ExchangedPrice {
		constructor(config?: object);
	}

	export class ExecutionTypeConstants {
		constructor(config?: object);
	}

	export class ExtendedValidationExtension {
		constructor(config?: object);
	}

	export class GenderConstants {
		constructor(config?: object);
	}

	export class GenericCustomer {
		constructor(config?: object);
	}

	export class GenericLabelEntity {
		constructor(config?: object);
	}

	export class GenericObject {
		constructor(config?: object);
	}

	export class GenericStatusConstants {
		constructor(config?: object);
	}

	export class HandleVerification {
		constructor(config?: object);
	}

	export class HkDocumentTypeConstants {
		constructor(config?: object);
	}

	export class HkIndustryTypeConstants {
		constructor(config?: object);
	}

	export class Id4MeAgent {
		constructor(config?: object);
	}

	export class Id4MeAgentStatus {
		constructor(config?: object);
	}

	export class Id4meIdentity {
		constructor(config?: object);
	}

	export class IdentityStatus {
		constructor(config?: object);
	}

	export class InetAddress {
		constructor(config?: object);
	}

	export class Invoice {
		constructor(config?: object);
	}

	export class InvoiceStatusConstants {
		constructor(config?: object);
	}

	export class IpRestriction {
		constructor(config?: object);
	}

	export class IpRestrictionTypeConstants {
		constructor(config?: object);
	}

	export class IpRestrictions {
		constructor(config?: object);
	}

	export class Job {
		constructor(config?: object);
	}

	export class JobStatusConstants {
		constructor(config?: object);
	}

	export class JsonNoData {
		constructor(config?: object);
	}

	export class JsonResponseData {
		constructor(config?: object);
	}

	export class JsonResponseDataBackupMx {
		constructor(config?: object);
	}

	export class JsonResponseDataBasicDocument {
		constructor(config?: object);
	}

	export class JsonResponseDataCertificate {
		constructor(config?: object);
	}

	export class JsonResponseDataCertificateData {
		constructor(config?: object);
	}

	export class JsonResponseDataContact {
		constructor(config?: object);
	}

	export class JsonResponseDataDomain {
		constructor(config?: object);
	}

	export class JsonResponseDataDomainCancelation {
		constructor(config?: object);
	}

	export class JsonResponseDataDomainEnvelope {
		constructor(config?: object);
	}

	export class JsonResponseDataDomainRestore {
		constructor(config?: object);
	}

	export class JsonResponseDataHandleVerification {
		constructor(config?: object);
	}

	export class JsonResponseDataId4MeAgent {
		constructor(config?: object);
	}

	export class JsonResponseDataId4meIdentity {
		constructor(config?: object);
	}

	export class JsonResponseDataInvoice {
		constructor(config?: object);
	}

	export class JsonResponseDataJsonNoData {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataBackupMx {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataDomain {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataDomainCancelation {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataMailProxy {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataRedirect {
		constructor(config?: object);
	}

	export class JsonResponseDataListJsonResponseDataZone {
		constructor(config?: object);
	}

	export class JsonResponseDataMailProxy {
		constructor(config?: object);
	}

	export class JsonResponseDataOTPAuth {
		constructor(config?: object);
	}

	export class JsonResponseDataObjectJob {
		constructor(config?: object);
	}

	export class JsonResponseDataPeriodicBilling {
		constructor(config?: object);
	}

	export class JsonResponseDataPollMessage {
		constructor(config?: object);
	}

	export class JsonResponseDataRedirect {
		constructor(config?: object);
	}

	export class JsonResponseDataSslContact {
		constructor(config?: object);
	}

	export class JsonResponseDataString {
		constructor(config?: object);
	}

	export class JsonResponseDataTransfer {
		constructor(config?: object);
	}

	export class JsonResponseDataTransferOut {
		constructor(config?: object);
	}

	export class JsonResponseDataTrustedApplication {
		constructor(config?: object);
	}

	export class JsonResponseDataUser {
		constructor(config?: object);
	}

	export class JsonResponseDataVoid {
		constructor(config?: object);
	}

	export class JsonResponseDataZone {
		constructor(config?: object);
	}

	export class LoginData {
		constructor(config?: object);
	}

	export class MailList {
		constructor(config?: object);
	}

	export class MailProxy {
		constructor(config?: object);
	}

	export class MainIp {
		constructor(config?: object);
	}

	export class Message {
		constructor(config?: object);
	}

	export class Modifier {
		constructor(config?: object);
	}

	export class ModifierConstants {
		constructor(config?: object);
	}

	export class Name {
		constructor(config?: object);
	}

	export class NameServer {
		constructor(config?: object);
	}

	export class NameserverActionConstants {
		constructor(config?: object);
	}

	export class NicMember {
		constructor(config?: object);
	}

	export class NotifyMessage {
		constructor(config?: object);
	}

	export class OTPAuth {
		constructor(config?: object);
	}

	export class ObjectJob {
		constructor(config?: object);
	}

	export class ObjectStatus {
		constructor(config?: object);
	}

	export class Operator {
		constructor(config?: object);
	}

	export class OrderType {
		constructor(config?: object);
	}

	export class ParkingProviderConstants {
		constructor(config?: object);
	}

	export class PaymentConstants {
		constructor(config?: object);
	}

	export class PeriodicBilling {
		constructor(config?: object);
	}

	export class Phone {
		constructor(config?: object);
	}

	export class PhysicalNameServerGroup {
		constructor(config?: object);
	}

	export class PollMessage {
		constructor(config?: object);
	}

	export class PriceData {
		constructor(config?: object);
	}

	export class PriceServiceData {
		constructor(config?: object);
	}

	export class PriceServiceEntity {
		constructor(config?: object);
	}

	export class PriceTypeConstants {
		constructor(config?: object);
	}

	export class PriorityConstants {
		constructor(config?: object);
	}

	export class ProtectionConstants {
		constructor(config?: object);
	}

	export class ProtocolTypeConstants {
		constructor(config?: object);
	}

	export class Query {
		constructor(config?: object);
	}

	export class QueryFilter {
		constructor(config?: object);
	}

	export class QueryOrder {
		constructor(config?: object);
	}

	export class QueryView {
		constructor(config?: object);
	}

	export class RddsOptInConstants {
		constructor(config?: object);
	}

	export class Redirect {
		constructor(config?: object);
	}

	export class RedirectModeConstants {
		constructor(config?: object);
	}

	export class RedirectTypeConstants {
		constructor(config?: object);
	}

	export class RegistryStatusConstants {
		constructor(config?: object);
	}

	export class ResourceRecord {
		constructor(config?: object);
	}

	export class ResponseObject {
		constructor(config?: object);
	}

	export class ResponseStatus {
		constructor(config?: object);
	}

	export class RoPersonTypeConstants {
		constructor(config?: object);
	}

	export class SEPAMandate {
		constructor(config?: object);
	}

	export class ServerSoftwareTypeConstants {
		constructor(config?: object);
	}

	export class ServiceEntity {
		constructor(config?: object);
	}

	export class SignatureHashAlgorithmConstants {
		constructor(config?: object);
	}

	export class SimplePrice {
		constructor(config?: object);
	}

	export class Soa {
		constructor(config?: object);
	}

	export class SpamPolicy {
		constructor(config?: object);
	}

	export class SslContact {
		constructor(config?: object);
	}

	export class StatusType {
		constructor(config?: object);
	}

	export class SubjectAlternativeName {
		constructor(config?: object);
	}

	export class Subscription {
		constructor(config?: object);
	}

	export class TimePeriod {
		constructor(config?: object);
	}

	export class TimeUnitConstants {
		constructor(config?: object);
	}

	export class Transfer {
		constructor(config?: object);
	}

	export class TransferAnswer {
		constructor(config?: object);
	}

	export class TransferOut {
		constructor(config?: object);
	}

	export class TransferStatusConstants {
		constructor(config?: object);
	}

	export class TrustedApplication {
		constructor(config?: object);
	}

	export class TrustedApplicationFunctions {
		constructor(config?: object);
	}

	export class UkTypeConstants {
		constructor(config?: object);
	}

	export class UrlEntity {
		constructor(config?: object);
	}

	export class User {
		constructor(config?: object);
	}

	export class UserAcl {
		constructor(config?: object);
	}

	export class UserAcls {
		constructor(config?: object);
	}

	export class UserDetails {
		constructor(config?: object);
	}

	export class UserLock {
		constructor(config?: object);
	}

	export class UserProfile {
		constructor(config?: object);
	}

	export class UserProfileFlag {
		constructor(config?: object);
	}

	export class UserProfileViews {
		constructor(config?: object);
	}

	export class VhostCertificate {
		constructor(config?: object);
	}

	export class VirtualNameServer {
		constructor(config?: object);
	}

	export class VirtualNameServerGroup {
		constructor(config?: object);
	}

	export class Void {
		constructor(config?: object);
	}

	export class WhoisServiceData {
		constructor(config?: object);
	}

	export class WhoisStatus {
		constructor(config?: object);
	}

	export class WorkflowEvent {
		constructor(config?: object);
	}

	export class WorkflowSpool {
		constructor(config?: object);
	}

	export class Zone {
		constructor(config?: object);
	}

	export class ZoneBasePatchRequest {
		constructor(config?: object);
	}

	export class ZoneStream {
		constructor(config?: object);
	}

	export class address_claim {
		constructor(config?: object);
	}

	export class claims {
		constructor(config?: object);
	}
}
