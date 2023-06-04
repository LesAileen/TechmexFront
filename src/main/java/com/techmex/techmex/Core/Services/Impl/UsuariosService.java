
package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IUsuariosService;
import com.techmex.techmex.Data.Providers.IUsuariosProvider;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@AllArgsConstructor
public class UsuariosService implements IUsuariosService {

    private final IUsuariosProvider usuariosProvider;


    @Override
    public List<UsuariosRegistroDto> getListaUsuarios() {
        return usuariosProvider.getUsuarios();
    }

    @Override
    public UsuariosRegistroDto getUsuariosId(Integer id) {
        return usuariosProvider.getUsuariosId(id);
    }

    @Override
    public UsuariosRegistroDto insertUsuarios(String nombre, String email, String contrasenia) {
        return usuariosProvider.insertUsuarios(nombre, email, contrasenia);
    }

    @Override
    public UsuariosRegistroDto updateUsuarios(Integer id, String nombre, String email, String contrasenia) {
        return usuariosProvider.updateUsuarios(id, nombre, email, contrasenia);
    }

    @Override
    public void deleteUsuariosId(Integer id) {
        usuariosProvider.deleteUsuariosId(id);

    }

    @Override
    public UsuariosRegistroDto findByEmail(String email) {
        return usuariosProvider.findByEmail(email);
    }


}
