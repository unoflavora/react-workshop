export interface GetContactListParams {
    distinct_on?: string;
    limit?: number;
    offset?: number;
    order_by?: string;
    where?: unknown;
}
interface Phone {
    number: string;
    __typename: 'phone';
}
export interface Contact {
    created_at: string;
    first_name: string;
    id: number;
    last_name: string;
    phones: Phone[];
    __typename: 'contact';
}
export interface GetContactListResponse {
    contact: Contact[]
}