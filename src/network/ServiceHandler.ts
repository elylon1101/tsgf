export interface ServiceHandler {
    request(): Promise<void>;

    broadcast(): Promise<void>;
}