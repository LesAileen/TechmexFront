package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.UsuariosRegistroDto;

import java.util.List;

public interface IUsuariosProvider {

    List<UsuariosRegistroDto> getUsuarios();
     UsuariosRegistroDto getUsuariosId(Integer id);
     UsuariosRegistroDto insertUsuarios(String nombre, String email, String contrasenia);
     UsuariosRegistroDto updateUsuarios(Integer id, String nombre, String email, String contrasenia);
     void deleteUsuariosId(Integer id);

     UsuariosRegistroDto findByEmail(String email);
     boolean existsByUsername(String username);
     boolean matchesPasswordByUsername(String username, String password);
     boolean matchesPassword(String email, String password);
     UsuariosRegistroDto getByName(String name);

     UsuariosRegistroDto registrar(UsuariosRegistroDto usuariosRegistroDto);


}
