import { Request, Response, NextFunction } from "express";
export const PERMITTED_USER_TYPES = ["admin", "staff"];
export function IsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) throw new Error("401::Unauthenticated");
  return next();
}

export function IsAdministrator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user._userTypes.join("").includes("admin"))
    throw new Error("404::Resource Not Found");
  next();
}

export const IsStaffOrAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.user._userTypes.find((userType) =>
      PERMITTED_USER_TYPES.join("").includes(userType)
    )
  )
    throw new Error("404::Resource not found");
  next();
};
