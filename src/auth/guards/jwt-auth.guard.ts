import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtCommonAuthGuard extends AuthGuard('jwt') {
    constructor(private readonly i18n: I18nRequestScopeService)
}
