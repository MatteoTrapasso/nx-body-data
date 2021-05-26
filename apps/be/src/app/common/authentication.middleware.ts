import {NestMiddleware} from '@nestjs/common';
import * as jwt from 'express-jwt';
import {expressJwtSecret} from 'jwks-rsa';
import {environment} from "../../../../fe/src/environments/environment";

export class AuthenticationMiddleware implements NestMiddleware {
    use(req, res, next) {
        jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://'+environment.DOMAIN+'/.well-known/jwks.json',
            }),

            audience: 'https://'+environment.DOMAIN+'/api/v2/',
            issuer: 'https://'+environment.DOMAIN+'/',
            algorithms: ['RS256'],
        })(req, res, err => {
            if (err) {
                const status = err.status || 500;
                const message =
                    err.message || 'Sorry, we were unable to process your request.';
                return res.status(status).send({
                    message,
                });
            }

            next();
        });
    };
}
