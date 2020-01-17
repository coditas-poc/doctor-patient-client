import { ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/common/enums/transport.enum'


export const client = ClientProxyFactory.create({
    transport: Transport.REDIS,
    options: {
        url: 'redis://localhost:6379',
    },
});