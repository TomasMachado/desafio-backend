import { ServiceError } from "@/domain/tools/services/error";
import { Request, Response, NextFunction } from "express";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ServiceError) {
    return res.status(err.status).send({ message: err.message });
  }
  res.status(500).send(err);
};
