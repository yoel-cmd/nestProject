import { CanActivate, ExecutionContext, Injectable, ForbiddenException, } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

        const user = req.user;

        if (!user) {
            throw new ForbiddenException('No user data found in request');
        }

        if (user.role !== 'commander') {
            throw new ForbiddenException('Access denied: Commander only');
        }

        return true;
    }
}
