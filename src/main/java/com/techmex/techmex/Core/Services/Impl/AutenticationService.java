package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IAutenticationService;
import com.techmex.techmex.Data.Providers.IUsuariosProvider;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AutenticationService implements IAutenticationService {

    IUsuariosProvider usuariosProvider;

    @Override
    public UsuariosRegistroDto registro(UsuariosRegistroDto usuariosRegistroDto) {

        UsuariosRegistroDto nuevoUsuario = UsuariosRegistroDto.builder()
                .email(usuariosRegistroDto.getEmail())
                .contrasenia(usuariosRegistroDto.getContrasenia())
                .rol(usuariosRegistroDto.getRol())
                .nombre(usuariosRegistroDto.getNombre())
                .build();

        return usuariosProvider.registrar(nuevoUsuario);
    }

    @Override
    public boolean loginConNombre(String username, String password) {
        return false;
    }

    @Override
    public boolean loginvConEmail(String email, String password) {
        return usuariosProvider.matchesPassword(email, password);
    }
}
