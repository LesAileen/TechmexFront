package com.techmex.techmex.Util.Security;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class SecurityContextHelper {

    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public UsuariosRegistroDto getUser() {
        Authentication authentication;
        return (authentication = getAuthentication()) == null
                ? null
                : (UsuariosRegistroDto) authentication.getPrincipal();
    }

}