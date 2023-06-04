package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.IUsuariosService;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/usuarios")
public class UsuariosController {

    private final IUsuariosService usuariosService;

    //GET = SELECT
    @GetMapping("/lista")
    public List<UsuariosRegistroDto> listaUsuarios (){
        return usuariosService.getListaUsuarios();
    }

    //GET = SELECT
    @GetMapping("/buscar/{id}")
    public UsuariosRegistroDto buscarUsuariosId(@PathVariable Integer id){
        return usuariosService.getUsuariosId(id);

    }

    //POST = INSERT
    @PostMapping("/insertar")
    public UsuariosRegistroDto insertarEmpleado(String nombre, String email, String contrasenia){
        return usuariosService.insertUsuarios(nombre, email, contrasenia);
    }

    //PUT = UPDATE
    @PutMapping ("/actualizar/{id}")
    public UsuariosRegistroDto updateEmpleado (@PathVariable Integer id, String nombre, String email, String contrasenia){
        return usuariosService.updateUsuarios(id, nombre, email, contrasenia);
    }

    //DELETE = DELETE

    @DeleteMapping ("/borrar/{id}")
    public void borrarUsuario(@PathVariable Integer id){
        usuariosService.deleteUsuariosId(id);
    }

}
