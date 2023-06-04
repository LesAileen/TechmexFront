package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.UsuariosRegistroDto;

public interface IAutenticationService {

    UsuariosRegistroDto registro(UsuariosRegistroDto usuariosRegistroDto);

    boolean loginConNombre(String username, String password);

    boolean loginvConEmail(String email, String password);
}
