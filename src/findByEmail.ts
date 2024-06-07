import { contactos, Contacto } from "./contactos";

export function findByEmail(email: string): Contacto[] {
  if (!email.trim()) {
    return contactos;
  }
  return contactos.filter((contacto) => contacto.email.includes(email));
}
