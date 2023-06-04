package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.IUsuariosDao;
import com.techmex.techmex.Data.Entities.UsuariosModel;
import com.techmex.techmex.Data.Entities.enums.UserRole;
import com.techmex.techmex.Data.Providers.IUsuariosProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import com.techmex.techmex.Util.Exceptions.Data.UserNotFoundException;
import com.techmex.techmex.Util.Security.SecurityContextHelper;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UsuariosProvider implements IUsuariosProvider {

    private static final String USUARIO_YA_EXISTE = "Ese usuario ya existe!";
    private final IUsuariosDao iUsuariosDao;

    private final PasswordEncoder encoder;

    private final SecurityContextHelper securityContextHelper;
    private final IMapper <UsuariosModel, UsuariosRegistroDto> mapperUsuarios;

    @Override
    public synchronized UsuariosRegistroDto registrar(UsuariosRegistroDto usuariosRegistroDto) {
        if(iUsuariosDao.findByEmail(usuariosRegistroDto.getEmail()).isPresent()) {
            throw new UserNotFoundException(USUARIO_YA_EXISTE);
        }

        if(iUsuariosDao.findByNombre(usuariosRegistroDto.getNombre()).isPresent()) {
            throw new UserNotFoundException(USUARIO_YA_EXISTE);
        }

        UsuariosModel nuevoUsuario = mapperUsuarios.mapToEntity(usuariosRegistroDto);
        nuevoUsuario.setContrasenia(encoder.encode(nuevoUsuario.getContrasenia()));


        return mapperUsuarios.mapToDto(iUsuariosDao.save(nuevoUsuario));
    }

    @Override
    public List<UsuariosRegistroDto> getUsuarios() {

        //System.out.println(securityContextHelper.getUser().getNombre());

        return iUsuariosDao.findAll().stream()
                .map(mapperUsuarios::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public UsuariosRegistroDto getUsuariosId(Integer id) {
        return iUsuariosDao.findById(id)
                .map(mapperUsuarios::mapToDto)
                .orElse(null);
    }

    @Override
    public UsuariosRegistroDto insertUsuarios(String nombre, String email, String contrasenia) {
       UsuariosModel newUsuario = UsuariosModel.builder()
               .nombre(nombre)
               .email(email)
               .contrasenia(contrasenia)
               // TODO CAMBIAR ESTO AHORA SOLO CREA ADMINS
               .role(UserRole.ADMIN)
               .build();

       iUsuariosDao.save(newUsuario);

        return mapperUsuarios.mapToDto(newUsuario);
    }

    @Override
    public UsuariosRegistroDto updateUsuarios(Integer id, String nombre, String email, String contrasenia) {
        UsuariosModel newUsuario = iUsuariosDao.findById(id).orElse(null);
        newUsuario = newUsuario.builder()
                .id_usuario(id)
                .nombre(nombre)
                .email(email)
                .contrasenia(contrasenia)
                .role(UserRole.ADMIN)
                .build();
        iUsuariosDao.save(newUsuario);


        return mapperUsuarios.mapToDto(newUsuario);
    }

    @Override
    public void deleteUsuariosId(Integer id) {
        if(!iUsuariosDao.existsById(id)){
            throw new RuntimeException("EL USUARIO NO EXISTE");
        }

        iUsuariosDao.deleteById(id);
    }

    @Override
    public UsuariosRegistroDto findByEmail(String email) {
        return iUsuariosDao.findByEmail(email)
                .map(mapperUsuarios::mapToDto)
                .orElse(null);
    }

    @Override
    public boolean existsByUsername(String username) {
        return iUsuariosDao.findByNombre(username).isPresent();
    }

    @Override
    public boolean matchesPasswordByUsername(String username, String password) {
        return false;
    }

    @Override
    public boolean matchesPassword(String email, String password) {
        return innerMatchPassword(iUsuariosDao.findByEmail(email), password);
    }

    @Override
    public UsuariosRegistroDto getByName(String name) {
        return iUsuariosDao.findByNombre(name)
                .map(mapperUsuarios::mapToDto)
                .orElse(null);
    }

    private synchronized boolean innerMatchPassword(Optional<UsuariosModel> user, String rawPassword) {
        return user.isPresent() && encoder.matches(rawPassword, user.get().getContrasenia());
    }


}
