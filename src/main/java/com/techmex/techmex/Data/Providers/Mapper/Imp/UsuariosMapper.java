package com.techmex.techmex.Data.Providers.Mapper.Imp;


import com.techmex.techmex.Data.Entities.UsuariosModel;
import com.techmex.techmex.Data.Entities.enums.UserRole;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import org.springframework.stereotype.Component;

@Component
public class UsuariosMapper implements IMapper<UsuariosModel, UsuariosRegistroDto> {
    @Override
    public UsuariosRegistroDto mapToDto(UsuariosModel usuariosModel) {
        return UsuariosRegistroDto.builder()
                .nombre(usuariosModel.getNombre())
                .email(usuariosModel.getEmail())
                .contrasenia(usuariosModel.getContrasenia())
                .rol(usuariosModel.getRole())
                .build();
    }

    @Override
    public UsuariosModel mapToEntity(UsuariosRegistroDto usuariosRegistroDto) {

        return UsuariosModel.builder()
                .nombre(usuariosRegistroDto.getNombre())
                .email(usuariosRegistroDto.getEmail())
                .contrasenia(usuariosRegistroDto.getContrasenia())
                .role(usuariosRegistroDto.rol)
                .build();
    }

}
