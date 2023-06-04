package com.techmex.techmex.Core.Controllers;


import com.techmex.techmex.Core.Services.IAutenticationService;
import com.techmex.techmex.Core.Services.Impl.UsuariosService;
import com.techmex.techmex.Data.Entities.enums.UserRole;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import lombok.AllArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/autentication")
public class AuthController {

    private final UsuariosService usuariosService;
    private final IAutenticationService iAutenticationService;

    @GetMapping("index")
    public String home(){
        return "index";
    }

    @GetMapping("/login")
    public boolean login(String email, String password) {
        return iAutenticationService.loginvConEmail(email, password);
    }

    // handler method to handle user registration request
    @PostMapping("/register")
    public UsuariosRegistroDto registro(@RequestParam("email") String email,
                                                    @RequestParam("user") String nombre,
                                                    @RequestParam("password") String contrasenia){
        return iAutenticationService.registro(
                UsuariosRegistroDto.builder()
                        .nombre(nombre)
                        .email(email)
                        .contrasenia(contrasenia)
                        .rol(UserRole.USER)
                        .build()
        );

    }

    // handler method to handle register user form submit request
    @PostMapping("/register/save")
    public String registration(@Valid @ModelAttribute("user") UsuariosRegistroDto usuario,
                               BindingResult result,
                               Model model){
        UsuariosRegistroDto existing = usuariosService.findByEmail(usuario.getEmail());
        if (existing != null) {
            result.rejectValue("email", null, "There is already an account registered with that email");
        }
        if (result.hasErrors()) {
            model.addAttribute("usuario", usuario);
            return "register";
        }
        usuariosService.insertUsuarios(usuario.getNombre(), usuario.getEmail(), usuario.getContrasenia());
        return "redirect:/register?success";
    }

    @GetMapping("/users")
    public String listRegisteredUsers(Model model){
        List<UsuariosRegistroDto> usuarios = usuariosService.getListaUsuarios();
        model.addAttribute("users", usuarios);
        return "users";
    }
}
