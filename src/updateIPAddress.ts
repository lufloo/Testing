import { Contacto } from './contactos';

export function updateIPAddress(contactos: Contacto[]): Contacto[] {
  const contactosActualizados: Contacto[] = [];

  contactos.forEach((contacto, index) => {
    const ip_parts = contacto.ip_address.split('.');
    const idPart = (index + 1).toString();
    ip_parts.push(idPart);
    const ip_address_actualizado = ip_parts.join('.');
    
    const contactoActualizado: Contacto = {
      ...contacto,
      ip_address: ip_address_actualizado
    };

    contactosActualizados.push(contactoActualizado);
  });

  return contactosActualizados;
}
