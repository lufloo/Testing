import { contactos, Contacto } from "./contactos";

export function findOneByEmail(email: string): Contacto {
  const contactoEncontrado = contactos.find(
    (contacto) => contacto.email === email,
  );

  if (!contactoEncontrado) {
    throw new Error(`No se encontró ningún contacto con el email '${email}'`);
  }

  return contactoEncontrado;
}
