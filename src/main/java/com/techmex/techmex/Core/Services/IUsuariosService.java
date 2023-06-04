
package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.UsuariosRegistroDto;

import java.util.List;

public interface IUsuariosService {

    List<UsuariosRegistroDto> getListaUsuarios();
    UsuariosRegistroDto getUsuariosId (Integer id);

    UsuariosRegistroDto insertUsuarios(String nombre, String email, String contrasenia);

    UsuariosRegistroDto updateUsuarios(Integer id, String nombre, String email, String contrasenia);

    void deleteUsuariosId(Integer id);

    UsuariosRegistroDto findByEmail(String email);

}
