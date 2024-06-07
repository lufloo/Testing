// checkNewContact.ts
import { Contacto } from "./contactos";

export function checkNewContact(contacto: Contacto): boolean {
  if (typeof contacto.id !== "number" || contacto.id <= 0) {
    return false;
  }
  if (!contacto.first_name.trim()) {
    return false;
  }
  if (!contacto.last_name.trim()) {
    return false;
  }
  if (!contacto.email.trim() || !/\S+@\S+\.\S+/.test(contacto.email)) {
    return false;
  }
  if (!contacto.ip_address.trim()) {
    return false;
  }
  if (!contacto.gender.trim()) {
    return false;
  }
  return true;
}
