import { NextFunction, Request, Response } from "express";
import { getIp, getPuesto, hasPermission } from "../utils";

const USER_ROLES = ["lider", "asesor"] as const;
export type UserRole = typeof USER_ROLES[number];

export async function checkPermission(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const puesto = req.query.puesto as string;
  const db_puesto = getPuesto(puesto);
  const equipo = req.query.equipo;
  const ip = getIp(req.socket.remoteAddress);

  console.log(
    ` Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`
  );
  if (db_puesto && equipo && ip) {
    // req.hasPermission = await hasPermission(ip, db_puesto);
    res.locals.hasPermission = await hasPermission(ip, db_puesto);
    res.locals.puesto = puesto;
    res.locals.equipo = equipo;
    next();
  } else {
    res.render("welcome");
  }
}

export async function getRole(req: Request, res: Response, next: NextFunction) {
  const role = req.params.role;
  
  if (USER_ROLES.includes(role as UserRole)) {
    res.locals.role = role;
    next();
  } else {
    res.status(404).render("error-404");
  }
}
