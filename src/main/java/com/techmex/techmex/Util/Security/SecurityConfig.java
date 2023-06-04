package com.techmex.techmex.Util.Security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                    .and()
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/api/**")
                    .hasAnyAuthority("ADMIN", "USER")
                .and()
                .httpBasic()
                .and()
                .headers().frameOptions().disable();
    }
}