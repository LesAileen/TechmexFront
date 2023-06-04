package com.techmex.techmex.Util.Security;


import com.techmex.techmex.Data.Providers.IUsuariosProvider;
import com.techmex.techmex.Dtos.UsuariosRegistroDto;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
@AllArgsConstructor
public class AuthenticationProviderImpl implements AuthenticationProvider {

    private final IUsuariosProvider userProvider;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();

        if (!userProvider.matchesPasswordByUsername(name, password))
            throw new BadCredentialsException("");

        UsuariosRegistroDto dto = userProvider.getByName(name);

        return new UsernamePasswordAuthenticationToken(dto,null, Collections.singletonList(dto.getRol()::name));
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.isAssignableFrom(UsernamePasswordAuthenticationToken.class);
    }
}
