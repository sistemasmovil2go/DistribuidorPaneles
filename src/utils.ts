import { Tbl_Dashboard } from "./entities/tbl_dashboard";

export async function hasPermission(
  ip: string,
  puesto: string
): Promise<boolean> {
  if (!puesto) return false;
  if (!ip) return false;

  const opciones = await Tbl_Dashboard.find({ where: { puesto: puesto } });

  if (opciones.length === 0) return false;

  const db_ip = opciones[0].ip;
  const db_puesto = opciones[0].puesto;
  return ip === db_ip && puesto === db_puesto;
}

export function getIp(ip: string | undefined): string | null {
  if (ip === undefined) return null;
  const ipSep = ip.split(":");
  const longitud = ip.split(":").length;

  return ipSep[longitud - 1];
}

export function getPuesto(puesto: string | undefined): string | null {
  if (puesto === undefined) return null;
  const longitud = puesto.length;

  return puesto.slice(longitud - 3);
}
