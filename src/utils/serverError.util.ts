import { ObjectUtils } from "./object.utils";

export class ServerError extends Error {
    status: number;
    errors: any;
    constructor(msg: string, status?: number, errors?: any) {
        super(msg);
        if (status) this.status = status;
        this.errors = errors || {};
    }
}

export function ThrowPayloadError(errors: any) {
    if (ObjectUtils.isHasValue(errors)) throw new ServerError(ErrorMessage.INVALID_PAYLOAD, 400, errors);
}

export const ErrorMessage = {
    ACCESS_DENIED: 'ACCESS_DENIED',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    YOUR_EMAIL_VERIFIED: 'YOUR_EMAIL_VERIFIED',
    CANNOT_FIND_USER: 'CANNOT_FIND_USER',
    EMAIL_WAS_EXISTED: 'EMAIL_WAS_EXISTED',

    MUST_BE_NUMBER: 'MUST_BE_NUMBER',
    MUST_BE_PROVIDED: 'MUST_BE_PROVIDED',
    MUST_BE_BOOLEAN: 'MUST_BE_BOOLEAN',

    INVALID_PAYLOAD: 'INVALID_PAYLOAD',
    INVALID_EMAIL_ADDRESS: 'INVALID_EMAIL_ADDRESS',
    INVALID_ROUTE: 'INVALID_ROUTE',
    INVALID_TOKEN: 'INVALID_TOKEN',
    INVALID_ROLE: 'INVALID_ROLE',
    DUPLICATE_ROLES: 'DUPLICATE_ROLES',
    INVALID_ADDRESS: 'INVALID_ADDRESS',
    INVALID_SORT_PARAM: 'INVALID_SORT_PARAM',
    INVALID_FILTER_PARAM: 'INVALID_FILTER_PARAM',
    INVALID_USER_FAVORITE_TYPE: 'INVALID_USER_FAVORITE_TYPE',
    ERC721_DOES_NOT_EXISTED: 'ERC721_DOES_NOT_EXISTED',
    ERC721_IS_BEING_SYNCED: 'ERC721_IS_BEING_SYNCED',

    INVALID_SIGNATURE: 'INVALID_SIGNATURE',
    INVALID_WALLET_ADDRESS: 'INVALID_WALLET_ADDRESS',
    INVALID_CONTRACT_ADDRESS: 'INVALID_CONTRACT_ADDRESS',
    INVALID_CONTRACT_ERC721_ADDRESS: 'INVALID_CONTRACT_ERC721_ADDRESS',
    INVALID_ASSET_TYPE: 'INVALID_ASSET_TYPE',
    WALLET_MUST_BE_PROVIDED: 'WALLET_MUST_BE_PROVIDED',
    SIGNATURE_MUST_BE_PROVIDED: 'SIGNATURE_MUST_BE_PROVIDED',
    CHAIN_ID_MUST_BE_PROVIDED: 'CHAIN_ID_MUST_BE_PROVIDED',
    CONTRACT_ADDRESS_MUST_BE_PROVIDED: 'CONTRACT_ADDRESS_MUST_BE_PROVIDED',
    CHAIN_DOES_NOT_SUPPORTED: 'CHAIN_DOES_NOT_SUPPORTED',
    ROLE_SYSTEM_ADMIN_CANNOT_ASSIGN: 'ROLE_SYSTEM_ADMIN_CANNOT_ASSIGN',
    YOU_MUST_PROVIDE_EMAIL_BEFORE: 'YOU_MUST_PROVIDE_EMAIL_BEFORE',
    YOUR_EMAIL_HAS_BEEN_CHANGED: 'YOUR_EMAIL_HAS_BEEN_CHANGED',
    CANNOT_CHANGE_EMAIL_WAS_VERIFIED: 'CANNOT_CHANGE_EMAIL_WAS_VERIFIED',
    TOKEN_MUST_BE_PROVIDED: 'TOKEN_MUST_BE_PROVIDED',
    DOMAIN_MUST_BE_PROVIDED: 'DOMAIN_MUST_BE_PROVIDED',
    CANNOT_SEND_TO_YOUR_EMAIL_ADDRESS: 'CANNOT_SEND_TO_YOUR_EMAIL_ADDRESS',
    THIS_EMAIL_HAS_BEEN_VERIFIED_BY_ANOTHER_WALLET: 'THIS_EMAIL_HAS_BEEN_VERIFIED_BY_ANOTHER_WALLET',
    POST_DOES_NOT_EXISTED: 'POST_DOES_NOT_EXISTED',
    MAP_DOES_NOT_EXISTED: 'MAP_DOES_NOT_EXISTED',
    INVALID_RANKING_TYPE: 'INVALID_RANKING_TYPE',
}