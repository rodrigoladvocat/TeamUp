import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class ApiTokenCheckMiddleware implements NestMiddleware {
  private readonly logger = new Logger(ApiTokenCheckMiddleware.name);

  constructor(
    private readonly jwtService: JwtService
  ) { }

  use(req: Request, res: Response, next: NextFunction) {

    const token = req.headers['jwt'] as string;

    if (!token) {
      throw new UnauthorizedException(
        "Unauthorized access (must send a valid token in 'authorization' header"
      );
    }

    const payload = this.jwtService.verify(token);
    // const { userId, email } = payload;

    next();
  }

}
