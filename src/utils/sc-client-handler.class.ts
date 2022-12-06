import { ScClient, ScAddr, ScConstruction } from 'ts-sc-client';

import { ScClientHandlerInterface } from './interfaces/sc-client-handler.interface';

export class ScClientHandler implements ScClientHandlerInterface {
    private readonly scClient: ScClient;

    private readonly scAddresses: Map<number, ScAddr>

    constructor(webSocketUrl: string) {
        this.scClient = new ScClient(webSocketUrl);

        this.scClient.addEventListener("open", this.onConnect)
        
        this.scClient.addEventListener("error", this.onError)
        
        this.scClient.addEventListener("close", this.onDisconnect)

        this.scAddresses = new Map<number, ScAddr>();
    }

    private onConnect(): void {
        // Коллбэк при установке соединения с БЗ
    }

    private onError(): void {
        // Коллбэк при ошибке соединения с БЗ
    }

    private onDisconnect(): void {
        // Коллбэк при закрытии соединения с БЗ
    }
    
    public createAddress(address: number): ScAddr {
        const newAddress = new ScAddr(+address);

        if (newAddress.isValid()) {
            this.scAddresses.set(address, newAddress);
        }

        return newAddress;
    }
}