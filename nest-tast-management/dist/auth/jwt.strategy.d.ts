import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    private configService;
    constructor(usersRepository: UsersRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
