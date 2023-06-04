
package com.techmex.techmex.Dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.techmex.techmex.Data.Entities.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UsuariosRegistroDto {

    @NotEmpty
    private String nombre;
    @Email
    private String email;
    //@NotEmpty(message = "No puede estar el campo contraseña vacío")
    private String contrasenia;
    public UserRole rol;

}
